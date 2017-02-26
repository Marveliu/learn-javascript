'use strict';
var m = new Map();
var s = new Set();
alert('你的浏览器支持Map和Set！');

// Map 是键值对
var m = new Map([['liushangnan',100],['michael',98]]);
alert("map:"+m.get('liushangnan'));

// 操作
m.set('adam',95);
// 替换掉之前的值
m.set('adam',0);
alert("has adam?:"+m.has('adam'));
m.delete('liushangnan');
alert("delete:"+m.toString());

// Set 没有重复的key，单步存储value,
var s = new Set();
var s1 = new Set([1,2,3])
