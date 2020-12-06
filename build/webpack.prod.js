const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new TerserJSPlugin({}),
    new webpack.DefinePlugin({
      AXIOS_BASE_PATH: JSON.stringify('/api'),
      AXIOS_TIME_OUT: JSON.stringify('5000'),
      AXIOS_HEADER_DEVICE: JSON.stringify('H5')
    })
  ]
})