const { Compiler } = require('webpack')

class MyFirstWebpackPlugin {
  apply (compiler = new Compiler()) {
    compiler.hooks.done.tapAsync('MyFirstWebpackPlugin', (stats, cb) => {
      const assetNames = []
      for (const assetName in stats.compilation.assets) {
        assetNames.push(assetName)
      }

      console.log('-----------------------------')
      console.log(assetNames.join('\n'))
      console.log('-----------------------------')

      cb()
    })

    compiler.hooks.compilation.tap('MyFirstWebpackPlugin', (compilation, params) => {
      new MyFirstWebpackCompilationPlugin().applay(compilation)
    })
  }
}

class MyFirstWebpackCompilationPlugin {
  applay (compilation) {
    compilation.hooks.seal.tap('MyFirstWebpackPlugin', () => {

    })
  }
}

module.exports = MyFirstWebpackPlugin
