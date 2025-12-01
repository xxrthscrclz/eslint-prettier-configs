import base from './src/base.js';
import react from './src/react.js';
import typescript from './src/typescript.js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  base,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...typescript,
  },

  {
    files: ['**/*.{jsx,tsx}'],
    ...react,
  },
]);
