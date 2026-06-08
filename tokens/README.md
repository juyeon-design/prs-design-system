# Token Documents

Design token mapping documents organized by category.
Other projects may pick only the relevant files they need.

---

## Token Access Rule

- Access tokens using `$token-name` format (e.g. `$semantic-color-background-default`)
- `$token-name` is derived by removing the `--muix-` prefix from the CSS variable and adding `$`
  - e.g. `--muix-semantic-color-background-default` → `$semantic-color-background-default`
- The actual CSS runtime value is the `var(...)` form in each file's `CSS variable` column

```scss
/* Usage */
background-color: $semantic-color-background-default;

/* Mapping */
$semantic-color-background-default: var(--muix-semantic-color-background-default); /* #ffffff */
```

---

## File Index

| File | Contents |
|------|---------|
| [figma-variable-mapping.md](./figma-variable-mapping.md) | ★ Figma MCP variable → Tailwind class conversion rules. Reference this first when working with Figma. |
| [tailwind-color-alias-mapping.md](./tailwind-color-alias-mapping.md) | Tailwind color alias → `$token-name` / CSS variable mapping |
| [tailwind-dimension-alias-mapping.md](./tailwind-dimension-alias-mapping.md) | Tailwind spacing / size / radius alias mapping |
| [tailwind-style-utility-alias-mapping.md](./tailwind-style-utility-alias-mapping.md) | Tailwind custom style utility alias (shadow · typography) mapping |
| [app-theme-tokens.md](./app-theme-tokens.md) | App theme and shadcn-compatible tokens |
| [base-color-tokens.md](./base-color-tokens.md) | Base color palette. Used as the reference foundation for semantic/component tokens. |
| [semantic-color-tokens.md](./semantic-color-tokens.md) | Intent-based semantic color tokens (background · text · border · icon states) |
| [component-color-tokens.md](./component-color-tokens.md) | Component-level color tokens for direct use |
| [base-dimension-tokens.md](./base-dimension-tokens.md) | Spacing · size · radius dimension tokens |
| [shadow-tokens.md](./shadow-tokens.md) | Internal shadow tokens for elevation/shadow composition |
| [typography-tokens.md](./typography-tokens.md) | Font · size · line-height · weight · letter-spacing tokens |
