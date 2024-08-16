import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-undef': 'off',
      'no-use-before-define': 'off',
      'react/react-in-jsx-scope': 0,
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/prefer-nullish-coalescing': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/triple-slash-reference': 0,
      '@typescript-eslint/restrict-template-expressions': 0,
      '@typescript-eslint/no-useless-constructor': 0,
      'react/no-children-prop': 0,
      'prefer-const': 'off',
      'no-unexpected-multiline': 0,
      '@typescript-eslint/consistent-type-definitions': 0,
      '@typescript-eslint/no-misused-promises': 0,
      'react/prop-types': 0,
      'react/no-unescaped-entities': 0,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
