# Figma MCP CSS 변수 → muix 토큰 변환 규칙

Figma MCP(`get_design_context`)가 반환하는 힌트 코드는 Figma 자체 CSS 변수를 사용합니다.
이를 `@inax-prs/design-system` muix 토큰(Tailwind alias)으로 변환해야 합니다.

---

## 변환 패턴

### 색상 (`--color/...`)

Figma 변수 구조: `--color/{category}/{...path}`

| Figma CSS 변수 | Tailwind alias (muix) |
|---------------|----------------------|
| `var(--color/text/default)` | `text-semantic-color-text-default` |
| `var(--color/text/subtle)` | `text-semantic-color-text-subtle` |
| `var(--color/text/subtlest)` | `text-semantic-color-text-subtlest` |
| `var(--color/text/disabled)` | `text-semantic-color-text-disabled` |
| `var(--color/text/error)` | `text-semantic-color-text-error` |
| `var(--color/text/brand)` | `text-semantic-color-text-brand` |
| `var(--color/text/neutral/primary)` | `text-component-color-text-neutral-primary` |
| `var(--color/text/neutral/secondary)` | `text-component-color-text-neutral-secondary` |
| `var(--color/text/neutral/tertiary)` | `text-component-color-text-neutral-tertiary` |
| `var(--color/text/neutral/quaternary)` | `text-component-color-text-neutral-quaternary` |
| `var(--color/text/accent/{color}/primary)` | `text-component-color-text-accent-{color}-primary` |
| `var(--color/border/default)` | `border-semantic-color-border-default` |
| `var(--color/border/subtle)` | `border-semantic-color-border-subtle` |
| `var(--color/border/focused)` | `border-semantic-color-border-focused` |
| `var(--color/border/error)` | `border-semantic-color-border-error` |
| `var(--color/border/disabled)` | `border-semantic-color-border-disabled` |
| `var(--color/background/default)` | `bg-semantic-color-background-default` |
| `var(--color/background/sunken)` | `bg-semantic-color-background-sunken` |
| `var(--color/background/hovered)` | `bg-semantic-color-background-hovered` |
| `var(--color/background/selected)` | `bg-semantic-color-background-selected` |
| `var(--color/background/accent/{color}/light/primary)` | `bg-component-color-background-accent-{color}-light-primary` |
| `var(--color/background/neutral/primary)` | `bg-component-color-background-neutral-primary` |
| `var(--color/accent/{color}/{shade})` | `bg-accent-{color}-{shade}` |

**전환 규칙**:
- `--color/text/` → `text-` prefix
- `--color/border/` → `border-` prefix
- `--color/background/` → `bg-` prefix
- `/`(슬래시) → `-`(하이픈)으로 치환
- `semantic` 경로 없으면 `semantic-color-` 삽입
- `neutral/`, `accent/` 등 하위 경로 있으면 `component-color-` 삽입

**hex fallback**: Figma 변수가 `var(--color/..., #xxxxxx)` 형태면 hex 값으로 토큰 근접값 탐색.
탐색 실패 시: `text-[#xxxxxx]` 임의값 + `{/* TODO: 디자이너 확인 */}` 주석.

---

### 간격 (`--dimen/space/...`)

`var(--dimen/space/N, XXpx)` → Tailwind spacing 토큰 `p-N`, `gap-N`, `m-N` 등

| Figma 변수 | px | Tailwind |
|-----------|-----|---------|
| `var(--dimen/space/0)` | 0 | `gap-0`, `p-0` |
| `var(--dimen/space/25)` | 2px | `gap-25`, `p-25` |
| `var(--dimen/space/50)` | 4px | `gap-50`, `p-50` |
| `var(--dimen/space/75)` | 6px | `gap-75`, `p-75` |
| `var(--dimen/space/100)` | 8px | `gap-100`, `p-100` |
| `var(--dimen/space/125)` | 10px | `gap-125`, `p-125` |
| `var(--dimen/space/150)` | 12px | `gap-150`, `p-150` |
| `var(--dimen/space/175)` | 14px | `gap-175`, `p-175` |
| `var(--dimen/space/200)` | 16px | `gap-200`, `p-200` |
| `var(--dimen/space/250)` | 20px | `gap-250`, `p-250` |
| `var(--dimen/space/300)` | 24px | `gap-300`, `p-300` |
| `var(--dimen/space/400)` | 32px | `gap-400`, `p-400` |
| `var(--dimen/space/500)` | 40px | `gap-500`, `p-500` |

---

### 크기 (`size`, `width`, `height`)

px 값으로 매핑 (토큰 변수 없이 Figma가 직접 px 반환):

| px | Tailwind |
|----|---------|
| 16px | `size-200`, `w-200`, `h-200` |
| 20px | `size-250` |
| 24px | `size-300` |
| 32px | `size-400` |
| 40px | `size-500` |
| 48px | `size-600` |

토큰에 없는 고정 스펙: `w-[204px]` px 임의값 허용.

---

### Border Radius (`--dimen/radius/...`)

`var(--dimen/radius/N)` → `rounded-N`

| Figma 변수 | px | Tailwind |
|-----------|-----|---------|
| `var(--dimen/radius/0)` | 0 | `rounded-0` |
| `var(--dimen/radius/25)` | 2px | `rounded-25` |
| `var(--dimen/radius/50)` | 4px | `rounded-50` |
| `var(--dimen/radius/75)` | 6px | `rounded-75` |
| `var(--dimen/radius/100)` | 8px | `rounded-100` |
| `var(--dimen/radius/125)` | 10px | `rounded-125` |
| `var(--dimen/radius/150)` | 12px | `rounded-150` |
| `var(--dimen/radius/200)` | 16px | `rounded-200` |
| `var(--dimen/radius/300)` | 24px | `rounded-300` |
| `var(--dimen/radius/400)` | 32px | `rounded-400` |

---

### 타이포그래피

Figma `font-family` 힌트 코드: `font-['Pretendard:SemiBold',sans-serif]` + `text-[14px]` + `leading-[20px]`

muix 타이포 토큰으로 변환:

| Figma 폰트 힌트 | Tailwind 유틸리티 |
|----------------|------------------|
| SemiBold 12px / lh 16 | `font-body3-semibold` |
| Medium 12px / lh 16 | `font-body3-medium` |
| SemiBold 14px / lh 20 | `font-body2-semibold` |
| Medium 14px / lh 20 | `font-body2-medium` |
| SemiBold 16px / lh 24 | `font-body1-semibold` |
| Medium 16px / lh 24 | `font-body1-medium` |
| Medium 18px | `font-title3-medium` |
| SemiBold 20px | `font-title2-semibold` |

토큰 없으면: `text-[14px] font-semibold leading-[20px]`

---

## 전체 토큰 레퍼런스

더 자세한 토큰 목록:
- 색상: `packages/design-system/design-tokens/tailwind-color-alias-mapping.md`
- 간격·크기·radius: `packages/design-system/design-tokens/tailwind-dimension-alias-mapping.md`
- shadow: `packages/design-system/design-tokens/shadow-tokens.md`
- 타이포: `packages/design-system/design-tokens/typography-tokens.md`
- 컴포넌트 API: `packages/design-system/src/index.ts` → 개별 컴포넌트 파일 grep
