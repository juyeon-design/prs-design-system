# PRS Components

> Figma 3개 화면(프로젝트 홈 / 이슈 목록 / 기획 자동화) 분석 기반으로 추출한 핵심 컴포넌트 정의서.
> UIX 공통 컴포넌트를 기반으로 하되, **PRS 전용 규칙과 사용 기준**만 여기에 정의합니다.
> 스펙 상세(크기·변형 옵션 전체)는 UIX 파일을 참조하고, 이 파일은 "언제 무엇을 쓸지" 판단 기준에 집중합니다.

---

## 1. PRD 언어 → 컴포넌트 번역 테이블

PRD나 기획 문서에 자주 등장하는 표현을 컴포넌트로 번역합니다.
Claude Code가 화면을 만들 때 이 테이블을 기준으로 컴포넌트를 선택합니다.

| PRD 표현 | → 컴포넌트 | 비고 |
|---------|-----------|------|
| "목록을 보여준다" | Issue Table / List Row | 계층 있으면 Issue Table, 단순 목록은 List Row |
| "필터링할 수 있다" | Filter Button + Filter Chip | 필터 적용 시 Chip으로 시각화 |
| "검색할 수 있다" | Search Input | 우측 정렬, 아이콘 포함 |
| "상태를 표시한다" | Status Badge | 할일/진행중/검토요청/완료/블로킹 5종 |
| "우선순위를 설정한다" | Priority Icon | 컬러 삼각형/플래그 |
| "담당자를 지정한다" | Assignee Cell | Avatar + 이름 |
| "버전을 관리한다" | Version Chip | v1.0 형태 |
| "새로 만든다 / 추가한다" | Primary Button | "✦ [액션]" 형태, AI 기능은 sparkle 아이콘 포함 |
| "수정 / 삭제한다" | Secondary Button / Icon Button | 맥락에 따라 선택 |
| "확인을 받는다" | Confirm Modal (S) | 삭제·초기화 등 destructive 액션 |
| "입력 폼을 제공한다" | Input / Textarea / Select | 등록형 페이지 |
| "현황을 요약한다" | Metric Card | 홈·대시보드 |
| "진행률을 보여준다" | Progress Bar | |
| "구조를 시각화한다" | Node Card + Node Edge | 노드뷰 |
| "단계별로 진행한다" | Step Progress Indicator | AI 생성 wizard |
| "AI가 생성한다" | AI Prompt Input → AI Response Area | 전체화면 violet gradient |
| "빈 상태일 때" | Empty State | 일러스트 + 설명 + CTA 필수 |
| "로딩 중" | Skeleton UI | 스피너는 전체화면 블로킹 시에만 |
| "오류가 발생했다" | Error Message + Retry Button | |
| "문서 목록 탐색" | SNB Item | LNB 내 2차 네비 |

---

## 2. 페이지 유형별 컴포넌트 세트

화면 유형이 결정되면 아래 세트를 기본으로 사용합니다.

### 조회형
```
GNB + LNB + Page Header + Toolbar (Filter Button + Search Input + Primary Button)
+ Issue Table (Table Row × n + Status Badge + Issue Type Badge + Priority Icon + Version Chip + Assignee Cell)
+ Pagination
```

### 상세형
```
GNB + LNB + Page Header (뒤로가기 + 제목 + Status Badge + 액션 버튼)
+ Detail Body (Inline Edit Field + Section Divider)
+ Side Panel 280px (Assignee Cell + Version Chip + Priority Icon + DatePicker)
+ Comment Thread
```

### 등록형
```
GNB + LNB + Page Header (제목 + Primary Button "저장" + Ghost Button "취소")
+ Form Section (FormLabel + Input / Textarea / Select / Toggle)
+ Error Message (유효성 실패 시)
```

### 대시보드형
```
GNB + LNB + Page Header (제목 + Period Filter)
+ Metric Card × n + Progress Bar
+ Summary Table
```

### 설정형
```
GNB + LNB + Page Header + Tab 또는 Sub LNB
+ Settings Section (Toggle / Select / Input)
+ Danger Zone (Error 스타일 버튼)
```

### 노드뷰형 (PRS 고유)
```
GNB + LNB + SNB Item
+ Canvas Background (점 그리드)
+ Canvas Mini Toolbar
+ Node Card (root / mid / leaf) + Node Edge
```

