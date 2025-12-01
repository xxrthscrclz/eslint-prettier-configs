import eslintJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

const base = {
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    js: eslintJs,
    import: importPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    ...eslintJs.configs.recommended.rules,

    'prettier/prettier': 'error',

    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal', 'parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};

export default base;
