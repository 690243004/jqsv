const config = {
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          /*  'postcss-loader', */ 'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: ['url-loader?limit=17631&name=[hash:8]-[name].[ext]'],
      },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' },
    ],
  },
  resolve: {
    // 省略后缀
    extensions: ['.ts','.js', 'css', 'scss'],
  },
}

module.exports = config
