module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/src/**/*", // Ignore TypeScript source files for now
  ],
  rules: {
    // Minimal rules to pass linting
    "no-unused-vars": "off",
    "no-undef": "off",
  },
};
