---
name: figma-to-code
description: >
  Converts Figma designs to React + TypeScript + Tailwind code using Figma context.
  Handles token mapping, coordinate measurement, and visual verification against original design.
  Use when a Figma URL or nodeId is provided, or user requests
  "피그마에서 가져와줘", "이 디자인 구현해줘", "피그마 코드로 만들어줘".
---

# Figma → Code (PRS)

> **Mandatory before coding:** Read `tokens/common-rules.md` at Section D.
> **Mandatory for token mapping:** Read `tokens/figma-variable-mapping.md` at Section E.

---

## STEP 0. Identify Input Type

| Type | Signal | Action |
|------|--------|--------|
| **Figma URL / nodeId** | figma.com URL or nodeId provided | → Proceed to Section A |
| **Wireframe + description** | Image + text | → Use `spec-to-code` skill instead |
| **Description only** | Text only | → Use `spec-to-code` skill instead |

---

## Section A. Figma Design

### A-1. Parse URL
- `figma.com/design/:fileKey/...?node-id=A-B` → fileKey, nodeId = `A:B` (hyphen → colon)
- `/branch/:branchKey/` → use branchKey as fileKey

### A-2. Create vs Update
- `targetPath/{ComponentName}.tsx` exists → **Update mode** (Edit-based partial changes, preserve handlers/state/props)
- Otherwise → **Create mode**

### A-3. Fetch Design Context

**Priority 1: `get_design_context`**
```
mcp__figma__get_design_context({ fileKey, nodeId })
```
Use: Code Connect snippets (top priority) / Variable definitions / Screenshot / Hint code (reference only)

**Recovery when response is too large:**
```
1. get_screenshot(nodeId)       ← visual overview first
2. get_variable_defs(nodeId)    ← variable list for token mapping
3. get_metadata(nodeId)         ← structure and child nodeId extraction only
4. call get_design_context in chunks per child frame
```
❌ Never infer styles from `get_metadata` alone (no CSS info)

### A-4. Visual Intent Analysis (Before Writing Code)
```
□ Overall structure: number of sections, layout direction
□ Primary element: what catches the eye first
□ Visual hierarchy: title > description > action
□ State hints: selected / disabled / error representations
□ Container decoration: badges, cards, colored circles/rectangles
□ Spacing density: tight vs. roomy
```

### A-5. Container Frame Style Checklist
```
□ Is there a colored area (circle/rectangle) around an icon? → needs wrapper div
□ Is background/radius of container frame reflected?
□ Any token in variable_defs missing from the code?
□ Does parent frame padding imply child positioning?
```

### A-6. Response Size Guardrail

If the frame is large (many cards, header, filters combined), propose splitting first:
```
This frame contains N cards, a header, and filters.
Should I build just the card component first, or tackle everything at once?
```

### A-7. Variant / State Detection

Frame names follow `Card/default`, `Card/selected`, `Card/disabled` or multiple nodeIds provided:
→ Call `get_design_context` for each → extract shared structure → plan as 1 unified component → get user approval.

---

## Section B. Screen Type Confirmation

Confirm screen type before building. See `spec-to-code/screen-types.md` for the 9-type guide.

---

## Section C. Token Mapping (Mandatory — Read `tokens/figma-variable-mapping.md`)

**Color (`--color/...`)**
| Figma CSS variable | Tailwind class |
|-------------------|---------------|
| `var(--color/text/default)` | `text-semantic-color-text-default` |
| `var(--color/text/subtle)` | `text-semantic-color-text-subtle` |
| `var(--color/background/default)` | `bg-semantic-color-background-default` |
| `var(--color/background/sunken)` | `bg-semantic-color-background-sunken` |
| `var(--color/border/default)` | `border-semantic-color-border-default` |
| `var(--color/border/focused)` | `border-semantic-color-border-focused` |
| `var(--color/border/error)` | `border-semantic-color-border-error` |

> Full mapping: `tokens/figma-variable-mapping.md`

**Spacing / Radius**
| Figma | px | Tailwind class |
|-------|----|---------|
| `var(--dimen/space/100)` | 8px | `gap-100`, `p-100` |
| `var(--dimen/space/200)` | 16px | `gap-200`, `p-200` |
| `var(--dimen/space/300)` | 24px | `gap-300`, `p-300` |
| `var(--dimen/radius/100)` | 8px | `rounded-100` |
| `var(--dimen/radius/200)` | 16px | `rounded-200` |

**Measure gap·padding from coordinates when token doesn't match:**
```
gap          = next child.y - previous child.(y + height)
padding-top  = first child.y
padding-left = first child.x
```
Exclude hidden children. Diff ≥ 5px → use `gap-[Npx]`.

---

## Section D. Common Rules (Mandatory — Read `tokens/common-rules.md`)

Apply layout, color tokens, button rules, Edge Cases, and coding rules from `tokens/common-rules.md`.

---

## Section E. Build Plan (User Approval Required)

**Create mode:**
```
[Build Plan]
- Screen type: {List / Form / ...}
- Component: {ComponentName}
- Path: {targetPath}
- shadcn/ui or Radix: Button, Dialog, Select, Checkbox...
- Tokens: text-semantic-color-text-default, p-200, rounded-100...
- Edge Cases: Loading / Empty / Error included
- Ambiguities: (list here if any)
→ Proceed?
```

**Update mode:**
```
[Update Plan]
- Target: {path}
- Structure changes:
- Style changes:
- Preserved: handlers, state, props signature
→ Proceed?
```

---

## Section F. Verification

### F-1. Frontend Checks
Run the target project's available frontend checks:
```
□ TypeScript / typecheck passes when the project exposes a script
□ Lint passes when the project exposes a script
□ Layout keeps GNB + LNB structure
□ Loading / Empty / Error states render
□ shadcn/ui or Radix interactions work as expected
```
Do not declare completion until this passes or the skipped item is explicitly reported.

### F-2. Visual Verification
Compare the rendered prototype against Figma on 6 points:
```
□ Presence / Placement / Components / Hierarchy / Direction / States
```
Gap/padding diff ≥ 5px → fix. Missing elements → always fix.
Visual verification unavailable → skip, write **"Visual verification skipped"** in report.

---

## Section G. Result Report

```
[Result]
- Input type: Figma
- Screen type: {List / Form / ...}
- Files created: {list}
- shadcn/ui or Radix components: {list}
- Tokens used: {list}
- Edge Cases: Loading ✅ / Empty ✅ / Error ✅
- Unmapped values: {or "none"}
- Visual verification: passed / skipped
- Typecheck/lint: passed / skipped
```

---

## Section H. Final Checklist

- [ ] Multiple Figma variants merged into a single component?
- [ ] All mappable values using color tokens? (no stray hex)
- [ ] No HEX/RGBA hardcoding? (exceptions have comments)
- [ ] Spacing/size using Tailwind token utilities or CSS custom properties?
- [ ] shadcn/ui or Radix components used where they fit?
- [ ] `cn()` for class merging?
- [ ] Arrow function component?
- [ ] Typecheck/lint passed or explicitly skipped?
- [ ] gap·padding measured from coordinates if token didn't match?
- [ ] §A-3 recovery procedure followed when needed?
- [ ] §A-5 container frame style checklist completed?
- [ ] Unmapped values listed in result report?
- [ ] Visual verification completed or explicitly skipped?
