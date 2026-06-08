# Typography Tokens

font, size, line-height, weight, letter-spacing 등 타이포그래피 토큰입니다.

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
| `$internal-text-paragraph3-spacing` | `var(--muix-internal-text-paragraph3-spacing)` | `0` | `0` | `default` |
| `$internal-text-paragraph3-height` | `var(--muix-internal-text-paragraph3-height)` | `20px` | `20px` | `default` |
| `$internal-text-paragraph3-size` | `var(--muix-internal-text-paragraph3-size)` | `12px` | `12px` | `default` |
| `$internal-text-paragraph2-spacing` | `var(--muix-internal-text-paragraph2-spacing)` | `0` | `0` | `default` |
| `$internal-text-paragraph2-height` | `var(--muix-internal-text-paragraph2-height)` | `24px` | `24px` | `default` |
| `$internal-text-paragraph2-size` | `var(--muix-internal-text-paragraph2-size)` | `14px` | `14px` | `default` |
| `$internal-text-paragraph1-spacing` | `var(--muix-internal-text-paragraph1-spacing)` | `0` | `0` | `default` |
| `$internal-text-paragraph1-height` | `var(--muix-internal-text-paragraph1-height)` | `28px` | `28px` | `default` |
| `$internal-text-paragraph1-size` | `var(--muix-internal-text-paragraph1-size)` | `16px` | `16px` | `default` |
| `$internal-text-body3-spacing` | `var(--muix-internal-text-body3-spacing)` | `0` | `0` | `default` |
| `$internal-text-body3-height` | `var(--muix-internal-text-body3-height)` | `16px` | `16px` | `default` |
| `$internal-text-body3-size` | `var(--muix-internal-text-body3-size)` | `12px` | `12px` | `default` |
| `$internal-text-body2-spacing` | `var(--muix-internal-text-body2-spacing)` | `0` | `0` | `default` |
| `$internal-text-body2-height` | `var(--muix-internal-text-body2-height)` | `20px` | `20px` | `default` |
| `$internal-text-body2-size` | `var(--muix-internal-text-body2-size)` | `14px` | `14px` | `default` |
| `$internal-text-body1-spacing` | `var(--muix-internal-text-body1-spacing)` | `0` | `0` | `default` |
| `$internal-text-body1-height` | `var(--muix-internal-text-body1-height)` | `24px` | `24px` | `default` |
| `$internal-text-body1-size` | `var(--muix-internal-text-body1-size)` | `16px` | `16px` | `default` |
| `$internal-text-title3-spacing` | `var(--muix-internal-text-title3-spacing)` | `0` | `0` | `default` |
| `$internal-text-title3-height` | `var(--muix-internal-text-title3-height)` | `28px` | `28px` | `default` |
| `$internal-text-title3-size` | `var(--muix-internal-text-title3-size)` | `18px` | `18px` | `default` |
| `$internal-text-title2-spacing` | `var(--muix-internal-text-title2-spacing)` | `0` | `0` | `default` |
| `$internal-text-title2-height` | `var(--muix-internal-text-title2-height)` | `30px` | `30px` | `default` |
| `$internal-text-title2-size` | `var(--muix-internal-text-title2-size)` | `20px` | `20px` | `default` |
| `$internal-text-title1-spacing` | `var(--muix-internal-text-title1-spacing)` | `0` | `0` | `default` |
| `$internal-text-title1-height` | `var(--muix-internal-text-title1-height)` | `32px` | `32px` | `default` |
| `$internal-text-title1-size` | `var(--muix-internal-text-title1-size)` | `22px` | `22px` | `default` |
| `$internal-text-heading3-spacing` | `var(--muix-internal-text-heading3-spacing)` | `0` | `0` | `default` |
| `$internal-text-heading3-height` | `var(--muix-internal-text-heading3-height)` | `38px` | `38px` | `default` |
| `$internal-text-heading3-size` | `var(--muix-internal-text-heading3-size)` | `30px` | `30px` | `default` |
| `$internal-text-heading2-spacing` | `var(--muix-internal-text-heading2-spacing)` | `-0.02em` | `-0.02em` | `default` |
| `$internal-text-heading2-height` | `var(--muix-internal-text-heading2-height)` | `44px` | `44px` | `default` |
| `$internal-text-heading2-size` | `var(--muix-internal-text-heading2-size)` | `36px` | `36px` | `default` |
| `$internal-text-heading1-spacing` | `var(--muix-internal-text-heading1-spacing)` | `-0.02em` | `-0.02em` | `default` |
| `$internal-text-heading1-height` | `var(--muix-internal-text-heading1-height)` | `60px` | `60px` | `default` |
| `$internal-text-heading1-size` | `var(--muix-internal-text-heading1-size)` | `48px` | `48px` | `default` |
| `$internal-text-default-weight-bold` | `var(--muix-internal-text-default-weight-bold)` | `700` | `700` | `default` |
| `$internal-text-default-weight-semibold` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `600` | `default` |
| `$internal-text-default-weight-medium` | `var(--muix-internal-text-default-weight-medium)` | `500` | `500` | `default` |
| `$internal-text-default-font` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `Pretendard, sans-serif` | `default` |
| `$internal-text-default-font` | `var(--muix-internal-text-default-font)` | `'Noto Sans JP', Pretendard, sans-serif` | `'Noto Sans JP', Pretendard, sans-serif` | `lang:ja` |
| `$internal-text-default-font` | `var(--muix-internal-text-default-font)` | `'Noto Sans SC', Pretendard, sans-serif` | `'Noto Sans SC', Pretendard, sans-serif` | `lang:zh-CN` |
| `$internal-text-default-font` | `var(--muix-internal-text-default-font)` | `'Noto Sans TC', Pretendard, sans-serif` | `'Noto Sans TC', Pretendard, sans-serif` | `lang:zh-TW` |
| `$internal-text-paragraph3-weight-bold` | `var(--muix-internal-text-paragraph3-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-paragraph3-weight-semibold` | `var(--muix-internal-text-paragraph3-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-paragraph3-weight-medium` | `var(--muix-internal-text-paragraph3-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-paragraph3-font` | `var(--muix-internal-text-paragraph3-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-paragraph2-weight-bold` | `var(--muix-internal-text-paragraph2-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-paragraph2-weight-semibold` | `var(--muix-internal-text-paragraph2-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-paragraph2-weight-medium` | `var(--muix-internal-text-paragraph2-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-paragraph2-font` | `var(--muix-internal-text-paragraph2-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-paragraph1-weight-bold` | `var(--muix-internal-text-paragraph1-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-paragraph1-weight-semibold` | `var(--muix-internal-text-paragraph1-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-paragraph1-weight-medium` | `var(--muix-internal-text-paragraph1-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-paragraph1-font` | `var(--muix-internal-text-paragraph1-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-body3-weight-bold` | `var(--muix-internal-text-body3-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-body3-weight-semibold` | `var(--muix-internal-text-body3-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-body3-weight-medium` | `var(--muix-internal-text-body3-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-body3-font` | `var(--muix-internal-text-body3-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-body2-weight-bold` | `var(--muix-internal-text-body2-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-body2-weight-semibold` | `var(--muix-internal-text-body2-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-body2-weight-medium` | `var(--muix-internal-text-body2-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-body2-font` | `var(--muix-internal-text-body2-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-body1-weight-bold` | `var(--muix-internal-text-body1-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-body1-weight-semibold` | `var(--muix-internal-text-body1-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-body1-weight-medium` | `var(--muix-internal-text-body1-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-body1-font` | `var(--muix-internal-text-body1-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-title3-weight-bold` | `var(--muix-internal-text-title3-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-title3-weight-semibold` | `var(--muix-internal-text-title3-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-title3-weight-medium` | `var(--muix-internal-text-title3-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-title3-font` | `var(--muix-internal-text-title3-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-title2-weight-bold` | `var(--muix-internal-text-title2-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-title2-weight-semibold` | `var(--muix-internal-text-title2-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-title2-weight-medium` | `var(--muix-internal-text-title2-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-title2-font` | `var(--muix-internal-text-title2-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-title1-weight-bold` | `var(--muix-internal-text-title1-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-title1-weight-semibold` | `var(--muix-internal-text-title1-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-title1-weight-medium` | `var(--muix-internal-text-title1-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-title1-font` | `var(--muix-internal-text-title1-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-heading3-weight-bold` | `var(--muix-internal-text-heading3-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-heading3-weight-semibold` | `var(--muix-internal-text-heading3-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-heading3-weight-medium` | `var(--muix-internal-text-heading3-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-heading3-font` | `var(--muix-internal-text-heading3-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-heading2-weight-bold` | `var(--muix-internal-text-heading2-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-heading2-weight-semibold` | `var(--muix-internal-text-heading2-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-heading2-weight-medium` | `var(--muix-internal-text-heading2-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-heading2-font` | `var(--muix-internal-text-heading2-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
| `$internal-text-heading1-weight-bold` | `var(--muix-internal-text-heading1-weight-bold)` | `var(--muix-internal-text-default-weight-bold)` | `700` | `default` |
| `$internal-text-heading1-weight-semibold` | `var(--muix-internal-text-heading1-weight-semibold)` | `var(--muix-internal-text-default-weight-semibold)` | `600` | `default` |
| `$internal-text-heading1-weight-medium` | `var(--muix-internal-text-heading1-weight-medium)` | `var(--muix-internal-text-default-weight-medium)` | `500` | `default` |
| `$internal-text-heading1-font` | `var(--muix-internal-text-heading1-font)` | `var(--muix-internal-text-default-font)` | `Pretendard, sans-serif` | `default` |