### 기획 자동화 / AI Wizard (PRS 고유)
```
Step Progress Indicator (GNB 상단)
+ AI Prompt Input (전체화면 violet gradient)
→ AI Response Area (생성 결과)
+ Send Button (원형)
+ AI CTA Button (✦ sparkle)
```

### 온보딩 / 빈 상태형
```
GNB + LNB
+ Empty State (일러스트 + 설명 Body2 + AI CTA Button)
```

### 모달 / 오버레이
```
Blanket (딤)
+ Modal Container (S 400px / M 560px / L 720px)
  + Modal Header + Modal Body + Modal Footer (Ghost + Primary)
```

---

## 3. 핵심 컴포넌트 34개 정의

### 내비게이션

---

#### 01. GNB (Global Navigation Bar)
- **높이:** 56px 고정
- **구성:** 좌 — inAX 로고(M icon) + 워크스페이스명(PRS ∨) / 우 — 알림벨 아이콘
- **배경:** `$semantic-color-background-default` `#ffffff`
- **하단 border:** `$semantic-color-border-subtle` `#dfdfdf` 1px
- **워크스페이스명:** Body2 Medium, 드롭다운 chevron(`icon_down_s_line`) 포함
- **알림벨:** `icon_bell_line` 24px, 뱃지 있을 시 `$base-color-accent-red-500` `#fd493f` 점 뱃지

---

#### 02. LNB (Left Navigation Bar)
- **너비:** 220px 고정 (접기 시 56px)
- **배경:** `$semantic-color-background-default` `#ffffff`
- **우측 border:** `$semantic-color-border-subtle` `#dfdfdf` 1px
- **구성 (상→하):**
  - 워크스페이스 헤더 (PRS 로고 + 이름 + 드롭다운)
  - Nav Item 목록
  - 하단 구분선 + 유저 프로필 (Avatar + 이름 + 이메일 + `···` 메뉴)
- **접기 버튼:** `icon_arrow_left_line` 20px, LNB 우측 상단 고정

---

#### 03. Nav Item
- **높이:** 40px, 너비: 200px (LNB 내부 패딩 10px 제외)
- **구성:** 아이콘(20px) + 라벨(Body2) + (선택) 우측 태그/카운트
- **상태:**
  - Default: 배경 투명, 텍스트 `$semantic-color-text-default` `#343434`
  - Hover: `$semantic-color-background-hovered` `#f5f5f5`
  - Active: `$base-color-accent-violet-25` `#f2f1fe`, 텍스트 `$base-color-accent-violet-500` `#6358d5`, 아이콘 violet
- **드롭다운:** 하위 항목 있을 시 chevron(`icon_down_s_line`) 포함, 펼치면 들여쓰기 8px 하위 항목 표시
- **PRS 고유:** "기획 문서" 항목은 하위에 SNB로 전환

---

#### 04. SNB Item (Secondary Navigation)
- **위치:** LNB 내부, 기획 문서 섹션 활성 시 표시
- **높이:** 28px (compact) / 40px (일반)
- **구성:** (선택)아이콘(20px) + 라벨(Body2) + (선택) Count Badge 또는 Tag
- **Count Badge:** Body3 숫자, `$base-color-neutral-coolgray-400` `#aeaeae` 텍스트
- **Tag:** `$base-color-accent-violet-25` `#f2f1fe` 배경, violet 텍스트, border-radius 4px — "에이전트" 등 레이블 표시

---

### 레이아웃

---

#### 05. Page Header
- **높이:** auto (최소 56px)
- **구성:** 좌 — 제목(Title2 20px/600) / 우 — 액션 버튼 그룹
- **하단 margin:** 32px (`$base-dimen-space-400`)
- **뒤로가기:** `icon_arrow_back_line` + 텍스트 버튼 (상세형에서만)

---

#### 06. Toolbar
- **구성:** 좌 — Filter Button + Text Button / 우 — Search Input + Secondary Button + Primary Button
- **높이:** 36px 기준
- **하단 margin:** 16px

---

### 데이터 표시

---

#### 07. Issue Table
- **용도:** 이슈 목록 조회형 전용, 계층형(트리) 구조 지원
- **컬럼 구성 (좌→우):** 펼침토글 + Issue Type Badge + 이슈번호 + 이슈 제목 + Priority Icon + Version Chip + Assignee Cell + Status Badge
- **행 높이:** 44px
- **들여쓰기:** 하위 이슈는 좌측 24px 들여쓰기
- **배경:** `#ffffff`, hover 시 `$semantic-color-background-hovered` `#f5f5f5`
- **헤더:** Body3 600, `$semantic-color-text-subtle` `#848484`
- **펼침 토글:** `icon_up_s_line` / `icon_down_s_line` 16px

