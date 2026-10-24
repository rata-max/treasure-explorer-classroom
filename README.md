# Treasure Explorer 학생 홈페이지

학생 주소: https://rata-max.github.io/treasure-explorer-classroom/

이 Public 저장소에는 홈페이지와 선별 배포 도구만 있습니다. 과제 원본 저장소의 Git 이력이나 Python 소스, ZIP은 이 저장소에 커밋하지 않습니다.

## 수업 전 공개하기

1. **이 저장소의 `content.js` 맨 위 `window.RELEASES`**에서 해당 회차만 `false` → `true`로 바꾸고 `main`에 저장합니다.
2. Actions의 **Publish classroom Pages**가 성공할 때까지 기다립니다.
3. 학생 주소에서 과제와 다운로드 버튼을 확인합니다. 예전 화면이면 새로고침합니다.

초기 공개: `week1_tuesday` 하나만 `true`, 나머지 네 회차는 `false`입니다. 한국어/영어에 같은 공개 설정을 적용합니다. 아래쪽 각 stage의 `unlocked` 값을 따로 바꾸지 마세요.

공개 문구도 이 저장소의 `content.js`에서 편집합니다. 이 파일은 브라우저에 공개되므로 미공개 실습 코드·비밀번호·키를 넣지 마세요.

## 배포 경계

- GitHub Actions가 원본 한 개에만 접근 가능한 읽기 전용 키로 Private 과제 저장소를 읽습니다. 원본에는 쓰지 않습니다.
- 매 배포에서 원본의 공통 viewer·학생 안내를 동기화하고 다섯 회차 ZIP을 다시 생성한 뒤 공개 설정에 맞춰 배포합니다.
- 공개 플래그가 정확한 boolean인지 검사하고, `true` 회차의 ZIP만 검사·복사합니다. 누락된 ZIP이나 잘못된 설정은 배포 실패로 처리합니다.
- ZIP 안의 CRC·필수 파일·경로·허용 파일 목록을 검사합니다. 미공개 회차 ZIP, 풀린 Python/맵 폴더, `.git`, 키, 교수자 검증 자료는 배포물에 포함하지 않습니다.
- 홈페이지 파일과 공개 ZIP만 `_site/`에 만들어 GitHub Pages에 배포합니다. ZIP은 Public 저장소의 Git 이력에 넣지 않습니다.
- 잠긴 회차의 상세 링크는 잠기며, 처음부터 미공개인 ZIP 직접 주소도 404입니다. UI만 숨기는 방식이 아닙니다.
- 한번 공개한 자료의 복사본이나 과거 배포물을 다시 비밀로 만들 수는 없습니다. 다시 `false`로 바꾸는 것은 완전한 회수 기능이 아닙니다.
- 과제 원본만 수정한 경우 이 저장소의 Actions에서 **Run workflow**를 실행하면 최신 원본으로 다시 배포합니다.

자동 배포는 이 저장소의 `main` push와 수동 실행만 사용하며 PR 코드를 비밀키와 함께 실행하지 않습니다. Netlify 설정·웹훅·배포는 사용하거나 변경하지 않습니다. 원본 `main`을 수정하면 기존 Netlify 연동이 따로 반응할 수 있으므로, 원본 수정은 별도로 주의하세요.

## 초기 연결 정보

- 원본: `rata-max/treasure-explorer-challenge`, `main` (Private)
- Actions secret: `SOURCE_READONLY_KEY` (원본 한 개의 읽기 전용 Deploy key)
- Pages source: **GitHub Actions**
- 비밀키는 `content.js`, Git, 배포물, 로그에 넣지 않습니다. 권한을 철회하려면 원본 Deploy key와 이 저장소의 Secret을 제거합니다.

## 로컬 검증

Node.js 22+와 Python 3.11+ 표준 라이브러리만 사용합니다.

학생은 기존 명령의 `--view`로 로컬 브라우저 viewer를 엽니다. 고정된 맵에서 시작 상태·재생/일시정지·이전/다음·턴 슬라이더·배속을 사용할 수 있습니다. `--view --terminal`은 터미널 표시이며 `--no-clear`는 프레임 로그입니다.

```powershell
node --test
python C:\path\to\treasure-explorer-challenge\tools\sync_releases.py --build-zips
node scripts/build_site.mjs --source C:\path\to\treasure-explorer-challenge
```

`_site/`는 새로 생성할 때만 허용합니다. 기존 폴더를 임의 삭제하거나 그 안에 미공개 ZIP을 섞지 마세요. 실패한 빌드는 기존 사이트를 새 설정으로 바꾸지 않습니다.
