const path = require('path')
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      AXIOS_BASE_PATH: JSON.stringify('/api'),
      AXIOS_TIME_OUT: JSON.stringify('5000'),
      AXIOS_HEADER_DEVICE: JSON.stringify('H5')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8081'
      }
    }
  }
})