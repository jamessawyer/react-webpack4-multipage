/**
 * 生成多页面入口文件
 * 在 webpack.base.conf.js 中使用
 */
const entryBuild = require('../entry/entry');
let entry = {};

entryBuild.map((data) => {
  entry[data.name] = ['./entryBuild/' + data.name + '.js', data.title];
});

module.exports = entry;
