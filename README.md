# PRS 디자인 시스템

PRS 제품 개발 시 Claude Code 바이브코딩에 적용되는 디자인 시스템 참조 파일 모음입니다.
이 레포를 로컬에 받으면 Claude Code가 자동으로 읽고 디자인 시스템을 적용합니다.

---

## 파일 구조

```
~/claude/
│
├── CLAUDE.md                                    # Claude Code 자동 적용 규칙 (핵심)
├── README.md                                    # 이 파일
│
├── .claude/
│   └── skills/
│       └── prs-screen/
│           └── SKILL.md                         # 통합 바이브코딩 가이드
│                                                # (Figma / 와이어프레임 / 디스크립션 케이스별 분기)
│
├── PRS/                                         # PRS 전용 — "무엇을 만들지"
│   ├── components.md                            # 34개 컴포넌트 정의 + PRD 번역 테이블
│   └── prs-tokens.md                            # PRS 전용 토큰 요약 (hex + 토큰명)
│
└── tokens/                                      # 디자인 시스템 토큰 — "어떻게 코드로 쓸지"
    ├── figma-variable-mapping.md                # ★ Figma MCP 변수 → Tailwind 클래스 (핵심)
    ├── tailwind-color-alias-mapping.md          # 색상 토큰 → Tailwind alias 전체
    ├── tailwind-dimension-alias-mapping.md      # 간격·크기·radius → Tailwind alias
    ├── tailwind-style-utility-alias-mapping.md  # shadow·typography Tailwind utility
    ├── app-theme-tokens.md                      # shadcn 호환 테마 토큰
    ├── base-color-tokens.md                     # 전체 컬러 팔레트 (resolved hex값)
    ├── semantic-color-tokens.md                 # semantic 토큰 (background/text/border/icon)
    ├── component-color-tokens.md                # 컴포넌트 레벨 색상 토큰
    ├── base-dimension-tokens.md                 # spacing / size / radius
    ├── shadow-tokens.md                         # elevation/shadow 내부 변수
    └── typography-tokens.md                     # 폰트·사이즈·줄높이·두께
```

---

## 폴더별 역할

| 폴더 | 역할 | AI가 참조하는 시점 |
|------|------|-----------------|
| `SKILL.md` | 파이프라인 진입점 — 케이스 분기 + 어느 파일 볼지 안내 | 항상 제일 먼저 |
| `PRS/` | 어떤 컴포넌트 쓸지, 어떤 화면 유형인지 결정 | STEP 1~2 |
| `tokens/figma-variable-mapping.md` | Figma MCP 힌트 코드 → Tailwind 클래스 변환 | Figma URL 있을 때 |
| `tokens/*.md` | 전체 토큰 → Tailwind alias 매핑 + resolved hex값 | STEP 3 토큰 매핑 시 |

---

## 설치

```bash
git clone https://github.com/juyeon-design/prs-design-system.git ~/claude
```

> `~/claude` 경로에 받아야 CLAUDE.md와 Skill이 자동으로 적용됩니다.

---

## 사용법

설치 후 해당 프로젝트 폴더에서 Claude Code를 실행하면 됩니다.
CLAUDE.md를 Claude Code가 자동으로 읽어 아래 규칙이 적용됩니다.

### 입력 유형별 자동 분기

| 입력 | 동작 |
|------|------|
| Figma URL 제공 | Figma MCP로 디자인 읽기 → `tokens/figma-variable-mapping.md`로 토큰 변환 |
| 와이어프레임 이미지 + 설명 | 이미지 분석 → 컴포넌트 매핑 → 디자인 시스템 적용 |
| 텍스트 설명만 | 화면 유형 확정 → 컴포넌트 세트 자동 적용 |

### 공통 적용 규칙 (입력 유형 무관)

- 작업 전 요구사항 명확화 (왜 만드는지, 성공 기준이 뭔지 먼저 확인)
- PRS 디자인 토큰 (색상, 타이포, 스페이싱) 자동 적용
- hex 단독 사용 금지 / 토큰명 + Tailwind alias 병기
- Primary 버튼 `#343434` / Accent 버튼 `#6f64dd` (AI 기능 전용)
- Edge Case (Loading Skeleton / Empty State / Error) 필수 구현
- `cn()` 클래스 병합, 화살표 함수형 컴포넌트, `lucide-react` 신규 추가 금지

---

## 업데이트

```bash
cd ~/claude && git pull
```

---

## 문의

이주연 · PRS 디자인 시스템 관련 문의는 팀즈로 연락해주세요.
