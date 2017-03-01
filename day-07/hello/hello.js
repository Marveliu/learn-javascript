// hello.js文件就是一个模块，
// 模块的名字就是文件名（去掉.js后缀），所以hello.js文件就是名为hello的模块。

'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

// 把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了。
module.exports = greet


// CommonJS规范

// 这种模块加载机制被称为CommonJS规范。在这个规范下，每个.js文件都是一个模块，
// 它们内部各自使用的变量名和函数名都互不冲突，例如，hello.js和main.js都申明了全局变量var s = 'xxx'，但互不影响。
// 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，
// 一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量。

// 强烈建议使用module.exports = xxx的方式来输出模块变量，这样，你只需要记忆一种方法