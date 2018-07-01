## package scripts 命令说明

```
# 要注意
# windows 上 'prod' 命令需要 更改为 'set ...'
# mac 上 'prod' 命令需要 更改为 'export ...'

# macos
  "scripts": {
    "precommit": "yarn run lint-staged", // 提交之前看是否存在错误
    "entry": "node config/entry/entryBuild.js", // 打包生成入口js文件
    "devBuildHtml": "node config/webpack/webpack.devBuildHtml.conf.js", // 生成多页面html文件
    "devNew": "yarn run entry && yarn run devBuildHtml", // 这是上面2个命令一起运行 生成入口js文件和html文件
    "dev": "webpack-dev-server --devtool eval --progress --colors --profile --config config/webpack/webpack.dev.conf.js", // 这个是开发时运行的 热加载等功能
    "prod": "export BABEL_ENV=production && webpack --progress --colors --config config/webpack/webpack.prod.conf.js", // 打包js html, 压缩 代码拆分等
    "ptp": "yarn run prod && gulp buildTime zip test pre", // 这个是打包prod 然后使用gulp生成zip文件并ftp到服务器上
    "lint": "eslint --ext .js app", // 对js代码进行校验
    "lint:fix": "eslint --fix --ext .js app", // 对校验后的代码进行修复
    "lint-staged": "lint-staged",
    "lint-staged:js": "eslint --ext .js app",
    "prettier": "prettier --write ./app/**/**/**/*.js" // 对js文件格式进行格式化
  },



# windows
  "scripts": {ss
    // ...
    "prod": "set BABEL_ENV=production && webpack --progress --colors --config config/webpack/webpack.prod.conf.js", // 打包js html, 压缩 代码拆分等
  },
```

## CODE QUALITY

  - commit提交前,将文件提交到Staging，然后使用 **`yarn run precommit`** 对文件进行校验，是否存在errors,如果存在则提交失败
  - 对js文件进行格式化处理 **`yarn run prettier`**
