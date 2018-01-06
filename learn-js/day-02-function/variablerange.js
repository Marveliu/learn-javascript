// 函数内部声明的变量只是在函数的内部可见


'use strict';

function foo() {
    var x = 1;
    function bar() {
        var y = x + 1; // bar可以访问foo的变量x!
    }
    var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
}

// 如果内部的函数和外部发生重名的现象
// JavaScript的函数在查找变量时从自身函数定义开始，
// 从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量
function foo1() {
    var x = 1;
    function bar() {
        var x = 'A';
        alert('x in bar() = ' + x); // 'A'
    }
    alert('x in foo1() = ' + x); // 1
    bar();
}


// javasrript会扫描所有的变量，并把变量的申明提到头
// 请严格遵守“在函数内部首先申明所有变量”这一规则。最常见的做法是用一个var申明函数内部用到的所有变量
function foo3() {
    var x = 'Hello, ' + y;
    alert(x);
    var y = 'Bob';
}


foo3();

// window默认对象，局作用域的变量实际上被绑定到window的一个属性
// alert()函数其实也是window的一个变量
var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript


// 命名空间
// 全局变量会绑定到window上
// 唯一的全局变量MYAPP:
// 许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};


// 局部作用域
// 
function foo4() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量
    alert(i += 1); // SyntaxError
}


// 常量
/*大写字母不进行修改*/
var PI = 3.1415926;
const pi = 3.1415926;