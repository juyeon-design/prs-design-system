# [UIX] Design_Kit - Icon Reference

> Source: Figma `[UIX] Design_Kit`  
> Total: 415 icons (line 271 / filled 144)

---

## Naming Convention

```
icon_{name}_{type}

Types:
  _line   = outline style
  _filled = solid style
```

---

## 아이콘 규격 (Figma 원본 기준)

| 항목 | 값 |
|------|-----|
| 프레임 크기 | **20 × 20px** |
| 상하좌우 여백 | **약 4px** (19~20%) |
| 실제 벡터 영역 | **약 12 × 12px** |
| SVG viewBox | `0 0 20 20` |

---

## 프로토타입 사용 규칙

- `viewBox="0 0 20 20"` 고정 (Figma 원본 그리드)
- `width`/`height`는 사용 맥락에 따라:
  - `16px`: Body3 텍스트 옆 인라인 아이콘
  - `20px`: 기본 UI 아이콘 (버튼, 인풋)
  - `24px`: LNB 네비게이션 아이콘
- `fill: currentColor` 사용 → 부모 `color`로 제어

---

## SVG Icons

> 자주 쓰는 아이콘 path를 여기에 추가합니다.
> muix 라이브러리 소스에서 복사한 실제 path를 사용합니다.

<!-- 아이콘 추가 예시:
## icon_search_line
```html
<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="..." />
</svg>
```
-->
