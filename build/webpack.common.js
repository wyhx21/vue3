const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './src/public/main.js'
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css'
    })
  ],
  resolve: {
    alias: {
      '@img': path.resolve(__dirname,'../src/img'),
      '@style': path.resolve(__dirname,'../src/style'),
      '@store': path.resolve(__dirname,'../src/store'),
      '@com': path.resolve(__dirname,'../src/component'),
      '@public': path.resolve(__dirname,'../src/public')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}