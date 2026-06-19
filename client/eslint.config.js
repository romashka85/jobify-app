import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

const reactHooksRules = reactHooks.configs?.recommended?.rules ?? {};
const reactRefreshRules =
  reactRefresh.configs?.vite?.rules ??
  reactRefresh.configs?.recommended?.rules ??
  {};

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    ...js.configs.recommended,
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      ...reactHooksRules,
      ...reactRefreshRules,
      ...prettierConfig.rules,
      // code quality rules only — formatting is handled by Prettier
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
];
