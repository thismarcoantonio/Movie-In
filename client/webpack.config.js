const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMaps: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMaps: true }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true, plugins: (loader) => [
                  require('autoprefixer')({ browsers: ['last 3 versions', 'iOS 9'] }),
                ]
              }
            }
          ]
        })
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000,
    host: '192.168.0.25'
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}