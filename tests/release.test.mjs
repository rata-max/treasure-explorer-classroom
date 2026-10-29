import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { ROOT, IDS, STATIC, buildSite, loadContent } from '../scripts/build_site.mjs';

const python = process.env.PYTHON || 'python';
const tempParent = path.join(ROOT, '.test-tmp');
fs.mkdirSync(tempParent, { recursive: true });
const scratch = fs.mkdtempSync(path.join(tempParent, 'release-'));
const source = path.join(scratch, 'private');
fs.mkdirSync(path.join(source, 'dist'), { recursive: true });
const zipCode = `import pathlib, sys, zipfile
root = pathlib.Path(sys.argv[1])
for session in sys.argv[2:]:
    with zipfile.ZipFile(root / (session + '.zip'), 'w') as archive:
        for name in ('README.md', 'student_policy.py', 'agent.py', 'grade.py', 'score_grading.py', 'grading.json', 'treasure_explorer/__init__.py', 'treasure_explorer/__main__.py', 'treasure_explorer/runner.py', 'treasure_explorer/viewer.py', 'treasure_explorer/viewer_page.py', 'maps/fixture.json'):
            archive.writestr(name, 'fixture only')
`;
const created = spawnSync(python, ['-c', zipCode, path.join(source, 'dist'), ...IDS], { encoding: 'utf8' });
assert.equal(created.status, 0, created.stderr || String(created.error));

function site(flags = {}, extra = '') {
  const folder = fs.mkdtempSync(path.join(scratch, 'web-'));
  for (const name of [...STATIC, 'content.js']) fs.copyFileSync(path.join(ROOT, name), path.join(folder, name));
  // Keep test scenarios independent of the current classroom release schedule.
  const releases = { ...Object.fromEntries(IDS.map(id => [id, false])), week1_tuesday: true, ...flags };
  fs.appendFileSync(path.join(folder, 'content.js'), `\nObject.assign(window.RELEASES, ${JSON.stringify(releases)});\napplyReleaseSwitches();\n${extra}\n`);
  return folder;
}

function build(root, output = path.join(root, '_site')) {
  return { output, manifest: buildSite({ source, root, output, python }) };
}

function publicData(output) {
  const context = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(output, 'content.js'), 'utf8'), context);
  return JSON.parse(JSON.stringify(context.window));
}

test('browser and build configurations follow release switches in BOTH languages', () => {
  for (const root of [ROOT, site(), site({ week1_tuesday: false, week3_tuesday: true })]) {
    const raw = loadContent(path.join(root, 'content.js'));
    const expected = IDS.map(id => raw.RELEASES[id]);
    const context = vm.createContext({ window: {} });
    vm.runInContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8'), context);
    for (const key of ['SITE_CONTENT', 'SITE_CONTENT_KO']) {
      assert.deepEqual(raw[key].stages.map(s => s.unlocked), expected);
      assert.deepEqual(JSON.parse(JSON.stringify(context.window[key].stages.map(s => s.unlocked))), expected);
    }
  }
});

test('test sessions are hidden and use --practice; exercise sessions use public grade.py', () => {
  const raw = loadContent(path.join(ROOT, 'content.js'));
  for (const key of ['SITE_CONTENT', 'SITE_CONTENT_KO']) {
    for (const i of [2, 4]) {
      assert.equal(raw[key].stageCommands[i], 'python grade.py --practice');
      assert.match(raw[key].stages[i].evaluation.label, /HIDDEN|비공개/);
    }
    for (const i of [0, 1, 3]) {
      assert.equal(raw[key].stageCommands[i], 'python grade.py');
      assert.match(raw[key].stages[i].evaluation.label, /PUBLIC|공개 score/);
    }
    for (const i of [1, 2, 3, 4]) {
      assert.match(raw[key].stages[i].evaluation.text, /60/);
      assert.match(raw[key].stages[i].evaluation.text, /40/);
    }
  }
});

test('artifact contains only allowlisted website files and the first ZIP, never source or history', () => {
  const { output, manifest } = build(site());
  assert.deepEqual(manifest.published.map(s => s.session), [IDS[0]]);
  assert.deepEqual(fs.readdirSync(path.join(output, 'dist')), [`${IDS[0]}.zip`]);
  assert.deepEqual(fs.readdirSync(output).sort(), [...STATIC, 'content.js', '.nojekyll', 'dist', 'release-manifest.json'].sort());
  const data = publicData(output);
  for (const key of ['SITE_CONTENT', 'SITE_CONTENT_KO']) {
    assert.equal(data[key].stages[0].repositoryUrl, `dist/${IDS[0]}.zip?v=${manifest.published[0].sha256.slice(0, 16)}`);
    for (let i = 1; i < IDS.length; i++) {
      assert.equal(data[key].stages[i].repositoryUrl, null);
      assert.deepEqual(data[key].stages[i].objectives, []);
      assert.equal(data[key].stageCommands[i], '');
    }
  }
  assert.match(fs.readFileSync(path.join(output, 'assignment.html'), 'utf8'), /content\.js\?v=[0-9a-f]{16}/);
});

