// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],

      "@typescript-eslint/no-explicit-any": "off",
      "no-underscore-dangle": "off",
      "arrow-spacing": "error",
      "comma-spacing": "error",
      "indent": ["error", 2],
      "key-spacing": "error",
      "keyword-spacing": "error",
      "object-curly-spacing": ["error", "always"],
      "object-shorthand": "error",
      "spaced-comment": "error",
      "space-before-blocks": "error",
      "space-infix-ops": "error",
      "semi": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
