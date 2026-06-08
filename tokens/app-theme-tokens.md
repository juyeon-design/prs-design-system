# App Theme Tokens

앱 테마 및 shadcn-compatible 토큰입니다.

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
| `$background` | `var(--background)` | `0 0% 100%` | `0 0% 100%` | `default` |
| `$background` | `var(--background)` | `222.2 84% 4.9%` | `222.2 84% 4.9%` | `dark` |
| `$foreground` | `var(--foreground)` | `222.2 84% 4.9%` | `222.2 84% 4.9%` | `default` |
| `$foreground` | `var(--foreground)` | `210 40% 98%` | `210 40% 98%` | `dark` |
| `$card` | `var(--card)` | `0 0% 100%` | `0 0% 100%` | `default` |
| `$card` | `var(--card)` | `222.2 84% 4.9%` | `222.2 84% 4.9%` | `dark` |
| `$card-foreground` | `var(--card-foreground)` | `222.2 84% 4.9%` | `222.2 84% 4.9%` | `default` |
| `$card-foreground` | `var(--card-foreground)` | `210 40% 98%` | `210 40% 98%` | `dark` |
| `$popover` | `var(--popover)` | `0 0% 100%` | `0 0% 100%` | `default` |
| `$popover` | `var(--popover)` | `222.2 84% 4.9%` | `222.2 84% 4.9%` | `dark` |
| `$popover-foreground` | `var(--popover-foreground)` | `222.2 84% 4.9%` | `222.2 84% 4.9%` | `default` |
| `$popover-foreground` | `var(--popover-foreground)` | `210 40% 98%` | `210 40% 98%` | `dark` |
| `$primary` | `var(--primary)` | `222.2 47.4% 11.2%` | `222.2 47.4% 11.2%` | `default` |
| `$primary` | `var(--primary)` | `210 40% 98%` | `210 40% 98%` | `dark` |
| `$primary-foreground` | `var(--primary-foreground)` | `210 40% 98%` | `210 40% 98%` | `default` |
| `$primary-foreground` | `var(--primary-foreground)` | `222.2 47.4% 11.2%` | `222.2 47.4% 11.2%` | `dark` |
| `$secondary` | `var(--secondary)` | `210 40% 96.1%` | `210 40% 96.1%` | `default` |
| `$secondary` | `var(--secondary)` | `217.2 32.6% 17.5%` | `217.2 32.6% 17.5%` | `dark` |
| `$secondary-foreground` | `var(--secondary-foreground)` | `222.2 47.4% 11.2%` | `222.2 47.4% 11.2%` | `default` |
| `$secondary-foreground` | `var(--secondary-foreground)` | `210 40% 98%` | `210 40% 98%` | `dark` |
| `$muted` | `var(--muted)` | `210 40% 96.1%` | `210 40% 96.1%` | `default` |
| `$muted` | `var(--muted)` | `217.2 32.6% 17.5%` | `217.2 32.6% 17.5%` | `dark` |
| `$muted-foreground` | `var(--muted-foreground)` | `215.4 16.3% 46.9%` | `215.4 16.3% 46.9%` | `default` |
| `$muted-foreground` | `var(--muted-foreground)` | `215 20.2% 65.1%` | `215 20.2% 65.1%` | `dark` |
| `$accent` | `var(--accent)` | `210 40% 96.1%` | `210 40% 96.1%` | `default` |
| `$accent` | `var(--accent)` | `217.2 32.6% 17.5%` | `217.2 32.6% 17.5%` | `dark` |
| `$accent-foreground` | `var(--accent-foreground)` | `222.2 47.4% 11.2%` | `222.2 47.4% 11.2%` | `default` |
| `$accent-foreground` | `var(--accent-foreground)` | `210 40% 98%` | `210 40% 98%` | `dark` |
| `$destructive` | `var(--destructive)` | `0 84.2% 60.2%` | `0 84.2% 60.2%` | `default` |
| `$destructive` | `var(--destructive)` | `0 62.8% 30.6%` | `0 62.8% 30.6%` | `dark` |
| `$destructive-foreground` | `var(--destructive-foreground)` | `210 40% 98%` | `210 40% 98%` | `default` |
| `$border` | `var(--border)` | `214.3 31.8% 91.4%` | `214.3 31.8% 91.4%` | `default` |
| `$border` | `var(--border)` | `217.2 32.6% 17.5%` | `217.2 32.6% 17.5%` | `dark` |
| `$input` | `var(--input)` | `214.3 31.8% 91.4%` | `214.3 31.8% 91.4%` | `default` |
| `$input` | `var(--input)` | `217.2 32.6% 17.5%` | `217.2 32.6% 17.5%` | `dark` |
| `$ring` | `var(--ring)` | `222.2 84% 4.9%` | `222.2 84% 4.9%` | `default` |
| `$ring` | `var(--ring)` | `212.7 26.8% 83.9%` | `212.7 26.8% 83.9%` | `dark` |
| `$chart-1` | `var(--chart-1)` | `oklch(0.646 0.222 41.116)` | `oklch(0.646 0.222 41.116)` | `default` |
| `$chart-1` | `var(--chart-1)` | `oklch(0.488 0.243 264.376)` | `oklch(0.488 0.243 264.376)` | `dark` |
| `$chart-2` | `var(--chart-2)` | `oklch(0.6 0.118 184.704)` | `oklch(0.6 0.118 184.704)` | `default` |
| `$chart-2` | `var(--chart-2)` | `oklch(0.696 0.17 162.48)` | `oklch(0.696 0.17 162.48)` | `dark` |
| `$chart-3` | `var(--chart-3)` | `oklch(0.398 0.07 227.392)` | `oklch(0.398 0.07 227.392)` | `default` |
| `$chart-3` | `var(--chart-3)` | `oklch(0.769 0.188 70.08)` | `oklch(0.769 0.188 70.08)` | `dark` |
| `$chart-4` | `var(--chart-4)` | `oklch(0.828 0.189 84.429)` | `oklch(0.828 0.189 84.429)` | `default` |
| `$chart-4` | `var(--chart-4)` | `oklch(0.627 0.265 303.9)` | `oklch(0.627 0.265 303.9)` | `dark` |
| `$chart-5` | `var(--chart-5)` | `oklch(0.769 0.188 70.08)` | `oklch(0.769 0.188 70.08)` | `default` |
| `$chart-5` | `var(--chart-5)` | `oklch(0.645 0.246 16.439)` | `oklch(0.645 0.246 16.439)` | `dark` |
| `$radius` | `var(--radius)` | `0.5rem` | `0.5rem` | `default` |
| `$brand` | `var(--brand)` | `oklch(0.623 0.214 259.815)` | `oklch(0.623 0.214 259.815)` | `default` |
| `$color-brand` | `var(--color-brand)` | `var(--brand)` | `oklch(0.623 0.214 259.815)` | `default` |

## Tailwind Alias Mapping

Tailwind alias를 사용하는 경우에도 최종적으로 같은 `$token-name` 또는 CSS variable로 연결합니다. 프로젝트에 Tailwind prefix가 있으면 실제 클래스에는 `tw-` prefix가 붙을 수 있습니다.