---

#### 08. Metric Card
- **용도:** 홈/대시보드, 수치 요약
- **구성:** 상단 라벨(Body3) + 수치(Title2) + (선택) 변화율 표시
- **배경:** `#ffffff`, border-radius 12px, Shadow-0
- **패딩:** 16px

---

#### 09. Progress Bar
- **높이:** 6px 또는 8px
- **배경:** `$base-color-neutral-coolgray-100` `#eaeaea`
- **채움색:** `$base-color-accent-violet-400` `#6f64dd`
- **border-radius:** pill (`$base-dimen-radius-400` 32px)

---

#### 10. PRD Viewer Panel
- **용도:** 프로젝트 홈 우측 문서 미리보기
- **너비:** 가변 (콘텐츠 영역 우측 절반 기준)
- **배경:** `#ffffff`, border-radius 12px, Shadow-0
- **내용:** 문서 제목(Title3) + 본문(Body2) + 섹션 구분선

---

#### 11. AI Response Area
- **용도:** AI 생성 결과 텍스트 표시 (기획 자동화 wizard)
- **배경:** `#ffffff` 반투명 or 흰색 카드, violet gradient 위에 배치
- **텍스트:** Body2 14px, `$semantic-color-text-default` `#343434`
- **하단:** Send Button (원형) 우측 하단 고정

---

### 뱃지 / 태그

---

#### 12. Issue Type Badge
- **용도:** 이슈 타입 구분 (Epic / Story / SubTask)
- **크기:** 20×20px, border-radius 4px
- **변형:**
  | 타입 | 약칭 | 배경 | 텍스트 |
  |------|------|------|-------|
  | Epic | E | `$base-color-accent-red-100` `#ffd8d6` | `$base-color-accent-red-600` `#f1392c` |
  | Story | S | `$base-color-accent-cobaltblue-50` `#e0eeff` | `$base-color-accent-cobaltblue-600` `#174fde` |
  | SubTask | ST | `$base-color-accent-cobaltblue-25` `#eef5fb` | `$base-color-accent-cobaltblue-500` `#1e5af0` |
- **텍스트:** Body3 600, 중앙 정렬

---

#### 13. Status Badge
- **용도:** 이슈 상태 표시
- **크기:** 높이 22px, 패딩 좌우 8px, border-radius 4px
- **변형:** (prs-tokens.md §11 참조)
  | 상태 | Background Token | Text Token |
  |------|-----------------|-----------|
  | 할 일 | `$base-color-neutral-coolgray-50` `#f0f0f0` | `$base-color-neutral-coolgray-500` `#848484` |
  | 진행중 | `$base-color-accent-cobaltblue-50` `#e0eeff` | `$base-color-accent-cobaltblue-600` `#174fde` |
  | 검토 요청 | `$base-color-accent-yellow-25` `#fffadb` | PRS커스텀 `#a07800` |
  | 완료 | `$base-color-accent-green-25` `#e6fef0` | PRS커스텀 `#077a36` |
  | 블로킹 | `$base-color-accent-red-25` `#fff5f5` | PRS커스텀 `#c0251b` |
- **텍스트:** Body3 600

---

#### 14. Version Chip
- **용도:** 버전 정보 표시 (v1.0 형태)
- **크기:** 높이 20px, 패딩 좌우 6px, border-radius 4px
- **배경:** `$base-color-neutral-coolgray-50` `#f0f0f0`
- **텍스트:** Body3 400, `$semantic-color-text-subtle` `#848484`

---

#### 15. Priority Icon
- **용도:** 이슈 우선순위 표시
- **크기:** 16px
- **변형:** 컬러 삼각형/플래그 (높음-red, 중간-orange, 낮음-yellow, 없음-gray)

---

#### 16. Count Badge
- **용도:** SNB 또는 Nav Item 내 항목 수 표시
- **크기:** 높이 16px, 패딩 좌우 4px, border-radius 4px
- **배경:** 투명
- **텍스트:** Body3, `$semantic-color-text-subtlest` `#aeaeae`

---

### 입력 / 버튼

---

