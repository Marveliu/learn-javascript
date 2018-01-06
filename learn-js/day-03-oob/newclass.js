class Student {

	// class的定义包含了构造函数constructor和定义在原型对象上的函数hello()（注意没有function关键字），

    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}


class PrimaryStudent extends Student {
	// 需要通过super(name)来调用父类的构造函数，否则父类的name属性无法正常初始化
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}


// 注意是否兼容的问题，因此需要
// https://babeljs.io/ 可以将javasript转化为更加适合浏览器的代码