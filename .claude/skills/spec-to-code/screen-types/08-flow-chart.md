# Flow Chart

## Use When
- User needs to understand or edit sequential/branching workflows with decision points.
- User needs to visualize step-by-step processes or dependencies.

## Layout

Content width: **Fill pattern** — full canvas area excluding LNB.

## Default Component Set
- PageHeader
- Flow Canvas: step nodes + branch connectors + condition labels
- Step Detail Panel (side panel, 280px) — appears when a node is selected

## Required States
- Loading: skeleton nodes in approximate positions
- Empty: "흐름을 시작해보세요" + Add Step button
- Error: toast + preserve last known state

## Interaction Rules
- Branch connectors display condition labels.
- Selecting a node activates the Step Detail Panel.

## Code Guidance
- Canvas layout and Step Detail Panel are separate components — panel open state lives at the page container level.
