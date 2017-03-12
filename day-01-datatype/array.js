var arr = [ 1,2,3,4,'hello',null,true];

// alert(arr.length);
// // 排序
// alert(arr.sort());
// // 反转
// alert(arr.reverse());

// arr[4] = 'liushangnan';
// alert(arr.toString() + arr.slice(0.3).toString());
// alert(arr.indexOf('liushangnan'));	

// //push pop返回的值不是修改之后的字符串
// alert(arr.push('fuck','bitch').toString());

// splice 从制定的索引删去元素，并且可以添加元素
arr.splice(2,3,'google','facebook','microsoft');
//只是添加不删除
arr.splice(2,0,'apple');
alert("splice:" + arr.toString());

//concat 添加到后面
var arr1 = ['hello','world!']
arr = arr.concat(arr1);
alert("concat:" + arr.toString());

//join,中间以‘-’来连接
alert("join:" + arr.join('-'));

