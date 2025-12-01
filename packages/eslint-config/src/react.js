import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const react = {
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooks,
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,

    'react/destructuring-assignment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/jsx-key': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export default react;
