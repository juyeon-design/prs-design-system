# Modal / Overlay

## Use When
- User needs to perform a focused temporary task without leaving the current context.

## Layout

| Size | Width | Use |
|---|---|---|
| S | 400px | Simple confirmations |
| M | 560px | Standard forms |
| L | 720px | Complex content |

Blanket: `rgba(51, 52, 54, 0.5)`

## Default Component Set
- Blanket (dim overlay)
- Modal Container (S / M / L)
- Modal Header
- Modal Body
- Modal Footer: Ghost "취소" (left) → Primary "확인" (right)

## Required States
- Loading: skeleton inside modal body
- Empty: not applicable — modal opens with content
- Error: inline error inside modal body + retry

## Interaction Rules
- Close on blanket click — unless the action is destructive.
- Footer buttons: right-aligned, Ghost left of Primary.
- Destructive confirmation modals: destructive action button replaces Primary (red variant).

## Code Guidance
- Modal is rendered via portal — do not nest inside the triggering component's DOM tree.
- Modal open state lives in the parent page, not inside the modal component itself.
