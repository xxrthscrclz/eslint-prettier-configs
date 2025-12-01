import tsParser from '@typescript-eslint/parser';
import path from 'path';
import tseslint from 'typescript-eslint';

const typescript = {
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: [
        path.resolve(process.cwd(), 'tsconfig.node.json'),
        path.resolve(process.cwd(), 'tsconfig.app.json'),
      ],
      tsconfigRootDir: process.cwd(),
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    'import/no-unresolved': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: { project: path.resolve(process.cwd(), 'tsconfig.app.json') },
    },
  },
};

export default typescript;
