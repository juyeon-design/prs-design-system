# prs-vibe-test

PRS 바이브코딩 조건별 실험 결과를 기록하는 테스트 레포입니다.
실험 결과가 좋으면 [prs-design-system](https://github.com/juyeon-design/prs-design-system)에 반영합니다.

---

## 폴더 구조

```
prs-vibe-test/
├── Figma+md+SKILL/       # Figma URL + 디자인 시스템 md + 이주연 SKILL
├── Figma+md/             # Figma URL + 디자인 시스템 md (SKILL 없음)
├── SKILL+description/    # 이주연 SKILL + 텍스트 디스크립션만 (Figma 없음)
├── figma-to-code/        # 개발자 SKILL (figma-to-code) 단독 조건
└── SKILL-v2/             # 최종 통합 SKILL (이주연 + 개발자 통합본)
```

---

## 실험 기록 방법

각 폴더 안에 아래 형식으로 기록합니다.

```
{폴더명}/
├── input/       # 입력값 (Figma URL, 디스크립션, 스크린샷 등)
├── output/      # Claude Code 결과물 (코드, 스크린샷)
└── review.md    # 실험 리뷰
```

**review.md 템플릿**

```markdown
## 실험 조건
- 날짜:
- 화면 유형:
- 입력: Figma URL / 와이어프레임 / 디스크립션
- 사용 파일: SKILL.md / components.md / prs-tokens.md / tokens/

## 결과 평가
- 토큰 적용 정확도: ★★★★★
- 컴포넌트 선택 적절성: ★★★★★
- Edge Case 구현 여부: ✅ / ❌
- 레이아웃 일치도: ★★★★★

## 잘 된 점

## 아쉬운 점

## 운영 레포 반영 여부
- [ ] 반영 필요 없음
- [ ] prs-design-system 업데이트 필요 → 내용:
```

---

## 실험 조건별 특징 요약

| 조건 | 토큰 정확도 | 컴포넌트 선택 | 비고 |
|------|-----------|-------------|------|
| Figma+md+SKILL | — | — | 기록 전 |
| Figma+md | — | — | 기록 전 |
| SKILL+description | — | — | 기록 전 |
| figma-to-code | — | — | 기록 전 |
| SKILL-v2 | — | — | 기록 전 |
---

## 문의

이주연 · 팀즈로 연락해주세요.