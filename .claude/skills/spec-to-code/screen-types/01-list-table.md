# List / Table View

## Use When
- User needs to browse, compare, search, filter, or sort a collection of items.
- Accurate data inspection and quick bulk operations are important.

## Layout

**Content width — two patterns:**

| Pattern | When to use | How to apply |
|---|---|---|
| **Fill** | Data-heavy list/table screens (Issue List, etc.) | `w-full`, outer container `px-[60px]` — table fills remaining width |
| **Fixed 1200px** | Hub / home screens with mixed content (cards + table) | `max-w-[1200px] mx-auto` — no additional horizontal padding |

> The 60px padding applies at the **page container level only**. Do NOT apply it to individual table rows or headers.

| Layer | Height |
|---|---|
| Toolbar (filter + search + buttons) | 32px |
| Table header | 36px |
| Standard row | 64px |
| Compact / Nested row | 40px |
| Pagination | 56px |

**Row height rule:**
- Contains avatar, status badge, or type badge → **64px**
- Nested / sub-list, text + icon only → **40px**
- Default display count: 10 rows

**Standard row columns (1580px at 1920px canvas):**
| Column | Width |
|---|---|
| Checkbox | 52px |
| Name / Title | 848px |
| Meta columns × 5 | 96–132px (adjust per context) |
| Actions | 64px |

**Nested row column example (Issue list):**
| Column | Width |
|---|---|
| Task name | 780px |
| Assignee | 106px |
| Status | 74px |
| Start date / End date | 120px each |

**Typography:**
- Table header: Body3 (12px / line-height 16px)
- Table cell: Body2 (14px / line-height 20px)

## Default Component Set
- PageHeader
- Toolbar: Filter button + SearchInput (220px) + right-side toggle/action buttons
- Table (table_header + table_row + table_cell)
- Pagination

## Required States
- Loading: Skeleton rows matching row height
- Empty: illustration + message + Primary Button CTA
- Error: "데이터를 불러오지 못했어요" + retry button
- No search results: reset filter/search action provided

## Interaction Rules
- Filter chips appear below toolbar when active.
- Table header is sticky on scroll.
- Row hover: `bg-semantic-color-background-hovered`
- Destructive row actions (delete, deactivate) require a confirmation step.
- Row click and checkbox selection must not conflict.

## Code Guidance
- Separate container, toolbar, table, and row action components.
- Keep table column definitions declarative.
- Do not hardcode mock data inside UI components.
