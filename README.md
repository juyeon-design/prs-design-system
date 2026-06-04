# PRS Design System

PRS 제품 개발 시 Claude Code 바이브코딩에 적용되는 디자인 시스템 참조 파일 모음입니다.  
이 repo를 로컬에 받으면 Claude Code가 자동으로 읽고 디자인 시스템을 적용합니다.

---

## 파일 구조

```
├── CLAUDE.md              # Claude Code 자동 적용 규칙 (핵심)
├── PRS/
│   ├── prs-tokens.md      # PRS 전용 컬러·타이포·스페이싱·레이아웃 토큰
│   ├── components.md      # 컴포넌트 사용 기준 + PRD 번역 테이블
│   └── prs-skill.md       # Claude Code PRD → 화면 자동화 파이프라인
└── UIX/
    ├── base-color-tokens.md       # 전체 컬러 팔레트 (Single Source of Truth)
    ├── semantic-color-tokens.md   # 의미 기반 색상 토큰
    ├── component-color-tokens.md  # 컴포넌트 레벨 색상 토큰
    ├── base-dimension-tokens.md   # spacing, size, radius 토큰
    ├── typography-tokens.md       # 폰트, 사이즈, 줄높이, 두께
    ├── shadow-tokens.md           # elevation/shadow 토큰
    └── icon-kit.md                # 아이콘 목록 (415개)
```

---

## 설치

```bash
git clone https://github.com/juyeon-design/prs-design-system.git ~/claude
```

> `~/claude` 경로에 받아야 CLAUDE.md가 자동으로 적용됩니다.

---

## 사용법

설치 후 해당 프로젝트 폴더에서 Claude Code를 실행하면 됩니다.  
CLAUDE.md를 Claude Code가 자동으로 읽어 아래 규칙이 적용됩니다.

- PRS 디자인 토큰 (색상, 타이포, 스페이싱) 자동 적용
- 화면 작업 시 5단계 파이프라인 자동 실행
- hex 단독 사용 금지 / 토큰명 주석 병기
- Edge Case (Loading / Empty / Error) 필수 구현

---

## 업데이트

디자인 시스템이 업데이트되면 아래 명령어로 최신 버전을 받으세요.

```bash
cd ~/claude && git pull
```

---

## 문의

이주연 · PRS 디자인 시스템 관련 문의는 팀즈로 연락해주세요.
