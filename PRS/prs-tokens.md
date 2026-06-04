# PRS Design Tokens
> 공통 디자인 시스템(UIX)을 기반으로 PRS 프로젝트에서 실제로 사용하는 토큰만 추려 정리한 문서입니다.
> 바이브코딩 시 이 파일을 Claude Code에 전달하여 디자인 시스템을 적용하세요.

---

## 사용 규칙

- 토큰 변수명: `$token-name` 형식
- CSS 변수: `var(--muix-token-name)` 형식
- **원본 UIX 파일은 수정하지 않습니다.** PRS 전용 값이 필요할 경우 이 파일에 추가합니다.

---

## 1. Font

```css
font-family: Pretendard, sans-serif;
```

| 용도 | Size | Line-height | Weight |
|------|------|-------------|--------|
| Heading1 | 48px | 60px | 700 |
| Heading2 | 36px | 44px | 700 |
| Heading3 | 30px | 38px | 700 |
| Title1 | 22px | 32px | 600 |
| Title2 | 20px | 30px | 600 |
| Title3 | 18px | 28px | 600 |
| Body1 | 16px | 24px | 400/500/600 |
| Body2 | 14px | 20px | 400/500/600 |
| Body3 | 12px | 16px | 400/500/600 |
| Paragraph1 | 16px | 28px | 400 |
| Paragraph2 | 14px | 24px | 400 |
| Paragraph3 | 12px | 20px | 400 |

> PRS 주요 사용: **Body2(14px)** 기본 텍스트, **Title3(18px)** 섹션 헤더, **Body3(12px)** 보조/메타 정보

---

## 2. Color — Neutral (Cool Gray)

| Token | CSS Variable | Value |
|-------|-------------|-------|
| `$base-color-neutral-coolgray-white` | `var(--muix-base-color-neutral-coolgray-white)` | `#ffffff` |
| `$base-color-neutral-coolgray-25` | `var(--muix-base-color-neutral-coolgray-25)` | `#f5f5f5` |
| `$base-color-neutral-coolgray-50` | `var(--muix-base-color-neutral-coolgray-50)` | `#f0f0f0` |
| `$base-color-neutral-coolgray-100` | `var(--muix-base-color-neutral-coolgray-100)` | `#eaeaea` |
| `$base-color-neutral-coolgray-200` | `var(--muix-base-color-neutral-coolgray-200)` | `#dfdfdf` |
| `$base-color-neutral-coolgray-300` | `var(--muix-base-color-neutral-coolgray-300)` | `#d2d2d2` |
| `$base-color-neutral-coolgray-400` | `var(--muix-base-color-neutral-coolgray-400)` | `#aeaeae` |
| `$base-color-neutral-coolgray-500` | `var(--muix-base-color-neutral-coolgray-500)` | `#848484` |
| `$base-color-neutral-coolgray-600` | `var(--muix-base-color-neutral-coolgray-600)` | `#474747` |
| `$base-color-neutral-coolgray-700` | `var(--muix-base-color-neutral-coolgray-700)` | `#343434` |
| `$base-color-neutral-coolgray-800` | `var(--muix-base-color-neutral-coolgray-800)` | `#191919` |

---

## 3. Color — PRS 액센트 (Violet) — PRS 시그니처 색상

> 브랜딩 문서 기준 PRS 액센트 컬러. UIX `$base-color-accent-violet-*` 토큰을 사용합니다.
> **Primary CTA: Violet-400 (`#6f64dd`)** — 브랜딩 문서 `#6B63D4`와 동일 계열.

