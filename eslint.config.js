import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  // Базовые рекомендации JS
  js.configs.recommended,
  // Рекомендации по стилю (кавычки, отступы и т.д.)
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // 1. Одинарные кавычки (требование Хекслета)
      '@stylistic/quotes': ['error', 'single'],

      // 2. БЕЗ точек с запятой (требование Хекслета)
      '@stylistic/semi': ['error', 'never'],

      // 3. Стиль скобок Stroustrup (else с новой строки)
      // Именно это исправит ошибку в progression-game.js
      '@stylistic/brace-style': ['error', 'stroustrup'],

      // 4. Отступы 2 пробела
      '@stylistic/indent': ['error', 2],

      // 5. Разрешаем console.log (нужен для вывода игры в терминал)
      'no-console': 'off',
    },
  },
]
