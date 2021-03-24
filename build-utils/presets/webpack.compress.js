const CompressWebpackPlugin = require('compress-webpack-plugin')

module.exports = () => ({
  plugins: [new CompressWebpackPlugin()]
})
