// Set these switches to true immediately before releasing each assignment.
// Locked ZIPs are excluded from the deployed Pages artifact.
window.RELEASES = {
  "week1_tuesday": true,
  "week1_thursday": true,
  "week2_tuesday": false,
  "week2_thursday": false,
  "week3_tuesday": false
};

window.SITE_CONTENT = {
  "semester": "Problem Solving Techniques · Fall 2026",
  "badge": "3-HOUR LABS",
  "title": "Explore.",
  "subtitle": "Collect. Return.",
  "description": "Exercises (W1 Tue/Thu, W2 Thu) are graded on public maps; tests (W2 Tue, W3 Tue) on hidden maps. Teams of two, no AI, 180 minutes per session.",
  "labHours": "3H",
  "initialEnergy": "MAP",
  "submission": "student_policy.py",
  "pythonVersion": "Python 3.11+",
  "command": "python -m treasure_explorer --map maps/warmup.json --agent agent.py --view",
  "scoreFormula": "50 EXIT BONUS + TREASURE + ENERGY LEFT - 5 INVALID",
  "noExitRule": "NO EXIT, NO SCORE",
  "missionLabel": "01 / MISSION",
  "missionTitle": "Distances first, then a plan.",
  "missionDescription": "Compute distances with BFS (later Dijkstra), then choose which treasures to collect and in which order. The fixed agent walks your plan, collects your treasures and exits. Each session adds one new difficulty.",
  "process": [
    [
      "01",
      "DISTANCE",
      "distance_table"
    ],
    [
      "02",
      "COST",
      "plan_cost"
    ],
    [
      "03",
      "CHOOSE",
      "choose_targets"
    ],
    [
      "04",
      "RUN",
      "agent.py"
    ]
  ],
  "rules": [
    {
      "number": "RULE 01",
      "title": "Everything is visible",
      "text": "Every map shows terrain, treasures, values and the exit. Mud and water appear from W2 Thursday. At most 8 treasures per map; test challenge maps have 11-12."
    },
    {
      "number": "RULE 02",
      "title": "Return first",
      "text": "Treasure counts only after the bot reaches the exit. The exit is always a dead end, so shortest routes to treasure never cross it."
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
      "TODO 2: which treasures, in which order, within the energy."
    ],
    [
      "02:10",
      "Measure",
      "Run every map, compare with the reference scores."
    ],
    [
      "02:40",
      "Check",
      "Run grade.py (exercises) or grade.py --practice (tests), then submit student_policy.py."
    ]
  ],
  "rubric": [
    [
      "W1 TUE",
      "Public score only · Basic 60 + challenge 40",
      "Own BFS required for additional points. Reference BFS: exit bonus only (50 game points). Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40."
    ],
    [
      "W1 THU",
      "Public score only · Basic 60 + challenge 40",
      "BFS exercise. Six public maps, up to 8 treasures: choose the subset and the order. Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
    ],
    [
      "W2 TUE",
      "Hidden test · Basic 60 + challenge 40",
      "BFS test. Challenge maps have 11-12 treasures, so the plan search needs pruning. Six public maps are practice; only the instructor's hidden maps count. Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
    ],
    [
      "W2 THU",
      "Public score only · Basic 60 + challenge 40",
      "Dijkstra exercise. Six public maps with mud (4) and water (7); the plan search is provided. Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
    ],
    [
      "W3 TUE",
      "Hidden test · Basic 60 + challenge 40",
      "Dijkstra test, 25% of the overall course grade. Mud and water with 11-12 treasures on challenge maps. Six public maps are practice; only hidden maps count. Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
    ]
  ],
  "submissionRules": [
    "Run with --agent agent.py; edit and submit only student_policy.py. Official fixed files are used for grading.",
    "Do not modify agent.py, policy_helpers.py, the engine, maps, tests, or configuration files.",
    "The agent must not access files, networks, subprocesses, or external packages.",
    "Week 1 Tuesday: implement and use your own bfs_path() with USE_MY_BFS=True for improvement credit. Reference BFS earns 50/100 assignment marks if all four maps are exited.",
    "From Week 1 Thursday: write the TODO functions of student_policy.py and keep their names and arguments. One name always means the same job."
  ],
  "integrityRules": [
    "Work in a team of two. Do not share code with other teams.",
    "Use the current introduction and distributed API/specification. No Week 6/7 materials, AI or web searches.",
    "Do not copy from earlier code of THIS project (your own team's included) kept open beside you. Recalling the ideas and writing the code again is allowed.",
    "Do not publish answers before grading ends, or identify maps/seeds through hardcoding or side channels."
  ],
  "stages": [
    {
      "number": "01",
      "week": "WEEK 1",
      "day": "TUESDAY",
      "title": "TREE PLANNING FOUNDATIONS ★★",
      "unlocked": false,
      "tagline": "Learn BFS and decide which treasure detours pay.",
      "focus": "BFS · Path recovery · Profit = value − extra energy",
      "repositoryUrl": null,
      "objectives": [
        "Week 1 Tuesday: implement and use your own bfs_path() with USE_MY_BFS=True for improvement credit. Reference BFS earns 50/100 assignment marks if all four maps are exited.",
        "Choose collection and targets from value minus extra energy.",
        "Improve the two challenge maps by jointly planning treasures."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "PUBLIC SCORE",
        "title": "Reference BFS, four successful exits: 50/100 assignment marks.",
        "text": "Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40. Reference-BFS runs keep an assessed game score of 50 on exit, or 0 on failure. They earn only each map's escape credit."
      }
    },
    {
      "number": "02",
      "week": "WEEK 1",
      "day": "THURSDAY",
      "title": "SEVERAL TREASURES ★★",
      "unlocked": false,
      "tagline": "New: several treasures. Choose which ones, in which order.",
      "focus": "BFS · Every subset and order · Public score",
      "repositoryUrl": null,
      "objectives": [
        "bfs_distances: one BFS gives the distance to every cell.",
        "plan_cost: the energy one plan needs.",
        "choose_targets: try every order of every group of treasures (up to 8) and keep the best."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "PUBLIC SCORE",
        "title": "Six public maps: basic 60 + challenge 40.",
        "text": "Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
      }
    },
    {
      "number": "03",
      "week": "WEEK 2",
      "day": "TUESDAY",
      "title": "BFS TEST ★★★",
      "unlocked": false,
      "tagline": "New: challenge maps have 11-12 treasures. Trying every order is too slow, so prune.",
      "focus": "BFS · Search with pruning · Hidden maps",
      "repositoryUrl": null,
      "objectives": [
        "Write bfs_distances and choose_targets from the outline; each TODO lists the steps.",
        "Stop extending a plan as soon as it can no longer reach the exit. A map over 10 seconds scores 0.",
        "Hidden maps: unit cost, basic up to 8 treasures, challenge 11-12, dead-end exit."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "HIDDEN SCORE",
        "title": "Only the instructor's hidden maps count.",
        "text": "Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40. Public grade.py --practice is ungraded practice."
      }
    },
    {
      "number": "04",
      "week": "WEEK 2",
      "day": "THURSDAY",
      "title": "WEIGHTED ROUTES ★★★",
      "unlocked": false,
      "tagline": "Mud and water: the fewest steps is no longer the least energy.",
      "focus": "Dijkstra · Priority queue · Plan search provided",
      "repositoryUrl": null,
      "objectives": [
        "Write dijkstra_distances with heapq; fill the marked blanks.",
        "plan_cost and choose_targets are provided (every order, up to 8 treasures).",
        "Compare: with BFS distances the plan underestimates the energy it needs."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "PUBLIC SCORE",
        "title": "Six public weighted maps: basic 60 + challenge 40.",
        "text": "Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
      }
    },
    {
      "number": "05",
      "week": "WEEK 3",
      "day": "TUESDAY",
      "title": "DIJKSTRA TEST ★★★★",
      "unlocked": false,
      "tagline": "New: mud and water AND 11-12 treasures. Combine Dijkstra with the search with pruning.",
      "focus": "Dijkstra · Search with pruning · Hidden maps",
      "repositoryUrl": null,
      "objectives": [
        "Write dijkstra_distances and choose_targets from the outline; each TODO lists the steps.",
        "Practise on six public maps with grade.py --practice.",
        "Hidden maps: mud 4, water 7, basic up to 8 treasures, challenge 11-12, dead-end exit."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "HIDDEN SCORE",
        "title": "Only the instructor's hidden maps count.",
        "text": "Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40. 25% of the overall course grade; the Thursday presentation is a separate 15%."
      }
    }
  ],
  "stageRules": [
    [
      "Week 1 Tuesday: implement and use your own bfs_path() with USE_MY_BFS=True for improvement credit. Reference BFS earns 50/100 assignment marks if all four maps are exited.",
      "Choose collection and targets from value minus extra energy.",
      "Improve the two challenge maps by jointly planning treasures.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Official grade: grade.py. No hidden maps.",
      "Reference-BFS runs keep an assessed game score of 50 on exit, or 0 on failure. They earn only each map's escape credit.",
      "Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40."
    ],
    [
      "Fill the marked blanks of bfs_distances, plan_cost and choose_targets.",
      "Try every order of every group of treasures; skip plans that need more energy than you have.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Official grade: grade.py. No hidden maps.",
      "Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
    ],
    [
      "Write bfs_distances and choose_targets from the outline; each TODO lists the steps.",
      "Challenge maps have 11-12 treasures: prune plans that can no longer reach the exit. Over 10 seconds = 0 for that map.",
      "Public maps are practice: grade.py --practice. The instructor runs the hidden maps.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
    ],
    [
      "Write dijkstra_distances with heapq; fill the marked blanks in the skeleton.",
      "plan_cost and choose_targets are provided.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Official grade: grade.py. No hidden maps.",
      "Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
    ],
    [
      "Write dijkstra_distances (Week 2 Thursday) and choose_targets with pruning (Week 2 Tuesday) from the outline.",
      "Challenge maps: mud, water and 11-12 treasures. Over 10 seconds = 0 for that map.",
      "Public maps are practice: grade.py --practice. The instructor runs the hidden maps.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Each map: escape 50% + B/T improvement 50%. Basic/challenge group weights 60/40."
    ]
  ],
  "stageCommands": [
    "python grade.py",
    "python grade.py",
    "python grade.py --practice",
    "python grade.py",
    "python grade.py --practice"
  ],
  "batchCommands": {
    "powershell": "Get-ChildItem maps/*.json | ForEach-Object { python -m treasure_explorer --map $_.FullName --agent agent.py }",
    "bash": "for map in maps/*.json; do python -m treasure_explorer --map \"$map\" --agent agent.py; done",
    "tests": "python -m unittest discover -s tests -v"
  }
};

