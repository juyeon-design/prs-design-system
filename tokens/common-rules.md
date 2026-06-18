# PRS Common Design System Rules

Shared rules referenced by both `spec-to-code` and `figma-to-code` skills.
Do not reference other files from this document.

---

## Contents
- Layout Structure
- Color Tokens
- Button Rules
- Issue Status Badges
- Typography
- Spacing and Border Radius
- Shadow
- Edge Cases (Required)
- Coding Rules

---

## Layout Structure

**기본 스펙**

| 항목 | 값 |
|---|---|
| 캔버스 | 1920×1080px |
| LNB | 220px (collapsed: 56px) |
| GNB | 48px 고정 |

> No GNB (top bar). Logo and notification icon go in the LNB header (height 56px).

**콘텐츠 너비 패턴 2종**

| 패턴 | 적용 화면 | 구현 |
|---|---|---|
| **Fill** | 리스트/테이블, 대시보드 | `w-full`, 좌우 패딩 60px을 **페이지 컨테이너**에만 적용 (`px-[60px]`) |
| **Fixed** | 폼, 디테일, 설정, 홈(허브형) | `max-w-[1200px] mx-auto` |

> ⚠️ 60px 패딩은 페이지 컨테이너 레벨에만. 테이블 헤더·행 내부에 적용하지 않는다.

```css
/* Full 1920px base */
.layout { display: flex; width: 100%; }

/* LNB */
.lnb {
  width: 220px;          /* collapsed: 56px */
  min-height: 100vh;
  background: #ffffff;   /* $semantic-color-background-default */
  border-right: 1px solid #dfdfdf; /* $semantic-color-border-subtle */
  flex-shrink: 0;
}

/* Content area */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;   /* $semantic-color-background-sunken */
}

/* Fill pattern */
.content-fill {
  width: 100%;
  padding: 0 60px;
}

/* Fixed pattern */
.content-fixed {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;         /* $base-dimen-space-500 */
}
```

> Exceptions: NodeView canvas `#f0f0f0`, AI Wizard violet gradient.

---

## Color Tokens

> ⚠️ Hex values below are **reference only**. Prefer Tailwind token classes or CSS custom properties when coding. Never hardcode hex directly unless the value is explicitly marked as unmapped.

**Background**
| Usage | Token | Value | Tailwind |
|-------|-------|-------|---------|
| Content area | `$semantic-color-background-sunken` | `#f5f5f5` | `bg-semantic-color-background-sunken` |
| Card / panel | `$semantic-color-background-default` | `#ffffff` | `bg-semantic-color-background-default` |
| Hover | `$semantic-color-background-hovered` | `#f5f5f5` | `bg-semantic-color-background-hovered` |
| Selected | `$semantic-color-background-selected` | `#f0effe` | `bg-semantic-color-background-selected` |
| Disabled | `$semantic-color-background-disabled` | `#f0f0f0` | `bg-semantic-color-background-disabled` |
| Modal dim | `$semantic-color-background-blanket` | `rgba(51,52,54,0.5)` | — |

**Text**
| Usage | Token | Value | Tailwind |
|-------|-------|-------|---------|
| Default | `$semantic-color-text-default` | `#343434` | `text-semantic-color-text-default` |
| Bold | `$semantic-color-text-bolder` | `#191919` | `text-semantic-color-text-bolder` |
| Subtle | `$semantic-color-text-subtle` | `#848484` | `text-semantic-color-text-subtle` |
| Hint / meta | `$semantic-color-text-subtlest` | `#aeaeae` | `text-semantic-color-text-subtlest` |
| PRS accent | `$semantic-color-text-brand` | `#6b63d4` | `text-semantic-color-text-brand` |
| Error | `$semantic-color-text-error` | `#fd493f` | `text-semantic-color-text-error` |
| Inverse | `$semantic-color-text-inverse-default` | `#ffffff` | `text-semantic-color-text-inverse-default` |

**Border**
| Usage | Token | Value | Tailwind |
|-------|-------|-------|---------|
| Default | `$semantic-color-border-default` | `#d2d2d2` | `border-semantic-color-border-default` |
| Subtle | `$semantic-color-border-subtle` | `#dfdfdf` | `border-semantic-color-border-subtle` |
| Hover | `$semantic-color-border-hovered` | `#848484` | `border-semantic-color-border-hovered` |
| Focus | `$semantic-color-border-focused` | `#8a83de` | `border-semantic-color-border-focused` |
| Error | `$semantic-color-border-error` | `#fd493f` | `border-semantic-color-border-error` |

**PRS Brand (Violet)**
| Token | Value | Usage |
|-------|-------|-------|
| `$base-color-accent-violet-25` | `#f2f1fe` | Accent background (lightest) |
| `$base-color-accent-violet-400` | `#6f64dd` | **Accent Button, AI CTA** ★ |
| `$base-color-accent-violet-500` | `#6358d5` | Hover state |
| `$base-color-accent-violet-600` | `#574ccd` | Pressed state |

---

## Button Rules

**Implementation priority — strictly follow this order:**
1. React + TypeScript components
2. shadcn/ui components when available in the target app
3. Radix primitives for behavior that shadcn/ui does not cover
4. Tailwind token classes or CSS custom properties from this repo
5. Hex values — **never for coding**. Reference only.

