// 'use strict';
// var a = [1, 2, 3];
// for (var x of a) {
// }
// alert('你的浏览器支持for ... of');

var m = new Map([['liushangnan',100],['michael',98]]);

// 注意不是for in,修复了for in 关于array.length的问题，只是遍历循环集合本身的元素
for(var x of m)
{
	alert(`${x[0]}:${x[1]}`);
}

// iterabel的foreach方法，接受一个函数，每一次迭代都会自动调用该函数
var a = ['A', 'B', 'C'];
// element index array是固定的？
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    alert(element);
});


// 遍历Map
m.forEach(function (value, key, map) {
    alert(value);
});


// 当然也是可以忽略这样的一些参数