| Token | CSS Variable | Value | 용도 |
|-------|-------------|-------|------|
| `$base-color-accent-violet-25` | `var(--muix-base-color-accent-violet-25)` | `#f2f1fe` | 액센트 배경 (최소) |
| `$base-color-accent-violet-50` | `var(--muix-base-color-accent-violet-50)` | `#dfdcfd` | 선택 배경, hover |
| `$base-color-accent-violet-100` | `var(--muix-base-color-accent-violet-100)` | `#d0cbfb` | 강조 배경 |
| `$base-color-accent-violet-200` | `var(--muix-base-color-accent-violet-200)` | `#a7a0ef` | 보조 액센트 |
| `$base-color-accent-violet-300` | `var(--muix-base-color-accent-violet-300)` | `#8b82e9` | 보조 CTA, border |
| `$base-color-accent-violet-400` | `var(--muix-base-color-accent-violet-400)` | `#6f64dd` | **Primary CTA** ★ |
| `$base-color-accent-violet-500` | `var(--muix-base-color-accent-violet-500)` | `#6358d5` | hover 상태 |
| `$base-color-accent-violet-600` | `var(--muix-base-color-accent-violet-600)` | `#574ccd` | pressed 상태 |
| `$base-color-accent-violet-700` | `var(--muix-base-color-accent-violet-700)` | `#4a40b5` | 강조 텍스트 |
| `$base-color-accent-violet-800` | `var(--muix-base-color-accent-violet-800)` | `#3f369a` | 딥 강조 |

---

## 4. Color — 공통 브랜드 (Cobalt Blue) — inAX 시스템 공통

> UIX 공통 시스템 브랜드 컬러. 링크, 선택 상태, 공통 UI 요소에 사용.
> PRS 고유 액션에는 Violet을 우선 사용하고, 공통 컴포넌트에만 Cobalt Blue를 유지합니다.

| Token | CSS Variable | Value |
|-------|-------------|-------|
| `$base-color-accent-cobaltblue-25` | `var(--muix-base-color-accent-cobaltblue-25)` | `#eef5fb` |
| `$base-color-accent-cobaltblue-50` | `var(--muix-base-color-accent-cobaltblue-50)` | `#e0eeff` |
| `$base-color-accent-cobaltblue-300` | `var(--muix-base-color-accent-cobaltblue-300)` | `#3982ef` |
| `$base-color-accent-cobaltblue-400` | `var(--muix-base-color-accent-cobaltblue-400)` | `#376cf2` |
| `$base-color-accent-cobaltblue-500` | `var(--muix-base-color-accent-cobaltblue-500)` | `#1e5af0` |
| `$base-color-accent-cobaltblue-600` | `var(--muix-base-color-accent-cobaltblue-600)` | `#174fde` |
| `$base-color-accent-cobaltblue-700` | `var(--muix-base-color-accent-cobaltblue-700)` | `#003ec2` |

---

## 5. Color — Status

| 상태 | Token | Value |
|------|-------|-------|
| Success | `$base-color-accent-green-500` | `#08bf52` |
| Warning | `$base-color-accent-yellow-500` | `#f5c000` |
| Warning Icon | `$base-color-accent-yellow-600` | `#e0a500` |
| Error | `$base-color-accent-red-500` | `#fd493f` |
| Discovery | `$base-color-accent-skyblue-500` | `#2ca4fb` |
| PRS 액센트 (Primary) | `$base-color-accent-violet-400` | `#6f64dd` |

---

## 6. Semantic Color — 실제 사용 기준

### Background
| 용도 | Token | Value |
|------|-------|-------|
| 기본 배경 | `$semantic-color-background-default` | `#ffffff` |
| 서브 배경 (sunken) | `$semantic-color-background-sunken` | `#f5f5f5` |
| hover 배경 | `$semantic-color-background-hovered` | `#f5f5f5` |
| 선택됨 | `$semantic-color-background-selected` | `#eef5fb` |
| 선택+hover | `$semantic-color-background-selectedhovered` | `#e0eeff` |
| disabled | `$semantic-color-background-disabled` | `#f0f0f0` |
| 모달 딤 | `$semantic-color-background-blanket` | `rgba(51,52,54,0.5)` |

### Text
| 용도 | Token | Value |
|------|-------|-------|
| 기본 텍스트 | `$semantic-color-text-default` | `#343434` |
| 강조 텍스트 | `$semantic-color-text-bolder` | `#191919` |
| 보조 텍스트 | `$semantic-color-text-subtle` | `#848484` |
| 힌트/메타 | `$semantic-color-text-subtlest` | `#aeaeae` |
| PRS 액센트/선택 | `$base-color-accent-violet-400` | `#6f64dd` |
| 공통 링크 | `$semantic-color-text-link-default` | `#376cf2` |
| 공통 링크 pressed | `$semantic-color-text-link-pressed` | `#003ec2` |
| disabled | `$semantic-color-text-disabled` | `#d2d2d2` |
| 흰 배경 위 텍스트 (inverse) | `$semantic-color-text-inverse-default` | `#ffffff` |
| Error | `$semantic-color-text-error` | `#fd493f` |
| Warning | `$semantic-color-text-warning` | `#f5c000` |
| AI/기획자동화 강조 | `$base-color-accent-violet-500` | `#6358d5` |

