# PRS Screen Types — 9-Type Guide

Reference for `spec-to-code` SKILL. Do not reference other files from this document.

---

## Contents
1. List / Table View
2. Detail Page
3. Form Page
4. Dashboard
5. Settings
6. Node View
7. Flow Chart
8. Onboarding / Empty State
9. Modal / Overlay

---

## 1. List / Table View

**Definition:** Displays multiple items in a table or list with filtering, search, and pagination.
**Use when:** User needs to browse, filter, or search a collection of items.

**Default component set:**
```
LNB + Page Header
+ Toolbar (Filter Button + Search Input 240px + Primary Button)
+ Issue Table (Status Badge + Issue Type Badge + Priority Icon + Version Chip + Assignee Cell)
+ Pagination
```

**Edge Case specifics:**
- Loading: Skeleton rows (same height as table rows)
- Empty: illustration + "아직 이슈가 없어요" + Primary Button "새 이슈"
- Error: "데이터를 불러오지 못했어요" + "다시 시도" button

**Notes:**
- Filter chips appear below toolbar when active
- Table header is sticky on scroll
- Row hover: `bg-semantic-color-background-hovered`

---

## 2. Detail Page

**Definition:** Deep view of a single item with editable fields and related metadata.
**Use when:** User clicks into an item from a list to view or edit details.

**Default component set:**
```
LNB + Page Header (back + title + Status Badge + action buttons)
+ Detail Body (Inline Edit Field + Section Divider)
+ Side Panel 280px (Assignee Cell + Version Chip + Priority Icon + DatePicker)
+ Comment Thread
```

**Edge Case specifics:**
- Loading: Skeleton for title, body sections, side panel
- Empty (no comments): "첫 번째 댓글을 남겨보세요"
- Error: inline error per section with retry

**Notes:**
- Inline edit: click to activate, Enter/blur to save
- Side panel collapses on narrow screens

---

## 3. Form Page

**Definition:** Input form for creating or editing a single item.
**Use when:** User needs to fill in structured data to create or update a record.

**Default component set:**
```
LNB + Page Header (title + Primary Button "저장" + Ghost Button "취소")
+ Form Section (FormLabel + Input / Textarea / Select / Toggle)
+ Error Message
```

**Edge Case specifics:**
- Loading: skeleton for pre-filled fields (edit mode)
- Empty: not applicable (form starts empty)
- Error: field-level Body3 error below each input + form-level toast on submit failure

**Notes:**
- Required fields marked with `*`
- Dirty state → show "저장하지 않고 나가시겠어요?" confirmation on back
- Primary button disabled until required fields are filled

---

## 4. Dashboard

**Definition:** High-level summary of key metrics, charts, and recent activity.
**Use when:** User needs an overview of status and trends.

**Default component set:**
```
LNB + Page Header (title + period filter)
+ Metric Card × n + Progress Bar + Summary Table
```

**Edge Case specifics:**
- Loading: Skeleton cards matching metric card dimensions
- Empty: per-widget empty state (no data for selected period)
- Error: per-widget error with retry

**Notes:**
- Period filter: Today / This week / This month / Custom range
- Metric cards: 4-column grid on 1920px

---

## 5. Settings

**Definition:** Configuration page with grouped options and toggles.
**Use when:** User needs to change account, project, or system preferences.

**Default component set:**
```
LNB + Page Header + Tab or Sub LNB
+ Settings Section (Toggle / Select / Input)
+ Danger Zone (destructive actions, red border section)
```

**Edge Case specifics:**
- Loading: skeleton for current values
- Empty: not applicable
- Error: inline save error with retry

**Notes:**
- Danger Zone always at the bottom, visually separated
- Auto-save on toggle; explicit save button for text inputs

---

## 6. Node View

**Definition:** Canvas-based diagram with draggable nodes and connecting edges.
**Use when:** User needs to visualize and edit a graph or flow structure.

**Default component set:**
```
LNB + SNB Item + Canvas Background (dot grid, #f0f0f0)
+ Canvas Mini Toolbar + Node Card (root / mid / leaf) + Node Edge
```

**Edge Case specifics:**
- Loading: spinner centered on canvas (not skeleton)
- Empty: centered illustration + "첫 번째 노드를 추가해보세요" + Primary Button
- Error: toast error + keep last known state

**Notes:**
- Canvas background: `#f0f0f0` (exception to standard `#f5f5f5`)
- Mini toolbar floats bottom-center of canvas
- Node selection: `bg-semantic-color-background-selected` border

---

## 7. Flow Chart

**Definition:** Sequential or branching visualization of a process.
**Use when:** User needs to see or edit step-by-step workflows with decision points.

**Default component set:**
```
LNB + Page Header
+ Flow Canvas (step nodes + branch connectors + condition labels)
+ Step Detail Panel (side panel, 280px)
```

**Edge Case specifics:**
- Loading: skeleton nodes in approximate positions
- Empty: "흐름을 시작해보세요" + Add Step button
- Error: toast + keep last state

**Notes:**
- Branch connectors show condition labels
- Selected node highlights Step Detail Panel

---

## 8. Onboarding / Empty State

**Definition:** Full-page empty state shown when a section has no content yet.
**Use when:** First-time experience or section has zero items.

**Default component set:**
```
LNB + Empty State (illustration + Body1 title + Body2 description + CTA Button)
```

**Edge Case specifics:**
- No loading state (page loads empty by design)
- No error state (show generic error toast if load fails)

**Notes:**
- Illustration: 160×160px centered
- AI-related CTA must use `✦` prefix: `✦ 기능 설계하기`
- Non-AI CTA: Primary Button without sparkle

---

## 9. Modal / Overlay

**Definition:** Focused dialog layered over the current page for a single task.
**Use when:** User needs to complete a quick action without leaving the current context.

**Default component set:**
```
Blanket (dim, rgba(51,52,54,0.5))
+ Modal Container (S 400px / M 560px / L 720px)
+ Modal Header + Modal Body + Modal Footer (Ghost "취소" → Primary "확인")
```

**Edge Case specifics:**
- Loading: skeleton inside modal body
- Empty: not applicable (modal opens with content)
- Error: inline error inside modal body + retry

**Notes:**
- S: simple confirmations / M: standard forms / L: complex content
- Close on Blanket click (unless destructive action)
- Footer buttons: right-aligned, Ghost left of Primary
