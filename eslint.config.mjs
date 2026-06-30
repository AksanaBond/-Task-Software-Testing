import playwright from 'eslint-plugin-playwright';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  playwright.configs['flat/recommended'],

  eslintPluginPrettierRecommended,

  {
    files: ['tests/**/*.spec.js', 'tests/**/*.test.js'],
    rules: {
      // Здесь можно добавлять свои правила
      // 'playwright/expect-expect': 'warn',
    },
  },
];
