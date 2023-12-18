module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
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
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    indent: ['error', 2, { SwitchCase: 1 }]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // Add this if you're using ESLint plugins for React Hooks
  plugins: ['react', 'prettier'],
};
