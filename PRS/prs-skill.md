# PRS 화면 생성 Skill
> Claude Code가 PRS 화면을 만들 때 따르는 표준 파이프라인.
> PRD 언어를 받아 → 디자인 시스템에 맞는 UI 코드를 출력한다.

---

## 트리거 조건

아래 표현 중 하나라도 포함되면 이 Skill을 실행한다:

- "PRS 화면 만들어줘"
- "[화면명] 페이지 구현해줘"
- "이슈 목록 / 프로젝트 홈 / 기획 문서 / [PRS 기능명] 만들어줘"
- prs-tokens.md 또는 components.md를 참조하라고 지시받은 경우

---

## 실행 전 필독 파일

화면 작업 시작 전 반드시 아래 파일을 읽는다:

```
1. ./prs-tokens.md       — 컬러·스페이싱·타이포·레이아웃 토큰
2. ./components.md       — 컴포넌트 사용 기준 + PRD 번역 테이블
```

---

## 파이프라인 (5단계)

### STEP 1 — 화면 분류

입력된 요청을 읽고 아래 항목을 확정한다.

```
[ ] 페이지 유형: 조회형 / 상세형 / 등록형 / 대시보드형 / 설정형 /
                 노드뷰형 / 기획자동화(AI Wizard) / 온보딩 / 모달
[ ] 화면 이름 (예: 이슈 목록, 프로젝트 홈)
[ ] 주요 데이터 엔티티 (예: Issue, Project, PRD Document)
[ ] 주요 액션 (예: 이슈 생성, 필터, 상태 변경)
```

유형이 불분명하면 → **STEP 1.5 불명확 보고**로 이동.

---

### STEP 1.5 — 불명확 보고 (자의적 해석 금지)

아래 항목이 하나라도 불명확하면 **코드 작성 전에** 사용자에게 질문한다.
절대 추측으로 채우지 않는다.

**필수 확인 항목:**
```
[ ] 페이지 유형이 명확하지 않다
[ ] 표시할 데이터 컬럼/항목이 명시되지 않았다
[ ] 주요 CTA 액션이 무엇인지 모른다
[ ] 모달/사이드패널 포함 여부가 불명확하다
[ ] AI 기능 포함 여부가 불명확하다
[ ] Empty / Error / Loading 상태 처리 방식이 지정되지 않았다
```

**보고 형식:**
```
다음 항목이 불명확합니다. 확인 후 진행할게요:
1. [불명확한 항목] — [선택지 A / B / C 제안]
2. ...
```

---

### STEP 2 — 컴포넌트 선택

components.md §1 PRD 번역 테이블과 §2 페이지 유형별 세트를 기준으로
사용할 컴포넌트 목록을 확정한다.

**선택 규칙:**
- 목록 표시 → Issue Table (계층) 또는 List Row (단순)
- 상태 표시 → 반드시 Status Badge (텍스트 단독 금지)
- AI 액션 → Primary Button에 `✦` sparkle 접두어
- 빈 상태 → Empty State (일러스트 + 설명 + CTA 필수)
- 로딩 → Skeleton UI (전체 블로킹 시에만 스피너)

**페이지 유형별 기본 컴포넌트 세트는 components.md §2 참조.**

---

### STEP 3 — 토큰 매핑

prs-tokens.md를 기준으로 색상·간격·타이포를 매핑한다.

**필수 적용 규칙:**
```
font-family: Pretendard, sans-serif
기본 텍스트: Body2 14px / line-height 20px
섹션 헤더: Title3 18px / weight 600
메타/보조: Body3 12px / line-height 16px

/* 버튼 컬러 원칙: Primary는 디폴트, Accent만 강조 */
Primary 버튼:  $base-color-neutral-coolgray-700 #343434  (일반 확정 액션)
Primary hover: $base-color-neutral-coolgray-800 #191919
Accent 버튼:   $base-color-accent-violet-400 #6f64dd     (강조 액션만)
Accent hover:  $base-color-accent-violet-500 #6358d5
Ghost 버튼:    background #ffffff, border #d2d2d2

기본 텍스트:  $semantic-color-text-default #343434
보조 텍스트:  $semantic-color-text-subtle #848484
힌트 텍스트:  $semantic-color-text-subtlest #aeaeae
기본 border: $semantic-color-border-default #d2d2d2
구분선:      $semantic-color-divider-default #dfdfdf

기본 배경:   $semantic-color-background-default #ffffff
서브 배경:   $semantic-color-background-sunken #f5f5f5
```

