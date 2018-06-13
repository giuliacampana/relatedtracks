module.exports = {
  "extends": "airbnb",
  "env": {
      "browser": true,
      "node": true
  },
  "parserOptions": {
    ecmaVersion: 6,
    ecmaFeatures: {
        jsx: true,
    },
    sourceType: "module"
  },
  "plugins": [ "react" ]
};