export default [
  {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/array-type': 'error',
      'space-before-function-paren': 'off',
      'spaced-comment': 'off',
      'prefer-const': 'off',
      'no-prototype-builtins': 'off',
      'no-console': 'error',
      'no-label-var': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'no-var': 'error'
    }
  }
]
