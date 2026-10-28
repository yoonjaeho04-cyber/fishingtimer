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

## 진행 기록

### 2026-10-28 물고기 v2 디자인 연구 (시안 단계)
사용자 피드백: 물고기만 완전 고해상도로, 디자인 처음부터. 중세 판타지에 어울리고 꼭 물고기처럼 보일 필요 없음. 괴상하고 멋지고 포켓몬처럼 다양하게.
- 시안 엔진: `tools/fishmock/fish2.js`. 48×32, 오른쪽을 봄. 부품(타원·다각형·선·곡선·픽셀)을 뒤→앞 순서로 쌓고, 부품마다 재질(h,s,l)과 명암(왼쪽 위 광원, 베이어 디더링 4단계), 질감(scales/rays/plates/ridges/grain/cracks/spots/web), 림라이트(`rim`), 하이라이트(`spec`), 안개처럼 흩어짐(`fade`), 구멍(`holes`)을 줌. 그 뒤 안쪽 먹선(`ink`), 바깥 외곽선(기본 검정, 신화는 보라 `#4a2e5e`), 빛 번짐(`glow`), 빛이 몸에 닿는 색 입힘(`tint`), 반짝임(`spark`).
- 종 정의: `tools/fishmock/species.js`. 현재 15종(안개피라미, 안개게, 늪거북, 달그림자 뱀장어, 익사자의 반지, 안개의 심장, 마나 해마, 요정여왕의 눈물, 해골창꼬치, 잠든 용의 새끼, 은하 문어, 달빛 가오리, 유령선원, 심연의 눈, 리바이어던).
- 보기: `python3 tools/fishmock/build.py && node tools/fishmock/shot.js` → `tools/fishmock/mock.png`(옛것과 비교), `node tools/fishmock/shot2.js` → `detail.png`(6배 확대).
- 디자인 규칙(지키기): 채도 낮게, 어두운 바탕에서 읽히게. 큰 동그란 눈 금지(작은 눈, 세로 동공, 빈 눈구멍). 실루엣은 비대칭·너덜너덜하게. 종마다 "소품" 하나(망루, 반지, 모자, 달, 룬)로 이야기를 붙임. 등급이 오를수록 빛·오라·보라 외곽선.
- 게임에 넣을 때 바꿀 곳: `fishCanvas`→`renderFish` 캐시, `drawFish` 48×32, 귀항 창 canvas 48×32 그대로, 입질 팝업 4배→2배(96×64), 도감 칸 `.slot canvas[width="24"]` 60×40 → 48×32 1배(또는 칸을 키움), 도감 상세 32×24 canvas → 48×36(3배=144×108), 장면 헤엄치는 물고기는 1배(48px)라 지금보다 2배 커짐(어항도).
- 남은 것: 사용자 확정 → 60종 전부 정의 → 게임에 통합 → 옛 `FISH_SIL/FISH_STYLE` 삭제.

### 그래픽 작업 상태 (2026-10-27 밤 기준, 이전 세션 기록에서 정리)
- 장면 해상도 144×96 → **288×192 완료**. 위젯 폭 288px 그대로 1:1, 펼친 화면은 2배.
- 물고기 60종(24×16)과 아이템 51종(16×16)은 **종마다 따로 그린 상태로 완료**. 해상도 올릴 때 "그대로 써도 어울린다"고 판단해 더 안 올림. 더 촘촘하게 다시 그리는 건 안 했음.
- 캐릭터 5종: 32×64 판타지 스타일로 다시 그렸지만 사용자 평가는 "유치", "장난감 같다" → 색 낮추고 질감 올린 뒤 "일단 이렇게" 보류. **레퍼런스 이미지 받으면 재작업**.
- 소품: 술통·상자·랜턴·나룻배·나무·건조대·양동이·닻·계류 기둥은 손으로 다시 그림. 밧줄·그물·갈대·까마귀·창문·덩굴은 아직.

### 2026-10-27 (클라우드 세션)
- 맥에서 커밋한 NOTES.md(8eac65e)는 푸시가 안 돼 GitHub에 없었음. 이전 세션 기록에서 내용을 되살려 다시 넣음. 맥 쪽 커밋을 나중에 푸시하면 이 파일이 충돌하니, 그때는 이 버전(진행 기록이 있는 쪽)을 택하면 됨.
- **저장 코드 복사/붙여넣기 완료** (다음 할 일 1의 앞부분). 설정 탭 "저장 코드" 줄에 복사/붙여넣기 버튼.
  - 코드 형식 `MLK2.<base64url(JSON.stringify(S))>.<djb2 해시 8자리>`. 접두사로 이 게임 코드인지, 해시로 잘림·오타를 걸러냄. 공백·줄바꿈은 무시.
  - 붙여넣기 창에서 골드·도감 수·누적 시간·저장 시각을 미리 보여준 뒤 "이 기록으로 바꾸기". 출항 중(`S.run`)에는 비활성.
  - 불러온 뒤 `savedAt`을 지금으로 갱신해 원격 저장도 덮어씀.
  - 함수: `makeSaveCode`, `parseSaveCode`, `applySaveData`, `showSaveCode`, `showSaveLoad`. CSS `textarea.code`.
  - Playwright로 A 브라우저 → B 브라우저 이동, 잘못된 코드 3종 거부 확인. 시안 없이 바로 만들었으니 사용자 확인 필요.
- **아직 안 함**: 폰 화면 켜둠(wake lock). `navigator.wakeLock.request('screen')`을 `startRun`에서 잡고 `endRun`/visibilitychange에서 다시 잡는 정도면 작게 들어감.
- 클라우드 세션은 이 저장소에 쓰기 권한이 없어 푸시 실패(403). claude.ai에서 GitHub 다시 연결하거나 Claude GitHub App을 저장소에 설치해야 함. 변경분은 `save-code.patch`로 사용자에게 전달.
