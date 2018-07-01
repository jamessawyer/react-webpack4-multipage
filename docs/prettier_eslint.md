```
{
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "comma-dangle": 2,
    "no-use-before-define": 2,
    "class-methods-use-this": 0,
    "global-require": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": ["error", 120],
    "no-console": 0,
    "no-unused-vars": 2,
    "no-useless-constructor": 0,
    "no-undef": 2,
    "no-unused-expressions": 2,
    "react/no-string-refs": 0,
    "react/prop-types": 2,
    "react/forbid-prop-types": [0, {
      "forbid": ["any", "array", "object"]
    }],
    "react/prefer-stateless-function": 2,
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 1,
    "react/no-typos": 1,
    "no-extra-boolean-cast": 0,
    "camelcase": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "semi": false
      }
    ],
    "plugins": [
      "prettier"
    ]
  },
  "globals": {
    "document": true,
    "localStorage": true,
    "window": true
  }
}
```
