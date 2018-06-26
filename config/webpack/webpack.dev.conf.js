const webpack = require('webpack');
const opn = require('opn'); // 用于打开浏览器
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const webpackFile = require('./webpack.file.conf');

let config = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(webpackFile.devDirectory),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: [
          path.resolve(__dirname, '../../app'),
          path.resolve(__dirname, '../../entryBuild'),
        ],
        exclude: [
          path.resolve(__dirname, '../../node_modules'),
        ],
      },
      {
        test: /\.(css|pcss)$/,
        loader: 'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg|swf)$/,
        loader: 'file-loader?name=[name].[ext]&outputPath=' + webpackFile.resource + '/',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 9090,
    hot: true,
    inline: true,
    contentBase: path.resolve(webpackFile.devDirectory),
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: [
      {
        context: ['/api/**', '/u/**'],
        target: 'http://192.168.12.100:9090/',
        secure: false,
      },
    ],
    after() {
      opn('http://localhost:' + this.port)
    },
  },
});

module.exports = config;
