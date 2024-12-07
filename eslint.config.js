// eslint.config.js

import eslintRecommended from 'eslint-config-eslint';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    // Base configuration for JavaScript files
    plugins: {
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021, // For general JavaScript support
        sourceType: 'module' // For ES module support
      }
    },
    rules: {
      'prettier/prettier': 'error',
      ...eslintRecommended.rules // Apply eslint:recommended rules
    }
  },
  {
    // Configuration for TypeScript files
    plugins: {
      prettier: eslintPluginPrettier
    },
    files: ['*.ts', '*.tsx'], // Apply only to TypeScript files
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020 // TypeScript-specific parsing
      }
    },
    rules: {
      'prettier/prettier': 'error'
    }
  },
  {
    // Prettier configuration (separate block for all files)
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': 'error'
    }
  }
];
