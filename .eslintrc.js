module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['@babel', 'import', 'react', 'react-hooks', 'jest', 'jsx-a11y', 'prettier'],
  settings: {
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },

  rules: {
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-console': 'off',
    'no-var': 'warn',
    'object-shorthand': 'error',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    quotes: ['error', 'single'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
};
