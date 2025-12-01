# eslint-prettier-configs

TypeScript / React 프로젝트에서 공통으로 사용할 수 있는
ESLint + Prettier 설정 라이브러리입니다.

- 모노레포 및 여러 프로젝트에서 통일된 코드 스타일과 규칙을 유지하고 싶을 때
- TypeScript 기반으로 코드 관리를 깔끔하게 하고 싶을 때
- 프로젝트맞다 ESLint 및 Prettier 설정을 새로 만드는 작업을 줄이기 위해

사용할 수 있도록 만든 **공용 설정 리포지토리**입니다.

---

## 주요 기능

- `eslint-config`
  - JS / TS / React 를 위한 기본 규칙 제공
  - TypeScript 타입 정보를 활용한 엄격한 검사
  - 'impot' 순서 및 경로 규칙 강제
  - Prettier와 충돌 없는 ESLint 설정

- `prettier-config`
  - 모노레포 및 여러 프로젝트에서 재사용 가능한 Prettier 포멧 설정
  - trailing comma, 따옴표, 줄 길이 등 스타일 일관성 유지

---

## 사용 방법

### 1. 설치하기

```bash
pnpm add -D eslint prettier eslint-config prettier-config


```
