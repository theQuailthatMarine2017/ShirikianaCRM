module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },
  "devServer": {
    "proxy": {
      "^/api": {
        "target": "http://localhost:3900"
      }
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
