# 안개호수 낚시꾼 — 작업 노트

이 파일은 어떤 Claude 세션에서든 이어서 작업할 수 있게 쓴 인수인계 노트예요. 사람도 읽을 수 있게 썼어요.

## 무엇인가
작업 시간이 낚시 시간이 되는 집중 타이머 + 방치형 낚시 게임. 중세 판타지, 묵직하고 어두운 도트 톤.
파일 하나(`index.html`)에 전부 들어 있음. 라이브러리 없음. 외부 리소스는 Google Fonts(DotGothic16, Gowun Dodum)뿐.
배포: GitHub Pages → https://yoonjaeho04-cyber.github.io/fishingtimer/ (main 브랜치 루트). push하면 1~2분 뒤 반영.

## 사용자가 정한 규칙 (바꾸지 말 것)
- 새 요청은 **시안을 먼저** 빠르게 보여주고, 확정 후에 본작업.
- 그래픽: 유치하거나 밝은 장난감 느낌 금지. 채도 낮고 명암·질감(디더링) 강하게. 판타지 직업 아이콘(모자, 투구, 후드)은 분명하게.
- 색은 현재 팔레트 유지. 바꾸지 말고 명암만 올리기.
- 슬로우 게임: 돈이 천천히 모여야 함. 낚시 기본 간격 10분, 물고기 값 ×2.
- 위젯 모드가 핵심 기능: Chrome/Edge는 Document PiP(버튼 포함 창), Safari는 video PiP. **Safari는 클릭 안에서 동기적으로 `webkitSetPresentationMode`를 불러야 하고, 스트림은 이전 클릭에서 미리 준비**해야 함(그래서 pointerdown에서 `preparePip()`).
- 소리는 기본 켜짐, 음소거 버튼은 AudioContext를 suspend.
- 말풍선은 캐릭터 얼굴을 가리면 안 됨(현재 캐릭터 왼쪽에 배치).

## 코드 지도 (index.html 안)
- 데이터: `SPOTS`(낚시터 5곳 × 물고기 12종, 필드: name, r(등급 0~4), price, time(dawn/day/dusk/night|null), min/max cm, lore, shape), `ITEMS`(상점 51종: rod/net/contract/bait/charm/lantern/tank/map), `CHARS`, `LINES`(직업별 대사).
- 상태: `S` 객체 하나. localStorage 키 `mistlake.v2`. claude.ai 아티팩트 버전에서는 db 저장도 시도하지만 Pages 버전에서는 `claude`가 없어 조용히 건너뜀.
- 낚시 로직: `catchInterval`, `rollFish`, `tickFishing`, `startRun`, `endRun`, `goalReached`. 1초 `setInterval`로 백그라운드에서도 진행.
- 렌더: `renderTop/renderTimer/renderPane`(탭: gear, tank, codex, log, set), `openShop/renderShop`, `showHaul`(귀항 창, 물고기 누르면 어항행), `showCharSelect`.
- 그림: `drawSprite`(문자열 그리드 스프라이트), `HERO_ROWS`(32×64 캐릭터 5종), `ITEM_ART`(16×16), `FISH_SIL`+`FISH_STYLE`+`fishCanvas`(24×16 물고기 조합 생성), 장면 `buildBase/drawWater/drawDock/drawScene`(288×192, 32px 타일), 소품 `*HD`.
- 위젯: `togglePip`, `openDocPip`, `preparePip`, `drawPip`.
- 소리: `audio` 모듈(WebAudio로 합성한 잔잔한 브금 + 효과음).

## 수정 방법
- 파일이 커서 통째 편집보다 **문자열 치환**이 안전함. 바꾼 뒤 브라우저에서 콘솔 에러 없는지 확인.
- 새 물고기: `SPOTS`에 한 줄 추가 + `FISH_STYLE['spot-index']` 추가.
- 새 아이템: `ITEMS`에 추가 + `ITEM_ART[id]` 16×16 그리드 추가. cat별 효과 적용 위치: `eqv`, `charm`, `baitLuck`, `tankCap`.

## 2차 (2026-10-28 새벽, 자동 작업) 들어간 것
- 저장 코드: 설정 → 복사/불러오기 (`exportSave/importSave`, 접두사 `ML2.`). 폰↔컴퓨터 기록 옮기기용.
- 화면 켜둠(폰): 설정 토글, 출항 중 `navigator.wakeLock`.
- 아이템·물고기·이변 아이콘 전부 `bevelCanvas`(윗·왼쪽 밝게, 아래·오른쪽 어둡게, 한 칸 안쪽 디더링) 통과. 색은 그대로.
- 의뢰판 탭(`renderQuests`, `genQuest`, `questProgress`, `questReward`): 의뢰 3장, 6시간마다 미수락 의뢰 교체, 100G로 다시 걸기. 종류: 납품(deliver)/집중(focus)/시간대(tod)/낚시터(spot). 귀항 때 진행, 완료되면 납품 버튼.
- 동료(상점 '동료' 카테고리, 장착 칸 `ally`): 고양이 견습생·물의 정령·드워프 노어부·인어 가수. 낚싯줄 하나 더 확률 + 낚시터/시간대 궁합. 장면에 `ALLY_ART` 소형 스프라이트가 캐릭터 왼쪽에 앉음.
- 이변(`ODD`, `rollOddity`): 조건(낚시터/시간대/경과시간/완주)이 맞을 때 낮은 확률로 걸리는 번외 수집품 10종. 팔 수 없음. 도감 아래 '이변' 섹션(미획득은 조건 힌트만). 하나당 희귀 확률 +1%, 10개 다 모으면 판매가 +10%.
- 환생 「물안개 너머로」(설정 맨 아래, 조건: 심연의 우물 지도 또는 누적 100시간): 골드·장비·미끼·동료·지도·의뢰 초기화, 도감·이변·어항·일지·설정 유지. 달의 비늘(`rebirthScales`)로 영구 능력(`PERKS`: 판매가, 속도, 희귀, 두 번째 낚싯줄, 시작 지도, 시작 골드). 캐릭터 재선택.
- 버그 수정: 0~4시가 '낮'으로 잡히던 `timeOfDay` 고침(이제 밤).

## 다음 할 일 (사용자 순서)
1. 친구 랭킹: 서버가 필요해서 보류. 방법 후보: claude.ai 아티팩트 db 버전으로 합치기, 또는 작은 무료 백엔드.
2. 캐릭터 그래픽 재작업(사용자가 레퍼런스 이미지를 주면 진행). 현재 캐릭터는 "일단 이렇게" 상태.
3. 소품 일부는 아직 손으로 다시 그리지 않음(밧줄, 그물, 갈대, 까마귀, 창문, 덩굴).
4. 동료 스프라이트와 이변 아이콘은 1차 버전. 더 다듬을 수 있음.
