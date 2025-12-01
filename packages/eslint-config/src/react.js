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

    'react/jsx-key': 'warn',
    'react/self-closing-comp': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export default react;
