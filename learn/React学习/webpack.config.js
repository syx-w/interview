// webpack-dev-server 将打包好的main.js托管到内存中

let path = require('path')
let HtmlWebPackPlugin = require('html-webpack-plugin') // 导入 在页面中生成index页面的插件
// 创建一个插件的实例化对象
let htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './scr/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中的首页的名字
})
module.exports = {
  mode: 'development',
  plugins: [
    htmlPlugin,
  ],
  entry: './src/index', //入口
  module: {
    rules: [{
      test: '/\.html$/i',
      use: ['html-loader']
    }]
  }
}