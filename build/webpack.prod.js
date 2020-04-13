const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    jsqv: path.resolve(__dirname,'../src/index.js'),
  },
  output: {
    filename: '[name].js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})