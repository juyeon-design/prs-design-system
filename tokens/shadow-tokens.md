# Shadow Tokens

elevation/shadow 합성을 위한 내부 shadow 토큰입니다.

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
| `$internal-shadow-6-layer1-color` | `var(--muix-internal-shadow-6-layer1-color)` | `rgba(16, 24, 40, 0.14)` | `rgba(16, 24, 40, 0.14)` | `default` |
| `$internal-shadow-6-layer1-spread` | `var(--muix-internal-shadow-6-layer1-spread)` | `-12px` | `-12px` | `default` |
| `$internal-shadow-6-layer1-blur` | `var(--muix-internal-shadow-6-layer1-blur)` | `64px` | `64px` | `default` |
| `$internal-shadow-6-layer1-y` | `var(--muix-internal-shadow-6-layer1-y)` | `32px` | `32px` | `default` |
| `$internal-shadow-6-layer1-x` | `var(--muix-internal-shadow-6-layer1-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-5-layer1-color` | `var(--muix-internal-shadow-5-layer1-color)` | `rgba(16, 24, 40, 0.18)` | `rgba(16, 24, 40, 0.18)` | `default` |
| `$internal-shadow-5-layer1-spread` | `var(--muix-internal-shadow-5-layer1-spread)` | `-12px` | `-12px` | `default` |
| `$internal-shadow-5-layer1-blur` | `var(--muix-internal-shadow-5-layer1-blur)` | `48px` | `48px` | `default` |
| `$internal-shadow-5-layer1-y` | `var(--muix-internal-shadow-5-layer1-y)` | `24px` | `24px` | `default` |
| `$internal-shadow-5-layer1-x` | `var(--muix-internal-shadow-5-layer1-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-4-layer2-color` | `var(--muix-internal-shadow-4-layer2-color)` | `rgba(16, 24, 40, 0.03)` | `rgba(16, 24, 40, 0.03)` | `default` |
| `$internal-shadow-4-layer2-spread` | `var(--muix-internal-shadow-4-layer2-spread)` | `-4px` | `-4px` | `default` |
| `$internal-shadow-4-layer2-blur` | `var(--muix-internal-shadow-4-layer2-blur)` | `8px` | `8px` | `default` |
| `$internal-shadow-4-layer2-y` | `var(--muix-internal-shadow-4-layer2-y)` | `8px` | `8px` | `default` |
| `$internal-shadow-4-layer2-x` | `var(--muix-internal-shadow-4-layer2-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-4-layer1-color` | `var(--muix-internal-shadow-4-layer1-color)` | `rgba(16, 24, 40, 0.08)` | `rgba(16, 24, 40, 0.08)` | `default` |
| `$internal-shadow-4-layer1-spread` | `var(--muix-internal-shadow-4-layer1-spread)` | `-4px` | `-4px` | `default` |
| `$internal-shadow-4-layer1-blur` | `var(--muix-internal-shadow-4-layer1-blur)` | `24px` | `24px` | `default` |
| `$internal-shadow-4-layer1-y` | `var(--muix-internal-shadow-4-layer1-y)` | `20px` | `20px` | `default` |
| `$internal-shadow-4-layer1-x` | `var(--muix-internal-shadow-4-layer1-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-3-layer2-color` | `var(--muix-internal-shadow-3-layer2-color)` | `rgba(16, 24, 40, 0.03)` | `rgba(16, 24, 40, 0.03)` | `default` |
| `$internal-shadow-3-layer2-spread` | `var(--muix-internal-shadow-3-layer2-spread)` | `-2px` | `-2px` | `default` |
| `$internal-shadow-3-layer2-blur` | `var(--muix-internal-shadow-3-layer2-blur)` | `6px` | `6px` | `default` |
| `$internal-shadow-3-layer2-y` | `var(--muix-internal-shadow-3-layer2-y)` | `4px` | `4px` | `default` |
| `$internal-shadow-3-layer2-x` | `var(--muix-internal-shadow-3-layer2-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-3-layer1-color` | `var(--muix-internal-shadow-3-layer1-color)` | `rgba(16, 24, 40, 0.08)` | `rgba(16, 24, 40, 0.08)` | `default` |
| `$internal-shadow-3-layer1-spread` | `var(--muix-internal-shadow-3-layer1-spread)` | `-4px` | `-4px` | `default` |
| `$internal-shadow-3-layer1-blur` | `var(--muix-internal-shadow-3-layer1-blur)` | `16px` | `16px` | `default` |
| `$internal-shadow-3-layer1-y` | `var(--muix-internal-shadow-3-layer1-y)` | `12px` | `12px` | `default` |
| `$internal-shadow-3-layer1-x` | `var(--muix-internal-shadow-3-layer1-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-2-layer2-color` | `var(--muix-internal-shadow-2-layer2-color)` | `rgba(16, 24, 40, 0.06)` | `rgba(16, 24, 40, 0.06)` | `default` |
| `$internal-shadow-2-layer2-spread` | `var(--muix-internal-shadow-2-layer2-spread)` | `-2px` | `-2px` | `default` |
| `$internal-shadow-2-layer2-blur` | `var(--muix-internal-shadow-2-layer2-blur)` | `4px` | `4px` | `default` |
| `$internal-shadow-2-layer2-y` | `var(--muix-internal-shadow-2-layer2-y)` | `2px` | `2px` | `default` |
| `$internal-shadow-2-layer2-x` | `var(--muix-internal-shadow-2-layer2-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-2-layer1-color` | `var(--muix-internal-shadow-2-layer1-color)` | `rgba(16, 24, 40, 0.1)` | `rgba(16, 24, 40, 0.1)` | `default` |
| `$internal-shadow-2-layer1-spread` | `var(--muix-internal-shadow-2-layer1-spread)` | `-2px` | `-2px` | `default` |
| `$internal-shadow-2-layer1-blur` | `var(--muix-internal-shadow-2-layer1-blur)` | `8px` | `8px` | `default` |
| `$internal-shadow-2-layer1-y` | `var(--muix-internal-shadow-2-layer1-y)` | `4px` | `4px` | `default` |
| `$internal-shadow-2-layer1-x` | `var(--muix-internal-shadow-2-layer1-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-1-layer2-color` | `var(--muix-internal-shadow-1-layer2-color)` | `rgba(16, 24, 40, 0.06)` | `rgba(16, 24, 40, 0.06)` | `default` |
| `$internal-shadow-1-layer2-spread` | `var(--muix-internal-shadow-1-layer2-spread)` | `0px` | `0px` | `default` |
| `$internal-shadow-1-layer2-blur` | `var(--muix-internal-shadow-1-layer2-blur)` | `2px` | `2px` | `default` |
| `$internal-shadow-1-layer2-y` | `var(--muix-internal-shadow-1-layer2-y)` | `1px` | `1px` | `default` |
| `$internal-shadow-1-layer2-x` | `var(--muix-internal-shadow-1-layer2-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-1-layer1-color` | `var(--muix-internal-shadow-1-layer1-color)` | `rgba(16, 24, 40, 0.1)` | `rgba(16, 24, 40, 0.1)` | `default` |
| `$internal-shadow-1-layer1-spread` | `var(--muix-internal-shadow-1-layer1-spread)` | `0px` | `0px` | `default` |
| `$internal-shadow-1-layer1-blur` | `var(--muix-internal-shadow-1-layer1-blur)` | `3px` | `3px` | `default` |
| `$internal-shadow-1-layer1-y` | `var(--muix-internal-shadow-1-layer1-y)` | `1px` | `1px` | `default` |
| `$internal-shadow-1-layer1-x` | `var(--muix-internal-shadow-1-layer1-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-0-layer1-color` | `var(--muix-internal-shadow-0-layer1-color)` | `rgba(16, 24, 40, 0.05)` | `rgba(16, 24, 40, 0.05)` | `default` |
| `$internal-shadow-0-layer1-spread` | `var(--muix-internal-shadow-0-layer1-spread)` | `0px` | `0px` | `default` |
| `$internal-shadow-0-layer1-blur` | `var(--muix-internal-shadow-0-layer1-blur)` | `2px` | `2px` | `default` |
| `$internal-shadow-0-layer1-y` | `var(--muix-internal-shadow-0-layer1-y)` | `1px` | `1px` | `default` |
| `$internal-shadow-0-layer1-x` | `var(--muix-internal-shadow-0-layer1-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-default-unused-color` | `var(--muix-internal-shadow-default-unused-color)` | `rgba(0, 0, 0, 0)` | `rgba(0, 0, 0, 0)` | `default` |
| `$internal-shadow-default-unused-spread` | `var(--muix-internal-shadow-default-unused-spread)` | `0px` | `0px` | `default` |
| `$internal-shadow-default-unused-blur` | `var(--muix-internal-shadow-default-unused-blur)` | `0px` | `0px` | `default` |
| `$internal-shadow-default-unused-y` | `var(--muix-internal-shadow-default-unused-y)` | `0px` | `0px` | `default` |
| `$internal-shadow-default-unused-x` | `var(--muix-internal-shadow-default-unused-x)` | `0px` | `0px` | `default` |
| `$internal-shadow-6-layer2-color` | `var(--muix-internal-shadow-6-layer2-color)` | `var(--muix-internal-shadow-default-unused-color)` | `rgba(0, 0, 0, 0)` | `default` |
| `$internal-shadow-6-layer2-spread` | `var(--muix-internal-shadow-6-layer2-spread)` | `var(--muix-internal-shadow-default-unused-spread)` | `0px` | `default` |
| `$internal-shadow-6-layer2-blur` | `var(--muix-internal-shadow-6-layer2-blur)` | `var(--muix-internal-shadow-default-unused-blur)` | `0px` | `default` |
| `$internal-shadow-6-layer2-y` | `var(--muix-internal-shadow-6-layer2-y)` | `var(--muix-internal-shadow-default-unused-y)` | `0px` | `default` |
| `$internal-shadow-6-layer2-x` | `var(--muix-internal-shadow-6-layer2-x)` | `var(--muix-internal-shadow-default-unused-x)` | `0px` | `default` |
| `$internal-shadow-5-layer2-color` | `var(--muix-internal-shadow-5-layer2-color)` | `var(--muix-internal-shadow-default-unused-color)` | `rgba(0, 0, 0, 0)` | `default` |
| `$internal-shadow-5-layer2-spread` | `var(--muix-internal-shadow-5-layer2-spread)` | `var(--muix-internal-shadow-default-unused-spread)` | `0px` | `default` |
| `$internal-shadow-5-layer2-blur` | `var(--muix-internal-shadow-5-layer2-blur)` | `var(--muix-internal-shadow-default-unused-blur)` | `0px` | `default` |
| `$internal-shadow-5-layer2-y` | `var(--muix-internal-shadow-5-layer2-y)` | `var(--muix-internal-shadow-default-unused-y)` | `0px` | `default` |
| `$internal-shadow-5-layer2-x` | `var(--muix-internal-shadow-5-layer2-x)` | `var(--muix-internal-shadow-default-unused-x)` | `0px` | `default` |
| `$internal-shadow-0-layer2-color` | `var(--muix-internal-shadow-0-layer2-color)` | `var(--muix-internal-shadow-default-unused-color)` | `rgba(0, 0, 0, 0)` | `default` |
| `$internal-shadow-0-layer2-spread` | `var(--muix-internal-shadow-0-layer2-spread)` | `var(--muix-internal-shadow-default-unused-spread)` | `0px` | `default` |
| `$internal-shadow-0-layer2-blur` | `var(--muix-internal-shadow-0-layer2-blur)` | `var(--muix-internal-shadow-default-unused-blur)` | `0px` | `default` |
| `$internal-shadow-0-layer2-y` | `var(--muix-internal-shadow-0-layer2-y)` | `var(--muix-internal-shadow-default-unused-y)` | `0px` | `default` |
| `$internal-shadow-0-layer2-x` | `var(--muix-internal-shadow-0-layer2-x)` | `var(--muix-internal-shadow-default-unused-x)` | `0px` | `default` |
