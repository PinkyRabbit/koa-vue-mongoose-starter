module.exports = {
  extends: 'airbnb-base',
  rules: {
    "class-methods-use-this": ["error", { exceptMethods: ["name"] }],
    "linebreak-style": "off",
    "max-len": ["error", {
    "code": 120,
    "ignoreComments": true,
    "ignoreRegExpLiterals": true,
    "ignoreUrls": true,
    "tabWidth": 2
  }],
    "no-underscore-dangle": ["error", { "allow": ["__"] }],
    "comma-dangle": ["error", "always-multiline"],
    "no-multi-spaces": ["error", { "exceptions": { "VariableDeclarator": true } }],
    "no-use-before-define": ["error", { "functions": false, "classes": true }],
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "curly": ["error", "all"],
    "newline-per-chained-call": "off"
  }
};
