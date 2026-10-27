// Set these switches to true immediately before releasing each assignment.
// Locked ZIPs are excluded from the deployed Pages artifact.
window.RELEASES = {
  "week1_tuesday": false,
  "week1_thursday": false,
  "week2_tuesday": false,
  "week2_thursday": false,
  "week3_tuesday": false
};

window.SITE_CONTENT = {
  "semester": "Problem Solving Techniques · Fall 2026",
  "badge": "3-HOUR LABS",
  "title": "Explore.",
  "subtitle": "Collect. Return.",
  "description": "Week 1 uses public-map scores. Weeks 2 and 3 use hidden-map scores. Teams of two, no AI, 180 minutes per session.",
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
      "Check grade.py in Week 1, or grade.py --practice in Weeks 2/3, then submit your policy."
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
      "Eight public maps; improve subsets and order. Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40."
    ],
    [
      "W2 TUE",
      "Hidden score only · Basic 60 + challenge 40",
      "Ten public weighted maps are practice. The instructor holds the final maps privately. Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40."
    ],
    [
      "W2 THU",
      "Hidden score only · Basic 60 + challenge 40",
      "Fourteen public maps are practice. Average hidden LOW/HIGH pairs before conversion. Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40."
    ],
    [
      "W3 TUE",
      "Hidden score only · LOW/HIGH 50:50",
      "25% of the overall course grade. Hidden tests only; LOW/HIGH means have equal weight."
    ]
  ],
  "submissionRules": [
    "Run with --agent agent.py; edit and submit only student_policy.py. Official fixed files are used for grading.",
    "Do not modify agent.py, policy_helpers.py, the engine, maps, tests, or configuration files.",
    "The agent must not access files, networks, subprocesses, or external packages.",
    "Week 1 Tuesday: implement and use your own bfs_path() with USE_MY_BFS=True for improvement credit. Reference BFS earns 50/100 assignment marks if all four maps are exited."
  ],
  "integrityRules": [
    "Work in a team of two. Do not share code with other teams.",
    "Use the current introduction and distributed API/specification. No Week 6/7 materials, AI or web searches.",
    "Do not reuse or rewrite your team's earlier code from THIS project. Earlier concepts may inform a new implementation.",
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
      "title": "GLOBAL TREE OPTIMIZATION ★★★",
      "unlocked": false,
      "tagline": "Eight tree maps up to 12 treasures: choose the subset and the order.",
      "focus": "Subset planning · Pruned search · Public score",
      "repositoryUrl": null,
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
        "text": "Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40. B/T anchors are published. No separate marks for notes, experiments or code quality."
      }
    },
    {
      "number": "03",
      "week": "WEEK 2",
      "day": "TUESDAY",
      "title": "WEIGHTED GRAPH ROUTES ★★★",
      "unlocked": false,
      "tagline": "Practise weighted routes and visit planning, then apply the policy to unseen assessment maps.",
      "focus": "Dijkstra · Priority queue · Exit avoidance",
      "repositoryUrl": null,
      "objectives": [
        "Plan with entry energy costs instead of hop counts.",
        "Combine subset and visit-order planning with weighted costs.",
        "Final maps are unseen. Terrain, exit and treasure values remain visible during each run."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "HIDDEN SCORE",
        "title": "Ten public maps are practice. Only hidden maps count toward the final grade.",
        "text": "Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40. Final B/T anchors are private. Public grade.py --practice is ungraded practice."
      }
    },
    {
      "number": "04",
      "week": "WEEK 2",
      "day": "THURSDAY",
      "title": "PLANNING WITH HIDDEN VALUES ★★★★",
      "unlocked": false,
      "tagline": "Unseen assessment maps with fully visible terrain and values revealed on arrival.",
      "focus": "Value estimation · Group planning · Replanning",
      "repositoryUrl": null,
      "objectives": [
        "Estimate unrevealed values and update plans after observations.",
        "One LOW/HIGH type applies to the whole map. Include the cost of acquiring information.",
        "Average each final LOW/HIGH challenge pair before applying its private B/T anchors."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "HIDDEN SCORE",
        "title": "Fourteen public maps are practice. Only hidden maps count toward the final grade.",
        "text": "Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40. LOW/HIGH pairs use mean game score for improvement and the fraction of successful exits for escape credit."
      }
    },
    {
      "number": "05",
      "week": "WEEK 3",
      "day": "TUESDAY",
      "title": "HIDDEN FINAL CHALLENGE ★★★★★",
      "unlocked": false,
      "tagline": "The same hidden-value model, now with fog and an unseen exit.",
      "focus": "Online decisions · Expected gain · Experiment design",
      "repositoryUrl": null,
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
        "text": "The final metric is in game-score units, not out of 100. Public practice does not count toward the hidden-test score. Week 3 accounts for 25% of the overall course grade; the Thursday presentation is a separate 15%."
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
      "Choose a treasure subset and visit order; DP/pruned search can improve scores.",
      "A worked state example is provided; heuristics earn their achieved scores.",
      "Whole-map limit is 10 seconds, with no separate algorithm or note marks.",
      "Use one generic student_policy.py for all maps; no hardcoded map identification.",
      "Official grade: grade.py. No hidden maps.",
      "Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40."
    ],
    [
      "Plan with entry energy costs instead of hop counts.",
      "Combine subset and visit-order planning with weighted costs.",
      "Final maps are unseen. Terrain, exit and treasure values remain visible during each run.",
      "Use one generic student_policy.py for all maps. Do not hardcode map identification.",
      "Public practice: grade.py --practice. The instructor runs the private final suite.",
      "Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40."
    ],
    [
      "Estimate unrevealed values and update plans after observations.",
      "One LOW/HIGH type applies to the whole map. Include the cost of acquiring information.",
      "Average each final LOW/HIGH challenge pair before applying its private B/T anchors.",
      "Use one generic student_policy.py for all maps. Do not hardcode map identification.",
      "Public practice: grade.py --practice. The instructor runs the private final suite.",
      "Each unit: escape 50% + B/T improvement 50%. Basic/challenge group weights remain 60/40."
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
    "python grade.py --practice",
    "python grade.py --practice",
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
  "description": "1주차는 공개 맵, 2·3주차는 비공개 맵 score로 평가합니다. 2인 팀, AI 금지, 회차당 180분입니다.",
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
      "1주차는 grade.py, 2·3주차는 grade.py --practice로 확인 후 정책을 제출합니다."
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
      "공개 맵 8개. 부분집합·방문 순서 개선. 각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "W2 TUE",
      "비공개 score 평가 · 기본 60 + 도전 40",
      "공개 가중 맵 10개는 연습용. 최종 맵은 교수자가 비공개 보관. 각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "W2 THU",
      "비공개 score 평가 · 기본 60 + 도전 40",
      "공개 맵 14개는 연습용. 최종 LOW/HIGH 쌍은 평균 후 환산. 각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "W3 TUE",
      "hidden score만 · LOW/HIGH 50:50",
      "전체 성적의 25%. hidden test의 LOW/HIGH 평균 동일 비중."
    ]
  ],
  "submissionRules": [
    "실행은 --agent agent.py, 수정·제출은 student_policy.py 하나입니다. 공식 고정 파일로 재실행합니다.",
    "agent.py, policy_helpers.py, 엔진, 맵, 테스트, 설정 파일은 수정하지 마세요.",
    "에이전트는 파일, 네트워크, 서브프로세스, 외부 패키지에 접근해서는 안 됩니다.",
    "1주차 화요일: 직접 구현한 bfs_path()를 USE_MY_BFS=True로 사용해야 개선 점수를 받습니다. 참고 BFS로 네 맵을 모두 탈출하면 과제 성적 50/100점입니다."
  ],
  "integrityRules": [
    "2인 팀으로 진행하며 다른 팀과 코드를 공유하지 않습니다.",
    "당회차 소개 자료와 배포 명세·API만 참고합니다. 기존 Week 6·7 자료·AI·웹 검색은 금지합니다.",
    "이번 프로젝트의 이전 회차 코드 재사용·재작성은 금지합니다. 이전 개념은 새 구현의 아이디어로 활용할 수 있습니다.",
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
      "title": "전역 트리 최적화 ★★★",
      "unlocked": false,
      "tagline": "보물 최대 12개의 트리 맵 8개: 부분집합과 순서를 고르세요.",
      "focus": "부분집합 계획 · 가지치기 · 공개 score",
      "repositoryUrl": null,
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
        "text": "각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다. B·T는 공개하며 노트·실험·코드 품질의 별도 배점은 없습니다."
      }
    },
    {
      "number": "03",
      "week": "2주차",
      "day": "화요일",
      "title": "가중 그래프 경로 ★★★",
      "unlocked": false,
      "tagline": "공개 맵에서 가중 경로와 방문 계획을 연습하고 비공개 맵에서 평가합니다.",
      "focus": "Dijkstra · 우선순위 큐 · 출구 경유 금지",
      "repositoryUrl": null,
      "objectives": [
        "이동 횟수 대신 지형별 에너지 비용으로 판단합니다.",
        "부분집합·방문 순서 계획을 가중 비용과 결합합니다.",
        "평가 맵은 비공개지만 실행 중 지형·출구·보물 값은 모두 공개됩니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "비공개 score 평가",
        "title": "공개 10개는 연습용. 최종 성적은 비공개 맵만 반영.",
        "text": "각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다. 최종 B·T는 비공개입니다. 공개 grade.py --practice는 연습용입니다."
      }
    },
    {
      "number": "04",
      "week": "2주차",
      "day": "목요일",
      "title": "관측하며 갱신하는 보물 계획 ★★★★",
      "unlocked": false,
      "tagline": "평가 맵은 비공개이며, 실행 중 보물 값은 도착해야 공개됩니다.",
      "focus": "가치 추정 · 묶음 방문 계획 · 재계획",
      "repositoryUrl": null,
      "objectives": [
        "미공개 가치를 추정하고 관측 후 계획을 갱신합니다.",
        "맵 전체에 LOW/HIGH 유형 하나를 적용합니다. 정보 수집의 비용도 고려합니다.",
        "최종 도전 LOW/HIGH 쌍은 평균 score를 구한 뒤 비공개 B·T로 환산합니다."
      ],
      "deliverables": [
        "student_policy.py"
      ],
      "evaluation": {
        "label": "비공개 score 평가",
        "title": "공개 14개는 연습용. 최종 성적은 비공개 맵만 반영.",
        "text": "각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다. LOW/HIGH 쌍은 평균 게임 score로 개선도를, 두 실행의 성공 비율로 탈출 점수를 계산합니다."
      }
    },
    {
      "number": "05",
      "week": "3주차",
      "day": "화요일",
      "title": "숨겨진 최종 도전 ★★★★★",
      "unlocked": false,
      "tagline": "목요일과 같은 숨은 가치 규칙에 안개와 모르는 출구가 더해집니다.",
      "focus": "온라인 판단 · 기대 이익 · 실험 설계",
      "repositoryUrl": null,
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
        "text": "최종 평가값은 게임 score 단위이며 100점 환산값이 아닙니다. 공개 연습은 hidden test 점수에 포함하지 않습니다. 전체 성적의 25%이며, 목요일 최종 발표는 별도 15%입니다."
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
      "보물 부분집합과 방문 순서를 고릅니다. DP·가지치기로 score를 개선할 수 있습니다.",
      "상태 설계 예제를 제공하며 휴리스틱도 얻은 score로 평가합니다.",
      "맵 전체 10초 제한. 구현 방법·설계 노트의 별도 배점은 없습니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공식 성적은 grade.py. hidden map 없음.",
      "각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "이동 횟수 대신 지형별 에너지 비용으로 판단합니다.",
      "부분집합·방문 순서 계획을 가중 비용과 결합합니다.",
      "평가 맵은 비공개지만 실행 중 지형·출구·보물 값은 모두 공개됩니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공개 연습: grade.py --practice. 최종 비공개 평가는 교수자가 실행합니다.",
      "각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
    ],
    [
      "미공개 가치를 추정하고 관측 후 계획을 갱신합니다.",
      "맵 전체에 LOW/HIGH 유형 하나를 적용합니다. 정보 수집의 비용도 고려합니다.",
      "최종 도전 LOW/HIGH 쌍은 평균 score를 구한 뒤 비공개 B·T로 환산합니다.",
      "모든 맵에 같은 student_policy.py를 사용합니다. 맵 식별 하드코딩 금지.",
      "공개 연습: grade.py --practice. 최종 비공개 평가는 교수자가 실행합니다.",
      "각 평가 단위: 탈출 50% + B·T 개선 50%. 기본/도전 그룹 비중은 60/40입니다."
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
    "python grade.py --practice",
    "python grade.py --practice",
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

