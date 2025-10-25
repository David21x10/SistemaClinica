// eslint.config.js (en la raíz de 'SistemaClinica')

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// --- PLUGINS DE FRONTEND ---
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // 1. Ignorados Globales
  {
    ignores: [
      '**/node_modules/', 
      '**/dist/',
      'backend/node_modules/', // Ignora explícitamente
      'frontend/node_modules/', // Ignora explícitamente
    ],
  },
  
  // 2. CONFIGURACIÓN PARA EL BACKEND (.js)
  {
    files: ['backend/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs', // Backend usa require/module.exports
      globals: {
        ...globals.node, // Activa globales de Node.js (process, __dirname, etc.)
      },
    },
    rules: js.configs.recommended.rules, // Reglas base recomendadas de ESLint
  },

  // 3. CONFIGURACIÓN PARA EL FRONTEND (.ts, .tsx)
  {
    files: ['frontend/**/*.{ts,tsx}'], // Solo aplica a la carpeta frontend
    plugins: {
      'react': pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module', // Frontend usa 'module' (import/export)
      parser: tseslint.parser, // Usa el parser de TypeScript
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser, // Activa globales del navegador (window, document)
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    // Aquí esparcimos las reglas recomendadas
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
    },
  },
];