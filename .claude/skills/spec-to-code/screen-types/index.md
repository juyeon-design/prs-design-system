# Screen Types Index

Use this file only to classify the primary screen type. Do not add detailed rules here.

| # | Type | Use when | Guide |
|---|---|---|---|
| 01 | List / Table | User needs to browse, compare, filter, or operate on multiple data items | ./01-list-table.md |
| 02 | Card View | User needs to visually browse or select from multiple items | ./02-card-view.md |
| 03 | Detail | User needs to deeply inspect a single object | ./03-detail.md |
| 04 | Form | User needs to input, edit, or submit structured data | ./04-form.md |
| 05 | Dashboard | User needs to quickly grasp KPIs, status, or trends | ./05-dashboard.md |
| 06 | Settings | User needs to adjust configuration, permissions, or preferences | ./06-settings.md |
| 07 | Node View | User needs to explore or manipulate node-based objects on a canvas | ./07-node-view.md |
| 08 | Flow Chart | User needs to understand or edit steps, flows, or process dependencies | ./08-flow-chart.md |
| 09 | Modal | User needs to perform a focused temporary task within the current context | ./09-modal.md |

## Hybrid Screen Rule

If multiple types apply, choose by dominant user goal:

- Data comparison / bulk operation → **List / Table**
- Visual browsing / selection → **Card View**
- Single object inspection → **Detail**
- Data input / edit / submission → **Form**
- KPI monitoring / decision support → **Dashboard**
- Configuration / preferences → **Settings**
- Node-based exploration / editing → **Node View**
- Process / dependency visualization → **Flow Chart**
- Temporary focused task → **Modal**

If ambiguous, report in the Build Plan — do not silently choose.
