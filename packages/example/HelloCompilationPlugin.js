class HelloCompilationPlugin {
  apply(complier) {
    complier.hooks.compilation.tap('HelloCompilationPlugin', compilation => {
      compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
        console.log('正在优化资源。')
      })
    })
  }
}

module.exports = HelloCompilationPlugin