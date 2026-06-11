# Card View

## Use When
- User needs to visually browse or select from multiple items.
- Visual identity of each item (thumbnail, status, preview) matters more than dense data comparison.

## Layout

Content width: **Fill pattern** — LNB 220px excluded, left/right padding 60px each.

> Detailed dimensions TBD — update this file when Card View Figma spec is confirmed.

## Default Component Set
- PageHeader
- Toolbar: Filter button + SearchInput + view toggle (card / list switch)
- Card Grid
- Pagination

## Required States
- Loading: Skeleton cards matching card dimensions
- Empty: illustration + message + Primary Button CTA
- Error: "데이터를 불러오지 못했어요" + retry button
- No search results: reset filter/search action provided

## Interaction Rules
- Card click navigates to Detail page.
- Hover state: subtle elevation or border highlight.
- Destructive actions require a confirmation step.

## Code Guidance
- Card component should be self-contained with no external state leakage.
- Grid layout via CSS grid — avoid hardcoded column counts.
- Do not hardcode mock data inside card components.
