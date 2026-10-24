// 공개 스위치는 이 다섯 값만 수정합니다. true 저장 후 Actions 배포 완료를 확인하세요.
// 잠긴 회차 ZIP은 저장소나 Pages 배포물에 포함되지 않습니다.
window.RELEASES = {
  "week1_tuesday": true,
  "week1_thursday": false,
  "week2_tuesday": false,
  "week2_thursday": false,
  "week3_tuesday": false
};

// Homepage text. Never put credentials, solutions or unreleased source code here.
window.SITE_CONTENT = {
  "semester": "Problem Solving Techniques · Fall 2026",
  "badge": "3-HOUR LABS",
  "title": "Explore.",
  "subtitle": "Collect. Return.",
  "description": "Weeks 1–2 use public-map scores; Week 3 uses hidden-map scores. Teams of two, no AI, 180 minutes per session.",
  "labHours": "3H",
  "initialEnergy": "MAP",
  "submission": "student_policy.py",
  "pythonVersion": "Python 3.11+",
  "command": "python -m treasure_explorer --map maps/warmup.json --agent agent.py --view",
  "scoreFormula": "50 EXIT BONUS + TREASURE + ENERGY LEFT - 5 INVALID",
  "noExitRule": "NO EXIT, NO SCORE",
  "missionLabel": "01 / MISSION",
  "missionTitle": "One policy file. Every map in the stage.",
  "missionDescription": "Read the current Observation, decide, and let the fixed agent take one action. A treasure is worth its value minus the extra energy it costs.",
  "process": [
    [
      "01",
      "OBSERVE",
      "Map · Energy"
    ],
    [
      "02",
      "ESTIMATE",
      "Value − extra energy"
    ],
    [
      "03",
      "PLAN",
      "Target · Route"
    ],
    [
      "04",
      "ACT",
      "One action"
    ]
  ],
  "rules": [
    {
      "number": "RULE 01",
      "title": "Information changes by stage",
      "text": "Terrain, exit and treasure values are known through W2 Tuesday. W2 Thursday hides values only. W3 also hides terrain, treasure positions and the exit."
    },
    {
      "number": "RULE 02",
      "title": "Return first",
      "text": "Treasure counts only after the bot reaches the exit. Entering the exit ends the run, so routes to treasure must not cross it."
    },
    {
      "number": "RULE 03",
      "title": "Energy is score",
      "text": "Normal 1 · Mud 4 · Water 7 · Collect 1. Energy left at the exit is added to the score."
    }
  ],
  "schedule": [
    [
      "00:00",
      "Inspect",
      "Read the README and grading contract; run release checks."
    ],
    [
      "00:20",
      "Implement",
      "Implement a working policy and inspect public scores."
    ],
    [
      "01:20",
      "Break",
      "10 minutes."
    ],
    [
      "01:30",
      "Decide",
      "Remaining TODOs: profit and energy-safety rules."
    ],
    [
      "02:10",
      "Measure",
      "Run every map, compare with the reference scores."
    ],
    [
      "02:40",
      "Check",
      "Run grade.py and check submission; notes are optional feedback."
    ]
  ],
  "rubric": [
    [
      "W1 TUE",
      "Public score only · Basic 60 + challenge 40",
      "Four public maps; reference BFS allowed."
    ],
    [
      "W1 THU",
      "Public score only · Basic 60 + challenge 40",
      "Eight public maps; improve subsets and order."
    ],
    [
      "W2 TUE",
      "Public score only · Basic 60 + challenge 40",
      "Ten weighted maps; four planning challenges."
    ],
    [
      "W2 THU",
      "Public score only · Basic 60 + challenge 40",
      "Fourteen public maps; three diagnostic pairs."
    ],
    [
      "W3 TUE",
      "Hidden score only · LOW/HIGH 50:50",
      "Hidden final only; LOW/HIGH equally weighted."
    ]
  ],
  "submissionRules": [
    "Run with --agent agent.py; edit and submit only student_policy.py. Official fixed files are used for grading.",
    "Do not modify agent.py, policy_helpers.py, the engine, maps, tests, or configuration files.",
    "The agent must not access files, networks, subprocesses, or external packages."
  ],
  "integrityRules": [
    "Work in a team of two. Do not share code with other teams.",
    "Use the current introduction and distributed API/specification. No Week 6/7 materials, AI or web searches.",
    "You may reuse or rewrite your team's earlier code from THIS project.",
    "Do not publish answers before grading ends, or identify maps/seeds through hardcoding or side channels."
  ],
  "stages": [
    {
      "number": "01",
      "week": "WEEK 1",
      "day": "TUESDAY",
      "title": "TREE PLANNING FOUNDATIONS ★★",
      "unlocked": true,
      "tagline": "Learn BFS and decide which treasure detours pay.",
      "focus": "BFS · Path recovery · Profit = value − extra energy",
      "repositoryUrl": "dist/week1_tuesday.zip",
      "objectives": [
        "Learn BFS path recovery; reference routing has no separate deduction.",
        "Choose collection and targets from value minus extra energy.",
        "Improve the two challenge maps by jointly planning treasures."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "PUBLIC SCORE",
        "title": "Four public maps; reference BFS allowed.",
        "text": "Published B/T anchors, basic 60/challenge 40. No separate implementation, note or experiment marks."
      }
    },
    {
      "number": "02",
      "week": "WEEK 1",
      "day": "THURSDAY",
      "title": "GLOBAL TREE OPTIMIZATION ★★★",
      "unlocked": true,
      "tagline": "Eight tree maps up to 12 treasures: choose the subset and the order.",
      "focus": "Subset planning · Pruned search · Public score",
      "repositoryUrl": "dist/week1_thursday.zip",
      "objectives": [
        "Choose a treasure subset and visit order; DP/pruned search can improve scores.",
        "A worked state example is provided; heuristics earn their achieved scores.",
        "Whole-map limit is 10 seconds, with no separate algorithm or note marks."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "PUBLIC SCORE",
        "title": "Eight public maps; improve subsets and order.",
        "text": "Published B/T anchors, basic 60/challenge 40. No separate implementation, note or experiment marks."
      }
    },
    {
      "number": "03",
      "week": "WEEK 2",
      "day": "TUESDAY",
      "title": "WEIGHTED GRAPH ROUTES ★★★",
      "unlocked": true,
      "tagline": "Combine weighted routes with the previous visit planner.",
      "focus": "Dijkstra · Priority queue · Exit avoidance",
      "repositoryUrl": "dist/week2_tuesday.zip",
      "objectives": [
        "Plan with entry energy costs instead of hop counts.",
        "Reuse Week 1's visit planner on the four challenge maps.",
        "Three new maps cover shared bundles, weighted order traps and budget cuts."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "PUBLIC SCORE",
        "title": "Ten weighted maps; four planning challenges.",
        "text": "Published B/T anchors, basic 60/challenge 40. No separate implementation, note or experiment marks."
      }
    },
    {
      "number": "04",
      "week": "WEEK 2",
      "day": "THURSDAY",
      "title": "PLANNING WITH HIDDEN VALUES ★★★★",
      "unlocked": true,
      "tagline": "Public assessment maps, hidden in-run values: observe and revise.",
      "focus": "Value estimation · Group planning · Replanning",
      "repositoryUrl": "dist/week2_thursday.zip",
      "objectives": [
        "Estimate unrevealed values and update plans after observation.",
        "The first value can be ambiguous; paid observations have costs and benefits.",
        "Average LOW/HIGH diagnostic pairs before applying public score conversion."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "PUBLIC SCORE",
        "title": "Fourteen public maps; three diagnostic pairs.",
        "text": "Published B/T anchors, basic 60/challenge 40. No separate implementation, note or experiment marks."
      }
    },
    {
      "number": "05",
      "week": "WEEK 3",
      "day": "TUESDAY",
      "title": "HIDDEN FINAL CHALLENGE ★★★★★",
      "unlocked": true,
      "tagline": "The same hidden-value model, now with fog and an unseen exit.",
      "focus": "Online decisions · Expected gain · Experiment design",
      "repositoryUrl": "dist/week3_tuesday.zip",
      "objectives": [
        "Extend the observed-value policy to fog and an unknown exit.",
        "Choose exploration, treasure visits and escape reserves.",
        "Only instructor-held hidden-map scores count; public practice is ungraded."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "HIDDEN FINAL",
        "title": "Hidden final only; LOW/HIGH equally weighted.",
        "text": "The final metric is in game-score units, not out of 100. Public practice and presentation are ungraded."
      }
    }
  ],
  "stageRules": [
    [
      "Learn BFS path recovery; reference routing has no separate deduction.",
      "Choose collection and targets from value minus extra energy.",
      "Improve the two challenge maps by jointly planning treasures.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Official grade: grade.py. No hidden maps."
    ],
    [
      "Choose a treasure subset and visit order; DP/pruned search can improve scores.",
      "A worked state example is provided; heuristics earn their achieved scores.",
      "Whole-map limit is 10 seconds, with no separate algorithm or note marks.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Official grade: grade.py. No hidden maps."
    ],
    [
      "Plan with entry energy costs instead of hop counts.",
      "Reuse Week 1's visit planner on the four challenge maps.",
      "Three new maps cover shared bundles, weighted order traps and budget cuts.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Official grade: grade.py. No hidden maps."
    ],
    [
      "Estimate unrevealed values and update plans after observation.",
      "The first value can be ambiguous; paid observations have costs and benefits.",
      "Average LOW/HIGH diagnostic pairs before applying public score conversion.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Official grade: grade.py. No hidden maps."
    ],
    [
      "Extend the observed-value policy to fog and an unknown exit.",
      "Choose exploration, treasure visits and escape reserves.",
      "Only instructor-held hidden-map scores count; public practice is ungraded.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Final: equal LOW/HIGH mean game scores. Public practice: grade.py --practice."
    ]
  ],
  "stageCommands": [
    "python grade.py",
    "python grade.py",
    "python grade.py",
    "python grade.py",
    "python grade.py --practice"
  ],
  "batchCommands": {
    "powershell": "Get-ChildItem maps/*.json | ForEach-Object { python -m treasure_explorer --map $_.FullName --agent agent.py }",
    "bash": "for map in maps/*.json; do python -m treasure_explorer --map \"$map\" --agent agent.py; done",
    "tests": "python -m unittest discover -s tests -v"
  }
};

