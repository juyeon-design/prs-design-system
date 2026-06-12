# PRS 디자인 시스템

PRS 제품 개발 시 Claude Code 바이브코딩에 적용되는 디자인 시스템 참조 파일 모음입니다.
이 레포를 로컬에 받으면 Claude Code가 자동으로 읽고 디자인 시스템을 적용합니다.

---

## 파일 구조

```
~/claude/PRS/
│
├── CLAUDE.md                                    # Claude Code 자동 적용 규칙 (핵심)
├── README.md                                    # 이 파일
│
├── .claude/
│   └── skills/
│       ├── figma-to-code/
│       │   └── SKILL.md                         # Figma → 코드 변환
│       └── spec-to-code/
│           ├── SKILL.md                         # 화면 설계 → 코드 진입점
│           ├── screen-types/
│           │   ├── index.md                     # 화면 유형 분류 라우터
│           │   ├── 01-list-table.md
│           │   ├── 02-card-view.md
│           │   ├── 03-detail.md ~ 09-modal.md
│           └── patterns/
│               └── empty-state.md               # 공통 Empty State 패턴
│
├── PRS/                                         # PRS 전용 — "무엇을 만들지"
│   ├── components.md                            # 34개 컴포넌트 정의 + PRD 번역 테이블
│   └── prs-tokens.md                            # PRS 전용 토큰 요약 (hex + 토큰명)
│
└── tokens/                                      # 디자인 시스템 토큰 — "어떻게 코드로 쓸지"
    ├── common-rules.md                          # ★ 공통 디자인 시스템 규칙 (레이아웃/색상/버튼/Edge Case)
    ├── figma-variable-mapping.md                # Figma MCP 변수 → Tailwind 클래스
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

| 폴더/파일 | 역할 | AI가 참조하는 시점 |
|----------|------|-----------------|
| `figma-to-code/SKILL.md` | Figma URL → 코드 변환 파이프라인 | Figma URL 제공 시 |
| `spec-to-code/SKILL.md` | 디스크립션/와이어프레임 → 코드 파이프라인 | Figma 없이 화면 요청 시 |
| `spec-to-code/screen-types/index.md` | 화면 유형 분류 라우터 | 화면 유형 확정 시 |
| `spec-to-code/screen-types/*.md` | 유형별 상세 가이드 (01~09) | 유형 확정 후 해당 파일만 |
| `spec-to-code/patterns/empty-state.md` | 공통 Empty State 패턴 | Empty State 구현 시 |
| `tokens/common-rules.md` | 공통 디자인 시스템 규칙 (두 스킬이 공유) | 코딩 시작 전 항상 |
| `PRS/` | 어떤 컴포넌트 쓸지, PRD 번역 | STEP 2 컴포넌트 선택 시 |
| `tokens/figma-variable-mapping.md` | Figma MCP 힌트 코드 → Tailwind 변환 | Figma 작업 시 |
| `tokens/*.md` | 전체 토큰 → Tailwind alias 매핑 | 토큰 매핑 시 |

---

## 설치

```bash
git clone https://github.com/juyeon-design/prs-design-system.git ~/claude/PRS
```

> `~/claude/PRS` 경로에 받아야 CLAUDE.md와 Skill이 자동으로 적용됩니다.

---

## 사용법

설치 후 해당 프로젝트 폴더에서 Claude Code를 실행하면 됩니다.

### 입력 유형별 자동 분기

| 입력 | 사용 스킬 | 동작 |
|------|---------|------|
| Figma URL | `figma-to-code` | Figma MCP로 디자인 읽기 → 토큰 변환 → 코드 생성 |
| 와이어프레임 + 설명 | `spec-to-code` | 이미지 분석 → 화면 유형 확정 → 컴포넌트 선택 |
| 텍스트 설명만 | `spec-to-code` | 화면 유형 확정 → 컴포넌트 세트 자동 적용 |

### 공통 적용 규칙 (입력 유형 무관)

- 작업 전 요구사항 명확화 (왜 만드는지, 성공 기준이 뭔지 먼저 확인)
- 컴포넌트 API 우선 (`@inax-prs/design-system` → `shadcn/ui` → Tailwind 토큰)
- hex 단독 코딩 금지 (참조용으로만 사용)
- Edge Case (Loading Skeleton / Empty State / Error) 필수 구현
- `cn()` 클래스 병합, 화살표 함수형 컴포넌트, `lucide-react` 신규 추가 금지

---

## 업데이트

```bash
cd ~/claude/PRS && git pull
```

---

## 문의

이주연 · PRS 디자인 시스템 관련 문의는 팀즈로 연락해주세요.
