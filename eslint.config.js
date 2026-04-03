import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Явно заставляем плагин принимать двойные кавычки и точки с запятой
      '@stylistic/quotes': ['error', 'double', { allowTemplateLiterals: true }],
      '@stylistic/semi': ['error', 'always'],
    },
  },
  // Prettier всегда должен быть последним, чтобы отключить конфликтующие правила
  eslintConfigPrettier,
]
