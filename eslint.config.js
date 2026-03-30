import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "@stylistic/quotes": ["error", "double"], // Разрешаем двойные кавычки
      "@stylistic/semi": ["error", "always"], // Требуем точки с запятой
    },
  },
]);