**색상 표기 규칙:**
- hex 단독 사용 금지
- 반드시 토큰명 + hex 함께 주석으로 표기
  ```css
  /* 올바름 */
  background-color: #6f64dd; /* $base-color-accent-violet-400 */

  /* 금지 */
  background-color: #6f64dd;
  ```

---

### STEP 4 — 레이아웃 구성

prs-tokens.md §12 레이아웃 구조를 기준으로 적용한다.

```
전체 너비: 1920px
GNB: 높이 56px, 상단 고정
LNB: 너비 220px, 좌측 고정
콘텐츠 영역: 나머지 너비, 내부 패딩 좌우 40px

콘텐츠 영역 배경 (기본):
  background: #f5f5f5  /* $semantic-color-background-sunken */
  → LNB 제외 모든 콘텐츠 영역에 일괄 적용
  예외: 노드뷰 캔버스 (#f0f0f0 + 점 그리드), AI Wizard (violet gradient)

섹션 계층:
  Page Header → margin-bottom 32px
  Section → margin-bottom 24px
  Component → margin-bottom 16px
  Foundation → (컴포넌트 내부 처리)
```

---

### STEP 5 — Edge Case 처리 (필수)

**모든 화면에서 아래 3가지를 반드시 구현한다. 누락 시 완성 아님.**

#### Loading 상태
```
- 데이터 영역: Skeleton UI (shimmer 애니메이션)
- 배경색: #eaeaea ($base-color-neutral-coolgray-100)
- 형태: 실제 컴포넌트와 동일한 크기의 회색 블록
- 전체화면 블로킹 시에만 스피너 허용
```

#### Empty 상태
```
- 구성: 아이콘(48px) + 제목(Body1 600) + 설명(Body2 #848484) + CTA 버튼
- 중앙 수직 정렬
- AI 기능 관련 Empty: CTA는 "✦ [액션]" 형태
- "데이터 없음" 텍스트만 표시 금지
```

#### Error 상태
```
- 인라인 에러 (폼 필드): border #fd493f + 하단 Body3 에러 텍스트
- 페이지 레벨 에러: 에러 메시지 + "다시 시도" 버튼
- 에러 색상: $semantic-color-text-error #fd493f
```

---

## 출력 체크리스트

코드 작성 완료 후 아래를 확인한다. 하나라도 미충족 시 수정 후 출력.

```
디자인 시스템
[ ] font-family: Pretendard 적용
[ ] 색상에 토큰명 주석 병기
[ ] hex 단독 사용 없음
[ ] 기본 텍스트 Body2(14px), 섹션 헤더 Title3(18px) 적용

레이아웃
[ ] 1920px 기준, LNB 220px, 콘텐츠 40px 패딩
[ ] GNB 56px 상단 고정
[ ] 섹션 간격 24px, 컴포넌트 간격 16px 준수

컴포넌트
[ ] Status Badge 사용 (텍스트 단독 상태 표시 금지)
[ ] AI 액션 버튼에 ✦ sparkle 접두어
[ ] Primary 버튼은 #343434 (neutral-coolgray-700) — 일반 확정 액션
[ ] Accent 버튼(#6f64dd violet-400)은 강조 액션에만 사용
[ ] 버튼 배치: Ghost → Primary 순서 (좌→우), 강조 필요 시만 Accent
[ ] Modal Footer: 취소(Ghost) → 확인(Primary) 우측 정렬

Edge Case
[ ] Loading: Skeleton UI 구현
[ ] Empty: 아이콘 + 설명 + CTA 구현
[ ] Error: 에러 메시지 + 재시도 구현
```

---

## 페이지 유형별 추가 체크리스트

### 조회형 추가 확인
```
[ ] Filter Button + Search Input + Primary Button Toolbar 구성
[ ] Issue Table: 계층 펼침/접기 토글
[ ] Pagination 또는 무한스크롤 처리
[ ] 필터 적용 시 Filter Chip 시각화
```

### 등록형 추가 확인
```
[ ] 저장(Primary) + 취소(Ghost) Page Header 우측 배치
[ ] 필수 필드 * 표시
[ ] 미저장 이탈 시 Confirm Modal 처리
[ ] 유효성 오류: border red + 하단 에러 텍스트
```

### 노드뷰형 추가 확인
```
[ ] Canvas Background: #f0f0f0 + 점 그리드
[ ] Node Card: Root(violet filled) / Mid(outlined) / Leaf(ghost) 3단계
[ ] Node Edge: 곡선 연결선 #dfdfdf
[ ] Canvas Mini Toolbar: 좌측 고정 뷰모드 버튼
[ ] 노드 hover 시 ⊕ 버튼 표시
```

