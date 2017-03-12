// 特殊字符 -,注意中间要用，来分开
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null,
    'middle-school': 'xiangyangwuzhong',
};

// 特殊字符访问受限制
alert('特殊字符:' +xiaoming['middle-school']);

// 为什么输出的是object object
alert(xiaoming.toString());
delete xiaoming['height'];
alert("delete:"+xiaoming.toString());

//toSting 因为是继承的所以也是有的
alert("toString"+'toString' in xiaoming);
// 判断是否为非继承的属性
alert("hasOwnProperty:" + xiaoming.hasOwnProperty('heigth'));