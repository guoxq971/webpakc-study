### 为什么使用wepack

1. 传统js中，引入多个文件开发，会有先后顺序问题，顺序错误会引发报错；
2. 使用webpack将这多个文件模块合并到一个文件中，在引入主文件；
3. webpack会检索文件中`依赖`的文件某块，将依赖的文件某块`收集到检索的文件中`，进行打包；
4. ps：大概就是可以将多个js模块合并打包到一个文件中

### 使用webpack

```sh
# 本地安装
npm init -y
npm install --save-dev webpack
npm install --save-dev webpack-cli

# 打包
npx webpack
```



