const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

commonConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    })
  ]
}

module.exports = [
  merge(common, {
    ...commonConfig,
    optimization: {
      minimize: false
    },
    mode: 'production',
    // target: 'node',
    entry: {
      jsqv: path.resolve(__dirname, '../src/index.ts')
    },
    output: {
      path: path.resolve(__dirname, '../lib'),
      filename: '[name].js',
      libraryTarget: 'commonjs'
    },
    externals: {
      jquery: 'jQuery'
    }
  }),
  merge(common, {
    ...commonConfig,
    optimization: {
      minimize: false
    },
    mode: 'production',
    // target: 'web',
    entry: {
      jsqv: path.resolve(__dirname, '../src/index.ts')
    },
    output: {
      path: path.resolve(__dirname, '../es'),
      filename: '[name].js',
      libraryTarget: 'umd'
    },
    externals: {
      jquery: 'jQuery'
    }
  })
]
