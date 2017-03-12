// 鼠标事件

// click: 鼠标单击时触发；
// dblclick：鼠标双击时触发；
// mouseenter：鼠标进入时触发；
// mouseleave：鼠标移出时触发；
// mousemove：鼠标在DOM内部移动时触发；
// hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。

// 键盘事件

// 键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。

// keydown：键盘按下时触发；
// keyup：键盘松开时触发；
// keypress：按一次键后触发。

// 其他事件

// focus：当DOM获得焦点时触发；
// blur：当DOM失去焦点时触发；
// change：当<input>、<select>或<textarea>的内容改变时触发；
// submit：当<form>提交时触发；
// ready：当页面被载入并且DOM树完成初始化后触发。
// 
// ready仅作用于document对象。由于ready事件在DOM完成初始化后触发，且只触发一次，所以非常适合用来写其他的初始化代码
// 
$(document).on('ready', function () {
    $('#testForm).on('submit', function () {
        alert('submit!');
    });
});

$(document).ready(function () {
    // on('submit', function)也可以简化:
    $('#testForm).submit(function () {
        alert('submit!');
    });
})

$(function () {
    // init...
});


$(function () {
    $('#testMouseMoveDiv').mousemove(function (e) {
        $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
    });
});

function hello() {
    alert('hello!');
}

a.click(hello); // 绑定事件

// 10秒钟后解除绑定:
setTimeout(function () {
    a.off('click', hello);
}, 10000);


// 如果是javascript修改的代码，是不会被触发的
var input = $('#test-input');
input.change(function () {
    console.log('changed...');
});
// 我们希望用代码触发change事件，可以直接调用无参数的change()方法来触发该事件：
// 
// 浏览器安全

$(function () {
    window.open('/');
});


var button1 = $('#testPopupButton1');
var button2 = $('#testPopupButton2');

function popupTestWindow() {
    window.open('/');
}

button1.click(function () {
    popupTestWindow();
});

button2.click(function () {
    // 不立刻执行popupTestWindow()，100毫秒后执行:
    // 此时要被浏览器拒绝
    setTimeout(popupTestWindow, 100);
});