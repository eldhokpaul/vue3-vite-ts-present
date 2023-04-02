/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslint-config-airbnb',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['@utils', './src/utils'],
        ],
      },
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'vue/attribute-hyphenation': 'error',
    'vue/prop-name-casing': 'off',
    'vue/component-name-in-template-casing': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vue/max-len': 'off',
  },
};
