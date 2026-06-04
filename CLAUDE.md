# Claude Code 규칙 — PRS 프로젝트

## 화면 작업 파이프라인 (최우선)

PRS 화면 관련 작업 요청이 오면 **말하지 않아도** 아래 파이프라인을 자동으로 따른다.

**파이프라인 전체 정의:** `.claude/skills/prs-screen/SKILL.md`

```
STEP 1   화면 유형 확정 (조회형/등록형/노드뷰/AI Wizard 등 9종)
STEP 1.5 불명확 사항은 자의적으로 채우지 않고 먼저 보고
STEP 2   components.md 기준으로 컴포넌트 선택
STEP 3   prs-tokens.md 기준으로 토큰 매핑 (hex 단독 사용 금지)
STEP 4   레이아웃 구성 (1920px / LNB 220px / 콘텐츠 영역 1200px / 콘텐츠 40px 패딩)
STEP 5   Edge Case 필수 구현 (Loading Skeleton / Empty State / Error)
→ 출력 전 체크리스트 확인
```

## 디자인 시스템 참조 파일

모든 화면 작업 시 아래 순서로 참조한다.

### 1. 참조 파일 우선순위
1. `.claude/skills/prs-screen/SKILL.md` — 화면 작업 파이프라인
2. `./PRS/prs-tokens.md` — PRS 전용 토큰 (컬러·타이포·스페이싱·레이아웃)
3. `./PRS/components.md` — 컴포넌트 사용 기준 + PRD 번역 테이블
4. `./UIX/*.md` — 공통 UIX 디자인 시스템 기반

### 2. 폰트
- `font-family: Pretendard, sans-serif`
- 기본 텍스트: Body2 (14px / line-height 20px)
- 섹션 헤더: Title3 (18px / line-height 28px / weight 600)
- 메타/보조: Body3 (12px / line-height 16px)

### 3. 색상 — PRS 브랜드
- **콘텐츠 영역 기본 배경**: `#f5f5f5` (`$semantic-color-background-sunken`) — LNB 제외 전체 적용
  - 예외: 노드뷰 캔버스 `#f0f0f0`, AI Wizard violet gradient
- **버튼 원칙**: Primary는 디폴트 컬러, 강조 액션에만 Accent 사용
  - **Primary 버튼**: `#343434` (neutral-coolgray-700) — 새 이슈, 저장, 생성 등 일반 확정 액션
  - **Accent 버튼**: `#6f64dd` (violet-400) — AI 기능 CTA 등 강조 액션에만
  - **Ghost 버튼**: `#ffffff` + border `#d2d2d2`
- **액센트 배경**: `#f2f1fe` (violet-25)
- **기본 배경**: `#ffffff`
- **서브 배경**: `#f5f5f5`
- **기본 텍스트**: `#343434`
- **보조 텍스트**: `#848484`
- **힌트/메타**: `#aeaeae`
- **기본 border**: `#d2d2d2`
- **얇은 border**: `#dfdfdf`
- **구분선**: `#dfdfdf`

### 4. 이슈 상태 뱃지
| 상태 | Background | Text |
|------|-----------|------|
| 할 일 | `#f0f0f0` | `#848484` |
| 진행중 | `#e0eeff` | `#174fde` |
| 검토 요청 | `#fffadb` | `#a07800` |
| 완료 | `#e6fef0` | `#077a36` |
| 블로킹 | `#fff5f5` | `#c0251b` |

### 5. 간격 (Spacing)
- 기본: 8px / 12px / 16px / 24px / 32px / 40px

### 6. Border Radius
- 태그/뱃지: 4px
- 버튼/입력: 8px
- 카드(소): 10px
- 카드(중): 12px
- 카드(대)/모달: 16px

### 7. Shadow
- 카드 기본: `0 1px 2px rgba(16,24,40,0.05)`
- 버튼/입력: `0 1px 3px rgba(16,24,40,0.10), 0 1px 2px rgba(16,24,40,0.06)`
- 드롭다운: `0 4px 8px rgba(16,24,40,0.10), 0 2px 4px rgba(16,24,40,0.06)`