| Button | Background | Token | Usage |
|--------|-----------|-------|-------|
| **Primary** | `#343434` | `$base-color-neutral-coolgray-700` | New issue, save, create — standard confirm actions |
| **Accent** | `#6f64dd` | `$base-color-accent-violet-400` | **AI feature CTAs only** |
| **Ghost** | `#ffffff` + border `#d2d2d2` | `$semantic-color-background-default` | Cancel, secondary actions |

- AI buttons must always use `✦` sparkle prefix (e.g. `✦ Design Features`, `✦ Generate PRD`)
- Do not add icon libraries only for the sparkle. Use the text prefix or an inline SVG when a custom icon is required.
- Page Header button order: Ghost → Secondary → Primary (left to right)
- Modal Footer button order: Ghost "Cancel" → Primary "Confirm" (right-aligned)

---

## Issue Status Badges

| Status | Background | Text |
|--------|-----------|------|
| To Do | `#f0f0f0` (`$base-color-neutral-coolgray-50`) | `#848484` |
| In Progress | `#e0eeff` (`$base-color-accent-cobaltblue-50`) | `#174fde` |
| In Review | `#fffadb` (`$base-color-accent-yellow-25`) | `#a07800` |
| Done | `#e6fef0` (`$base-color-accent-green-25`) | `#077a36` |
| Blocking | `#fff5f5` (`$base-color-accent-red-25`) | `#c0251b` |

---

## Typography

`font-family: Pretendard, sans-serif`

| Usage | Spec | Tailwind |
|-------|------|---------|
| Default text | Body2 14px / lh 20px | `font-body2-medium` |
| Section header | Title3 18px / lh 28px / 600 | `font-title3-semibold` |
| Meta / supplementary | Body3 12px / lh 16px | `font-body3-medium` |
| Page Header title | Title2 20px / lh 30px / 600 | `font-title2-semibold` |

---

## Spacing and Border Radius

**Spacing**
| Token | Value | Tailwind | Primary usage |
|-------|-------|---------|--------------|
| `$base-dimen-space-50` | 4px | `p-50`, `gap-50` | Icon-to-text gap |
| `$base-dimen-space-100` | 8px | `p-100`, `gap-100` | Button padding |
| `$base-dimen-space-150` | 12px | `p-150`, `gap-150` | List item gap |
| `$base-dimen-space-200` | 16px | `p-200`, `gap-200` | Default padding |
| `$base-dimen-space-300` | 24px | `p-300`, `gap-300` | Section gap |
| `$base-dimen-space-400` | 32px | `p-400`, `gap-400` | Large section gap |
| `$base-dimen-space-500` | 40px | `p-500`, `gap-500` | Page-level padding |

**Border Radius**
| Usage | Token | Value | Tailwind |
|-------|-------|-------|---------|
| Badge / tag | `$base-dimen-radius-50` | 4px | `rounded-50` |
| Button / input | `$base-dimen-radius-100` | 8px | `rounded-100` |
| Card (small) | `$base-dimen-radius-125` | 10px | `rounded-125` |
| Card (medium) | `$base-dimen-radius-150` | 12px | `rounded-150` |
| Card (large) / modal | `$base-dimen-radius-200` | 16px | `rounded-200` |

**Shadow**
| Level | Tailwind | Usage |
|-------|---------|-------|
| Shadow-0 | `shadow-shadow0` | Card default |
| Shadow-1 | `shadow-shadow1` | Button / input |
| Shadow-2 | `shadow-shadow2` | Dropdown |
| Shadow-4 | `shadow-shadow4` | Modal |

---

## Edge Cases — Required (All 3)

Every screen must implement all 3 states. Missing any is considered incomplete.

| State | Implementation rule |
|-------|-------------------|
| **Loading** | Skeleton UI with shimmer animation. Background `#eaeaea` (`$base-color-neutral-coolgray-100`). Spinner only for full-screen blocking operations. |
| **Empty** | 48px icon + title (Body1 semibold) + description (Body2, `#848484`) + CTA button. Text-only treatment is forbidden. AI-related empty states must use `✦` prefix on CTA (e.g. `✦ 기능 설계하기`). |
| **Error** | Error message + **"다시 시도" retry button**. Error color `#fd493f` (`$semantic-color-text-error`). Field-level errors: Body3 below input in `text-semantic-color-text-error`. |

> AI generation loading: use typing animation or progress message instead of Skeleton.
> If the target app already has Suspense, ErrorBoundary, TanStack Query, or route-level loading/error patterns, follow the app architecture first and apply these visual rules inside that structure.

---

## Coding Rules

```tsx
// ✅ Arrow function component
interface SectionProps {
  className?: string;
}

export const Section = ({ className }: SectionProps) => {
  return (
    <section className={cn('bg-semantic-color-background-default p-200 rounded-150', className)}>
      <h2 className="font-title3-semibold text-semantic-color-text-default">섹션 제목</h2>
    </section>
  );
};
```

- Build with React + TypeScript + Tailwind.
- Use shadcn/ui first for common controls when the target app has the component installed.
- Use Radix primitives directly only when the target app does not already expose the needed shadcn/ui wrapper.
- Class merging: always use `cn()` when combining static classes with props or conditional classes.
- No HEX/RGBA hardcoding (exception: external brand colors with comment)
- No `rem`, `em`, `%` to work around fixed specs
- Minimize inline `style={{}}`
- Icons: use existing project icons, text symbols, or inline SVG. Do not add a new icon package just for one icon.

**Unmapped value handling:**
```tsx
<span className="prs-status-review-text">{/* TODO: confirm with designer - In Review status text */}</span>
```
