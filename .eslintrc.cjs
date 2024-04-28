module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  plugins: ['vue'],
  rules: {
    'vue/no-reserved-component-names': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    indent: ['error', 2],
    'linebreak-style': ['off', 'error', 'window'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['**/*.d.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-dupe-class-members': 'off'
      }
    }
  ]
}
