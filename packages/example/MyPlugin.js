class MyPlugin {
  apply (compiler) {
    compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
      // 检索每个（构建输出）chunk:
      compilation.chunks.forEach(chunk => {
        // 检索chunk 中 （内置输入）的每个模块：
        chunk.modulesIterable.forEach(module => {
          // 检索模块中包含的每个源文件路径：
          module.fileDependencies.forEach(filepath => {
            // 我们现在已经对源结构有不少了解。。。。
            console.log(`filepath, ${filepath}`)
          })
        })

        (chunk.files || []).forEach(filename => {
          const source = compilation.assets[filename].source()
          console.log(`source, ${source}`)
        })
      })


      callback()
    })

 
  }
}

module.exports = MyPlugin