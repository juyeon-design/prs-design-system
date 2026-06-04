---
name: prs-screen
description: PRS(제품 기획 자동화 플랫폼) 화면을 UIX 디자인 시스템 기반으로 생성하거나 수정하는 스킬. 아래 상황에서 자동으로 실행된다. (1) "PRS 화면 만들어줘", "[화면명] 구현해줘", "이슈 목록/프로젝트 홈/기획 문서 만들어줘" 등 PRS 화면 생성·수정 요청. (2) prs-tokens.md 또는 components.md 참조가 지시된 경우. 실행 시 화면 분류 → 불명확 보고 → 컴포넌트 선택 → 토큰 매핑 → 레이아웃 구성 → Edge Case 구현 순서의 5단계 파이프라인을 따른다.
---

# PRS Screen Builder

## Instructions

### 실행 전 필독 파일

작업 시작 전 아래 파일을 반드시 읽는다.

```
1. ./prs-tokens.md   — 컬러·스페이싱·타이포·레이아웃 토큰
2. ./components.md   — 컴포넌트 사용 기준 + PRD 번역 테이블
```

---

### STEP 1 — 화면 분류

입력된 요청을 읽고 아래 항목을 확정한다.

```
[ ] 페이지 유형: 조회형 / 상세형 / 등록형 / 대시보드형 / 설정형 /
                 노드뷰형 / AI Wizard / 온보딩 / 모달
[ ] 화면 이름
[ ] 주요 데이터 엔티티
[ ] 주요 CTA 액션
```

유형이 불분명하면 → STEP 1.5로 이동한다.

---

### STEP 1.5 — 불명확 보고 (자의적 해석 금지)

아래 항목이 하나라도 불명확하면 코드 작성 전에 사용자에게 질문한다.

```
[ ] 페이지 유형이 명확하지 않다
[ ] 표시할 데이터 컬럼/항목이 명시되지 않았다
[ ] 주요 CTA 액션이 무엇인지 모른다
[ ] 모달/사이드패널 포함 여부가 불명확하다
[ ] AI 기능 포함 여부가 불명확하다
[ ] Empty / Error / Loading 처리 방식이 지정되지 않았다
```

보고 형식:
```
다음 항목이 불명확합니다. 확인 후 진행할게요:
1. [불명확한 항목] — [선택지 A / B / C 제안]
```

---

### STEP 2 — 컴포넌트 선택

components.md §1 PRD 번역 테이블과 §2 페이지 유형별 세트를 기준으로 컴포넌트를 확정한다.

- 목록 표시 → Issue Table (계층) 또는 List Row (단순)
- 상태 표시 → Status Badge 사용 (텍스트 단독 금지)
- AI 액션 → Primary Button에 `✦` sparkle 접두어
- 빈 상태 → Empty State (아이콘 + 설명 + CTA 필수)
- 로딩 → Skeleton UI (전체 블로킹 시에만 스피너)

---

### STEP 3 — 토큰 매핑

prs-tokens.md를 기준으로 색상·간격·타이포를 매핑한다.

```
font-family: Pretendard, sans-serif
기본 텍스트:  Body2 14px / line-height 20px
섹션 헤더:   Title3 18px / weight 600
메타/보조:   Body3 12px / line-height 16px

Primary 버튼: $base-color-neutral-coolgray-700 #343434  (일반 확정 액션)
Accent 버튼:  $base-color-accent-violet-400 #6f64dd     (AI·강조 액션만)
Ghost 버튼:   background #ffffff / border #d2d2d2

기본 텍스트:  $semantic-color-text-default #343434
보조 텍스트:  $semantic-color-text-subtle #848484
기본 border: $semantic-color-border-default #d2d2d2
기본 배경:   $semantic-color-background-default #ffffff
서브 배경:   $semantic-color-background-sunken #f5f5f5
```

hex 단독 사용을 금지한다. 반드시 토큰명 + hex를 함께 주석으로 표기한다.

```css
/* 올바름 */
background-color: #6f64dd; /* $base-color-accent-violet-400 */

/* 금지 */
background-color: #6f64dd;
```

---

### STEP 4 — 레이아웃 구성

```
전체 너비: 1920px
LNB: 220px 좌측 고정
콘텐츠 영역: 나머지 너비 / 패딩 좌우 40px
콘텐츠 영역 기본 배경: #f5f5f5 ($semantic-color-background-sunken)
  예외: 노드뷰 캔버스 #f0f0f0 + 점 그리드 / AI Wizard violet gradient

섹션 계층:
  Page Header → margin-bottom 32px
  Section     → margin-bottom 24px
  Component   → margin-bottom 16px
```

---

### STEP 5 — Edge Case 처리 (필수)

모든 화면에서 아래 3가지를 반드시 구현한다. 누락 시 완성으로 보지 않는다.