### Border
| 용도 | Token | Value |
|------|-------|-------|
| 기본 border | `$semantic-color-border-default` | `#d2d2d2` |
| 얇은 border | `$semantic-color-border-subtle` | `#dfdfdf` |
| hover | `$semantic-color-border-hovered` | `#848484` |
| focus | `$semantic-color-border-focused` | `#3982ef` |
| error | `$semantic-color-border-error` | `#fd493f` |
| disabled | `$semantic-color-border-disabled` | `#d2d2d2` |

### Icon
| 용도 | Token | Value |
|------|-------|-------|
| 기본 아이콘 | `$semantic-color-icon-default` | `#343434` |
| 보조 아이콘 | `$semantic-color-icon-subtle` | `#848484` |
| 힌트 아이콘 | `$semantic-color-icon-subtlest` | `#aeaeae` |
| PRS 액센트 아이콘 | `$base-color-accent-violet-400` | `#6f64dd` |
| disabled | `$semantic-color-icon-disabled` | `#d2d2d2` |
| error | `$semantic-color-icon-error` | `#fd493f` |
| warning | `$semantic-color-icon-warning` | `#e0a500` |

### Divider
| 용도 | Token | Value |
|------|-------|-------|
| 구분선 | `$semantic-color-divider-default` | `#dfdfdf` |

---

## 7. Spacing

| Token | Value | 주요 용도 |
|-------|-------|----------|
| `$base-dimen-space-50` | `4px` | 아이콘-텍스트 간격, 뱃지 내부 |
| `$base-dimen-space-75` | `6px` | 칩, 태그 내부 패딩 |
| `$base-dimen-space-100` | `8px` | 버튼 내부, 소형 간격 |
| `$base-dimen-space-125` | `10px` | 보조 패딩 |
| `$base-dimen-space-150` | `12px` | 리스트 아이템 간격 |
| `$base-dimen-space-175` | `14px` | — |
| `$base-dimen-space-200` | `16px` | 기본 패딩, 섹션 내부 |
| `$base-dimen-space-250` | `20px` | 중형 간격 |
| `$base-dimen-space-300` | `24px` | 섹션 간격 |
| `$base-dimen-space-400` | `32px` | 대형 섹션 간격 |
| `$base-dimen-space-500` | `40px` | 페이지 레벨 간격 |

---

## 8. Border Radius

| Token | Value | 용도 |
|-------|-------|------|
| `$base-dimen-radius-25` | `2px` | — |
| `$base-dimen-radius-50` | `4px` | 뱃지, 태그 |
| `$base-dimen-radius-75` | `6px` | 소형 칩 |
| `$base-dimen-radius-100` | `8px` | 버튼, 입력필드 |
| `$base-dimen-radius-125` | `10px` | 카드 (소) |
| `$base-dimen-radius-150` | `12px` | 카드 (중) |
| `$base-dimen-radius-200` | `16px` | 카드 (대), 모달 |
| `$base-dimen-radius-400` | `32px` | pill 형태 버튼 |

---

## 9. Icon Size

| Token | Value | 용도 |
|-------|-------|------|
| `$base-dimen-size-150` | `12px` | 아이콘 (xs) |
| `$base-dimen-size-200` | `16px` | 아이콘 (sm) |
| `$base-dimen-size-225` | `18px` | 아이콘 (md) |
| `$base-dimen-size-250` | `20px` | 아이콘 (lg) |
| `$base-dimen-size-300` | `24px` | 아이콘 (xl) |

---

## 10. Shadow (Elevation)

| 레벨 | CSS 값 | 용도 |
|------|--------|------|
| Shadow-0 | `0 1px 2px rgba(16,24,40,0.05)` | 카드 기본 |
| Shadow-1 | `0 1px 3px rgba(16,24,40,0.10), 0 1px 2px rgba(16,24,40,0.06)` | 버튼, 입력필드 |
| Shadow-2 | `0 4px 8px rgba(16,24,40,0.10), 0 2px 4px rgba(16,24,40,0.06)` | 드롭다운, 팝오버 |
| Shadow-3 | `0 12px 16px rgba(16,24,40,0.08), 0 4px 6px rgba(16,24,40,0.03)` | 모달 |
| Shadow-4 | `0 20px 24px rgba(16,24,40,0.08), 0 8px 8px rgba(16,24,40,0.03)` | 대형 모달 |

