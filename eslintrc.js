module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: { 'prettier/prettier': 'error' },
};
