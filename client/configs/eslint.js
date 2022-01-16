const path = require('path');
const prettierConfig = require('./prettier');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    babelOptions: {
      configFile: path.resolve(__dirname, 'babel.js'),
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'prettier/prettier': [
      'warn',
      {
        ...prettierConfig,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
