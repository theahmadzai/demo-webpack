const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const presetConfig = require('./build-utils/load-presets')
const modeConfig = mode => require(`./build-utils/webpack.${mode}`)()
const MyFirstWebpackPlugin = require('./build-utils/MyFirstWebpackPlugin')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return merge({
    mode,
    module: {
      rules: [
        {
          test: /\.jpe?g$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new MyFirstWebpackPlugin()
    ]
  }, modeConfig(mode), presetConfig({ mode, presets }))
}