#### 17. Primary Button
- **높이:** 36px (기본) / 32px (small)
- **패딩:** 좌우 16px
- **배경:** `$base-color-accent-violet-400` `#6f64dd`
- **Hover:** `$base-color-accent-violet-500` `#6358d5`
- **Pressed:** `$base-color-accent-violet-600` `#574ccd`
- **텍스트:** Body2 600, `#ffffff`
- **border-radius:** 8px
- **아이콘:** 좌측 16px 아이콘 선택적 포함
- **AI 버튼 변형:** `✦` sparkle 텍스트를 아이콘 대신 사용 ("✦ 기능 설계하기")

---

#### 18. Secondary Button (Ghost)
- **높이:** 36px
- **패딩:** 좌우 16px
- **배경:** `#ffffff`
- **Border:** 1px `$semantic-color-border-default` `#d2d2d2`
- **Hover border:** `$semantic-color-border-hovered` `#848484`
- **텍스트:** Body2 600, `$semantic-color-text-default` `#343434`
- **border-radius:** 8px

---

#### 19. Text Button
- **높이:** 36px
- **패딩:** 좌우 8px
- **배경:** 투명
- **텍스트:** Body2 400, `$semantic-color-text-subtle` `#848484`
- **Hover:** 텍스트 `$semantic-color-text-default` `#343434`
- **용도:** "보기화", "취소" 등 보조 액션

---

#### 20. Filter Button
- **구성:** `icon_filter_line` 16px + "필터" 텍스트
- **스타일:** Secondary Button 스타일 기반
- **활성 시:** 배경 `$base-color-accent-violet-25` `#f2f1fe`, 텍스트·아이콘 violet

---

#### 21. Search Input
- **높이:** 36px
- **너비:** 240px (기본), 포커스 시 확장 가능
- **좌측 아이콘:** `icon_search_line` 16px, `$semantic-color-icon-subtle` `#848484`
- **Placeholder:** Body2, `$semantic-color-text-subtlest` `#aeaeae`
- **Border:** 1px `$semantic-color-border-default` `#d2d2d2`
- **Focus border:** `$semantic-color-border-focused` `#3982ef`
- **border-radius:** 8px

---

#### 22. Input (Form)
- **높이:** 40px
- **패딩:** 좌우 12px
- **Border:** 1px `$semantic-color-border-default` `#d2d2d2`
- **Focus:** border `$semantic-color-border-focused` `#3982ef`
- **Error:** border `$semantic-color-border-error` `#fd493f` + 하단 Body3 에러 텍스트
- **border-radius:** 8px

---

#### 23. AI Prompt Input
- **용도:** 기획 자동화 wizard 전용
- **배경:** `#ffffff` 반투명 카드, violet gradient 전체화면 위에 배치
- **크기:** 너비 560px, 높이 auto (min 80px)
- **border-radius:** 12px
- **하단 우측:** Send Button 고정 배치
- **Placeholder:** Body2, 힌트 텍스트 (예: "만들고자 하는 서비스의 핵심 기능을 설명해 주세요.")

---

#### 24. Send Button
- **용도:** AI Prompt Input 전송, 원형
- **크기:** 32×32px, border-radius 50%
- **배경:** `$base-color-accent-violet-400` `#6f64dd`
- **아이콘:** `icon_send_filled` 16px, `#ffffff`
- **Hover:** `$base-color-accent-violet-500` `#6358d5`

---

### 유저 / 아이덴티티

---

#### 25. Avatar
- **크기:** 24px (소), 32px (중), 40px (대)
- **형태:** 원형, 사진 또는 이니셜 fallback
- **이니셜 배경:** `$base-color-accent-cobaltblue-50` `#e0eeff`, 텍스트 cobaltblue

---

#### 26. Assignee Cell
- **구성:** Avatar(24px) + 이름(Body2)
- **간격:** 아이콘-텍스트 6px
- **용도:** Table Row 내 담당자 컬럼

---

### 피드백 / 상태

---

#### 27. Empty State
- **구성 (위→아래):** 일러스트/아이콘(48~64px) + 제목(Title3 또는 Body1 600) + 설명(Body2, `#848484`) + CTA 버튼
- **정렬:** 중앙 수직 정렬
- **CTA:** Primary Button 또는 AI CTA Button (✦)
- **사용 금지:** 텍스트만 단독 표시 ("데이터 없음" 텍스트만은 안티패턴)

---

#### 28. Skeleton UI
- **용도:** 데이터 로딩 중 (스피너 대체)
- **색상:** `$base-color-neutral-coolgray-100` `#eaeaea` → shimmer 애니메이션
- **형태:** 실제 컴포넌트 크기와 동일한 회색 블록
- **예외:** 전체 화면 블로킹 시에만 스피너 허용

---

