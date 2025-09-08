module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "warn",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
