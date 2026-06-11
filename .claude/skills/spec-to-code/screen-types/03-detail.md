# Detail

## Use When
- User needs to deeply inspect a single item.
- User clicks into an item from a list to view or edit details.

## Layout

Content width: **Fixed 1200px**, center-aligned.

## Default Component Set
- PageHeader: back + title + Status Badge + action buttons
- Detail Body: Inline Edit Field + Section Divider
- Side Panel 280px: Assignee Cell + Version Chip + Priority Icon + DatePicker
- Comment Thread

## Required States
- Loading: Skeleton for title, body sections, side panel
- Empty (no comments): "첫 번째 댓글을 남겨보세요"
- Error: inline error per section with retry

## Interaction Rules
- Inline edit: click to activate, Enter or blur to save.
- Side panel collapses on narrow screens.

## Code Guidance
- Separate main body and side panel into distinct components.
- Inline edit state is local to each field — do not lift unnecessarily.
