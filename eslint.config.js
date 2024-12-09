import eslintRecommended from 'eslint-config-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    },
    rules: {
      'prettier/prettier': 'warn',
      ...eslintRecommended.rules,
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-unused-vars': ['warn', { vars: 'all', args: 'none' }]
    }
  },
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020
      }
    },
    rules: {
      'prettier/prettier': 'warn'
    }
  }
];
