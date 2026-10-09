// module.exports = {
//   root: true,
//   extends: '@react-native',
//   rules: {
//     // Prevent accidental console.log in production
//     'no-console': ['warn', { allow: ['warn', 'error'] }],

//     // Catch debugging statements
//     'no-debugger': 'error',

//     // Prevent duplicate imports
//     'no-duplicate-imports': 'error',

//     // Encourage clean code
//     'no-unused-vars': 'warn',

//     // Prefer const when variables are never reassigned
//     'prefer-const': 'error',
//   },
// };

// module.exports = {
//   root: true,

//   extends: ['@react-native'],

//   rules: {
//     // -------------------------
//     // JavaScript
//     // -------------------------

//     'no-console': ['warn', { allow: ['warn', 'error'] }],

//     'no-debugger': 'error',

//     'no-duplicate-imports': 'error',

//     'prefer-const': 'error',

//     'no-var': 'error',

//     // -------------------------
//     // React Native
//     // -------------------------

//     'react-native/no-inline-styles': 'on',

//     // -------------------------
//     // Code quality
//     // -------------------------

//     'no-unreachable': 'error',

//     'no-unexpected-multiline': 'error',

//     'no-self-assign': 'error',

//     'no-self-compare': 'error',

//     'no-constant-condition': ['error', { checkLoops: false }],
//   },

//   ignorePatterns: [
//     'node_modules/',
//     'android/',
//     'ios/',
//     'build/',
//     'dist/',
//     'coverage/',
//     '*.config.js',
//   ],
// };

// module.exports = {
//   root: true,

//   extends: '@react-native',

//   rules: {
//     // JavaScript
//     'no-console': ['warn', { allow: ['warn', 'error'] }],
//     'no-debugger': 'error',
//     'no-duplicate-imports': 'error',
//     'prefer-const': 'error',
//     'no-var': 'error',

//     'react-native/no-inline-styles': 'error',

//     // Code quality
//     'no-unreachable': 'error',
//     'no-unexpected-multiline': 'error',
//     'no-self-assign': 'error',
//     'no-self-compare': 'error',
//     'no-constant-condition': ['error', { checkLoops: false }],
//   },

//   ignorePatterns: ['node_modules/', 'android/', 'ios/', 'build/', 'dist/', 'coverage/'],
// };

module.exports = {
  root: true,
  extends: '@react-native',

  plugins: ['react-native'],

  rules: {
    // JavaScript
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'prefer-const': 'error',
    'no-var': 'error',

    // React Native
    'react-native/no-inline-styles': 'warn',
    // Code quality
    'no-unreachable': 'error',
    'no-unexpected-multiline': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
  },

  ignorePatterns: ['node_modules/', 'android/', 'ios/', 'build/', 'dist/', 'coverage/'],
};
