// A positive allowlist: never publish a checkout, a dist directory, or Git history.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const IDS = Object.freeze(['week1_tuesday', 'week1_thursday', 'week2_tuesday', 'week2_thursday', 'week3_tuesday']);
export const STATIC = Object.freeze(['index.html', 'assignment.html', 'rules.html', 'globals.css', '404.html']);

export function loadContent(filename) {
  const context = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(filename, 'utf8'), context, { timeout: 1000, filename: 'content.js' });
  const data = JSON.parse(JSON.stringify(context.window));
  assert.deepEqual(Object.keys(data.RELEASES ?? {}).sort(), [...IDS].sort(), 'RELEASES must contain exactly the five session IDs');
  for (const id of IDS) assert.equal(typeof data.RELEASES[id], 'boolean', `${id} must be true or false, not a string`);
  for (const language of ['SITE_CONTENT', 'SITE_CONTENT_KO']) {
    assert.equal(data[language]?.stages?.length, IDS.length, `${language} requires five stages`);
    assert.equal(data[language]?.stageRules?.length, IDS.length);
    assert.equal(data[language]?.stageCommands?.length, IDS.length);
    data[language].stages.forEach((stage, i) => {
      stage.unlocked = data.RELEASES[IDS[i]];
      stage.repositoryUrl = stage.unlocked ? `dist/${IDS[i]}.zip` : null;
    });
  }
  return data;
}

export function buildSite({ source, output = path.join(ROOT, '_site'), root = ROOT, python = process.env.PYTHON || 'python' }) {
  assert.ok(source, '--source is required; never fetch a private ZIP in browser JavaScript');
  source = fs.realpathSync(source);
  output = path.resolve(output);
  root = fs.realpathSync(root);
  assert.ok(output !== root && output !== source && !source.startsWith(output + path.sep), 'output must not contain either repository');
  assert.ok(!output.startsWith(source + path.sep), 'never write site output inside the private checkout');
  assert.ok(!fs.existsSync(output), 'output must not already exist; use a fresh build directory');
  const data = loadContent(path.join(root, 'content.js'));
  const packages = [];
  for (const id of IDS.filter(id => data.RELEASES[id])) {
    const archive = path.join(source, 'dist', `${id}.zip`);
    assert.ok(fs.statSync(archive).isFile() && !fs.lstatSync(archive).isSymbolicLink(), 'released archive must be a regular file');
    const checked = spawnSync(python, [path.join(ROOT, 'scripts', 'audit_archive.py'), archive], { encoding: 'utf8', timeout: 30000 });
    if (checked.status !== 0) throw new Error(`Release archive validation failed for ${id}: ${checked.stderr || checked.error || 'unknown error'}`);
    const bytes = fs.readFileSync(archive);
    packages.push({ id, bytes, sha256: crypto.createHash('sha256').update(bytes).digest('hex') });
  }
  const publicWindow = { RELEASES: data.RELEASES };
  for (const language of ['SITE_CONTENT', 'SITE_CONTENT_KO']) {
    const content = data[language];
    content.stages.forEach((stage, i) => {
      if (stage.unlocked) return;
      const ko = language.endsWith('_KO');
      stage.objectives = [];
      stage.deliverables = [];
      stage.focus = '';
      stage.tagline = ko ? '수업 전에 공개됩니다.' : 'Opens before its class.';
      stage.evaluation = { label: ko ? '잠김' : 'LOCKED', title: ko ? '아직 공개되지 않은 과제입니다.' : 'This assignment is not released yet.', text: '' };
      content.stageRules[i] = [ko ? '수업 전에 공개됩니다.' : 'Opens before its class.'];
      content.stageCommands[i] = '';
    });
    publicWindow[language] = content;
  }
  const contentJs = Object.entries(publicWindow).map(([key, value]) => `window.${key} = ${JSON.stringify(value, null, 2)};`).join('\n\n') + '\n';
  const revision = crypto.createHash('sha256').update(contentJs).digest('hex').slice(0, 16);
  fs.mkdirSync(output);
  for (const filename of STATIC) {
    let bytes = fs.readFileSync(path.join(root, filename));
    if (filename.endsWith('.html')) bytes = Buffer.from(bytes.toString('utf8').replace(/content\.js\?v=[^"'\s<>]+/g, `content.js?v=${revision}`));
    fs.writeFileSync(path.join(output, filename), bytes);
  }
  fs.writeFileSync(path.join(output, 'content.js'), contentJs);
  fs.writeFileSync(path.join(output, '.nojekyll'), '');
  if (packages.length) fs.mkdirSync(path.join(output, 'dist'));
  for (const item of packages) fs.writeFileSync(path.join(output, 'dist', `${item.id}.zip`), item.bytes);
  const manifest = { schema_version: 1, published: packages.map(x => ({ session: x.id, file: `dist/${x.id}.zip`, bytes: x.bytes.length, sha256: x.sha256 })) };
  fs.writeFileSync(path.join(output, 'release-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Published allowlist: ${packages.map(x => x.id).join(', ') || '(no assignments)'}`);
  return manifest;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const options = {};
  for (let i = 2; i < process.argv.length; i += 2) {
    assert.ok(['--source', '--output'].includes(process.argv[i]) && process.argv[i + 1], 'usage: build_site.mjs --source PRIVATE_CHECKOUT [--output NEW_DIRECTORY]');
    options[process.argv[i].slice(2)] = process.argv[i + 1];
  }
  buildSite(options);
}
