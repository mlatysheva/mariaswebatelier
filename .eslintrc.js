module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'indent': [2, 2],
    'react/jsx-filename-extension': [2, {extensions: ['.tsx', '.jsx']}],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-used-vars': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'reat/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'warn', 
      { 
        markupOnly: true, 
        ignoreAttributes: ['data-testid'] 
      }
    ],
    'max-len': ['error', { "code": 100, "ignoreComments": true }],
  },
  globals: {
    '__IS_DEV__': true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts, tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      }
    }
  ]
}
