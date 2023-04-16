module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'transform-inline-environment-variables',
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src'
          }
        }
      ]
    ]
  }
}