#### 29. Tooltip
- **높이:** 20px, 패딩 좌우 6px
- **배경:** `$component-color-background-accent-darkgray-bold-secondary` `#343434`
- **텍스트:** Body3 600, `#ffffff`
- **border-radius:** 4px
- **최대 너비:** 160px, 텍스트 ellipsis 처리

---

### 노드뷰 전용 (PRS 고유)

---

#### 30. Node Card
- **용도:** 노드뷰 캔버스의 기능/화면 단위 표현
- **border-radius:** 8px
- **변형:**
  | 타입 | 스타일 | 배경 | 텍스트 |
  |------|--------|------|-------|
  | Root | Filled | `$base-color-accent-violet-400` `#6f64dd` | `#ffffff` |
  | Mid-level | Outlined | `#ffffff`, border `#d2d2d2` | `#343434` |
  | Leaf | Outlined ghost | `#ffffff`, border `#dfdfdf` | `#848484` |
- **구성 (좌→우):** 아이콘(20px, 카테고리별) + 라벨(Body2) + 즐겨찾기(`icon_star_line`) + 하위추가(`⊕`)
- **하위추가(⊕):** `icon_add_circle_line`, hover 시 표시, violet 색상
- **즐겨찾기 활성:** `icon_star_filled`, `$base-color-accent-cobaltblue-400` `#376cf2`

---

#### 31. Node Edge (연결선)
- **스타일:** 곡선 (cubic bezier)
- **색상:** `$semantic-color-border-subtle` `#dfdfdf`
- **두께:** 1.5px

---

#### 32. Canvas Background
- **색상:** `$base-color-neutral-coolgray-50` `#f0f0f0`
- **패턴:** 점선 그리드, 점 색상 `$base-color-neutral-coolgray-200` `#dfdfdf`
- **점 간격:** 24px

---

#### 33. Canvas Mini Toolbar
- **위치:** 캔버스 좌측 상단 고정, LNB 우측
- **방향:** 수직 아이콘 배열
- **아이콘:** 그리드뷰 / 연결뷰 / 목록뷰 / 즐겨찾기뷰 (뷰모드 전환)
- **크기:** 아이콘 20px, 버튼 36×36px
- **배경:** `#ffffff`, border-radius 8px, Shadow-1

---

### AI Wizard 전용 (PRS 고유)

---

#### 34. Step Progress Indicator
- **위치:** AI wizard 화면 GNB 영역 상단 중앙
- **구성:** 단계명 + `›` 구분자 반복 (예: 기능 설계 › 사용자 플로우 › 에이전트 프레임)
- **활성 단계:** Body2 600, `$semantic-color-text-default` `#343434`
- **비활성 단계:** Body2 400, `$semantic-color-text-subtlest` `#aeaeae`
- **완료 단계:** 체크 아이콘 + `$base-color-accent-violet-400` `#6f64dd`
- **우측:** "완성 완료" Ghost Button 고정

---

## 4. PRS 전용 컴포넌트 사용 규칙

### AI 기능 시각 언어
- AI 액션 버튼은 반드시 `✦` sparkle 접두어를 사용한다
  - 예) `✦ 기능 설계하기`, `✦ PRD 생성`
- AI 생성 중 로딩은 Skeleton이 아닌 타이핑 애니메이션 또는 진행 메시지로 표시한다
- AI 기능 배경: `$base-color-accent-violet-25` `#f2f1fe` ~ `$base-color-accent-violet-50` `#dfdcfd` 그라디언트

### 버튼 배치 원칙
- Page Header 우측 버튼 순서: `Ghost` → `Secondary` → `Primary` (좌→우)
- Modal Footer 버튼 순서: `Ghost "취소"` → `Primary "확인"` (좌→우, 우측 정렬)
- Destructive 액션(삭제): `Error` 스타일 버튼 또는 별도 Danger Zone 내 배치

### 이슈 타입 + 상태 조합 금지 패턴
- Issue Type Badge와 Status Badge를 같은 셀에 혼용 금지 (별도 컬럼으로 분리)
- 텍스트만으로 상태 표시 금지 — 반드시 Status Badge 사용

### 노드뷰 계층 색상 규칙
- Root(depth 0): Violet-400 Filled
- Mid(depth 1~2): 흰 배경 + 회색 border
- Leaf(depth 3+): 흰 배경 + 연한 border + 회색 텍스트
- 강조(bookmark 활성) 노드: border `$base-color-accent-cobaltblue-300` `#3982ef`
