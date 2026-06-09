# Claude Code Rules — PRS Project

## Screen Build Pipeline (Top Priority)

When a PRS screen request comes in, **automatically** follow this pipeline without being told.

**Full pipeline definition:** `.claude/skills/prs-screen/SKILL.md`

```
STEP 0   Identify input type
           A. Figma URL provided   → Fetch design context via Figma MCP
           B. Wireframe + description → Analyze image, map to components
           C. Description only     → Confirm screen type, apply component set
STEP 1   Confirm screen type (List / Form / NodeView / AI Wizard, etc. — 9 types)
STEP 1.5 Do not fill in ambiguities — report first and ask
STEP 2   Select components based on components.md
STEP 3   Map tokens (never use hex alone)
           - With Figma: apply tokens/figma-variable-mapping.md first
           - Always: reference tokens/tailwind-color-alias-mapping.md
STEP 4   Build layout (1920px / LNB 220px / content max-width 1200px / padding 40px)
STEP 5   Implement Edge Cases (Loading Skeleton / Empty State / Error)
→ Run checklist before output
```

## Design System Reference Files

Follow this priority order for all screen work.

### 1. Reference Priority
1. `.claude/skills/prs-screen/SKILL.md` — Pipeline + case branching (always read first)
2. `./PRS/components.md` — Component usage rules + PRD translation table
3. `./PRS/prs-tokens.md` — PRS token summary (color · typography · spacing · layout)
4. `./tokens/figma-variable-mapping.md` — Figma MCP variable → Tailwind class (required when working with Figma)
5. `./tokens/*.md` — Full token → Tailwind alias mapping + resolved hex values (color · spacing · shadow · typography)

### 2. Font
- `font-family: Pretendard, sans-serif`
- Default text: Body2 (14px / line-height 20px)
- Section header: Title3 (18px / line-height 28px / weight 600)
- Meta / supplementary: Body3 (12px / line-height 16px)

### 3. Color — PRS Brand
- **Content area default background**: `#f5f5f5` (`$semantic-color-background-sunken`) — applied to all areas except LNB
  - Exceptions: NodeView canvas `#f0f0f0`, AI Wizard violet gradient
- **Button rule**: Primary for default actions, Accent only for emphasis
  - **Primary button**: `#343434` (neutral-coolgray-700) — new issue, save, create, and other standard confirm actions
  - **Accent button**: `#6f64dd` (violet-400) — AI feature CTAs and emphasis actions only
  - **Ghost button**: `#ffffff` + border `#d2d2d2`
- **Accent background**: `#f2f1fe` (violet-25)
- **Default background**: `#ffffff`
- **Sub background**: `#f5f5f5`
- **Default text**: `#343434`
- **Subtle text**: `#848484`
- **Hint / meta**: `#aeaeae`
- **Default border**: `#d2d2d2`
- **Subtle border**: `#dfdfdf`
- **Divider**: `#dfdfdf`

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
- Tag / badge: 4px
- Button / input: 8px
- Card (small): 10px
- Card (medium): 12px
- Card (large) / modal: 16px

### 7. Shadow
- Card default: `0 1px 2px rgba(16,24,40,0.05)`
- Button / input: `0 1px 3px rgba(16,24,40,0.10), 0 1px 2px rgba(16,24,40,0.06)`
- Dropdown: `0 4px 8px rgba(16,24,40,0.10), 0 2px 4px rgba(16,24,40,0.06)`