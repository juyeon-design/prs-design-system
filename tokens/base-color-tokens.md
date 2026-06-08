# Base Color Tokens

기초 색상 팔레트 토큰입니다. semantic/component 토큰의 참조 기반으로 사용합니다.

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
| `$base-color-neutral-warmgray-25a` | `var(--muix-base-color-neutral-warmgray-25a)` | `rgba(246, 245, 240, 0.15)` | `rgba(246, 245, 240, 0.15)` | `default` |
| `$base-color-neutral-warmgray-700a` | `var(--muix-base-color-neutral-warmgray-700a)` | `rgba(36, 36, 34, 0.5)` | `rgba(36, 36, 34, 0.5)` | `default` |
| `$base-color-neutral-warmgray-800a` | `var(--muix-base-color-neutral-warmgray-800a)` | `rgba(27, 27, 24, 0.5)` | `rgba(27, 27, 24, 0.5)` | `default` |
| `$base-color-neutral-warmgray-black` | `var(--muix-base-color-neutral-warmgray-black)` | `#000000` | `#000000` | `default` |
| `$base-color-neutral-warmgray-white` | `var(--muix-base-color-neutral-warmgray-white)` | `#ffffff` | `#ffffff` | `default` |
| `$base-color-neutral-warmgray-25` | `var(--muix-base-color-neutral-warmgray-25)` | `#f6f5f0` | `#f6f5f0` | `default` |
| `$base-color-neutral-warmgray-50` | `var(--muix-base-color-neutral-warmgray-50)` | `#f1f0ea` | `#f1f0ea` | `default` |
| `$base-color-neutral-warmgray-100` | `var(--muix-base-color-neutral-warmgray-100)` | `#edede8` | `#edede8` | `default` |
| `$base-color-neutral-warmgray-200` | `var(--muix-base-color-neutral-warmgray-200)` | `#e2e2df` | `#e2e2df` | `default` |
| `$base-color-neutral-warmgray-300` | `var(--muix-base-color-neutral-warmgray-300)` | `#cfcec9` | `#cfcec9` | `default` |
| `$base-color-neutral-warmgray-400` | `var(--muix-base-color-neutral-warmgray-400)` | `#b0afac` | `#b0afac` | `default` |
| `$base-color-neutral-warmgray-500` | `var(--muix-base-color-neutral-warmgray-500)` | `#81807c` | `#81807c` | `default` |
| `$base-color-neutral-warmgray-600` | `var(--muix-base-color-neutral-warmgray-600)` | `#484846` | `#484846` | `default` |
| `$base-color-neutral-warmgray-700` | `var(--muix-base-color-neutral-warmgray-700)` | `#242422` | `#242422` | `default` |
| `$base-color-neutral-warmgray-800` | `var(--muix-base-color-neutral-warmgray-800)` | `#1b1b18` | `#1b1b18` | `default` |
| `$base-color-accent-violet-25` | `var(--muix-base-color-accent-violet-25)` | `#f2f1fe` | `#f2f1fe` | `default` |
| `$base-color-accent-violet-50` | `var(--muix-base-color-accent-violet-50)` | `#dfdcfd` | `#dfdcfd` | `default` |
| `$base-color-accent-violet-100` | `var(--muix-base-color-accent-violet-100)` | `#d0cbfb` | `#d0cbfb` | `default` |
| `$base-color-accent-violet-200` | `var(--muix-base-color-accent-violet-200)` | `#a7a0ef` | `#a7a0ef` | `default` |
| `$base-color-accent-violet-300` | `var(--muix-base-color-accent-violet-300)` | `#8b82e9` | `#8b82e9` | `default` |
| `$base-color-accent-violet-400` | `var(--muix-base-color-accent-violet-400)` | `#6f64dd` | `#6f64dd` | `default` |
| `$base-color-accent-violet-500` | `var(--muix-base-color-accent-violet-500)` | `#6358d5` | `#6358d5` | `default` |
| `$base-color-accent-violet-600` | `var(--muix-base-color-accent-violet-600)` | `#574ccd` | `#574ccd` | `default` |
| `$base-color-accent-violet-700` | `var(--muix-base-color-accent-violet-700)` | `#4a40b5` | `#4a40b5` | `default` |
| `$base-color-accent-violet-800` | `var(--muix-base-color-accent-violet-800)` | `#3f369a` | `#3f369a` | `default` |
| `$base-color-accent-purple-25` | `var(--muix-base-color-accent-purple-25)` | `#f9f0f8` | `#f9f0f8` | `default` |
| `$base-color-accent-purple-50` | `var(--muix-base-color-accent-purple-50)` | `#f1daed` | `#f1daed` | `default` |
| `$base-color-accent-purple-100` | `var(--muix-base-color-accent-purple-100)` | `#ebcbe6` | `#ebcbe6` | `default` |
| `$base-color-accent-purple-200` | `var(--muix-base-color-accent-purple-200)` | `#d590c9` | `#d590c9` | `default` |
| `$base-color-accent-purple-300` | `var(--muix-base-color-accent-purple-300)` | `#c76bb7` | `#c76bb7` | `default` |
| `$base-color-accent-purple-400` | `var(--muix-base-color-accent-purple-400)` | `#b946a5` | `#b946a5` | `default` |
| `$base-color-accent-purple-500` | `var(--muix-base-color-accent-purple-500)` | `#ad3e99` | `#ad3e99` | `default` |
| `$base-color-accent-purple-600` | `var(--muix-base-color-accent-purple-600)` | `#a1368e` | `#a1368e` | `default` |
| `$base-color-accent-purple-700` | `var(--muix-base-color-accent-purple-700)` | `#942b82` | `#942b82` | `default` |
| `$base-color-accent-purple-800` | `var(--muix-base-color-accent-purple-800)` | `#832372` | `#832372` | `default` |
| `$base-color-accent-pink-25` | `var(--muix-base-color-accent-pink-25)` | `#fff0f3` | `#fff0f3` | `default` |
| `$base-color-accent-pink-50` | `var(--muix-base-color-accent-pink-50)` | `#fedbe4` | `#fedbe4` | `default` |
| `$base-color-accent-pink-100` | `var(--muix-base-color-accent-pink-100)` | `#fec8d6` | `#fec8d6` | `default` |
| `$base-color-accent-pink-200` | `var(--muix-base-color-accent-pink-200)` | `#fd93af` | `#fd93af` | `default` |
| `$base-color-accent-pink-300` | `var(--muix-base-color-accent-pink-300)` | `#fd6f95` | `#fd6f95` | `default` |
| `$base-color-accent-pink-400` | `var(--muix-base-color-accent-pink-400)` | `#fc4b7a` | `#fc4b7a` | `default` |
| `$base-color-accent-pink-500` | `var(--muix-base-color-accent-pink-500)` | `#ef2e62` | `#ef2e62` | `default` |
| `$base-color-accent-pink-600` | `var(--muix-base-color-accent-pink-600)` | `#e42558` | `#e42558` | `default` |
| `$base-color-accent-pink-700` | `var(--muix-base-color-accent-pink-700)` | `#c61e4b` | `#c61e4b` | `default` |
| `$base-color-accent-pink-800` | `var(--muix-base-color-accent-pink-800)` | `#b0274b` | `#b0274b` | `default` |
| `$base-color-accent-red-25` | `var(--muix-base-color-accent-red-25)` | `#fff5f5` | `#fff5f5` | `default` |
| `$base-color-accent-red-50` | `var(--muix-base-color-accent-red-50)` | `#ffe7e5` | `#ffe7e5` | `default` |
| `$base-color-accent-red-100` | `var(--muix-base-color-accent-red-100)` | `#ffd8d6` | `#ffd8d6` | `default` |
| `$base-color-accent-red-200` | `var(--muix-base-color-accent-red-200)` | `#ff9e99` | `#ff9e99` | `default` |
| `$base-color-accent-red-300` | `var(--muix-base-color-accent-red-300)` | `#fd8882` | `#fd8882` | `default` |
| `$base-color-accent-red-400` | `var(--muix-base-color-accent-red-400)` | `#fc675f` | `#fc675f` | `default` |
| `$base-color-accent-red-500` | `var(--muix-base-color-accent-red-500)` | `#fd493f` | `#fd493f` | `default` |
| `$base-color-accent-red-600` | `var(--muix-base-color-accent-red-600)` | `#f1392c` | `#f1392c` | `default` |
| `$base-color-accent-red-700` | `var(--muix-base-color-accent-red-700)` | `#e42a20` | `#e42a20` | `default` |
| `$base-color-accent-red-800` | `var(--muix-base-color-accent-red-800)` | `#cb2620` | `#cb2620` | `default` |
| `$base-color-accent-orange-25` | `var(--muix-base-color-accent-orange-25)` | `#fff5f0` | `#fff5f0` | `default` |
| `$base-color-accent-orange-50` | `var(--muix-base-color-accent-orange-50)` | `#fee5d9` | `#fee5d9` | `default` |
| `$base-color-accent-orange-100` | `var(--muix-base-color-accent-orange-100)` | `#fed6c3` | `#fed6c3` | `default` |
| `$base-color-accent-orange-200` | `var(--muix-base-color-accent-orange-200)` | `#fdb28c` | `#fdb28c` | `default` |
| `$base-color-accent-orange-300` | `var(--muix-base-color-accent-orange-300)` | `#fd9966` | `#fd9966` | `default` |
| `$base-color-accent-orange-400` | `var(--muix-base-color-accent-orange-400)` | `#ff7628` | `#ff7628` | `default` |
| `$base-color-accent-orange-500` | `var(--muix-base-color-accent-orange-500)` | `#f46b1d` | `#f46b1d` | `default` |
| `$base-color-accent-orange-600` | `var(--muix-base-color-accent-orange-600)` | `#e95907` | `#e95907` | `default` |
| `$base-color-accent-orange-700` | `var(--muix-base-color-accent-orange-700)` | `#c74800` | `#c74800` | `default` |
| `$base-color-accent-orange-800` | `var(--muix-base-color-accent-orange-800)` | `#ad3f00` | `#ad3f00` | `default` |
| `$base-color-accent-gold-25` | `var(--muix-base-color-accent-gold-25)` | `#faf5e5` | `#faf5e5` | `default` |
| `$base-color-accent-gold-50` | `var(--muix-base-color-accent-gold-50)` | `#f8eed6` | `#f8eed6` | `default` |
| `$base-color-accent-gold-100` | `var(--muix-base-color-accent-gold-100)` | `#f2e0b5` | `#f2e0b5` | `default` |
| `$base-color-accent-gold-200` | `var(--muix-base-color-accent-gold-200)` | `#eacc80` | `#eacc80` | `default` |
| `$base-color-accent-gold-300` | `var(--muix-base-color-accent-gold-300)` | `#e4bc5a` | `#e4bc5a` | `default` |
| `$base-color-accent-gold-400` | `var(--muix-base-color-accent-gold-400)` | `#ddab31` | `#ddab31` | `default` |
| `$base-color-accent-gold-500` | `var(--muix-base-color-accent-gold-500)` | `#d0a02a` | `#d0a02a` | `default` |
| `$base-color-accent-gold-600` | `var(--muix-base-color-accent-gold-600)` | `#bc9024` | `#bc9024` | `default` |
| `$base-color-accent-gold-700` | `var(--muix-base-color-accent-gold-700)` | `#ad821b` | `#ad821b` | `default` |
| `$base-color-accent-gold-800` | `var(--muix-base-color-accent-gold-800)` | `#9c7517` | `#9c7517` | `default` |
| `$base-color-accent-yellow-25` | `var(--muix-base-color-accent-yellow-25)` | `#fffadb` | `#fffadb` | `default` |
| `$base-color-accent-yellow-50` | `var(--muix-base-color-accent-yellow-50)` | `#fff6bd` | `#fff6bd` | `default` |
| `$base-color-accent-yellow-100` | `var(--muix-base-color-accent-yellow-100)` | `#fff18f` | `#fff18f` | `default` |
| `$base-color-accent-yellow-200` | `var(--muix-base-color-accent-yellow-200)` | `#ffe566` | `#ffe566` | `default` |
| `$base-color-accent-yellow-300` | `var(--muix-base-color-accent-yellow-300)` | `#ffdb4d` | `#ffdb4d` | `default` |
| `$base-color-accent-yellow-400` | `var(--muix-base-color-accent-yellow-400)` | `#ffcf0f` | `#ffcf0f` | `default` |
| `$base-color-accent-yellow-500` | `var(--muix-base-color-accent-yellow-500)` | `#f5c000` | `#f5c000` | `default` |
| `$base-color-accent-yellow-600` | `var(--muix-base-color-accent-yellow-600)` | `#e0a500` | `#e0a500` | `default` |
| `$base-color-accent-yellow-700` | `var(--muix-base-color-accent-yellow-700)` | `#c79200` | `#c79200` | `default` |
| `$base-color-accent-yellow-800` | `var(--muix-base-color-accent-yellow-800)` | `#b28000` | `#b28000` | `default` |
| `$base-color-accent-olivegreen-25` | `var(--muix-base-color-accent-olivegreen-25)` | `#f7fbeb` | `#f7fbeb` | `default` |
| `$base-color-accent-olivegreen-50` | `var(--muix-base-color-accent-olivegreen-50)` | `#eff6d7` | `#eff6d7` | `default` |
| `$base-color-accent-olivegreen-100` | `var(--muix-base-color-accent-olivegreen-100)` | `#e2eeb9` | `#e2eeb9` | `default` |
| `$base-color-accent-olivegreen-200` | `var(--muix-base-color-accent-olivegreen-200)` | `#cae17f` | `#cae17f` | `default` |
| `$base-color-accent-olivegreen-300` | `var(--muix-base-color-accent-olivegreen-300)` | `#bdd95f` | `#bdd95f` | `default` |
| `$base-color-accent-olivegreen-400` | `var(--muix-base-color-accent-olivegreen-400)` | `#acd037` | `#acd037` | `default` |
| `$base-color-accent-olivegreen-500` | `var(--muix-base-color-accent-olivegreen-500)` | `#a3c62f` | `#a3c62f` | `default` |
| `$base-color-accent-olivegreen-600` | `var(--muix-base-color-accent-olivegreen-600)` | `#8ead2a` | `#8ead2a` | `default` |
| `$base-color-accent-olivegreen-700` | `var(--muix-base-color-accent-olivegreen-700)` | `#7e9a23` | `#7e9a23` | `default` |
| `$base-color-accent-olivegreen-800` | `var(--muix-base-color-accent-olivegreen-800)` | `#708820` | `#708820` | `default` |
| `$base-color-accent-springgreen-25` | `var(--muix-base-color-accent-springgreen-25)` | `#effbed` | `#effbed` | `default` |
| `$base-color-accent-springgreen-50` | `var(--muix-base-color-accent-springgreen-50)` | `#e1f7dc` | `#e1f7dc` | `default` |
| `$base-color-accent-springgreen-100` | `var(--muix-base-color-accent-springgreen-100)` | `#c6efbd` | `#c6efbd` | `default` |
| `$base-color-accent-springgreen-200` | `var(--muix-base-color-accent-springgreen-200)` | `#a2e594` | `#a2e594` | `default` |
| `$base-color-accent-springgreen-300` | `var(--muix-base-color-accent-springgreen-300)` | `#85dd74` | `#85dd74` | `default` |
| `$base-color-accent-springgreen-400` | `var(--muix-base-color-accent-springgreen-400)` | `#67d551` | `#67d551` | `default` |
| `$base-color-accent-springgreen-500` | `var(--muix-base-color-accent-springgreen-500)` | `#5dcd47` | `#5dcd47` | `default` |
| `$base-color-accent-springgreen-600` | `var(--muix-base-color-accent-springgreen-600)` | `#52b13f` | `#52b13f` | `default` |
| `$base-color-accent-springgreen-700` | `var(--muix-base-color-accent-springgreen-700)` | `#50a140` | `#50a140` | `default` |
| `$base-color-accent-springgreen-800` | `var(--muix-base-color-accent-springgreen-800)` | `#428f33` | `#428f33` | `default` |
| `$base-color-accent-green-25` | `var(--muix-base-color-accent-green-25)` | `#e6fef0` | `#e6fef0` | `default` |
| `$base-color-accent-green-50` | `var(--muix-base-color-accent-green-50)` | `#d8f8e3` | `#d8f8e3` | `default` |
| `$base-color-accent-green-100` | `var(--muix-base-color-accent-green-100)` | `#c4f2d4` | `#c4f2d4` | `default` |
| `$base-color-accent-green-200` | `var(--muix-base-color-accent-green-200)` | `#7de3a3` | `#7de3a3` | `default` |
| `$base-color-accent-green-300` | `var(--muix-base-color-accent-green-300)` | `#46d88a` | `#46d88a` | `default` |
| `$base-color-accent-green-400` | `var(--muix-base-color-accent-green-400)` | `#0ecd6d` | `#0ecd6d` | `default` |
| `$base-color-accent-green-500` | `var(--muix-base-color-accent-green-500)` | `#08bf52` | `#08bf52` | `default` |
| `$base-color-accent-green-600` | `var(--muix-base-color-accent-green-600)` | `#05b341` | `#05b341` | `default` |
| `$base-color-accent-green-700` | `var(--muix-base-color-accent-green-700)` | `#04a53d` | `#04a53d` | `default` |
| `$base-color-accent-green-800` | `var(--muix-base-color-accent-green-800)` | `rgba(4, 149, 50, 0.98)` | `rgba(4, 149, 50, 0.98)` | `default` |
| `$base-color-accent-teal-25` | `var(--muix-base-color-accent-teal-25)` | `#e6fcff` | `#e6fcff` | `default` |
| `$base-color-accent-teal-50` | `var(--muix-base-color-accent-teal-50)` | `#d5fbee` | `#d5fbee` | `default` |
| `$base-color-accent-teal-100` | `var(--muix-base-color-accent-teal-100)` | `#bcf4e4` | `#bcf4e4` | `default` |
| `$base-color-accent-teal-200` | `var(--muix-base-color-accent-teal-200)` | `#63e6be` | `#63e6be` | `default` |
| `$base-color-accent-teal-300` | `var(--muix-base-color-accent-teal-300)` | `#38d9a9` | `#38d9a9` | `default` |
| `$base-color-accent-teal-400` | `var(--muix-base-color-accent-teal-400)` | `#20c997` | `#20c997` | `default` |
| `$base-color-accent-teal-500` | `var(--muix-base-color-accent-teal-500)` | `#12b886` | `#12b886` | `default` |
| `$base-color-accent-teal-600` | `var(--muix-base-color-accent-teal-600)` | `#0ca678` | `#0ca678` | `default` |
| `$base-color-accent-teal-700` | `var(--muix-base-color-accent-teal-700)` | `#099268` | `#099268` | `default` |
| `$base-color-accent-teal-800` | `var(--muix-base-color-accent-teal-800)` | `#087f5b` | `#087f5b` | `default` |
| `$base-color-accent-cyan-25` | `var(--muix-base-color-accent-cyan-25)` | `#e9fafb` | `#e9fafb` | `default` |
| `$base-color-accent-cyan-50` | `var(--muix-base-color-accent-cyan-50)` | `#ccf3f7` | `#ccf3f7` | `default` |
| `$base-color-accent-cyan-100` | `var(--muix-base-color-accent-cyan-100)` | `#b5eef3` | `#b5eef3` | `default` |
| `$base-color-accent-cyan-200` | `var(--muix-base-color-accent-cyan-200)` | `#67dbe6` | `#67dbe6` | `default` |
| `$base-color-accent-cyan-300` | `var(--muix-base-color-accent-cyan-300)` | `#34cfdd` | `#34cfdd` | `default` |
| `$base-color-accent-cyan-400` | `var(--muix-base-color-accent-cyan-400)` | `#01c3d5` | `#01c3d5` | `default` |
| `$base-color-accent-cyan-500` | `var(--muix-base-color-accent-cyan-500)` | `#00b6c7` | `#00b6c7` | `default` |
| `$base-color-accent-cyan-600` | `var(--muix-base-color-accent-cyan-600)` | `#009fad` | `#009fad` | `default` |
| `$base-color-accent-cyan-700` | `var(--muix-base-color-accent-cyan-700)` | `#00909d` | `#00909d` | `default` |
| `$base-color-accent-cyan-800` | `var(--muix-base-color-accent-cyan-800)` | `#007984` | `#007984` | `default` |
| `$base-color-accent-skyblue-25` | `var(--muix-base-color-accent-skyblue-25)` | `#f0f9ff` | `#f0f9ff` | `default` |
| `$base-color-accent-skyblue-50` | `var(--muix-base-color-accent-skyblue-50)` | `#e1f4ff` | `#e1f4ff` | `default` |
| `$base-color-accent-skyblue-100` | `var(--muix-base-color-accent-skyblue-100)` | `#ccecff` | `#ccecff` | `default` |
| `$base-color-accent-skyblue-200` | `var(--muix-base-color-accent-skyblue-200)` | `#83d1ff` | `#83d1ff` | `default` |
| `$base-color-accent-skyblue-300` | `var(--muix-base-color-accent-skyblue-300)` | `#52c0ff` | `#52c0ff` | `default` |
| `$base-color-accent-skyblue-400` | `var(--muix-base-color-accent-skyblue-400)` | `#33b2fe` | `#33b2fe` | `default` |
| `$base-color-accent-skyblue-500` | `var(--muix-base-color-accent-skyblue-500)` | `#2ca4fb` | `#2ca4fb` | `default` |
| `$base-color-accent-skyblue-600` | `var(--muix-base-color-accent-skyblue-600)` | `#2497f3` | `#2497f3` | `default` |
| `$base-color-accent-skyblue-700` | `var(--muix-base-color-accent-skyblue-700)` | `#1084f2` | `#1084f2` | `default` |
| `$base-color-accent-skyblue-800` | `var(--muix-base-color-accent-skyblue-800)` | `#0b6cd5` | `#0b6cd5` | `default` |
| `$base-color-accent-cobaltblue-25` | `var(--muix-base-color-accent-cobaltblue-25)` | `#eef5fb` | `#eef5fb` | `default` |
| `$base-color-accent-cobaltblue-50` | `var(--muix-base-color-accent-cobaltblue-50)` | `#e0eeff` | `#e0eeff` | `default` |
| `$base-color-accent-cobaltblue-100` | `var(--muix-base-color-accent-cobaltblue-100)` | `#cce2ff` | `#cce2ff` | `default` |
| `$base-color-accent-cobaltblue-200` | `var(--muix-base-color-accent-cobaltblue-200)` | `#93bbf6` | `#93bbf6` | `default` |
| `$base-color-accent-cobaltblue-300` | `var(--muix-base-color-accent-cobaltblue-300)` | `#3982ef` | `#3982ef` | `default` |
| `$base-color-accent-cobaltblue-400` | `var(--muix-base-color-accent-cobaltblue-400)` | `#376cf2` | `#376cf2` | `default` |
| `$base-color-accent-cobaltblue-500` | `var(--muix-base-color-accent-cobaltblue-500)` | `#1e5af0` | `#1e5af0` | `default` |
| `$base-color-accent-cobaltblue-600` | `var(--muix-base-color-accent-cobaltblue-600)` | `#174fde` | `#174fde` | `default` |
| `$base-color-accent-cobaltblue-700` | `var(--muix-base-color-accent-cobaltblue-700)` | `#003ec2` | `#003ec2` | `default` |
| `$base-color-accent-cobaltblue-800` | `var(--muix-base-color-accent-cobaltblue-800)` | `#0031ad` | `#0031ad` | `default` |
| `$base-color-neutral-coolgray-25a` | `var(--muix-base-color-neutral-coolgray-25a)` | `rgba(247, 247, 247, 0.15)` | `rgba(247, 247, 247, 0.15)` | `default` |
| `$base-color-neutral-coolgray-700a` | `var(--muix-base-color-neutral-coolgray-700a)` | `rgba(51, 52, 54, 0.5)` | `rgba(51, 52, 54, 0.5)` | `default` |
| `$base-color-neutral-coolgray-800a` | `var(--muix-base-color-neutral-coolgray-800a)` | `rgba(24, 25, 27, 0.5)` | `rgba(24, 25, 27, 0.5)` | `default` |
| `$base-color-neutral-coolgray-black` | `var(--muix-base-color-neutral-coolgray-black)` | `#000000` | `#000000` | `default` |
| `$base-color-neutral-coolgray-white` | `var(--muix-base-color-neutral-coolgray-white)` | `#ffffff` | `#ffffff` | `default` |
| `$base-color-neutral-coolgray-25` | `var(--muix-base-color-neutral-coolgray-25)` | `#f5f5f5` | `#f5f5f5` | `default` |
| `$base-color-neutral-coolgray-50` | `var(--muix-base-color-neutral-coolgray-50)` | `#f0f0f0` | `#f0f0f0` | `default` |
| `$base-color-neutral-coolgray-100` | `var(--muix-base-color-neutral-coolgray-100)` | `#eaeaea` | `#eaeaea` | `default` |
| `$base-color-neutral-coolgray-200` | `var(--muix-base-color-neutral-coolgray-200)` | `#dfdfdf` | `#dfdfdf` | `default` |
| `$base-color-neutral-coolgray-300` | `var(--muix-base-color-neutral-coolgray-300)` | `#d2d2d2` | `#d2d2d2` | `default` |
| `$base-color-neutral-coolgray-400` | `var(--muix-base-color-neutral-coolgray-400)` | `#aeaeae` | `#aeaeae` | `default` |
| `$base-color-neutral-coolgray-500` | `var(--muix-base-color-neutral-coolgray-500)` | `#848484` | `#848484` | `default` |
| `$base-color-neutral-coolgray-600` | `var(--muix-base-color-neutral-coolgray-600)` | `#474747` | `#474747` | `default` |
| `$base-color-neutral-coolgray-700` | `var(--muix-base-color-neutral-coolgray-700)` | `#343434` | `#343434` | `default` |
| `$base-color-neutral-coolgray-800` | `var(--muix-base-color-neutral-coolgray-800)` | `#191919` | `#191919` | `default` |
