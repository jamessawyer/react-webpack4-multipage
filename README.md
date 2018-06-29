## package scripts 命令说明

```
# 要注意
# windows 上 'prod' 命令需要 更改为 'set ...'
# mac 上 'prod' 命令需要 更改为 'export ...'

# macos
  "scripts": {
    "entry": "node config/entry/entryBuild.js", // 打包生成入口js文件
    "devBuildHtml": "node config/webpack/webpack.devBuildHtml.conf.js", // 生成多页面html文件
    "devNew": "yarn run entry && yarn run devBuildHtml", // 这是上面2个命令一起运行 生成入口js文件和html文件
    "dev": "webpack-dev-server --devtool eval --progress --colors --profile --config config/webpack/webpack.dev.conf.js", // 这个是开发时运行的 热加载等功能
    "prod": "export BABEL_ENV=production && webpack --progress --colors --config config/webpack/webpack.prod.conf.js", // 打包js html, 压缩 代码拆分等
    "ptp": "yarn run prod && gulp buildTime zip test pre" // 这个是打包prod 然后使用gulp生成zip文件并ftp到服务器上
  },



# windows
  "scripts": {ss
    "entry": "node config/entry/entryBuild.js", // 打包生成入口js文件
    "devBuildHtml": "node config/webpack/webpack.devBuildHtml.conf.js", // 生成多页面html文件
    "devNew": "yarn run entry && yarn run devBuildHtml", // 这是上面2个命令一起运行 生成入口js文件和html文件
    "dev": "webpack-dev-server --devtool eval --progress --colors --profile --config config/webpack/webpack.dev.conf.js", // 这个是开发时运行的 热加载等功能
    "prod": "set BABEL_ENV=production && webpack --progress --colors --config config/webpack/webpack.prod.conf.js", // 打包js html, 压缩 代码拆分等
    "ptp": "yarn run prod && gulp buildTime zip test pre" // 这个是打包prod 然后使用gulp生成zip文件并ftp到服务器上
  },
```