---

## 11. PRS 전용 컴포넌트 색상 규칙

### 이슈 상태 뱃지

> 이슈 상태 뱃지 색상은 base-color-tokens.md 팔레트를 직접 참조합니다.
> hex 단독 사용 금지 — 반드시 토큰명과 함께 표기합니다.

| 상태 | Background Token | Background | Text Token | Text |
|------|-----------------|-----------|-----------|------|
| 할 일 (Todo) | `$base-color-neutral-coolgray-50` | `#f0f0f0` | `$base-color-neutral-coolgray-500` | `#848484` |
| 진행중 (In Progress) | `$base-color-accent-cobaltblue-50` | `#e0eeff` | `$base-color-accent-cobaltblue-600` | `#174fde` |
| 검토 요청 (Review) | `$base-color-accent-yellow-25` | `#fffadb` | — (PRS 커스텀) | `#a07800` |
| 완료 (Done) | `$base-color-accent-green-25` | `#e6fef0` | — (PRS 커스텀) | `#077a36` |
| 블로킹 (Blocked) | `$base-color-accent-red-25` | `#fff5f5` | — (PRS 커스텀) | `#c0251b` |

> **주의:** 검토 요청/완료/블로킹의 텍스트 색상은 base-color-tokens에 정확히 일치하는 토큰이 없는 PRS 커스텀 값입니다.
> CSS 변수로 사용 시 `--prs-status-review-text: #a07800` 등 PRS 전용 변수로 정의하세요.

### 버튼 컬러 규칙

> **원칙:** Primary 버튼은 디폴트(neutral dark) 컬러. Violet 액센트는 **강조가 필요한 버튼에만** 사용한다.

| 버튼 종류 | 배경 | 텍스트 | 사용처 |
|----------|------|--------|-------|
| **Primary** (기본 주요 액션) | `$base-color-neutral-coolgray-700` `#343434` | `#ffffff` | 새 이슈, 저장, 생성, 추가 등 일반 확정 액션 |
| Primary hover | `$base-color-neutral-coolgray-800` `#191919` | — | — |
| **Accent** (강조 액션) | `$base-color-accent-violet-400` `#6f64dd` | `#ffffff` | AI 기능 CTA, 온보딩 진입, 특별 강조 액션 |
| Accent hover | `$base-color-accent-violet-500` `#6358d5` | — | — |
| **Ghost** (보조 액션) | `#ffffff` + border `#d2d2d2` | `#343434` | 버전관리, 취소, 내보내기 등 |
| **Text** (인라인 액션) | transparent | `#848484` | 초기화, 더보기 링크 등 |

### PRS 액센트 적용 기준 (버튼 외)
| 용도 | Token | Value |
|------|-------|-------|
| 액센트 배경 (카드, 뱃지) | `$base-color-accent-violet-25` | `#f2f1fe` |
| 액센트 배경 (선택, hover) | `$base-color-accent-violet-50` | `#dfdcfd` |
| AI/기획자동화 강조 텍스트 | `$base-color-accent-violet-500` | `#6358d5` |
| AI/기획자동화 아이콘 | `$base-color-accent-violet-400` | `#6f64dd` |
| 활성 필터 칩, 선택 상태 | `$base-color-accent-violet-400` | `#6f64dd` |

---

---

## 12. 레이아웃 구조

### 기본 캔버스
- **전체 너비:** 1920px (데스크톱 기준)
- **LNB (좌측 네비게이션):** 220px 고정, 높이 100vh, 상단 고정(sticky top: 0)
- **콘텐츠 영역:** max-width 1200px, 중앙 정렬 (LNB 제외 나머지 영역 내 center)
- **콘텐츠 내부 패딩:** 좌우 각 40px (`$base-dimen-space-500`)

### 콘텐츠 영역 중앙 정렬 규칙

콘텐츠 영역은 항상 `max-width: 1200px` + 중앙 정렬을 적용한다. 외부 wrapper가 전체 너비를 채우고, 내부 inner가 1200px로 제한된다.

