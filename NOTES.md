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

## 다음 할 일 (사용자 순서)
1. 저장 코드 복사/붙여넣기(폰↔컴퓨터 기록 옮기기) + 폰 화면 켜둠(wake lock). 작게 넣기.
2. 2차 기능, 시안부터: **의뢰판**(여관 의뢰 3장, 시간마다 교체, 납품/조건 보상) → 동료 → 이변(조건부 번외 수집품) → 환생 「물안개 너머로」(골드·장비·지도 초기화, 도감·어항·호감도 유지, 달의 비늘 영구 능력) → 친구 랭킹(서버 필요).
3. 캐릭터 그래픽 재작업(사용자가 레퍼런스 이미지를 주면 진행). 현재 캐릭터는 "일단 이렇게" 상태.
4. 소품 일부는 아직 손으로 다시 그리지 않음(밧줄, 그물, 갈대, 까마귀, 창문, 덩굴).
5. 아이템 51종·물고기 체형 15종을 캐릭터와 같은 명암 방식(색 유지, 디더링·하이라이트·그늘 층)으로 다시 입히기. 지금은 캐릭터보다 평평하고 밝음.
