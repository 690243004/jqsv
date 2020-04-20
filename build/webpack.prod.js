const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

commonConfig = {
  optimization: {
    minimize: false
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       name: 'commons', // 提取出来的文件命名
    //       // name： ‘common/common’ //  即先生成common文件夹
    //       chunks: 'initial', // initial表示提取入口文件的公共css及
    //       // chunks: 'all' // 提取所有文件的公共部分
    //       // test： '/\.css$/'  // 只提取公共css ，命名可改styles
    //       minChunks: 2, // 表示提取公共部分最少的文件数
    //       minSize: 0 // 表示提取公共部分最小的大小
    //       // 如果发现页面中未引用公共文件，加上enforce: true
    //     }
    //   }
    // }
  },

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
      // filename: '[name].css'
      filename: 'common.css'
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
    mode: 'production',
    // target: 'node',
    entry: {
      jqsv: path.resolve(__dirname, '../src/index.ts')
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
    mode: 'production',
    // target: 'web',
    entry: {
      jqsv: path.resolve(__dirname, '../src/index.ts')
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
