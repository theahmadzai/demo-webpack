const { merge } = require('webpack-merge')

const applyPresets = (env) => {
  const presets = env.presets || []
  const mergedPresets = [].concat(...[presets])
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  )

  return merge({}, ...mergedConfigs)
}

module.exports = applyPresets
