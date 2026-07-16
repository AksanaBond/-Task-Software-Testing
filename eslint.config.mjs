import playwright from 'eslint-plugin-playwright';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['my-report/', 'test-results/'],
  },
  playwright.configs['flat/recommended'],

  eslintPluginPrettierRecommended,

  {
    files: ['tests/**/*.spec.js', 'tests/**/*.test.js'],
    rules: {},
  },
];
