import cypress from 'eslint-plugin-cypress';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [

  eslintPluginPrettierRecommended,


  {

    files: ['cypress/**/*.js'],
    plugins: {
      cypress,
    },
    languageOptions: {
      globals: {
       
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly',
        assert: 'readonly',
        describe: 'readonly',
        context: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly'
      }
    },
    rules: {

      ...cypress.configs.recommended.rules,

      'no-unused-vars': 'warn',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
      'no-console': 'off',
    },
  },
];