**Loading** — Skeleton UI (shimmer 애니메이션, 배경 #eaeaea)  
**Empty** — 아이콘(48px) + 제목 + 설명(#848484) + CTA 버튼. AI 관련이면 CTA에 `✦` 접두어.  
**Error** — 에러 메시지 + "다시 시도" 버튼. 에러 색상 #fd493f.

---

### 출력 체크리스트

코드 완성 후 아래를 확인한다. 하나라도 미충족이면 수정 후 출력한다.

```
디자인 시스템
[ ] font-family: Pretendard 적용
[ ] 색상에 토큰명 주석 병기 / hex 단독 없음
[ ] 기본 텍스트 Body2(14px) / 섹션 헤더 Title3(18px)

레이아웃
[ ] LNB 220px / 콘텐츠 40px 패딩 / 서브 배경 #f5f5f5

컴포넌트
[ ] Status Badge 사용 (텍스트 단독 금지)
[ ] AI 액션 버튼에 ✦ sparkle 접두어
[ ] Ghost → Primary 순서 (좌→우)
[ ] Modal Footer: 취소(Ghost) → 확인(Primary) 우측 정렬

Edge Case
[ ] Loading: Skeleton UI
[ ] Empty: 아이콘 + 설명 + CTA
[ ] Error: 메시지 + 재시도 버튼
```

---

### 페이지 유형별 추가 체크리스트

**조회형**
```
[ ] Filter Button + Search Input + Primary Button Toolbar
[ ] Issue Table: 계층 펼침/접기 토글
[ ] Pagination
[ ] 필터 적용 시 Filter Chip 시각화
```

**등록형**
```
[ ] Page Header: 취소(Ghost) + 저장(Primary) 우측 배치
[ ] 필수 필드 * 표시
[ ] 미저장 이탈 시 Confirm Modal
[ ] 유효성 오류: border #fd493f + 하단 에러 텍스트
```

**노드뷰형**
```
[ ] Canvas: #f0f0f0 + 점 그리드
[ ] Node Card: Root(violet filled) / Mid(outlined) / Leaf(ghost)
[ ] Node Edge: 곡선 연결선 #dfdfdf
[ ] Canvas Mini Toolbar: 좌측 고정
```

**AI Wizard**
```
[ ] violet gradient 전체 배경 (violet-25 → violet-50)
[ ] Step Progress Indicator 상단 중앙
[ ] AI Prompt Input + Send Button (원형, violet)
```

---

### Figma 작업 규칙

Figma URL 또는 노드 ID가 제공된 경우 아래 규칙을 따른다.

1. `get_screenshot`으로 모든 제공 노드를 확인한 뒤 작업을 시작한다.
2. 레이아웃·컴포넌트·텍스트 내용을 Figma 기준으로 재현한다.
3. 구현 후 Figma와 비교하여 차이가 있으면 자체 수정한 뒤 완료를 보고한다.
4. 스크린샷이 작아 텍스트·아이콘이 불명확하면 STEP 1.5 불명확 보고로 이동한다.
5. Figma 텍스트를 임의로 작성하지 않는다. 원문을 사용하거나 `[텍스트 내용]` 플레이스홀더를 표시한다.

---

### 안티패턴

| 금지 | 대신 |
|------|------|
| hex 단독 사용 | 토큰명 주석 필수 |
| 상태를 텍스트로만 표시 | Status Badge 사용 |
| Empty 상태를 텍스트만으로 | 아이콘 + 설명 + CTA |
| AI 버튼에 sparkle 없이 | `✦ [액션]` 형태 |
| 전체 페이지 스피너 | 섹션별 Skeleton |
| 모달 버튼 순서 반대 | 취소 → 확인 (좌→우) |
| 불명확한 요구사항 추측 | STEP 1.5 불명확 보고 |
| Figma 주어졌는데 임의 변경 | Figma 기준 충실 재현 |

---

## Examples

### 조회형 — 이슈 목록

```
이슈 목록 화면 만들어줘.
- 컬럼: 타입뱃지, 이슈번호, 제목, 우선순위, 버전, 담당자, 상태
- 계층형 트리 (Epic > Story > SubTask)
- 필터, 검색, + 새 이슈 버튼 포함
```

### 대시보드형 — 프로젝트 홈

```
프로젝트 홈 화면 만들어줘.
- 상단: 프로젝트 개요 카드 (이름, 설명, 메타)
- 중간: 버전 현황 카드 3종 (진행중/최신/다음)
- 하단: 주요 변경 사항 타임라인
```

### AI Wizard — 기획 자동화 1단계

```
기획 자동화 wizard 1단계 화면 만들어줘.
- "어떤 제품을 만들고 싶으신가요?" 프롬프트
- 단계: 기능 설계 › 사용자 플로우 › 에이전트 프레임
- violet gradient 전체 배경
```

### 모달 — 이슈 삭제 확인

```
이슈 삭제 확인 모달 만들어줘. (S 사이즈 400px)
- 경고 아이콘 + 제목 + 설명
- Footer: 취소(Ghost) → 삭제(Error 스타일) 우측 정렬
```
