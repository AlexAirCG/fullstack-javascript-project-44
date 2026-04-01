import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      // Настраиваем именно стилистическое правило плагина
      "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: true }],
      "@stylistic/semi": ["error", "always"],
      // Обычное правило quotes можно убрать, чтобы не было конфликтов
    },
  },
  eslintConfigPrettier,
]);
