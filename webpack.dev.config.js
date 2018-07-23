const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // 上面打包出来的bundle.js会自动插入到这个模板中
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './release'), // 本地开发环境服务器的根目录，从release中获取文件
    open: true, // 自动打开浏览器
    port: 9000
  }
}