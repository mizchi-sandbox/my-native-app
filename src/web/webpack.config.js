/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    publicPath: '/',
    port: 5555,
    contentBase: path.join(__dirname, 'public')
  },
  entry: [path.join(__dirname, './index.js')],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}
