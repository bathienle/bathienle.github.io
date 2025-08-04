import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVitest from '@vitest/eslint-plugin';
import globals from 'globals';

export default defineConfigWithVueTs({
  ignores: ['coverage', 'dist', 'node_modules'],
  files: ['**/*.{ts,vue}'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 'error',
    'curly': ['error', 'all'],
    'eqeqeq': ['error', 'always'],
    'indent': ['error', 2],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'no-redeclare': 'error',
    'no-undef': 'error',
    'no-unused-vars': ['warn'],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'vue/html-indent': ['error', 2],
  },
  extends: [
    pluginVitest.configs.recommended,
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
  ],
});
