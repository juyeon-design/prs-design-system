# Node View

## Use When
- User needs to explore or manipulate node-based objects on a canvas.
- User needs to visualize and edit a graph or flow structure.

## Layout

Content width: **Fill pattern** — full canvas area excluding LNB.
Canvas background: `#f0f0f0` (exception to standard `#f5f5f5`).

## Default Component Set
- LNB + SNB Item
- Canvas Background (dot grid)
- Canvas Mini Toolbar (floats bottom-center of canvas)
- Node Card: root / mid / leaf variants
- Node Edge (connecting lines)

## Required States
- Loading: spinner centered on canvas (not skeleton)
- Empty: centered illustration + "첫 번째 노드를 추가해보세요" + Primary Button
- Error: toast error + preserve last known state

## Interaction Rules
- Node selection: `bg-semantic-color-background-selected` border highlight.
- Mini toolbar floats bottom-center — do not anchor to page header.

## Code Guidance
- Canvas state (pan, zoom, selected node) lives at the page container level.
- Node Card variants (root / mid / leaf) are separate components — do not conditionally branch inside one component.
