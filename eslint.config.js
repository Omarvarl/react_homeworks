import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactCompiler from 'eslint-plugin-react-compiler';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            prettier: prettierPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            prettierConfig,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            ...prettierPlugin.configs?.recommended?.rules,
            ...reactHooks.configs.recommended.rules,
            ...reactRefresh.configs.vite.rules,
            'no-console': 'warn',
            eqeqeq: 'warn',
            curly: 'warn',
            'no-else-return': 'warn',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
    reactCompiler.configs.recommended,
]);
