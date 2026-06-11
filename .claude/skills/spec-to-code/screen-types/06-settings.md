# Settings

## Use When
- User needs to adjust configuration, permissions, or personal preferences.

## Layout

Content width: **Fixed 1200px**, center-aligned.

## Default Component Set
- PageHeader
- Tab or Sub LNB (2-depth navigation — unique to this screen type)
- Settings Section: Toggle / Select / Input
- Danger Zone: destructive actions, visually separated with red border, always at the bottom

## Required States
- Loading: skeleton for current values
- Empty: not applicable
- Error: inline save error with retry

## Interaction Rules
- Toggles auto-save on change — no explicit save button.
- Text inputs require an explicit save button.
- Danger Zone is always at the bottom, visually separated from other sections.
- Destructive actions in Danger Zone require a confirmation modal.

## Code Guidance
- Sub LNB selection drives which settings section renders — keep routing declarative.
- Toggle save and text input save are separate handlers — do not unify.
