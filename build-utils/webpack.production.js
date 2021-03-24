const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  return {
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({

      })
    ]
  }
}
