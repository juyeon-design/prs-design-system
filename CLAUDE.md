# Claude Code Rules — PRS Project

## Screen Build Pipeline (Top Priority)

When a PRS screen request comes in, **automatically** follow the appropriate skill without being told.

**Two skills available:**

| Request type | Skill to use |
|-------------|-------------|
| Figma URL provided | `.claude/skills/figma-to-code/SKILL.md` |
| Wireframe + description / Description only | `.claude/skills/spec-to-code/SKILL.md` |

```
STEP -1  Requirements clarification (spec-to-code only)
STEP 0   Confirm input type → load correct skill
STEP 1   Confirm screen type (9 types) → see spec-to-code/screen-types/index.md
STEP 2   Select components based on PRS/components.md
STEP 3   Map tokens (never use hex alone)
           - With Figma: tokens/figma-variable-mapping.md first
           - Always: tokens/common-rules.md for shared rules
STEP 4   Build layout (1920px / LNB 220px / content 1200px / padding 40px)
STEP 5   Implement Edge Cases (Loading / Empty / Error)
→ Run checklist before output
```

## Design System Reference Files

### 1. Reference Priority
1. `.claude/skills/figma-to-code/SKILL.md` — Figma → code pipeline
2. `.claude/skills/spec-to-code/SKILL.md` — Spec → code pipeline
3. `.claude/skills/spec-to-code/screen-types/index.md` — screen type classifier (+ per-type guides in same folder)
4. `./tokens/common-rules.md` — Shared design system rules (layout, color, button, Edge Cases)
5. `./PRS/components.md` — Component usage rules + PRD translation table
6. `./PRS/prs-tokens.md` — PRS token summary
7. `./tokens/figma-variable-mapping.md` — Figma MCP variable → Tailwind class
8. `./tokens/*.md` — Full token → Tailwind alias mapping

### 2. Font
- `font-family: Pretendard, sans-serif`
- Default text: Body2 (14px / line-height 20px)
- Section header: Title3 (18px / line-height 28px / weight 600)
- Meta / supplementary: Body3 (12px / line-height 16px)

### 3. Color — PRS Brand
- **Content area default background**: `#f5f5f5` (`$semantic-color-background-sunken`)
  - Exceptions: NodeView canvas `#f0f0f0`, AI Wizard violet gradient
- **Button rule**: Primary for default actions, Accent only for AI feature CTAs
  - **Primary button**: `#343434` (neutral-coolgray-700)
  - **Accent button**: `#6f64dd` (violet-400) — AI feature CTAs only
  - **Ghost button**: `#ffffff` + border `#d2d2d2`
- **Default text**: `#343434`
- **Subtle text**: `#848484`
- **Default border**: `#d2d2d2`

> ⚠️ All hex values above are for reference only. Always use component API or token class when writing code. Never hardcode hex directly.

### 4. Issue Status Badges
| Status | Background | Text |
|--------|-----------|------|
| To Do | `#f0f0f0` | `#848484` |
| In Progress | `#e0eeff` | `#174fde` |
| In Review | `#fffadb` | `#a07800` |
| Done | `#e6fef0` | `#077a36` |
| Blocking | `#fff5f5` | `#c0251b` |

### 5. Spacing
- Base scale: 8px / 12px / 16px / 24px / 32px / 40px

### 6. Border Radius
- Tag / badge: 4px / Button / input: 8px / Card (small): 10px / Card (medium): 12px / Card (large) / modal: 16px

### 7. Shadow
- Card default: `0 1px 2px rgba(16,24,40,0.05)`
- Dropdown: `0 4px 8px rgba(16,24,40,0.10), 0 2px 4px rgba(16,24,40,0.06)`