test('flipping one content.js flag publishes exactly one additional ZIP', () => {
  const { output, manifest } = build(site({ week1_thursday: true }));
  assert.deepEqual(manifest.published.map(s => s.session), IDS.slice(0, 2));
  assert.equal(fs.readdirSync(path.join(output, 'dist')).length, 2);
});

test('all locked publishes no ZIP and no dist folder', () => {
  const { output, manifest } = build(site(Object.fromEntries(IDS.map(id => [id, false]))));
  assert.deepEqual(manifest.published, []);
  assert.equal(fs.existsSync(path.join(output, 'dist')), false);
});

test('legacy language-stage flags cannot unlock a locked ZIP', () => {
  const { output } = build(site({}, 'window.SITE_CONTENT_KO.stages[4].unlocked = true;'));
  assert.equal(publicData(output).SITE_CONTENT_KO.stages[4].unlocked, false);
  assert.equal(fs.existsSync(path.join(output, 'dist', `${IDS[4]}.zip`)), false);
});

test('string booleans, unknown IDs and missing release switches fail closed', () => {
  for (const root of [site({ week2_tuesday: 'true' }), site({ surprise: true }), site({}, 'delete window.RELEASES.week3_tuesday;')]) {
    assert.throws(() => build(root));
    assert.equal(fs.existsSync(path.join(root, '_site')), false);
  }
});

test('missing released archive fails without publishing a partial artifact', () => {
  const root = site({ week1_thursday: true });
  const emptySource = fs.mkdtempSync(path.join(scratch, 'empty-'));
  assert.throws(() => buildSite({ source: emptySource, root, python }));
  assert.equal(fs.existsSync(path.join(root, '_site')), false);
});

test('output is fresh-only, cannot merge old unlocked ZIPs or write inside private checkout', () => {
  const root = site();
  const { output } = build(root);
  assert.throws(() => build(root, output));
  assert.throws(() => build(root, path.join(source, 'site-output')));
  assert.throws(() => build(root, source));
});

test('archive auditor rejects source/history/credentials/path traversal', () => {
  for (const entry of ['../escape.py', '/absolute.py', 'reference_score_policy.py', '.git/config', 'source_readonly', 'C:/private.key', '.vscode/tasks.json', '.vscode/extensions.json', '.vscode/.env', 'instructor/settings.json']) {
    const filename = path.join(scratch, `unsafe-${cryptoIndex++}.zip`);
    const made = spawnSync(python, ['-c', "import sys,zipfile; z=zipfile.ZipFile(sys.argv[1],'w'); z.writestr(sys.argv[2],'not published'); z.close()", filename, entry], { encoding: 'utf8' });
    assert.equal(made.status, 0, made.stderr);
    const check = spawnSync(python, [path.join(ROOT, 'scripts/audit_archive.py'), filename], { encoding: 'utf8' });
    assert.notEqual(check.status, 0);
  }
});
let cryptoIndex = 0;

test('archive auditor accepts the provided VS Code settings in a released ZIP', () => {
  const filename = path.join(scratch, 'with-vscode-settings.zip');
  const made = spawnSync(python, ['-c', "import sys,zipfile; source=zipfile.ZipFile(sys.argv[1]); out=zipfile.ZipFile(sys.argv[2],'w'); [out.writestr(e,source.read(e.filename)) for e in source.infolist()]; out.writestr('.vscode/settings.json', '{\"chat.disableAIFeatures\": true}'); out.close(); source.close()", path.join(source, 'dist', `${IDS[1]}.zip`), filename], { encoding: 'utf8' });
  assert.equal(made.status, 0, made.stderr);
  const checked = spawnSync(python, [path.join(ROOT, 'scripts/audit_archive.py'), filename], { encoding: 'utf8' });
  assert.equal(checked.status, 0, checked.stderr);
});

test('workflow never runs PR code with the private source key or uploads a checkout', () => {
  const workflow = fs.readFileSync(path.join(ROOT, '.github/workflows/pages.yml'), 'utf8');
  assert.doesNotMatch(workflow, /pull_request|pull_request_target|netlify/i);
  assert.match(workflow, /path: _site/);
  assert.match(workflow, /ssh-key: \$\{\{ secrets\.SOURCE_READONLY_KEY \}\}/);
  assert.match(workflow, /persist-credentials: false/);
  assert.match(workflow, /python \.private-source\/tools\/sync_releases\.py --build-zips/);
});

test('archive auditor requires the interactive viewer in student downloads', () => {
  const filename = path.join(scratch, 'missing-viewer.zip');
  const made = spawnSync(python, ['-c', "import sys,zipfile; source=zipfile.ZipFile(sys.argv[1]); out=zipfile.ZipFile(sys.argv[2],'w'); [out.writestr(e,source.read(e.filename)) for e in source.infolist() if e.filename != 'treasure_explorer/viewer_page.py']; out.close(); source.close()", path.join(source, 'dist', `${IDS[0]}.zip`), filename], { encoding: 'utf8' });
  assert.equal(made.status, 0, made.stderr);
  const checked = spawnSync(python, [path.join(ROOT, 'scripts/audit_archive.py'), filename], { encoding: 'utf8' });
  assert.notEqual(checked.status, 0);
});
