---
name: spec-to-code
description: >
  Generates React 19 + TypeScript + Tailwind code from screen descriptions or wireframes
  without Figma. Confirms screen type, selects components, and produces code following
  PRS design system rules.
  Use when user describes a screen, shares a wireframe image, or requests UI implementation
  without a Figma URL. Triggers: "화면 만들어줘", "이슈 목록 구현해줘", "대시보드 설계해줘".
---

# Spec → Code (PRS)

> **Mandatory at STEP 1:** Read `screen-types.md` for screen type guide.
> **Mandatory at Section D:** Read `tokens/common-rules.md` before coding.

---

## STEP -1. Requirements Clarification

Skip if: Update mode / style-only change / user says "바로 해줘" or "skip"

```
□ Why does this screen exist? What problem does it solve?
□ Who uses it, and in what situation?
□ What does success look like?
□ Any constraints? (deadline, technical limits, scope)
□ Is there anything that must NOT be included?
```

If answers are vague → keep asking. If clear → move to STEP 1.

> Ambiguity is the #1 cause of rework. Clarify before building.

---

## STEP 1. Confirm Screen Type (Mandatory — Read `screen-types.md`)

Classify into one of 9 types. See `screen-types.md` for full guide.
If unclear → ask before proceeding. Never fill in ambiguities unilaterally.

---

## STEP 1.5. Report Ambiguities

Do not fill in the following unilaterally — report and ask first:
- Main data columns
- Button action result (where does save navigate to?)
- Empty state / error message copy
- Modal presence

---

## Section A. Wireframe Analysis (if wireframe provided)

Review the image and identify:
```
□ Layout structure: number of columns, major area divisions
□ Hierarchy: what is header / body / footer
□ Repeating elements: list, card, table row
□ Interactive elements: button, input, dropdown positions
□ White space: intentional padding or incomplete?
```

Map each wireframe area to PRD translation table in `PRS/components.md`.

---

## Section B. Component Set

Once screen type is confirmed, apply the default component set from `screen-types.md`.

---

## Section C. Build Plan (User Approval Required)

**Create mode:**
```
[Build Plan]
- Screen type: {List / Form / ...}
- Component: {ComponentName}
- Path: {targetPath}
- @inax-prs/design-system: InputText, Checkbox, SearchIcon...
- shadcn/ui: Button, Dialog...
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

## Section D. Common Rules (Mandatory — Read `tokens/common-rules.md`)

Apply layout, color tokens, button rules, Edge Cases, and coding rules from `tokens/common-rules.md`.

---

## Section E. Verification

```bash
cd apps/web && pnpm typecheck
```
Do not declare completion until this passes.

---

## Section F. Result Report

```
[Result]
- Input type: B (Wireframe + description) / C (Description only)
- Screen type: {List / Form / ...}
- Files created: {list}
- @inax-prs/design-system components: {list}
- Tokens used: {list}
- Edge Cases: Loading ✅ / Empty ✅ / Error ✅
- Unmapped values: {or "none"}
- typecheck: passed
```

---

## Section G. Final Checklist

- [ ] `@inax-prs/design-system` components used to the maximum extent?
- [ ] Icons from `@inax-prs/design-system` only? (no new `lucide-react`)
- [ ] All mappable values using color tokens? (no stray hex)
- [ ] No HEX/RGBA hardcoding? (exceptions have comments)
- [ ] Spacing/size using muix tokens?
- [ ] `cn()` for class merging?
- [ ] Arrow function component?
- [ ] `pnpm typecheck` passed?
- [ ] Unmapped values listed in result report?
- [ ] Edge Cases all 3 implemented?
