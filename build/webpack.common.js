const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const EncodingPlugin = require('webpack-encoding-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    main: './src/public/main.js'
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css'
    }),
    new EncodingPlugin({
      encoding: 'utf-8'
    })
  ],
  resolve: {
    alias: {
      '@img': path.resolve(__dirname,'../src/img'),
      '@style': path.resolve(__dirname,'../src/style'),
      '@store': path.resolve(__dirname,'../src/store'),
      '@com': path.resolve(__dirname,'../src/component'),
      '@public': path.resolve(__dirname,'../src/public'),
      '@axios': path.resolve(__dirname,'../src/axios'),
      '@router': path.resolve(__dirname,'../src/plugin/router'),
      '@utils': path.resolve(__dirname,'../src/plugin/utils')
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
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'divider-text-color': 'red',
                  // hack:`true; @import "../src/style/common/vant-them.less";`
                }
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    moduleIds: 'deterministic',
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