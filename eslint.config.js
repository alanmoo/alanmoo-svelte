import typescript from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginSvelte from "eslint-plugin-svelte";


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  prettier,
  ...eslintPluginSvelte.configs['flat/prettier'],
  {
    languageOptions: {
      parserOptions: {
        parser: {
          ts: typescript
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
];