### AI Wizard 추가 확인
```
[ ] 전체화면 violet gradient 배경 (violet-25 → violet-50)
[ ] Step Progress Indicator: GNB 영역 중앙
[ ] AI Prompt Input: 중앙 카드 + Send Button 우측 하단
[ ] 생성 완료 후 AI Response Area 표시
[ ] "완성 완료" Ghost Button 우측 상단
```

---

## 사용 예시

### 입력 예시 1 — 조회형
```
prs-tokens.md와 components.md를 읽고
이슈 목록 화면을 만들어줘.
- 컬럼: 타입뱃지, 이슈번호, 제목, 우선순위, 버전, 담당자, 상태
- 계층형 트리 (Epic > Story > SubTask)
- 필터, 검색, + 새 이슈 버튼 포함
```

### 입력 예시 2 — AI Wizard
```
prs-tokens.md와 components.md를 읽고
기획 자동화 wizard 1단계 화면 만들어줘.
- "어떤 제품을 만들고 싶으신가요?" 프롬프트
- 단계: 기능 설계 › 사용자 플로우 › 에이전트 프레임
- violet gradient 전체 배경
```

### 입력 예시 3 — 모달
```
prs-tokens.md와 components.md를 읽고
이슈 삭제 확인 모달 만들어줘. (S 사이즈)
```

---

## 구현 프로세스 (Figma 작업 시 필수)

Figma URL 또는 노드 ID가 제공된 경우 아래 3단계를 반드시 따른다.

1. **Figma 디자인 읽고 1차 구현**
   - `get_screenshot`으로 모든 제공 노드를 확인한 뒤 작업 시작
   - 불명확한 부분은 STEP 1.5 불명확 보고로 먼저 확인

2. **구현 후 반드시 Figma와 비교 검토**
   - 간격, 색상, 폰트 사이즈 수치 재확인
   - 컴포넌트 구조 일치 여부 확인
   - 텍스트 내용이 Figma 원문과 동일한지 확인
   - 레이아웃 너비/높이 수치 확인

3. **차이점 발견 시 자체 수정 후 완료 보고**
   - 차이점을 사용자에게 보고하지 않고 먼저 자체 수정
   - 수정 완료 후 "Figma 대비 수정된 항목"을 요약하여 보고

---

## Figma 파일이 주어진 경우 — 추가 규칙

Figma URL 또는 노드 ID가 제공된 경우 아래 규칙을 반드시 따른다.

```
[ ] get_screenshot으로 모든 제공 노드를 확인한 뒤 작업 시작
[ ] 레이아웃 · 컴포넌트 · 텍스트 내용을 Figma 기준으로 재현
[ ] 스크린샷이 작아서 세부 내용이 불명확한 경우 → STEP 1.5 불명확 보고
[ ] 텍스트 내용을 임의로 작성하지 않는다 (Figma 원문 사용 또는 플레이스홀더 표시)
[ ] Figma에 없는 컴포넌트·섹션을 추가하지 않는다
[ ] Figma와 다른 레이아웃 구조·색상·간격을 임의로 변경하지 않는다
```

**불명확 보고 기준 (Figma 관련):**
- 스크린샷이 너무 작아 텍스트/아이콘이 안 보일 때
- 여러 노드 중 어느 상태를 구현해야 할지 불명확할 때
- 인터랙션 흐름(어느 버튼이 어디로 연결되는지)이 명시되지 않았을 때

---

## 안티패턴 (절대 하지 말 것)

| 금지 | 대신 |
|------|------|
| hex 단독 사용 (`#6f64dd`) | 토큰명 주석 필수 |
| 상태를 텍스트로만 표시 ("완료") | Status Badge 사용 |
| Empty 상태를 텍스트만으로 | 아이콘 + 설명 + CTA |
| AI 버튼에 sparkle 없이 | `✦ [액션]` 형태 |
| 전체 페이지에 스피너 남발 | 섹션별 Skeleton |
| 모달 Footer 버튼 순서 반대 | 취소 → 확인 (좌→우) |
| 불명확한 요구사항 자의적 채움 | STEP 1.5 불명확 보고 |
| Issue Type Badge와 Status Badge 혼용 | 별도 컬럼으로 분리 |
| **Figma 주어졌는데 임의로 변경** | Figma 기준 충실 재현, 불명확 시 STEP 1.5 보고 |
| **Figma 텍스트를 직접 작성** | Figma 원문 사용 또는 `[텍스트 내용]` 플레이스홀더 |
