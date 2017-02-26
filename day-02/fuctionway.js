// 对象中绑定方法
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

xiaoming.age; // function xiaoming.age()

// this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性
// 要保证this指向正确，必须用obj.xxx()的形式调用
xiaoming.age(); // 今年调用是25,明年调用就变成26了


'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
        	// this 只是在外部函数外面是指向xiaoming
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined


'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this,内部函数可以访问外部函数的变量
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 25


// 可以用apply
// 要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空

// 另一个与apply()类似的方法是call()，唯一区别是：
// apply()把参数打包成Array再传入；
// call()把参数按顺序传入。


// 动态修改方法
var count = 0;
var oldParseInt = parseInt; // 保存原函数

// 重新绑定方法
window.parseInt = function () {
    count += 1;
    // arguments 是默认的变量，表示所有传入的变量
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3