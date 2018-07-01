const webpack = require('webpack');
const opn = require('opn'); // 用于打开浏览器
const merge = require('webpack-merge');
const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const baseWebpackConfig = require('./webpack.base.conf');
const webpackFile = require('./webpack.file.conf');

const config = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(webpackFile.devDirectory),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '',
  },
  optimization: {
    // 包清单
    runtimeChunk: {
      name: 'manifest',
    },
    // 拆分公共包
    splitChunks: {
      // 项目公共组件
      cacheGroups: {
        common: {
          chunks: 'initial',
          name: 'common',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        // 第三方组件
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    // 设置热更新
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'cache-loader', // 使用缓存提升构建速度
          'babel-loader',
        ],
        include: [
          path.resolve(__dirname, '../../app'),
          path.resolve(__dirname, '../../entryBuild'),
        ],
        exclude: [path.resolve(__dirname, '../../node_modules')],
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
              // @remove-on-eject-begin
              baseConfig: {
                extends: [require.resolve('eslint-config-react-app')],
              },
              // ignore: false
              useEslintrc: false,
              // @remove-on-eject-end
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: [path.resolve(__dirname, '../../app')],
        exclude: [path.resolve(__dirname, '../../node_modules')],
      },
      {
        test: /\.(css|pcss)$/,
        loader: 'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg|swf)$/,
        loader: `file-loader?name=[name].[ext]&outputPath=${webpackFile.resource}/`,
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
      opn(`http://localhost:${this.port}`);
    },
  },
});

module.exports = config;
