const WebpackBundleAnalayzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = () => ({
  plugins: [new WebpackBundleAnalayzer()]
})
