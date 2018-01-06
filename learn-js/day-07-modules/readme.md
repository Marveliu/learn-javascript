1. crytpo: 加密
2. hello: 基本模块
3. http: web请求
4. stream: io
5. commonJS

// 这种模块加载机制被称为CommonJS规范。在这个规范下，每个.js文件都是一个模块，
// 它们内部各自使用的变量名和函数名都互不冲突，例如，hello.js和main.js都申明了全局变量var s = 'xxx'，但互不影响。
// 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，
// 一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量。