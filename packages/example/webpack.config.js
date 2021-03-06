var webpack = require("webpack");
const MyExampleWebpackPlugin = require('./Plugin')
const HelloCompilationPlugin = require('./HelloCompilationPlugin')
const MyPlugin = require('./MyPlugin')

module.exports = {
  mode: "development",
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    // And then the actual application
    "./index.js"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "#source-map",
  plugins: [
    new HelloCompilationPlugin(),
    new MyPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MyExampleWebpackPlugin()
  ]
};