window.SITE_CONTENT_KO = {
  "semester": "문제해결기법 · 2026년 가을학기",
  "badge": "3시간 실습",
  "title": "탐험하라.",
  "subtitle": "수집하라. 귀환하라.",
  "description": "연습 회차(1주차 화·목, 2주차 목)는 공개 맵, 테스트 회차(2주차 화, 3주차 화)는 비공개 맵으로 평가합니다. 2인 팀, AI 금지, 회차당 180분입니다.",
  "labHours": "3H",
  "initialEnergy": "MAP",
  "submission": "student_policy.py",
  "pythonVersion": "Python 3.11+",
  "command": "python -m treasure_explorer --map maps/warmup.json --agent agent.py --view",
  "scoreFormula": "50 출구 보너스 + 보물 가치 + 남은 에너지 - 5 × 무효 행동",
  "noExitRule": "출구 미도달 시 점수 없음",
  "missionLabel": "01 / 임무",
  "missionTitle": "먼저 거리, 그다음 계획.",
  "missionDescription": "BFS(이후 Dijkstra)로 거리를 구하고, 어떤 보물을 어떤 순서로 주울지 정합니다. 고정 에이전트가 계획대로 이동하고 보물을 주워 탈출합니다. 회차마다 어려운 점이 하나씩 더해집니다.",
  "process": [
    [
      "01",
      "거리",
      "distance_table"
    ],
    [
      "02",
      "비용",
      "plan_cost"
    ],
    [
      "03",
      "선택",
      "choose_targets"
    ],
    [
      "04",
      "실행",
      "agent.py"
    ]
  ],
  "rules": [
    {
      "number": "규칙 01",
      "title": "모든 정보가 공개됩니다",
      "text": "모든 맵에서 지형·보물·가치·출구가 보입니다. 진흙·물은 2주차 목요일부터 나옵니다. 보물은 맵당 최대 8개이고, 테스트 도전 맵만 11~12개입니다."
    },
    {
      "number": "규칙 02",
      "title": "귀환이 먼저입니다",
      "text": "출구에 도달해야 보물 점수가 인정됩니다. 출구는 항상 막다른 칸이므로 보물로 가는 최단 경로가 출구를 지나지 않습니다."
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
      "TODO 2: 에너지 안에서 어떤 보물을 어떤 순서로 주울지."
    ],
    [
      "02:10",
      "측정",
      "모든 맵 실행, 기준 점수와 비교."
    ],
    [
      "02:40",
      "제출 점검",
      "연습 회차는 grade.py, 테스트 회차는 grade.py --practice로 확인 후 student_policy.py를 제출합니다."
    ]
  ],
  "rubric": [
    [
      "W1 TUE",
      "공개 score만 · 기본 60 + 도전 40",
      "직접 구현한 BFS 필요. 참고 BFS는 탈출 시 게임 점수 50점만 인정. 각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "W1 THU",
      "공개 score만 · 기본 60 + 도전 40",
      "BFS 연습. 공개 맵 6개, 보물 최대 8개: 부분집합과 순서를 고릅니다. 각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "W2 TUE",
      "비공개 테스트 · 기본 60 + 도전 40",
      "BFS 테스트. 도전 맵은 보물이 11~12개라 가지치기 탐색이 필요합니다. 공개 맵 6개는 연습용이며 교수자의 비공개 맵만 반영합니다. 각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "W2 THU",
      "공개 score만 · 기본 60 + 도전 40",
      "Dijkstra 연습. 진흙(4)·물(7)이 있는 공개 맵 6개. 계획 탐색은 제공합니다. 각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "W3 TUE",
      "비공개 테스트 · 기본 60 + 도전 40",
      "Dijkstra 테스트, 전체 성적의 25%. 도전 맵은 진흙·물에 보물 11~12개입니다. 공개 맵 6개는 연습용이며 비공개 맵만 반영합니다. 각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ]
  ],
  "submissionRules": [
    "실행은 --agent agent.py, 수정·제출은 student_policy.py 하나입니다. 공식 고정 파일로 재실행합니다.",
    "agent.py, policy_helpers.py, 엔진, 맵, 테스트, 설정 파일은 수정하지 마세요.",
    "에이전트는 파일, 네트워크, 서브프로세스, 외부 패키지에 접근해서는 안 됩니다.",
    "1주차 화요일: 직접 구현한 bfs_path()를 USE_MY_BFS=True로 사용해야 개선 점수를 받습니다. 참고 BFS로 네 맵을 모두 탈출하면 과제 성적 50/100점입니다.",
    "1주차 목요일부터: student_policy.py의 TODO 함수를 작성하고, 함수 이름과 인자는 바꾸지 않습니다. 이름이 같은 함수는 언제나 같은 일을 합니다."
  ],
  "integrityRules": [
    "2인 팀으로 진행하며 다른 팀과 코드를 공유하지 않습니다.",
    "당회차 소개 자료와 배포 명세·API만 참고합니다. 기존 Week 6·7 자료·AI·웹 검색은 금지합니다.",
    "이번 프로젝트의 이전 회차 코드(우리 팀 코드 포함)를 옆에 띄워 놓고 보면서 옮겨 쓰는 것은 금지합니다. 배운 개념을 떠올려 새로 작성하는 것은 괜찮습니다.",
    "채점 전 답안 공개, 맵·좌표·시드 하드코딩과 사이드 채널 이용은 금지합니다."
  ],
  "stages": [
    {
      "number": "01",
      "week": "1주차",
      "day": "화요일",
      "title": "트리 계획 기초 ★★",
      "unlocked": false,
      "tagline": "BFS를 학습하고 이득인 보물 우회를 판단하세요.",
      "focus": "BFS · 경로 복원 · 순이익 = 가치 − 추가 에너지",
      "repositoryUrl": null,
      "objectives": [
        "1주차 화요일: 직접 구현한 bfs_path()를 USE_MY_BFS=True로 사용해야 개선 점수를 받습니다. 참고 BFS로 네 맵을 모두 탈출하면 과제 성적 50/100점입니다.",
        "가치와 추가 에너지를 비교해 수집·목표를 선택합니다.",
        "여러 보물을 함께 계획해 두 도전 맵의 score를 개선합니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "공개 score 평가",
        "title": "참고 BFS로 네 맵 모두 탈출: 과제 성적 50/100점.",
        "text": "각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다. 참고 BFS 실행은 탈출 시 인정 게임 score 50점, 실패 시 0점입니다. 각 맵의 탈출 점수만 인정합니다."
      }
    },
    {
      "number": "02",
      "week": "1주차",
      "day": "목요일",
      "title": "여러 보물 계획 ★★",
      "unlocked": false,
      "tagline": "새로 생긴 것: 보물 여러 개. 어떤 보물을 어떤 순서로 주울지 고르세요.",
      "focus": "BFS · 모든 조합과 순서 · 공개 score",
      "repositoryUrl": null,
      "objectives": [
        "bfs_distances: BFS 한 번으로 모든 칸까지의 거리를 구합니다.",
        "plan_cost: 계획 하나에 드는 에너지를 계산합니다.",
        "choose_targets: 보물(최대 8개)의 모든 조합과 순서를 시도해 가장 좋은 계획을 고릅니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "공개 score 평가",
        "title": "공개 맵 6개: 기본 60 + 도전 40.",
        "text": "각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
      }
    },
    {
      "number": "03",
      "week": "2주차",
      "day": "화요일",
      "title": "BFS 테스트 ★★★",
      "unlocked": false,
      "tagline": "새로 생긴 것: 도전 맵 보물 11~12개. 모든 순서를 시도하면 너무 느려서 가지치기가 필요합니다.",
      "focus": "BFS · 가지치기 탐색 · 비공개 맵",
      "repositoryUrl": null,
      "objectives": [
        "함수 틀과 TODO의 단계 설명을 보고 bfs_distances와 choose_targets를 작성합니다.",
        "출구에 갈 수 없게 된 계획은 더 늘리지 않습니다. 10초를 넘긴 맵은 0점입니다.",
        "비공개 맵: 지형 비용 1, 기본 맵 보물 8개 이하, 도전 맵 11~12개, 막다른 출구."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "비공개 score 평가",
        "title": "교수자의 비공개 맵만 성적에 반영합니다.",
        "text": "각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다. 공개 grade.py --practice는 성적과 무관한 연습입니다."
      }
    },
    {
      "number": "04",
      "week": "2주차",
      "day": "목요일",
      "title": "가중치 경로 ★★★",
      "unlocked": false,
      "tagline": "진흙과 물: 걸음 수가 가장 적은 길이 가장 싼 길은 아닙니다.",
      "focus": "Dijkstra · 우선순위 큐 · 계획 탐색 제공",
      "repositoryUrl": null,
      "objectives": [
        "heapq로 dijkstra_distances를 작성합니다. 표시된 빈칸을 채웁니다.",
        "plan_cost와 choose_targets(모든 순서, 보물 최대 8개)는 제공합니다.",
        "비교: BFS 거리를 쓰면 계획이 필요한 에너지를 실제보다 적게 잡습니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "공개 score 평가",
        "title": "가중치 공개 맵 6개: 기본 60 + 도전 40.",
        "text": "각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
      }
    },
    {
      "number": "05",
      "week": "3주차",
      "day": "화요일",
      "title": "Dijkstra 테스트 ★★★★",
      "unlocked": false,
      "tagline": "새로 생긴 것: 진흙·물에 보물 11~12개. Dijkstra와 가지치기 탐색을 함께 씁니다.",
      "focus": "Dijkstra · 가지치기 탐색 · 비공개 맵",
      "repositoryUrl": null,
      "objectives": [
        "함수 틀과 TODO의 단계 설명을 보고 dijkstra_distances와 choose_targets를 작성합니다.",
        "공개 맵 6개로 grade.py --practice 연습을 합니다.",
        "비공개 맵: 진흙 4, 물 7, 기본 맵 보물 8개 이하, 도전 맵 11~12개, 막다른 출구."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "비공개 score 평가",
        "title": "교수자의 비공개 맵만 성적에 반영합니다.",
        "text": "각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다. 전체 성적의 25%이며 목요일 발표는 별도 15%입니다."
      }
    }
  ],
  "stageRules": [
    [
      "1주차 화요일: 직접 구현한 bfs_path()를 USE_MY_BFS=True로 사용해야 개선 점수를 받습니다. 참고 BFS로 네 맵을 모두 탈출하면 과제 성적 50/100점입니다.",
      "가치와 추가 에너지를 비교해 수집·목표를 선택합니다.",
      "여러 보물을 함께 계획해 두 도전 맵의 score를 개선합니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공식 성적은 grade.py. hidden map 없음.",
      "참고 BFS 실행은 탈출 시 인정 게임 score 50점, 실패 시 0점입니다. 각 맵의 탈출 점수만 인정합니다.",
      "각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "bfs_distances, plan_cost, choose_targets의 표시된 빈칸을 채웁니다.",
      "보물의 모든 조합과 순서를 시도하고, 에너지가 모자란 계획은 건너뜁니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공식 성적은 grade.py. hidden map 없음.",
      "각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "함수 틀과 TODO의 단계 설명을 보고 bfs_distances와 choose_targets를 작성합니다.",
      "도전 맵은 보물 11~12개: 출구에 갈 수 없게 된 계획은 버립니다(가지치기). 10초를 넘긴 맵은 0점입니다.",
      "공개 맵은 연습용: grade.py --practice. 비공개 맵 채점은 교수자가 실행합니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "heapq로 dijkstra_distances를 작성합니다. 뼈대 코드의 빈칸을 채웁니다.",
      "plan_cost와 choose_targets는 제공합니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공식 성적은 grade.py. hidden map 없음.",
      "각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "함수 틀을 보고 dijkstra_distances(2주차 목)와 가지치기 choose_targets(2주차 화)를 작성합니다.",
      "도전 맵: 진흙·물에 보물 11~12개. 10초를 넘긴 맵은 0점입니다.",
      "공개 맵은 연습용: grade.py --practice. 비공개 맵 채점은 교수자가 실행합니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "각 맵: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ]
  ],
  "stageCommands": [
    "python grade.py",
    "python grade.py",
    "python grade.py --practice",
    "python grade.py",
    "python grade.py --practice"
  ],
  "batchCommands": {
    "powershell": "Get-ChildItem maps/*.json | ForEach-Object { python -m treasure_explorer --map $_.FullName --agent agent.py }",
    "bash": "for map in maps/*.json; do python -m treasure_explorer --map \"$map\" --agent agent.py; done",
    "tests": "python -m unittest discover -s tests -v"
  }
};

function applyReleaseSwitches() {
  const ids = ["week1_tuesday", "week1_thursday", "week2_tuesday", "week2_thursday", "week3_tuesday"];
  for (const content of [window.SITE_CONTENT, window.SITE_CONTENT_KO]) {
    content.stages.forEach((stage, i) => {
      stage.unlocked = window.RELEASES[ids[i]] === true;
      stage.repositoryUrl = stage.unlocked ? `dist/${ids[i]}.zip` : null;
    });
  }
}

applyReleaseSwitches();

