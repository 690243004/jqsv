const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = [
  merge(common, {
    mode: 'production',
    target: 'node',
    entry: {
      jsqv: path.resolve(__dirname, '../src/index.ts')
    },
    output: {
      path: path.resolve(__dirname, '../lib'),
      filename: '[name].js'
    },
    plugins: [new CleanWebpackPlugin()],
    externals: {
      jquery: 'jQuery'
    }
  }),
  merge(common, {
    mode: 'production',
    target: 'web', // 默认
    entry: {
      jsqv: path.resolve(__dirname, '../src/index.ts')
    },
    output: {
      path: path.resolve(__dirname, '../es'),
      filename: '[name].js'
    },
    plugins: [new CleanWebpackPlugin()],
    externals: {
      jquery: 'jQuery'
    }
  })
]
