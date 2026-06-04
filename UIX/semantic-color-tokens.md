# Semantic Color Tokens

사용 의도 중심의 semantic color 토큰입니다. 예: background, text, border, icon 상태값.

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
| `$semantic-color-background-default` | `var(--muix-semantic-color-background-default)` | `#ffffff` | `#ffffff` | `default` |
| `$semantic-color-divider-default` | `var(--muix-semantic-color-divider-default)` | `var(--muix-base-color-neutral-coolgray-200)` | `#dfdfdf` | `default` |
| `$semantic-color-icon-inverse-disabled` | `var(--muix-semantic-color-icon-inverse-disabled)` | `var(--muix-base-color-neutral-coolgray-600)` | `#474747` | `default` |
| `$semantic-color-icon-discovery` | `var(--muix-semantic-color-icon-discovery)` | `var(--muix-base-color-accent-skyblue-500)` | `#2ca4fb` | `default` |
| `$semantic-color-icon-warning` | `var(--muix-semantic-color-icon-warning)` | `var(--muix-base-color-accent-yellow-600)` | `#e0a500` | `default` |
| `$semantic-color-icon-error` | `var(--muix-semantic-color-icon-error)` | `var(--muix-base-color-accent-red-500)` | `#fd493f` | `default` |
| `$semantic-color-icon-disabled` | `var(--muix-semantic-color-icon-disabled)` | `var(--muix-base-color-neutral-coolgray-300)` | `#d2d2d2` | `default` |
| `$semantic-color-icon-inverse-default` | `var(--muix-semantic-color-icon-inverse-default)` | `var(--muix-base-color-neutral-coolgray-white)` | `#ffffff` | `default` |
| `$semantic-color-icon-brand` | `var(--muix-semantic-color-icon-brand)` | `var(--muix-base-color-accent-cobaltblue-400)` | `#376cf2` | `default` |
| `$semantic-color-icon-selected` | `var(--muix-semantic-color-icon-selected)` | `var(--muix-base-color-accent-cobaltblue-400)` | `#376cf2` | `default` |
| `$semantic-color-icon-subtlest` | `var(--muix-semantic-color-icon-subtlest)` | `var(--muix-base-color-neutral-coolgray-400)` | `#aeaeae` | `default` |
| `$semantic-color-icon-subtle` | `var(--muix-semantic-color-icon-subtle)` | `var(--muix-base-color-neutral-coolgray-500)` | `#848484` | `default` |
| `$semantic-color-icon-default` | `var(--muix-semantic-color-icon-default)` | `var(--muix-base-color-neutral-coolgray-700)` | `#343434` | `default` |
| `$semantic-color-border-error` | `var(--muix-semantic-color-border-error)` | `var(--muix-base-color-accent-red-500)` | `#fd493f` | `default` |
| `$semantic-color-border-disabled` | `var(--muix-semantic-color-border-disabled)` | `var(--muix-base-color-neutral-coolgray-300)` | `#d2d2d2` | `default` |
| `$semantic-color-border-focused` | `var(--muix-semantic-color-border-focused)` | `var(--muix-base-color-accent-cobaltblue-300)` | `#3982ef` | `default` |
| `$semantic-color-border-hovered` | `var(--muix-semantic-color-border-hovered)` | `var(--muix-base-color-neutral-coolgray-500)` | `#848484` | `default` |
| `$semantic-color-border-subtle` | `var(--muix-semantic-color-border-subtle)` | `var(--muix-base-color-neutral-coolgray-200)` | `#dfdfdf` | `default` |
| `$semantic-color-border-default` | `var(--muix-semantic-color-border-default)` | `var(--muix-base-color-neutral-coolgray-300)` | `#d2d2d2` | `default` |
| `$semantic-color-text-link-pressed` | `var(--muix-semantic-color-text-link-pressed)` | `var(--muix-base-color-accent-cobaltblue-700)` | `#003ec2` | `default` |
| `$semantic-color-text-link-default` | `var(--muix-semantic-color-text-link-default)` | `var(--muix-base-color-accent-cobaltblue-400)` | `#376cf2` | `default` |
| `$semantic-color-text-accent-violet` | `var(--muix-semantic-color-text-accent-violet)` | `var(--muix-base-color-accent-violet-500)` | `#6358d5` | `default` |
| `$semantic-color-text-accent-purple` | `var(--muix-semantic-color-text-accent-purple)` | `var(--muix-base-color-accent-purple-500)` | `#ad3e99` | `default` |
| `$semantic-color-text-accent-pink` | `var(--muix-semantic-color-text-accent-pink)` | `var(--muix-base-color-accent-pink-500)` | `#ef2e62` | `default` |
| `$semantic-color-text-accent-orange` | `var(--muix-semantic-color-text-accent-orange)` | `var(--muix-base-color-accent-orange-500)` | `#f46b1d` | `default` |
| `$semantic-color-text-accent-gold` | `var(--muix-semantic-color-text-accent-gold)` | `var(--muix-base-color-accent-gold-500)` | `#d0a02a` | `default` |
| `$semantic-color-text-accent-olivegreen` | `var(--muix-semantic-color-text-accent-olivegreen)` | `var(--muix-base-color-accent-olivegreen-500)` | `#a3c62f` | `default` |
| `$semantic-color-text-accent-springgreen` | `var(--muix-semantic-color-text-accent-springgreen)` | `var(--muix-base-color-accent-springgreen-500)` | `#5dcd47` | `default` |
| `$semantic-color-text-accent-cyan` | `var(--muix-semantic-color-text-accent-cyan)` | `var(--muix-base-color-accent-cyan-500)` | `#00b6c7` | `default` |
| `$semantic-color-text-discovery` | `var(--muix-semantic-color-text-discovery)` | `var(--muix-base-color-accent-skyblue-500)` | `#2ca4fb` | `default` |
| `$semantic-color-text-warning` | `var(--muix-semantic-color-text-warning)` | `var(--muix-base-color-accent-yellow-500)` | `#f5c000` | `default` |
| `$semantic-color-text-error` | `var(--muix-semantic-color-text-error)` | `var(--muix-base-color-accent-red-500)` | `#fd493f` | `default` |
| `$semantic-color-text-disabled` | `var(--muix-semantic-color-text-disabled)` | `var(--muix-base-color-neutral-coolgray-300)` | `#d2d2d2` | `default` |
| `$semantic-color-text-inverse-disabled` | `var(--muix-semantic-color-text-inverse-disabled)` | `var(--muix-base-color-neutral-coolgray-600)` | `#474747` | `default` |
| `$semantic-color-text-inverse-default` | `var(--muix-semantic-color-text-inverse-default)` | `var(--muix-base-color-neutral-coolgray-white)` | `#ffffff` | `default` |
| `$semantic-color-text-brand` | `var(--muix-semantic-color-text-brand)` | `var(--muix-base-color-accent-cobaltblue-400)` | `#376cf2` | `default` |
| `$semantic-color-text-selected` | `var(--muix-semantic-color-text-selected)` | `var(--muix-base-color-accent-cobaltblue-400)` | `#376cf2` | `default` |
| `$semantic-color-text-subtlest` | `var(--muix-semantic-color-text-subtlest)` | `var(--muix-base-color-neutral-coolgray-400)` | `#aeaeae` | `default` |
| `$semantic-color-text-subtle` | `var(--muix-semantic-color-text-subtle)` | `var(--muix-base-color-neutral-coolgray-500)` | `#848484` | `default` |
| `$semantic-color-text-bolder` | `var(--muix-semantic-color-text-bolder)` | `var(--muix-base-color-neutral-coolgray-800)` | `#191919` | `default` |
| `$semantic-color-text-default` | `var(--muix-semantic-color-text-default)` | `var(--muix-base-color-neutral-coolgray-700)` | `#343434` | `default` |
| `$semantic-color-background-disabled` | `var(--muix-semantic-color-background-disabled)` | `var(--muix-base-color-neutral-coolgray-50)` | `#f0f0f0` | `default` |
| `$semantic-color-background-blanket` | `var(--muix-semantic-color-background-blanket)` | `var(--muix-base-color-neutral-coolgray-700a)` | `rgba(51, 52, 54, 0.5)` | `default` |
| `$semantic-color-background-sunken` | `var(--muix-semantic-color-background-sunken)` | `var(--muix-base-color-neutral-coolgray-25)` | `#f5f5f5` | `default` |
| `$semantic-color-background-selectedhovered` | `var(--muix-semantic-color-background-selectedhovered)` | `var(--muix-base-color-accent-cobaltblue-50)` | `#e0eeff` | `default` |
| `$semantic-color-background-selected` | `var(--muix-semantic-color-background-selected)` | `var(--muix-base-color-accent-cobaltblue-25)` | `#eef5fb` | `default` |
| `$semantic-color-background-hovered` | `var(--muix-semantic-color-background-hovered)` | `var(--muix-base-color-neutral-coolgray-25)` | `#f5f5f5` | `default` |
