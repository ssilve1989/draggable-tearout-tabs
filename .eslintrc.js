module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  globals: {
    fin: true
  },
  "extends": ['airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    allowImportsEverywhere: true,
    ecmaVersion: 2017
  },
  plugins: ['prettier', 'react'],
  rules: {
    'import/prefer-default-export' : 'off',
    'prettier/prettier' : 'error',
    'import/no-extraneous-dependencies' : 'off',
    "class-methods-use-this" : "off"
  }
};