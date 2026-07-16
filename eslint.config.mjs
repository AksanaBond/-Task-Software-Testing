import wdioPlugin from 'eslint-plugin-wdio';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['node_modules/', 'allure-results/', 'allure-report/'],
  },
  prettierPlugin,
  {
    plugins: {
      wdio: wdioPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        browser: 'readonly',
        $: 'readonly',
        $$: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
