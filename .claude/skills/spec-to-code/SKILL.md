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

> **Mandatory at STEP 1:** Read `screen-types/index.md` to classify screen type.
> **Mandatory at Section B:** Read only the matched guide in `screen-types/`.
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

## STEP 1. Confirm Screen Type (Mandatory — Read `screen-types/index.md`)

Classify into one of 9 types by dominant user goal. See `screen-types/index.md`.
If unclear, report ambiguity in the Build Plan — do not silently choose.

---

## STEP 1.5. Report Ambiguities

Do not fill in the following unilaterally — report and ask first:
- Main data columns
- Button action result (where does save navigate to?)
- Empty state / error message copy
- Modal presence
- Data mutation behavior
- Permission behavior

If user says "바로 해줘" or "skip" → make conservative assumptions and list them in the Result Report.

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

## Section B. Load Screen-Type Guide

Read only the matched guide in `screen-types/`. Apply for:
- Default layout and dimensions
- Default component set
- Interaction rules
- Required states
- Code structure

If empty/loading/error states need further detail, read `patterns/empty-state.md`.

---

## Section C. Build Plan (User Approval Required)

**Create mode:**
```
[Build Plan]
- Screen type: {List Table / Card View / Detail / Form / Dashboard / Settings / Node View / Flow Chart / Modal}
- Matched guide: {screen-types/...}
- Component: {ComponentName}
- Path: {targetPath}
- shadcn/ui or Radix: Button, Dialog...
- Tokens: text-semantic-color-text-default, p-200, rounded-100...
- Required states: Loading / Empty / Error included
- Ambiguities: (list here if any)
- Assumptions: (list if fast execution requested)
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

Run the target project's available frontend checks:
```
□ TypeScript / typecheck passes when the project exposes a script
□ Lint passes when the project exposes a script
□ Layout keeps LNB structure
□ Loading / Empty / Error states render
□ shadcn/ui or Radix interactions work as expected
```
Do not declare completion until this passes or the skipped item is explicitly reported.

---

## Section F. Result Report

```
[Result]
- Input type: A (Description only) / B (Wireframe + description) / C (Update)
- Screen type: {List Table / Card View / Detail / Form / Dashboard / Settings / Node View / Flow Chart / Modal}
- Matched guide: {screen-types/...}
- Files created: {list}
- Files modified: {list}
- shadcn/ui or Radix components: {list}
- Tokens used: {list}
- Required states: Loading ✅ / Empty ✅ / Error ✅
- Assumptions: {or "none"}
- Unmapped values: {or "none"}
- typecheck: passed / failed / not run (reason)
```

---

## Section G. Final Checklist

- [ ] All mappable values using color tokens? (no stray hex)
- [ ] No HEX/RGBA hardcoding? (exceptions have comments)
- [ ] Spacing/size using muix tokens?
- [ ] `cn()` for class merging?
- [ ] Arrow function component?
- [ ] Typecheck/lint passed or explicitly skipped?
- [ ] Unmapped values listed in result report?
- [ ] Edge Cases all 3 implemented?