```css
/* 외부 wrapper — flex 컨테이너로 중앙 정렬 */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5; /* $semantic-color-background-sunken */
}

/* 내부 inner — 실제 콘텐츠 너비 제한 */
.content-inner {
  width: 100%;
  max-width: 1200px;
  padding: 40px; /* $base-dimen-space-500 */
}
```

> **규칙:** 모든 프로토타입/화면 구현 시 위 구조를 반드시 적용한다. `padding: 40px`을 `.content`에 직접 주는 방식은 사용하지 않는다.

### 콘텐츠 영역 기본 배경
| 영역 | 토큰 | 값 |
|------|------|-----|
| **콘텐츠 배경 (기본)** | `$semantic-color-background-sunken` | `#f5f5f5` |
| 카드 / 테이블 / 패널 | `$semantic-color-background-default` | `#ffffff` |
| 예외 — 노드뷰 캔버스 | `$base-color-neutral-coolgray-50` | `#f0f0f0` + 점 그리드 |
| 예외 — AI Wizard 배경 | `$base-color-accent-violet-25` ~ `violet-50` | 그라디언트 |

> **규칙:** LNB를 제외한 모든 콘텐츠 영역의 기본 배경은 `#f5f5f5`를 사용한다.  
> 노드뷰 캔버스, AI Wizard처럼 별도로 지정된 배경이 있는 영역만 예외로 허용한다.

```
┌──────────────────────────── 1920px ─────────────────────────────┐
│  LNB 헤더  │                                                      │
│ 로고  🔔   │                                                      │
├────────────┼────────────────────────────────────────────────────┤
│    LNB     │              콘텐츠 영역 (max-width 1200px)          │
│  (220px)   │   padding: 40px                                     │
│            │   ┌──────────────────────────────────────────┐     │
│            │   │  실제 콘텐츠                              │     │
│            │   └──────────────────────────────────────────┘     │
├────────────┤                                                      │
│ 유저 프로필 │                                                      │
└────────────┴────────────────────────────────────────────────────┘
```

> **규칙:** GNB(상단 바)는 사용하지 않는다. 로고, 알림 아이콘은 LNB 상단 헤더(높이 56px)에 배치한다. 알림 아이콘은 LNB 헤더 우측, 아바타는 LNB 하단 footer에만 배치한다.

### 섹션 구조 (콘텐츠 영역 내부)
| 레벨 | 역할 | Vertical gap |
|------|------|-------------|
| Page | 화면 전체 | — |
| Page Header | 제목 + 주요 액션 버튼 | 하단 `32px` |
| Section | 의미 단위 묶음 (카드/테이블 등) | 섹션 간 `24px` |
| Component | 섹션 내 UI 요소 | 컴포넌트 간 `16px` |
| Foundation | 버튼/인풋/뱃지 등 원자 단위 | — |

---

## 13. 페이지 유형 분류

PRS 화면은 **8가지 유형**으로 분류됩니다. 유형에 따라 레이아웃 구조, 주요 컴포넌트, 배경 색상이 달라집니다.  
화면 작업 시작 전 반드시 유형을 먼저 확정하세요.

---

### 1) 조회형 (List / Table View)
> 데이터를 목록으로 읽고 탐색하는 화면. 필터·정렬·페이지네이션이 주 인터랙션.

- **대표 화면:** 이슈 목록, 요구사항 목록, 스프린트 백로그
- **상단 구조:** Page Header (제목 + Filter Bar + 주요 액션 버튼)
- **주요 컴포넌트:** Table / List Row / Card Grid / Badge / Filter Bar / Pagination / Search Input
- **배경:** `$semantic-color-background-sunken` `#f5f5f5` 위에 콘텐츠 카드 `#ffffff`
- **Empty:** Empty State 컴포넌트 + 설명 문구 + CTA 필수

---

### 2) 상세형 (Detail Page)
> 단일 아이템을 깊이 읽는 화면. 읽기 중심이지만 인라인 편집·댓글·상태 변경 액션 포함.

