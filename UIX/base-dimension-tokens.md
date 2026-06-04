# Base Dimension Tokens

spacing, size, radius 등 치수 기반 토큰입니다.

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

## Design Token Variables

| Token variable | CSS variable | Value | Resolved value | Variant |
|---|---|---|---|---|
| `$base-dimen-size-800` | `var(--muix-base-dimen-size-800)` | `64px` | `64px` | `default` |
| `$base-dimen-size-700` | `var(--muix-base-dimen-size-700)` | `56px` | `56px` | `default` |
| `$base-dimen-size-600` | `var(--muix-base-dimen-size-600)` | `48px` | `48px` | `default` |
| `$base-dimen-space-500` | `var(--muix-base-dimen-space-500)` | `40px` | `40px` | `default` |
| `$base-dimen-space-400` | `var(--muix-base-dimen-space-400)` | `32px` | `32px` | `default` |
| `$base-dimen-space-300` | `var(--muix-base-dimen-space-300)` | `24px` | `24px` | `default` |
| `$base-dimen-space-250` | `var(--muix-base-dimen-space-250)` | `20px` | `20px` | `default` |
| `$base-dimen-space-200` | `var(--muix-base-dimen-space-200)` | `16px` | `16px` | `default` |
| `$base-dimen-space-175` | `var(--muix-base-dimen-space-175)` | `14px` | `14px` | `default` |
| `$base-dimen-space-150` | `var(--muix-base-dimen-space-150)` | `12px` | `12px` | `default` |
| `$base-dimen-space-125` | `var(--muix-base-dimen-space-125)` | `10px` | `10px` | `default` |
| `$base-dimen-space-100` | `var(--muix-base-dimen-space-100)` | `8px` | `8px` | `default` |
| `$base-dimen-space-75` | `var(--muix-base-dimen-space-75)` | `6px` | `6px` | `default` |
| `$base-dimen-space-50` | `var(--muix-base-dimen-space-50)` | `4px` | `4px` | `default` |
| `$base-dimen-radius-400` | `var(--muix-base-dimen-radius-400)` | `32px` | `32px` | `default` |
| `$base-dimen-radius-300` | `var(--muix-base-dimen-radius-300)` | `24px` | `24px` | `default` |
| `$base-dimen-radius-250` | `var(--muix-base-dimen-radius-250)` | `20px` | `20px` | `default` |
| `$base-dimen-radius-200` | `var(--muix-base-dimen-radius-200)` | `16px` | `16px` | `default` |
| `$base-dimen-radius-150` | `var(--muix-base-dimen-radius-150)` | `12px` | `12px` | `default` |
| `$base-dimen-radius-125` | `var(--muix-base-dimen-radius-125)` | `10px` | `10px` | `default` |
| `$base-dimen-radius-100` | `var(--muix-base-dimen-radius-100)` | `8px` | `8px` | `default` |
| `$base-dimen-radius-75` | `var(--muix-base-dimen-radius-75)` | `6px` | `6px` | `default` |
| `$base-dimen-radius-50` | `var(--muix-base-dimen-radius-50)` | `4px` | `4px` | `default` |
| `$base-dimen-radius-25` | `var(--muix-base-dimen-radius-25)` | `2px` | `2px` | `default` |
| `$base-dimen-radius-0` | `var(--muix-base-dimen-radius-0)` | `0px` | `0px` | `default` |
| `$base-dimen-size-500` | `var(--muix-base-dimen-size-500)` | `40px` | `40px` | `default` |
| `$base-dimen-size-450` | `var(--muix-base-dimen-size-450)` | `36px` | `36px` | `default` |
| `$base-dimen-size-400` | `var(--muix-base-dimen-size-400)` | `32px` | `32px` | `default` |
| `$base-dimen-size-375` | `var(--muix-base-dimen-size-375)` | `30px` | `30px` | `default` |
| `$base-dimen-size-350` | `var(--muix-base-dimen-size-350)` | `28px` | `28px` | `default` |
| `$base-dimen-size-300` | `var(--muix-base-dimen-size-300)` | `24px` | `24px` | `default` |
| `$base-dimen-size-250` | `var(--muix-base-dimen-size-250)` | `20px` | `20px` | `default` |
| `$base-dimen-size-225` | `var(--muix-base-dimen-size-225)` | `18px` | `18px` | `default` |
| `$base-dimen-size-200` | `var(--muix-base-dimen-size-200)` | `16px` | `16px` | `default` |
| `$base-dimen-size-150` | `var(--muix-base-dimen-size-150)` | `12px` | `12px` | `default` |
| `$base-dimen-size-125` | `var(--muix-base-dimen-size-125)` | `10px` | `10px` | `default` |
| `$base-dimen-size-100` | `var(--muix-base-dimen-size-100)` | `8px` | `8px` | `default` |
| `$base-dimen-size-75` | `var(--muix-base-dimen-size-75)` | `6px` | `6px` | `default` |
| `$base-dimen-size-50` | `var(--muix-base-dimen-size-50)` | `4px` | `4px` | `default` |
| `$base-dimen-size-25` | `var(--muix-base-dimen-size-25)` | `2px` | `2px` | `default` |
| `$base-dimen-size-12` | `var(--muix-base-dimen-size-12)` | `1px` | `1px` | `default` |
| `$base-dimen-space-25` | `var(--muix-base-dimen-space-25)` | `2px` | `2px` | `default` |
| `$base-dimen-space-0` | `var(--muix-base-dimen-space-0)` | `0px` | `0px` | `default` |
| `$base-dimen-size-0` | `var(--muix-base-dimen-size-0)` | `0px` | `0px` | `default` |
