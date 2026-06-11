# Form

## Use When
- User needs to input, edit, or submit structured data to create or update a record.

## Layout

Content width: **Fixed 1200px**, center-aligned.

## Default Component Set
- PageHeader: title + Primary Button "저장" + Ghost Button "취소"
- Form Section: FormLabel + Input / Textarea / Select / Toggle
- Error Message

## Required States
- Loading: skeleton for pre-filled fields (edit mode only)
- Empty: not applicable — form starts empty
- Error: field-level Body3 error below each input + form-level toast on submit failure

## Interaction Rules
- Required fields marked with `*`.
- Dirty state → show "저장하지 않고 나가시겠어요?" confirmation on back navigation.
- Primary button disabled until all required fields are filled.
- Destructive actions (delete record) require a confirmation step.

## Code Guidance
- Field-level error messages are independent — do not share error state across fields.
- Form submit handler lives in the container, not the field components.
