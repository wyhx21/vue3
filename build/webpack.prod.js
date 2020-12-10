const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PUBLIC_PATH = '/h5/'

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist' + PUBLIC_PATH),
    publicPath: PUBLIC_PATH,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new TerserJSPlugin({}),
    new webpack.DefinePlugin({
      AXIOS_BASE_PATH: JSON.stringify('/api'),
      AXIOS_TIME_OUT: JSON.stringify('5000'),
      AXIOS_HEADER_DIVIDE: JSON.stringify('H5')
    }),
    new BundleAnalyzerPlugin()
  ]
})