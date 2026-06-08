# Tailwind Dimension Alias Mapping

Tailwind spacing/size/radius alias를 `$token-name` 또는 CSS variable로 연결하는 매핑입니다.

## Token Access Rule

- 사용처에서는 CSS 변수명을 직접 쓰기보다 `$semantic-color-background-default` 같은 토큰 변수명으로 접근합니다.
- `$token-name`은 CSS 변수에서 `--muix-` prefix를 제거하고 `$`를 붙인 이름입니다. 예: `--muix-semantic-color-background-default` -> `$semantic-color-background-default`.
- 실제 CSS 런타임 값은 `CSS variable` 컬럼의 `var(...)` 형태로 연결합니다.
- `Resolved value`는 `var(...)` 참조를 가능한 범위에서 최종 값으로 해석한 참고값입니다.
- 값이 테마나 모드에 따라 달라지는 토큰은 `Variant` 컬럼으로만 구분하며, 원본 선택자와 파일 정보는 포함하지 않습니다.

```scss
/* Usage */
background-color: $semantic-color-background-default;

/* Mapping */
$semantic-color-background-default: var(--muix-semantic-color-background-default); /* #ffffff */
```

## Tailwind Alias Mapping

| Alias | Token variable | CSS variable / value |
|---|---|---|
| `size.0` | `$base-dimen-size-0` | `var(--muix-base-dimen-size-0)` |
| `size.12` | `$base-dimen-size-12` | `var(--muix-base-dimen-size-12)` |
| `size.25` | `$base-dimen-size-25` | `var(--muix-base-dimen-size-25)` |
| `size.50` | `$base-dimen-size-50` | `var(--muix-base-dimen-size-50)` |
| `size.75` | `$base-dimen-size-75` | `var(--muix-base-dimen-size-75)` |
| `size.100` | `$base-dimen-size-100` | `var(--muix-base-dimen-size-100)` |
| `size.125` | `$base-dimen-size-125` | `var(--muix-base-dimen-size-125)` |
| `size.150` | `$base-dimen-size-150` | `var(--muix-base-dimen-size-150)` |
| `size.200` | `$base-dimen-size-200` | `var(--muix-base-dimen-size-200)` |
| `size.225` | `$base-dimen-size-225` | `var(--muix-base-dimen-size-225)` |
| `size.250` | `$base-dimen-size-250` | `var(--muix-base-dimen-size-250)` |
| `size.300` | `$base-dimen-size-300` | `var(--muix-base-dimen-size-300)` |
| `size.350` | `$base-dimen-size-350` | `var(--muix-base-dimen-size-350)` |
| `size.375` | `$base-dimen-size-375` | `var(--muix-base-dimen-size-375)` |
| `size.400` | `$base-dimen-size-400` | `var(--muix-base-dimen-size-400)` |
| `size.450` | `$base-dimen-size-450` | `var(--muix-base-dimen-size-450)` |
| `size.500` | `$base-dimen-size-500` | `var(--muix-base-dimen-size-500)` |
| `size.600` | `$base-dimen-size-600` | `var(--muix-base-dimen-size-600)` |
| `size.700` | `$base-dimen-size-700` | `var(--muix-base-dimen-size-700)` |
| `size.800` | `$base-dimen-size-800` | `var(--muix-base-dimen-size-800)` |
| `space.0` | `$base-dimen-space-0` | `var(--muix-base-dimen-space-0)` |
| `space.25` | `$base-dimen-space-25` | `var(--muix-base-dimen-space-25)` |
| `space.50` | `$base-dimen-space-50` | `var(--muix-base-dimen-space-50)` |
| `space.75` | `$base-dimen-space-75` | `var(--muix-base-dimen-space-75)` |
| `space.100` | `$base-dimen-space-100` | `var(--muix-base-dimen-space-100)` |
| `space.125` | `$base-dimen-space-125` | `var(--muix-base-dimen-space-125)` |
| `space.150` | `$base-dimen-space-150` | `var(--muix-base-dimen-space-150)` |
| `space.175` | `$base-dimen-space-175` | `var(--muix-base-dimen-space-175)` |
| `space.200` | `$base-dimen-space-200` | `var(--muix-base-dimen-space-200)` |
| `space.250` | `$base-dimen-space-250` | `var(--muix-base-dimen-space-250)` |
| `space.300` | `$base-dimen-space-300` | `var(--muix-base-dimen-space-300)` |
| `space.400` | `$base-dimen-space-400` | `var(--muix-base-dimen-space-400)` |
| `space.500` | `$base-dimen-space-500` | `var(--muix-base-dimen-space-500)` |
| `radius.0` | `$base-dimen-radius-0` | `var(--muix-base-dimen-radius-0)` |
| `radius.25` | `$base-dimen-radius-25` | `var(--muix-base-dimen-radius-25)` |
| `radius.50` | `$base-dimen-radius-50` | `var(--muix-base-dimen-radius-50)` |
| `radius.75` | `$base-dimen-radius-75` | `var(--muix-base-dimen-radius-75)` |
| `radius.100` | `$base-dimen-radius-100` | `var(--muix-base-dimen-radius-100)` |
| `radius.125` | `$base-dimen-radius-125` | `var(--muix-base-dimen-radius-125)` |
| `radius.150` | `$base-dimen-radius-150` | `var(--muix-base-dimen-radius-150)` |
| `radius.200` | `$base-dimen-radius-200` | `var(--muix-base-dimen-radius-200)` |
| `radius.250` | `$base-dimen-radius-250` | `var(--muix-base-dimen-radius-250)` |
| `radius.300` | `$base-dimen-radius-300` | `var(--muix-base-dimen-radius-300)` |
| `radius.400` | `$base-dimen-radius-400` | `var(--muix-base-dimen-radius-400)` |
