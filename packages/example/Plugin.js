class MyExamoleWebpackPlugin {
  apply ( comiler ) {
    comiler.hooks.emit.tapAsync('MyExamoleWebpackPlugin', (compilation, callback) => {
      console.log('this is an example plugin!')
      console.log('here the compilation object')

      callback()
    })
  }
}

module.exports = MyExamoleWebpackPlugin