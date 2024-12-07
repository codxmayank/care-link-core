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
      'prettier/prettier': 'error',
      ...eslintRecommended.rules
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
      'prettier/prettier': 'error'
    }
  },
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': 'error'
    }
  }
];
