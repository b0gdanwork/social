/* eslint-disable @typescript-eslint/object-curly-spacing */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'i18next', 'react-hooks', 'ulbi-tv-plugin', 'unused-imports'],
  rules: {
    strictNullChecks: 0,
    'comma-dangle': [0, {
      arrays: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    // indent: [1, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    // 'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'padded-blocks': [0],
    'no-trailing-spaces': [0],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'no-return-assign': ['warn', 'always'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/no-duplicates': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/object-curly-spacing': 'warn',
    'react-hooks/rules-of-hooks': 'error', 
    'react-hooks/exhaustive-deps': 'warn', 
    'i18next/no-literal-string': 'warn',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'ulbi-tv-plugin/path-checker': ['error', { alias: '@' }],
    'ulbi-tv-plugin/public-api-imports': ['error', { alias: '@' }],
    'ulbi-tv-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
