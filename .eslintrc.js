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
  plugins: ['react', 'i18next'],
  rules: {
    strictNullChecks: 0,
    'comma-dangle': [0, {
      arrays: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    // indent: [1, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'padded-blocks': [0],
    'eol-last': [0],
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
    '@typescript-eslint/consistent-type-assertions': 'off'

  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};