// One release switch controls both languages; legacy per-stage flags are ignored.
// The build also enforces this same allowlist before copying any ZIP.
function applyReleaseSwitches() {
  const ids = ["week1_tuesday", "week1_thursday", "week2_tuesday", "week2_thursday", "week3_tuesday"];
  for (const content of [window.SITE_CONTENT, window.SITE_CONTENT_KO]) {
    if (!content) continue;
    content.stages.forEach((stage, i) => {
      stage.unlocked = window.RELEASES[ids[i]] === true;
      stage.repositoryUrl = stage.unlocked ? `dist/${ids[i]}.zip` : null;
    });
  }
}

window.SITE_CONTENT_KO = {
  "semester": "문제해결기법 · 2026년 가을학기",
  "badge": "3시간 실습",
  "title": "탐험하라.",
  "subtitle": "수집하라. 귀환하라.",
  "description": "1·2주차는 공개 맵 score, 3주차는 hidden map score로 평가합니다. 2인 팀, AI 금지, 회차당 180분입니다.",
  "labHours": "3H",
  "initialEnergy": "MAP",
  "submission": "student_policy.py",
  "pythonVersion": "Python 3.11+",
  "command": "python -m treasure_explorer --map maps/warmup.json --agent agent.py --view",
  "scoreFormula": "50 출구 보너스 + 보물 가치 + 남은 에너지 - 5 × 무효 행동",
  "noExitRule": "출구 미도달 시 점수 없음",
  "missionLabel": "01 / 임무",
  "missionTitle": "정책 파일 하나. 단계의 모든 맵.",
  "missionDescription": "현재 Observation을 읽고 판단하면, 고정 에이전트가 행동 하나를 실행합니다. 보물의 순이익은 가치에서 추가로 쓴 에너지를 뺀 값입니다.",
  "process": [
    [
      "01",
      "관측",
      "맵 · 에너지"
    ],
    [
      "02",
      "추정",
      "가치 − 추가 에너지"
    ],
    [
      "03",
      "계획",
      "목표 · 경로"
    ],
    [
      "04",
      "행동",
      "행동 하나"
    ]
  ],
  "rules": [
    {
      "number": "규칙 01",
      "title": "단계마다 정보가 달라집니다",
      "text": "2주차 화요일까지 지형·출구·가치가 공개됩니다. 2주차 목요일에는 가치를, 3주차에는 지형·보물 위치·출구도 관측 전까지 가립니다."
    },
    {
      "number": "규칙 02",
      "title": "귀환이 먼저입니다",
      "text": "출구에 도달해야 보물 점수가 인정됩니다. 출구에 들어가면 즉시 끝나므로 보물로 가는 경로는 출구를 지나면 안 됩니다."
    },
    {
      "number": "규칙 03",
      "title": "에너지가 점수입니다",
      "text": "일반 1 · 진흙 4 · 물 7 · 수집 1. 출구에서 남은 에너지가 점수에 더해집니다."
    }
  ],
  "schedule": [
    [
      "00:00",
      "점검",
      "README·채점 규약을 읽고 배포 검증 실행."
    ],
    [
      "00:20",
      "구현",
      "작동하는 정책을 구현하고 공개 score 확인."
    ],
    [
      "01:20",
      "휴식",
      "10분."
    ],
    [
      "01:30",
      "판단",
      "나머지 TODO: 이익 규칙과 에너지 안전 규칙."
    ],
    [
      "02:10",
      "측정",
      "모든 맵 실행, 기준 점수와 비교."
    ],
    [
      "02:40",
      "제출 점검",
      "grade.py와 제출 파일 확인. 기록은 선택 피드백용."
    ]
  ],
  "rubric": [
    [
      "W1 TUE",
      "공개 score만 · 기본 60 + 도전 40",
      "공개 맵 4개. 참고 BFS 사용 허용."
    ],
    [
      "W1 THU",
      "공개 score만 · 기본 60 + 도전 40",
      "공개 맵 8개. 부분집합·방문 순서 개선."
    ],
    [
      "W2 TUE",
      "공개 score만 · 기본 60 + 도전 40",
      "가중 맵 10개. 방문 계획 도전 4개."
    ],
    [
      "W2 THU",
      "공개 score만 · 기본 60 + 도전 40",
      "공개 맵 14개. LOW/HIGH 진단 쌍 3개."
    ],
    [
      "W3 TUE",
      "hidden score만 · LOW/HIGH 50:50",
      "hidden 최종 평가. LOW/HIGH 동일 비중."
    ]
  ],
  "submissionRules": [
    "실행은 --agent agent.py, 수정·제출은 student_policy.py 하나입니다. 공식 고정 파일로 재실행합니다.",
    "agent.py, policy_helpers.py, 엔진, 맵, 테스트, 설정 파일은 수정하지 마세요.",
    "에이전트는 파일, 네트워크, 서브프로세스, 외부 패키지에 접근해서는 안 됩니다."
  ],
  "integrityRules": [
    "2인 팀으로 진행하며 다른 팀과 코드를 공유하지 않습니다.",
    "당회차 소개 자료와 배포 명세·API만 참고합니다. 기존 Week 6·7 자료·AI·웹 검색은 금지합니다.",
    "이번 프로젝트의 이전 회차에서 팀이 직접 작성한 코드는 재사용·재작성할 수 있습니다.",
    "채점 전 답안 공개, 맵·좌표·시드 하드코딩과 사이드 채널 이용은 금지합니다."
  ],
  "stages": [
    {
      "number": "01",
      "week": "1주차",
      "day": "화요일",
      "title": "트리 계획 기초 ★★",
      "unlocked": true,
      "tagline": "BFS를 학습하고 이득인 보물 우회를 판단하세요.",
      "focus": "BFS · 경로 복원 · 순이익 = 가치 − 추가 에너지",
      "repositoryUrl": "dist/week1_tuesday.zip",
      "objectives": [
        "BFS 경로 복원을 학습하며 참고 BFS 사용 자체의 감점은 없습니다.",
        "가치와 추가 에너지를 비교해 수집·목표를 선택합니다.",
        "여러 보물을 함께 계획해 두 도전 맵의 score를 개선합니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "공개 score 평가",
        "title": "공개 맵 4개. 참고 BFS 사용 허용.",
        "text": "공개 grading.json의 B·T로 기본 60/도전 40 환산. 구현·노트·실험 별도 배점 없음."
      }
    },
    {
      "number": "02",
      "week": "1주차",
      "day": "목요일",
      "title": "전역 트리 최적화 ★★★",
      "unlocked": true,
      "tagline": "보물 최대 12개의 트리 맵 8개: 부분집합과 순서를 고르세요.",
      "focus": "부분집합 계획 · 가지치기 · 공개 score",
      "repositoryUrl": "dist/week1_thursday.zip",
      "objectives": [
        "보물 부분집합과 방문 순서를 고릅니다. DP·가지치기로 score를 개선할 수 있습니다.",
        "상태 설계 예제를 제공하며 휴리스틱도 얻은 score로 평가합니다.",
        "맵 전체 10초 제한. 구현 방법·설계 노트의 별도 배점은 없습니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "공개 score 평가",
        "title": "공개 맵 8개. 부분집합·방문 순서 개선.",
        "text": "공개 grading.json의 B·T로 기본 60/도전 40 환산. 구현·노트·실험 별도 배점 없음."
      }
    },
    {
      "number": "03",
      "week": "2주차",
      "day": "화요일",
      "title": "가중 그래프 경로 ★★★",
      "unlocked": true,
      "tagline": "가중 경로와 이전 방문 계획을 결합하세요.",
      "focus": "Dijkstra · 우선순위 큐 · 출구 경유 금지",
      "repositoryUrl": "dist/week2_tuesday.zip",
      "objectives": [
        "이동 횟수 대신 지형별 에너지 비용으로 판단합니다.",
        "1주차의 방문 계획을 도전 맵 4개에 결합합니다.",
        "공유 묶음·가중 순서 함정·예산 절단 맵 3개를 추가했습니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "공개 score 평가",
        "title": "가중 맵 10개. 방문 계획 도전 4개.",
        "text": "공개 grading.json의 B·T로 기본 60/도전 40 환산. 구현·노트·실험 별도 배점 없음."
      }
    },
    {
      "number": "04",
      "week": "2주차",
      "day": "목요일",
      "title": "관측하며 갱신하는 보물 계획 ★★★★",
      "unlocked": true,
      "tagline": "평가 맵은 공개, 실행 중 가치는 미공개: 관측하고 갱신하세요.",
      "focus": "가치 추정 · 묶음 방문 계획 · 재계획",
      "repositoryUrl": "dist/week2_thursday.zip",
      "objectives": [
        "미공개 가치를 추정하고 관측 후 계획을 갱신합니다.",
        "애매한 첫 관측과 유료 정보 수집의 비용·이득을 다룹니다.",
        "LOW/HIGH 진단 쌍은 평균 score를 구한 뒤 공개 성적으로 환산합니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "공개 score 평가",
        "title": "공개 맵 14개. LOW/HIGH 진단 쌍 3개.",
        "text": "공개 grading.json의 B·T로 기본 60/도전 40 환산. 구현·노트·실험 별도 배점 없음."
      }
    },
    {
      "number": "05",
      "week": "3주차",
      "day": "화요일",
      "title": "숨겨진 최종 도전 ★★★★★",
      "unlocked": true,
      "tagline": "목요일과 같은 숨은 가치 규칙에 안개와 모르는 출구가 더해집니다.",
      "focus": "온라인 판단 · 기대 이익 · 실험 설계",
      "repositoryUrl": "dist/week3_tuesday.zip",
      "objectives": [
        "이전 가치 판단을 안개와 출구 미확인 상황으로 확장합니다.",
        "탐색·보물 방문·탈출 여유를 선택합니다.",
        "교수자가 별도 보관한 hidden map만 채점하며 공개 맵은 연습용입니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "hidden 최종 평가",
        "title": "hidden 최종 평가. LOW/HIGH 동일 비중.",
        "text": "최종 평가값은 게임 score 단위이며 100점 환산값이 아닙니다. 공개 연습·발표 미채점."
      }
    }
  ],
  "stageRules": [
    [
      "BFS 경로 복원을 학습하며 참고 BFS 사용 자체의 감점은 없습니다.",
      "가치와 추가 에너지를 비교해 수집·목표를 선택합니다.",
      "여러 보물을 함께 계획해 두 도전 맵의 score를 개선합니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공식 성적은 grade.py. hidden map 없음."
    ],
    [
      "보물 부분집합과 방문 순서를 고릅니다. DP·가지치기로 score를 개선할 수 있습니다.",
      "상태 설계 예제를 제공하며 휴리스틱도 얻은 score로 평가합니다.",
      "맵 전체 10초 제한. 구현 방법·설계 노트의 별도 배점은 없습니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공식 성적은 grade.py. hidden map 없음."
    ],
    [
      "이동 횟수 대신 지형별 에너지 비용으로 판단합니다.",
      "1주차의 방문 계획을 도전 맵 4개에 결합합니다.",
      "공유 묶음·가중 순서 함정·예산 절단 맵 3개를 추가했습니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공식 성적은 grade.py. hidden map 없음."
    ],
    [
      "미공개 가치를 추정하고 관측 후 계획을 갱신합니다.",
      "애매한 첫 관측과 유료 정보 수집의 비용·이득을 다룹니다.",
      "LOW/HIGH 진단 쌍은 평균 score를 구한 뒤 공개 성적으로 환산합니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공식 성적은 grade.py. hidden map 없음."
    ],
    [
      "이전 가치 판단을 안개와 출구 미확인 상황으로 확장합니다.",
      "탐색·보물 방문·탈출 여유를 선택합니다.",
      "교수자가 별도 보관한 hidden map만 채점하며 공개 맵은 연습용입니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "최종 hidden score는 LOW/HIGH 평균을 50:50 반영. 공개 연습은 grade.py --practice."
    ]
  ],
  "stageCommands": [
    "python grade.py",
    "python grade.py",
    "python grade.py",
    "python grade.py",
    "python grade.py --practice"
  ],
  "batchCommands": {
    "powershell": "Get-ChildItem maps/*.json | ForEach-Object { python -m treasure_explorer --map $_.FullName --agent agent.py }",
    "bash": "for map in maps/*.json; do python -m treasure_explorer --map \"$map\" --agent agent.py; done",
    "tests": "python -m unittest discover -s tests -v"
  }
};

applyReleaseSwitches();
