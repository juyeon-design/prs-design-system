---
name: prs-vibe-coding
description: >
  Read this skill first whenever a PRS screen build request comes in.
  Branch by input type (Figma URL / wireframe + description / description only)
  and generate React 19 + TypeScript + Tailwind + @inax-prs/design-system code.
  Use for requests like "build this screen", "turn this into a component", "grab this from Figma".
---

# PRS Vibe Coding — Unified Guide

> **This single file handles all cases.**
> Regardless of whether Figma is available, the design system rules below always apply.

---

## STEP -1. Requirements Clarification (Before Any Code)

Before jumping into implementation, ask the following to eliminate ambiguity.
Skip only if the request already answers all of these clearly.

```
□ Why does this screen exist? What problem does it solve?
□ Who uses it, and in what situation?
□ What does success look like? How do we know it's working?
□ Any constraints? (deadline, technical limits, scope boundaries)
□ Is there anything that must NOT be included?
```

If answers are vague → keep asking until the intent is clear.
If answers are clear → move to STEP 0.

> Based on the Ouroboros principle: ambiguity is the #1 cause of rework.
> The most practical question is "what exactly is this?" — not "how do we build it?"

---

## STEP 0. Identify Input Type (Always First)

Classify the request into one of three types and jump to that section.

| Type | Signal | Go to |
|------|--------|-------|
| **A. Figma design available** | figma.com URL or nodeId provided | → [Section A](#section-a-figma-design-available) |
| **B. Wireframe + description** | Image/sketch + text description | → [Section B](#section-b-wireframe--description) |
| **C. Description only** | Text only (screen name, feature list, etc.) | → [Section C](#section-c-description-only) |

> If the type is unclear, ask before proceeding. Never fill in ambiguities unilaterally.

---

## Section A. Figma Design Available

### A-1. Parse URL
- `figma.com/design/:fileKey/...?node-id=A-B` → fileKey, nodeId = `A:B` (hyphen → colon)
- If URL contains `/branch/:branchKey/`, use branchKey as fileKey

### A-2. Create vs Update
- If `targetPath/{ComponentName}.tsx` exists → **Update mode** (Edit-based partial changes)
- Otherwise → **Create mode**

On entering Update mode:
```
Existing file detected: {path}
→ Update mode. Preserving handlers, state, and props. Applying changes via Edit.
```

### A-3. Fetch Design Context

**Priority 1: `get_design_context`**
```
mcp__figma__get_design_context({ fileKey, nodeId })
```
Use: Code Connect snippets (top priority) / Variable definitions (token mapping) / Screenshot (layout check) / Hint code (reference only — never copy as-is)

**Recovery procedure when response is too large**
If `get_design_context` fails with token overflow:
```
1. get_screenshot(nodeId)       ← visual overview first
2. get_variable_defs(nodeId)    ← variable list for token mapping
3. get_metadata(nodeId)         ← structure and child nodeId extraction only
4. call get_design_context in chunks per child frame
```
❌ Never infer styles from `get_metadata` alone (no CSS info)

### A-4. Visual Intent Analysis (Before Writing Code)

Review the screenshot and establish this baseline first:
```
□ Overall structure: number of sections, layout direction
□ Primary element: what catches the eye first
□ Visual hierarchy: title > description > action
□ State hints: selected / disabled / error representations
□ Container decoration: badges, cards, colored circles/rectangles
□ Spacing density: tight vs. roomy
```

### A-5. Container Frame Style Checklist
`get_metadata` alone cannot reveal background, radius, border, or shadow. Cross-check with screenshot + variable_defs.

```
□ Is there a colored area (circle/rectangle) around an icon? → needs wrapper div
□ Is background/radius of container frame reflected?
□ Any token in variable_defs missing from the code?
□ Does parent frame padding imply child positioning?
```

### A-6. Figma Variable → muix Token Conversion

Convert Figma MCP hint code variables using the patterns below:

**Color**
| Figma CSS variable | Tailwind class |
|-------------------|---------------|
| `var(--color/text/default)` | `text-semantic-color-text-default` |
| `var(--color/text/subtle)` | `text-semantic-color-text-subtle` |
| `var(--color/text/subtlest)` | `text-semantic-color-text-subtlest` |
| `var(--color/background/default)` | `bg-semantic-color-background-default` |
| `var(--color/background/sunken)` | `bg-semantic-color-background-sunken` |
| `var(--color/background/hovered)` | `bg-semantic-color-background-hovered` |
| `var(--color/border/default)` | `border-semantic-color-border-default` |
| `var(--color/border/subtle)` | `border-semantic-color-border-subtle` |
| `var(--color/border/focused)` | `border-semantic-color-border-focused` |
| `var(--color/border/error)` | `border-semantic-color-border-error` |
| `var(--color/text/accent/{color}/primary)` | `text-component-color-text-accent-{color}-primary` |
| `var(--color/background/accent/{color}/light/primary)` | `bg-component-color-background-accent-{color}-light-primary` |
| `var(--color/background/neutral/primary)` | `bg-component-color-background-neutral-primary` |
| `var(--color/accent/{color}/{shade})` | `bg-accent-{color}-{shade}` |

Conversion rules:
- `--color/text/` → `text-` prefix
- `--color/border/` → `border-` prefix
- `--color/background/` → `bg-` prefix
- `/` → `-`
- hex fallback: search for nearest token; if not found → `text-[#hex]` + `{/* TODO: confirm with designer */}` comment

**Spacing (`--dimen/space/N`)**
| Figma variable | px | Tailwind |
|---------------|-----|---------|
| `var(--dimen/space/50)` | 4px | `p-50`, `gap-50` |
| `var(--dimen/space/100)` | 8px | `p-100`, `gap-100` |
| `var(--dimen/space/150)` | 12px | `p-150`, `gap-150` |
| `var(--dimen/space/200)` | 16px | `p-200`, `gap-200` |
| `var(--dimen/space/300)` | 24px | `p-300`, `gap-300` |
| `var(--dimen/space/400)` | 32px | `p-400`, `gap-400` |
| `var(--dimen/space/500)` | 40px | `p-500`, `gap-500` |

**Border Radius (`--dimen/radius/N`)**
| Figma variable | px | Tailwind |
|---------------|-----|---------|
| `var(--dimen/radius/50)` | 4px | `rounded-50` |
| `var(--dimen/radius/100)` | 8px | `rounded-100` |
| `var(--dimen/radius/150)` | 12px | `rounded-150` |
| `var(--dimen/radius/200)` | 16px | `rounded-200` |

**Typography**
| Figma font hint | Tailwind utility |
|----------------|-----------------|
| SemiBold 12px / lh 16 | `font-body3-semibold` |
| Medium 12px / lh 16 | `font-body3-medium` |
| SemiBold 14px / lh 20 | `font-body2-semibold` |
| Medium 14px / lh 20 | `font-body2-medium` |
| SemiBold 16px / lh 24 | `font-body1-semibold` |
| Medium 18px / lh 28 | `font-title3-medium` |
| SemiBold 20px / lh 30 | `font-title2-semibold` |
No token match: `text-[14px] font-semibold leading-[20px]`

### A-7. Measure gap·padding from Coordinates (When Token Doesn't Match)

Never guess. Use `get_metadata` child coordinates:
```
gap          = next child.y - previous child.(y + height)
padding-top  = first child.y
padding-left = first child.x
```
Exclude hidden children. If measured value differs from nearest token by 5px or more → use `gap-[Npx]`.

### A-8. Variant / State Dimension Detection

If frame names follow `Card/default`, `Card/selected`, `Card/disabled` or multiple nodeIds are provided:
→ Call `get_design_context` for each → extract shared structure → plan as 1 unified component → get user approval before proceeding.

### A-9. Response Size Guardrail

If the frame is large (many cards, header, filters combined), propose splitting first:
```
This frame contains N cards, a header, and filters.
Should I build just the card component first, or tackle everything at once?
```

---

## Section B. Wireframe + Description

### B-1. Analyze Wireframe

Review the image and identify:
```
□ Layout structure: number of columns, major area divisions
□ Hierarchy: what is header / body / footer
□ Repeating elements: list, card, table row
□ Interactive elements: button, input, dropdown positions
□ White space: intentional padding or incomplete?
```

### B-2. Confirm Screen Type

Classify into one of 9 types. Ask if unclear:

| Type | Characteristics |
|------|----------------|
| List / Table View | Table, filter, pagination, search |
| Detail Page | Single item deep view, side panel |
| Form Page | Input form, save / cancel |
| Dashboard | Metric cards, charts, widgets |
| Settings | Tab / sub-LNB, toggle, Danger Zone |
| Node View | Canvas, dot grid, Node Card |
| Flow Chart | Sequence / branching visualization |
| Onboarding / Empty State | Illustration + CTA |
| Modal / Overlay | Dim + container layer |

### B-3. Wireframe → Component Mapping

Map each area of the wireframe using the PRD translation table:

| Wireframe element | → Component |
|------------------|------------|
| Top bar | LNB header (56px) |
| Left sidebar | LNB (220px) |
| List / table | Issue Table or List Row |
| Filter area | Filter Button + Filter Chip |
| Search box | Search Input (240px) |
| Status indicator | Status Badge |
| Avatar + name | Assignee Cell |
| Empty center illustration | Empty State |
| Gray placeholder blocks | Skeleton UI |
| Popup / layer | Modal (S/M/L) |
| Node connection diagram | Node Card + Node Edge |
| Top step bar | Step Progress Indicator |

→ Then apply **Section D (Shared Design System Rules)** to write code.

---

## Section C. Description Only

### C-1. Confirm Screen Type

Classify using the 9-type table in Section B-2.

### C-2. Report Ambiguities

Do not fill in the following unilaterally — report and ask first:
- Main data columns
- Button action result (where does save navigate to?)
- Empty state / error message copy
- Modal presence

### C-3. Auto-Apply Component Set

Once screen type is confirmed, apply the default component set:

**List / Table View**
```
LNB + Page Header + Toolbar (Filter Button + Search Input + Primary Button)
+ Issue Table (Status Badge + Issue Type Badge + Priority Icon + Version Chip + Assignee Cell)
+ Pagination
```

**Detail Page**
```
LNB + Page Header (back + title + Status Badge + action buttons)
+ Detail Body (Inline Edit Field + Section Divider)
+ Side Panel 280px (Assignee Cell + Version Chip + Priority Icon + DatePicker)
+ Comment Thread
```

**Form Page**
```
LNB + Page Header (title + Primary Button "Save" + Ghost Button "Cancel")
+ Form Section (FormLabel + Input / Textarea / Select / Toggle)
+ Error Message
```

**Dashboard**
```
LNB + Page Header (title + period filter)
+ Metric Card × n + Progress Bar + Summary Table
```

**Settings**
```
LNB + Page Header + Tab or Sub LNB
+ Settings Section (Toggle / Select / Input)
+ Danger Zone
```

**Node View**
```
LNB + SNB Item + Canvas Background (dot grid)
+ Canvas Mini Toolbar + Node Card (root / mid / leaf) + Node Edge
```

**AI Wizard**
```
Step Progress Indicator (top of screen)
+ AI Prompt Input (full-screen violet gradient)
→ AI Response Area + Send Button (circular) + Accent Button (✦ sparkle)
```

**Onboarding / Empty State**
```
LNB + Empty State (illustration + Body2 description + CTA Button)
```

**Modal / Overlay**
```
Blanket (dim) + Modal Container (S 400px / M 560px / L 720px)
+ Modal Header + Modal Body + Modal Footer (Ghost → Primary)
```

→ Then apply **Section D (Shared Design System Rules)** to write code.

---

## Section D. Shared Design System Rules (Always Apply)

> Apply these rules to all cases regardless of input type.

### D-1. Base Layout Structure

```css
/* Full 1920px base */
.layout {
  display: flex;
  width: 100%;
}

/* LNB */
.lnb {
  width: 220px;        /* collapsed: 56px */
  min-height: 100vh;
  background: #ffffff; /* $semantic-color-background-default */
  border-right: 1px solid #dfdfdf; /* $semantic-color-border-subtle */
  flex-shrink: 0;
}

/* Content area */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5; /* $semantic-color-background-sunken */
}

/* Inner content */
.content-inner {
  width: 100%;
  max-width: 1200px;
  padding: 40px;       /* $base-dimen-space-500 */
}
```

> **No GNB (top bar).** Logo and notification icon go in the LNB header (height 56px).
> Exceptions: NodeView canvas `#f0f0f0`, AI Wizard `violet-25~50 gradient`

### D-2. Color Tokens (PRS)

Never use hex alone. Always pair with token name comment.

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
| `$base-color-accent-violet-50` | `#dfdcfd` | Selected background, hover |
| `$base-color-accent-violet-400` | `#6f64dd` | **Accent Button, AI CTA** ★ |
| `$base-color-accent-violet-500` | `#6358d5` | Hover state |
| `$base-color-accent-violet-600` | `#574ccd` | Pressed state |

### D-3. Button Rules ⚠️

| Button | Background | Token | Usage |
|--------|-----------|-------|-------|
| **Primary** | `#343434` | `$base-color-neutral-coolgray-700` | New issue, save, create — **standard confirm actions** |
| **Accent** | `#6f64dd` | `$base-color-accent-violet-400` | **AI feature CTAs only** |
| **Ghost** | `#ffffff` + border `#d2d2d2` | `$semantic-color-background-default` | Cancel, secondary actions |

- AI buttons must always use `✦` sparkle prefix (e.g. `✦ Design Features`, `✦ Generate PRD`)
- Page Header button order: Ghost → Secondary → Primary (left to right)
- Modal Footer button order: Ghost "Cancel" → Primary "Confirm" (right-aligned)

### D-4. Issue Status Badges

| Status | Background | Text |
|--------|-----------|------|
| To Do | `#f0f0f0` (`$base-color-neutral-coolgray-50`) | `#848484` |
| In Progress | `#e0eeff` (`$base-color-accent-cobaltblue-50`) | `#174fde` |
| In Review | `#fffadb` (`$base-color-accent-yellow-25`) | `#a07800` |
| Done | `#e6fef0` (`$base-color-accent-green-25`) | `#077a36` |
| Blocking | `#fff5f5` (`$base-color-accent-red-25`) | `#c0251b` |

### D-5. Typography

`font-family: Pretendard, sans-serif`

| Usage | Spec | Tailwind |
|-------|------|---------|
| Default text | Body2 14px / lh 20px | `font-body2-medium` |
| Section header | Title3 18px / lh 28px / 600 | `font-title3-semibold` |
| Meta / supplementary | Body3 12px / lh 16px | `font-body3-medium` |
| Page Header title | Title2 20px / lh 30px / 600 | `font-title2-semibold` |

### D-6. Spacing and Border Radius

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

### D-7. Coding Rules (Required)

```tsx
// ✅ Arrow function component
interface MyComponentProps {
  className?: string;
}

export const MyComponent = ({ className }: MyComponentProps) => {
  return <div className={cn('flex items-center gap-100', className)} />;
};
```

**Required rules**
- Class merging: always use `cn()`
- No HEX/RGBA hardcoding (exception: external brand colors with comment)
- No `rem`, `em`, `%` to work around fixed specs
- Minimize inline `style={{}}`
- Icons: import from `@inax-prs/design-system` only (no new `lucide-react` imports)
- Component priority: `@inax-prs/design-system` → `shadcn/ui` → Tailwind direct

**Unmapped value handling**
```tsx
className="text-[#a07800]" // TODO: confirm with designer — In Review status text
```

### D-8. Edge Cases — Required (All 3)

Every screen must implement all 3 states. Missing any is considered incomplete.

| State | Implementation rule |
|-------|-------------------|
| **Loading** | Skeleton UI with shimmer animation. Background `#eaeaea` (`$base-color-neutral-coolgray-100`). Spinner only for full-screen blocking operations. |
| **Empty** | 48px icon + title (Body1 semibold) + description (Body2, `#848484`) + CTA button. Text-only treatment is forbidden. AI-related empty states must use `✶` prefix on CTA (e.g. `✶ 기능 설계하기`). |
| **Error** | Error message + **"다시 시도" retry button**. Error color `#fd493f` (`$semantic-color-text-error`). Field-level errors: Body3 below input in `text-semantic-color-text-error`. |

> AI generation loading: use typing animation or progress message instead of Skeleton.

---

## Section E. Build Plan (User Approval Required)

Present a plan in this format before writing code and wait for approval:

**Create mode**
```
[Build Plan]
- Screen type: {List / Form / ...}
- Component: {ComponentName}
- Path: {targetPath}
- @inax-prs/design-system: InputText, Checkbox, SearchIcon...
- shadcn/ui: Button, Dialog, Tooltip...
- Tokens: text-semantic-color-text-default, p-200, rounded-100...
- Edge Cases: Loading Skeleton / Empty State / Error included
- Ambiguities: (list here if any)
→ Proceed?
```

**Update mode**
```
[Update Plan]
- Target: {path}
- Structure changes: (e.g. footer 2-col → 1-col)
- Style changes: (e.g. bg → bg-semantic-color-background-sunken)
- Preserved: event handlers, state, props signature
→ Proceed?
```

---

## Section F. Verification

### F-1. Type Check
```bash
cd apps/web && pnpm typecheck
```
Do not declare completion until this passes.

### F-2. Visual Verification (When Figma Available)
Render via Playwright, screenshot, compare against Figma original on 6 points:
```
□ Presence: all elements exist?
□ Placement: relative positions roughly match?
□ Components: right component choices?
□ Hierarchy: visual weight maintained?
□ Direction: horizontal/vertical match?
□ States: selected/disabled/etc. represented correctly?
```
Gap/padding diff ≥ 5px → fix. Missing elements or misplacement → always fix.
If dev server unavailable → skip, but write **"Visual verification skipped"** in report.

---

## Section G. Result Report

```
[Result]
- Input type: A (Figma) / B (Wireframe + description) / C (Description only)
- Screen type: {List / Form / ...}
- Files created: {file list}
- @inax-prs/design-system components: {list}
- Tokens used: {list}
- Edge Cases: Loading ✅ / Empty ✅ / Error ✅
- Unmapped values: {hex/px + location + TODO comment} (or "none")
- Visual verification: passed / skipped
- typecheck: passed
```

---

## Section H. Final Checklist

Run this before declaring completion:

- [ ] `@inax-prs/design-system` components used to the maximum extent?
- [ ] Multiple Figma variants merged into a single component?
- [ ] Icons imported from `@inax-prs/design-system` only? (no new `lucide-react`)
- [ ] All mappable values using color tokens? (no stray hex)
- [ ] No HEX/RGBA hardcoding? (exceptions have comments)
- [ ] Spacing/size using muix tokens? (`p-100`, `size-400`, `rounded-100`)
- [ ] Class merging via `cn()`?
- [ ] Inline `style={{}}` minimized?
- [ ] Arrow function component?
- [ ] No `rem`, `em` used to work around fixed specs?
- [ ] `pnpm typecheck` passed?
- [ ] gap·padding measured from coordinates if token didn't match? (§A-7, no guessing, hidden children excluded)
- [ ] §A-3 recovery procedure followed when needed?
- [ ] §A-5 container frame style checklist completed?
- [ ] Unmapped values listed in result report?
- [ ] §F-2 visual verification (Playwright render + screenshot) completed or explicitly skipped?

---

## Quick Reference — Common Mistakes

| Mistake | Correct approach |
|---------|-----------------|
| Hex hardcode `#343434` | Use `text-semantic-color-text-default` token |
| `style={{ color: 'var(--muix-...)' }}` | Use Tailwind alias class |
| New `lucide-react` import | Search `@inax-prs/design-system` icons first |
| `w-[13.75rem]` relative unit workaround | Use `w-[220px]` or token |
| Missing container background/radius | Cross-check screenshot + variable_defs |
| Guessing gap "probably 24px" | Measure from metadata: `next.y - prev.(y+h)` |
| Accent Button for standard actions | Use Primary (`#343434`). Accent is AI-only. |
| Empty State with text only | Icon + description + CTA button required |
| Style inference from `get_metadata` alone | Follow Section A-3 recovery procedure |

---

## Reference Files

| File | Contents |
|------|---------|
| `tokens/figma-variable-mapping.md` | Figma MCP variable → muix token conversion (priority 1) |
| `tokens/tailwind-color-alias-mapping.md` | Full color token list |
| `tokens/tailwind-dimension-alias-mapping.md` | Spacing · size · radius tokens |
| `tokens/shadow-tokens.md` | Shadow tokens |
| `tokens/typography-tokens.md` | Typography tokens |
| `packages/design-system/src/index.ts` | Full design system exports |
| `apps/web/.agents/rules/styling.md` | Styling rules |
| `apps/web/.agents/rules/project-structure.md` | Project structure rules |