- **대표 화면:** 이슈 상세, 요구사항 상세, PRD 문서 뷰
- **상단 구조:** 뒤로가기 + 제목 + 상태 Badge + 우측 액션 버튼 (편집/삭제/공유)
- **주요 컴포넌트:** Detail Header / Section Divider / Inline Edit Field / Comment Thread / Attachment List / Activity Log
- **배경:** `$semantic-color-background-default` `#ffffff` 단일 배경
- **사이드패널:** 메타 정보(담당자·기간·우선순위)는 우측 280px 사이드 패널로 분리
- **Empty (댓글/첨부 등 하위 요소):** 해당 섹션 내 인라인 빈 상태 표시

---

### 3) 등록형 (Form Page)
> 데이터를 입력하거나 수정하는 화면. 저장 또는 취소 액션이 반드시 존재.

- **대표 화면:** 이슈 등록, 요구사항 작성, 스프린트 생성
- **상단 구조:** Page Header (제목 + 저장 버튼 `Primary` + 취소 버튼 `Ghost`)
- **주요 컴포넌트:** Input / Textarea / Select / DatePicker / Toggle / Radio / Checkbox / FormLabel / HelperText
- **배경:** `$semantic-color-background-default` `#ffffff` 단일 배경
- **유효성 오류:** 인풋 border `$semantic-color-border-error` `#fd493f` + 하단 Body3 에러 텍스트 `$semantic-color-text-error`
- **미저장 이탈:** 이탈 시 확인 모달 (Confirm Dialog) 필수

---

### 4) 대시보드형 (Dashboard)
> 지표·차트·현황 요약 중심 화면. 데이터 밀도가 높고 여러 위젯이 그리드로 배치됨.

- **대표 화면:** PRS 홈, 프로젝트 현황, 진행률 리포트
- **상단 구조:** Page Header (제목 + 기간 필터 + 내보내기 버튼)
- **주요 컴포넌트:** Metric Card / Bar Chart / Line Chart / Donut Chart / Progress Bar / Summary Table / Period Filter
- **배경:** `$semantic-color-background-sunken` `#f5f5f5` 위에 위젯 카드 `#ffffff`
- **그리드:** 위젯은 4컬럼 기준 배치, 카드 간격 `16px`
- **Loading:** 위젯 단위 Skeleton (전체 화면 스피너 금지)
- **Empty:** 데이터 없음 상태를 위젯 내부에서 표시 (인라인 Empty State)

---

### 5) 설정형 (Settings)
> 프로젝트·계정·권한 설정을 구성하는 화면. 탭 또는 좌측 서브 네비로 카테고리 분리.

- **대표 화면:** 프로젝트 설정, 멤버 관리, 알림 설정, 연동 설정
- **상단 구조:** Page Header (제목만, 액션 버튼 없음) + 탭 네비 or 좌측 서브 LNB
- **주요 컴포넌트:** Tab / Settings Section / Toggle / Select / Input / Member List Item / Danger Zone (삭제·초기화 등 destructive 액션 영역)
- **배경:** `$semantic-color-background-default` `#ffffff`
- **저장 방식:** 섹션 단위 저장 버튼 or 자동 저장 (Toast로 피드백)
- **Danger Zone:** 구분선 위 `$base-color-accent-red-25` `#fff5f5` 배경 박스, 액션 버튼은 `Error` 스타일

---

### 6) 노드뷰 (Node View) — PRS 고유
> 전체 메뉴·기능 구조를 노드 그래프로 시각화하는 화면. 계층 탐색이 주 목적.

- **대표 화면:** PRS 사이트맵, 기능 구조도, IA 뷰
- **상단 구조:** Toolbar (줌인·줌아웃·전체 맞추기·레이아웃 전환)
- **주요 컴포넌트:** Node Card / Edge (연결선) / Minimap / Zoom Control / Context Menu (노드 우클릭)
- **배경:** `$base-color-neutral-coolgray-50` `#f0f0f0` (캔버스 배경, 점선 그리드 옵션)
- **노드 색상:** 계층 depth에 따라 violet 팔레트 단계적 적용 (depth 1 → violet-400, depth 2 → violet-200, depth 3 → neutral)
- **인터랙션:** 드래그 이동 / 핀치 줌 / 노드 클릭 → 상세 사이드패널 열림
- **Empty:** "노드를 추가하려면 + 버튼을 클릭하세요" 안내 + 중앙 CTA

---

