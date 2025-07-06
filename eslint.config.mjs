import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:storybook/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],
    plugins: ['simple-import-sort', 'import'],
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'storybook/no-renderer-packages': 'off',
      'eol-last': ['error', 'always'],
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['@components', './src/components'],
            ['@modules', './src/modules'],
            ['@style', './src/style'],
            ['@lib', './src/lib'],
            ['@data', './src/data'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        },
      },
    },
  }),
];

export default eslintConfig;
