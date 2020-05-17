
module.exports = {
  "presets": [
  ["@babel/preset-env", {
      "targets": {
          "esmodules": true
      }
  }],
  "@babel/preset-react",
  ],
  "plugins": [
    "@babel/plugin-transform-async-to-generator",
  "@babel/proposal-class-properties", 
    "@babel/plugin-proposal-object-rest-spread",
    "syntax-dynamic-import"
  ]
}
