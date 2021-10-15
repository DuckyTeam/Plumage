module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/no-unresolved': 0,
    'no-shadow': 'off', // replaced by ts-eslint rule below
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  extends: [
    '@ducky/eslint-config-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  globals: {},
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'init-declarations': 0,
        'max-lines-per-function': 0,
        'max-statements': 0,
        'max-lines': 0,
        'no-sync': 0,
      },
    },
  ],
};
