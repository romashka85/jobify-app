export default [
  {
    ignores: ["client/**", "public/**", "node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "object-curly-spacing": ["error", "always"],
      "semi": ["error", "always"],
      "quotes": ["error", "double", { avoidEscape: true }],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
];