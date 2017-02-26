// function指出这是一个函数定义；
// abs是函数的名称；
// (x)括号内列出函数的参数，多个参数以,分隔；
// { ... }之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。

function abs(x) {
	function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}


// 函数名abs可以视为指向该函数的变量
alert(abs('hello world'));
alert(abs(-1));


// JavaScript还有一个免费赠送的关键字arguments，
// 它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array：
//可以用来判断传入的参数的个数
function foo(x) {
    alert(x); // 10
    for (var i=0; i<arguments.length; i++) {
        alert(arguments[i]); // 10, 20, 30
    }
}

foo(10, 20, 30);


// rest参数只能写在最后，前面用...标识
// 多余的参数以数组形式交给变量rest
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

//注意javascript有行末尾自动加；的特性
function foo1() {
    return; // 自动添加了分号，相当于return undefined;
        { name: 'foo' }; // 这行语句已经没法执行到了
}