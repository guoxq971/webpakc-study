### 注意点

1. index.html 的 `<script src="bundle/bundle.js"></script>`要在body中引入，在head中引入的话，如果使用到 *document*.body 相关的话就一个错;
   1. ps：head先加载，body元素后加载
2. 打包命令 `npx webpack`，默认会打包 `index.js`
3. 配置文件名称必须叫 `webpack.config.js`，如果要另起名字需要 `npx webpack --config xx`
4. 配置打包脚本 package.json -> script -> `npm run build: npx webpack --config webpack.config.js`



### 配置文件

```js
// webpack.config.js
const path = require('path');

module.exports = {
  /*
  mode: 开发模式
  开发模式(development): 不会对打包的js代码压缩
  生产模式(production): 会对打包的js代码压缩
  */
  mode:'production', // production | development
  /*
  entry: 指定需要打包的文件
  */
  entry: './index.js',
  /*
  output: 指定打包后的文件输出的路径和输出的文件名称
  */
  output:{
    /*
    filename: 指定打包后的js文件名称
    */
    filename:'bundle.js',
    /*
    path: 指定打包后的文件存储在哪里
    */
    path:path.resolve(__dirname, 'bundle'),
  },
}
```

