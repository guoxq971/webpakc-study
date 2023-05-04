const path = require('path');

module.exports = {
    /*
    mode: 开发模式
    开发模式(development): 不会对打包的 js 代码压缩
    生产模式(production): 会对打包的 js 代码压缩
    */
    mode: 'development', // production | development
    /*
    entry: 指定需要打包的文件
    */
    entry: './index.js',
    /*
    output: 指定打包后的文件输出的路径和输出的文件名称
    */
    output: {
        /*
        filename: 指定打包后的 js 文件名称
        */
        filename: 'bundle.js',
        /*
        path: 指定打包后的文件存储在哪里
        */
        path: path.resolve(__dirname, 'bundle'),
    },
};