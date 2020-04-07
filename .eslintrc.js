module.exports = {
  extends: ["react-app"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    fetch: true,
    importScripts: true,
    self: true,
    context: true,
  },
  plugins: ["babel", "react"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "no-useless-escape": 0,
  },
};
