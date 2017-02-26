// JavaScript的原型链和Java的Class区别就在，
// 它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。


// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
// 判断所指定的原型对象
xiaoming.__proto__ === Student; // true


function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}


var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!

// 注意，如果不写new，这就是一个普通函数，它返回undefined。
// 但是，如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this，也就是说，不需要在最后写return this;。

function Student1(name) {
    this.name = name;
}


// 函数之间共有hello属性
Student1.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};


xiaoming.name; // '小明'
xiaohong.name; // '小红'
xiaoming.hello; // function: Student.hello()
xiaohong.hello; // function: Student.hello()
xiaoming.hello === xiaohong.hello; // true


// 继承
// // PrimaryStudent构造函数:
// function PrimaryStudent(props) {
//     Student.call(this, props);
//     this.grade = props.grade || 1;
// }

// // 空函数F:
// function F() {
// }

// // 把F的原型指向Student.prototype:
// F.prototype = Student.prototype;

// // 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
// PrimaryStudent.prototype = new F();

// // 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
// PrimaryStudent.prototype.constructor = PrimaryStudent;

// // 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
// PrimaryStudent.prototype.getGrade = function () {
//     return this.grade;
// };

// // 创建xiaoming:
// var xiaoming = new PrimaryStudent({
//     name: '小明',
//     grade: 2
// });
// xiaoming.name; // '小明'
// xiaoming.grade; // 2

// // 验证原型:
// xiaoming.__proto__ === PrimaryStudent.prototype; // true
// xiaoming.__proto__.__proto__ === Student.prototype; // true

// // 验证继承关系:
// xiaoming instanceof PrimaryStudent; // true
// xiaoming instanceof Student; // true


// 具体参照：http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000
// 该函数可以进行复用
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}