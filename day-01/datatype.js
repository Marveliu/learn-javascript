// 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
// 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。

var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

// 并不强制要求用var申明变量。这个设计错误带来了严重的后果：如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量：
//alert(person.name+person.city);

// 注意ES6 是 ` 不是 ''
var message = `hello,${person.name},${person.city}`;
//alert(message);


var s = 'test';
// s并没有发生改变，因为调用这些的方法不会改变原有的字符串内容，而是返回一个新的字符串；
s[0] = 'a';
//可以重新赋值来用
s = s.toUpperCase();
var n = s.indexOf('ST');
//substring() 不包括有括号的数字
alert(s + n.toString() + s.substring(1,2));





