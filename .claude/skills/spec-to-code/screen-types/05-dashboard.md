# Dashboard

## Use When
- User needs to quickly grasp KPIs, status, or trends at a glance.
- User needs an overview of metrics, charts, and recent activity.

## Layout

Content width: **Fill pattern** — LNB 220px excluded, left/right padding 60px each.

## Default Component Set
- PageHeader: title + period filter
- Metric Card × n
- Progress Bar
- Summary Table

## Required States
- Loading: Skeleton cards matching metric card dimensions
- Empty: per-widget empty state (no data for selected period)
- Error: per-widget error with retry

## Interaction Rules
- Period filter: Today / This week / This month / Custom range.
- Each widget handles its own empty/error state independently.

## Code Guidance
- Each widget (metric card, chart, table) is a self-contained component.
- Period filter state lives at the page container level.
- Metric cards: 4-column grid at 1920px canvas.