### 7) 플로우차트 (Flow Chart) — PRS 고유
> 유저 플로우·프로세스 흐름을 시각화하는 화면. 노드뷰보다 순서와 분기 표현에 집중.

- **대표 화면:** 유저 플로우, 비즈니스 프로세스 맵, 의사결정 트리
- **상단 구조:** Toolbar (도형 추가 / 연결선 스타일 / 텍스트 편집 / 내보내기)
- **주요 컴포넌트:** Start/End Node / Process Node / Decision Node (다이아몬드) / Arrow / Label / Group Box
- **배경:** `#ffffff` 흰 캔버스 (점선 그리드 기본 on)
- **도형 색상:** 기본 `$base-color-accent-cobaltblue-50` `#e0eeff`, 선택 `$base-color-accent-violet-50` `#dfdcfd`, 오류/경고 노드는 Status 컬러 적용
- **인터랙션:** 도형 드래그 / 연결점 드래그로 엣지 생성 / 더블클릭 → 텍스트 편집
- **Empty:** 빈 캔버스 중앙에 "도형을 드래그하거나 + 버튼으로 시작하세요" 안내

---

### 8) 온보딩 / 빈 상태형 (Onboarding / Empty State)
> 첫 진입이거나 데이터가 전혀 없을 때 표시되는 전용 화면. CTA로 시작을 유도.

- **대표 화면:** 신규 프로젝트 첫 화면, 빈 백로그, 워크스페이스 미가입 상태
- **구조:** 중앙 정렬 일러스트 or 아이콘 + Heading (Title2) + 설명 Body2 + CTA 버튼
- **배경:** `$semantic-color-background-default` `#ffffff`
- **CTA:** Primary 버튼 1개가 원칙. 보조 링크(도움말·템플릿)는 Ghost 또는 텍스트 버튼

---

### 9) 모달 / 오버레이 (Modal / Overlay) — 독립 유형
> 페이지 위에 떠서 작업을 완료하거나 확인을 받는 레이어. 페이지 전환 없이 인터랙션 처리.

**크기 규격**

| 사이즈 | 너비 | 용도 |
|--------|------|------|
| S (Confirm) | 400px | 삭제 확인, 경고, 단순 안내 |
| M (Dialog) | 560px | 간단한 폼 입력, 설정 변경 |
| L (Sheet) | 720px | 복잡한 등록 폼, 상세 뷰 |
| Full (Drawer) | 우측 480px 슬라이드인 | 상세 정보 사이드패널 |

**공통 규칙**
- 배경 딤: `$semantic-color-background-blanket` `rgba(51,52,54,0.5)`
- 모달 배경: `#ffffff`, border-radius `$base-dimen-radius-200` `16px`
- Shadow: Shadow-4 `0 20px 24px rgba(16,24,40,0.08), 0 8px 8px rgba(16,24,40,0.03)`
- 헤더: Title2(20px/600) + 우상단 닫기 버튼 (`icon_close_line`)
- 푸터: 우측 정렬, 취소(Ghost) → 확인(Primary) 순서 고정
- ESC / 딤 클릭으로 닫기 가능 여부는 화면별 명시

---

### Edge Case 공통 기준
모든 페이지 유형에서 아래 3가지 상태를 반드시 정의해야 합니다.

| 상태 | 처리 기준 |
|------|----------|
| **Loading** | Skeleton UI (회색 shimmer) — 스피너는 전체 화면 블로킹 시에만 허용 |
| **Empty** | 아이콘 또는 일러스트 + 설명 Body2 + (선택) CTA 버튼. "데이터 없음"을 텍스트로만 처리 금지 |
| **Error** | 에러 메시지 + 재시도 버튼. 필드 단위 오류는 인풋 하단 Body3 `$semantic-color-text-error` |

---

## Claude Code 사용 방법

이 파일을 Claude Code 세션에 전달할 때 아래처럼 입력하세요:

```
prs-tokens.md 파일을 읽고 이 디자인 시스템을 기반으로 [화면명] 만들어줘.
- 페이지 유형: [조회형 / 등록형]
- font: Pretendard, 기본 텍스트: Body2(14px)
- 색상: 토큰명 + hex 함께 표기
- 레이아웃: 1920px 기준, LNB 220px, 콘텐츠 1200px
- Edge case (Loading / Empty / Error) 포함
```
