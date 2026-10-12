// module.exports = {
//   root: true,
//   extends: '@react-native',

//   plugins: ['react-native'],

//   rules: {
//     // JavaScript
//     'no-console': ['warn', { allow: ['warn', 'error'] }],
//     'no-debugger': 'error',
//     'no-duplicate-imports': 'error',
//     'prefer-const': 'error',
//     'no-var': 'error',

//     // React Native
//     'react-native/no-inline-styles': 'warn',
//     // Code quality
//     'no-unreachable': 'error',
//     'no-unexpected-multiline': 'error',
//     'no-self-assign': 'error',
//     'no-self-compare': 'error',
//     'no-constant-condition': ['error', { checkLoops: false }],
//   },

//   ignorePatterns: ['node_modules/', 'android/', 'ios/', 'build/', 'dist/', 'coverage/'],
// };

import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactNative from 'eslint-plugin-react-native';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['node_modules/**', 'android/**', 'ios/**', 'build/**', 'dist/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        __DEV__: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      'react-hooks': pluginReactHooks,
      'react-native': pluginReactNative,
    },

    rules: {
      // React Native
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn',
      'react-native/no-single-element-style-arrays': 'error',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',

      // General
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-duplicate-imports': 'error',
      'max-lines': ['warn', { max: 300, skipBlankLines: true }],
    },

    settings: {
      react: { version: 'detect' },
    },
  },
];
