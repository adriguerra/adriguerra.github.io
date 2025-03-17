import js from "@eslint/js";
import next from "eslint-config-next";

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.recommended,
  next,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {},
  },
];
