module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'require-jsdoc': 0,

    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
        },
      },
    ],
    'new-cap': 0, // Now the rule is off that a Constructor can only be named as a Capital letter now we cam name a fileName also capital Letter.
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
