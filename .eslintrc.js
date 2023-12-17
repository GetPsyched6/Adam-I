module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Add this line for Jest testing globals
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable the rule requiring React in scope for JSX
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Allow JSX in .js files
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
