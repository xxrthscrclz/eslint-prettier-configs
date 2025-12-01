# eslint-prettier-configs

TypeScript / React 프로젝트에서 공통으로 사용할 수 있는
ESLint + Prettier 설정 라이브러리입니다.

다음과 같은 상황에서 유용합니다:

- 모노레포 및 여러 프로젝트에서 **통일된 코드 스타일**과 **규칙**을 유지하고 싶을 때
- TypeScript 기반으로 **정확하고 엄격한 코드 검사**를 하고 싶을 때
- 매번 ESLint / Prettier 설정을 새로 만드는 과정을 **단순화**하고 싶을 때

이 리포지토리는 이러한 요구를 해결하기 위해 만들어진 **공용 구성 패키지**입니다.

---

## ✨ 주요 기능

- `eslint-config`
  - JS / TS / React 를 위한 기본 규칙 제공
  - TypeScript 타입 정보를 활용한 엄격한 검사
  - 'import' 순서 및 경로 규칙 적용
  - Prettier와 충돌하지 않는 ESLint 환경 구성

- `prettier-config`
  - 모노레포 및 여러 프로젝트에서 재사용 가능한 **일관된 Prettier format 설정**
  - trailing comma, 따옴표, 줄 길이 등 스타일 일관성 유지
  - ESLint와 충돌하지 않는 Prettier 환경 구성

---

## 📦 설치

```bash
pnpm add -D eslint prettier @frontend/eslint-config @frontend/prettier-config
```

## 🛠 적용 방법

### 1. ESLint 설정 적용하기

프로젝트 루트에 eslint.config.mjs 파일을 생성하고 아래처럼 설정을 불러옵니다.

```js
// eslint.config.mjs
import eslintConfig from '@frontend/eslint-config';

export default eslintConfig;
```

### 2. Prettier 설정 적용하기

프로젝트 루트에 prettier.config.mjs 파일을 생성하고 아래처럼 설정을 불러옵니다.

```js
// prettier.config.mjs
import prettierConfig from '@frontend/prettier-config';

export default prettierConfig;
```

---

## 🎯 추천 스크립트

프로젝트 package.json에 아래처럼 추가하면 편리합니다.

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## 🔍 CI 자동 검사 (GitHub Actions)

이 리포지토리는 push / PR 시 자동으로 lint + prettier check가 실행되도록 구성되어 있습니다.

workflow 예시는 .github/workflows/ci.yml에서 확인할 수 있습니다.

```yaml
# 예시: CI 검증 흐름
- Lint 검사
- Prettier 포맷 검사
- pnpm workspace 기반 설치
```
