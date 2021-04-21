module.exports = {
  env: {
    browser: true,
    node: false,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 1,
    // 'no-debugger': 2,
    // 'react/prop-types': 0,
    // 'react/no-string-refs': 0,
    // 'no-var': 2,
    // 'no-alert': 0,
    // // 'import/first': 1,
    // 'no-const-assign': 2,
    // 'no-eval': 2,
    // 'no-empty-function': [2, { allow: ['arrowFunctions'] }],
    // semi: [2, 'always'],
    // camelcase: 2,
    // 'max-len': [1, 250, 4],
    // 'max-lines': [
    //   1,
    //   {
    //     max: 1400,
    //     skipBlankLines: false,
    //     skipComments: true,
    //   },
    // ],
    // 'max-lines-per-function': [
    //   1,
    //   {
    //     max: 600,
    //     skipBlankLines: false,
    //     skipComments: true,
    //   },
    // ],
    // camelcase: 1,
    // 'react/display-name': [0],
    // 'react/jsx-no-target-blank': 1,
    // '@typescript-eslint/no-empty-function': 1,
    // '@typescript-eslint/no-explicit-any': 0,
    // '@typescript-eslint/explicit-module-boundary-types': 0,
    // 'no-unused-vars': 1,
    // '@typescript-eslint/no-unused-vars': 1,
  },
};
