// // 返回ID为'test'的节点：
// var test = document.getElementById('test');
// // 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
// //var trs = document.getElementById('test-table').getElementsByTagName('tr');
// // 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
// var reds = document.getElementById('test-div').getElementsByClassName('red');


// // 获取节点test下的所有直属子节点:
// var cs = test.children;
// // 获取节点test下第一个、最后一个子节点：
// var first = test.firstElementChild;
// var last = test.lastElementChild;


// // 通过querySelector获取ID为q1的节点：
// var q1 = document.querySelector('#q1');
// // 通过querySelectorAll获取q1节点内的符合条件的所有节点：
// var ps = q1.querySelectorAll('div.highlighted > p');


// 增dom操作
var p = document.getElementById('test-p');

// 重复插入会被替换
p.innerHTML = 'ABC'; 
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// 无法插入javascript代码，因为不会被浏览器解析
p.innerText = '<script>alert("Hi")</script>';


// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em'

// 插入dom
//原来html界面存在的节点被删除，然后放在了其他的位置上面
 var
    js = document.getElementById('js'),
    ref = document.getElementById('python')
    list = document.getElementById('list');
    // 自己创建一个节点对象
    haskell = document.createElement('p');
	haskell.id = 'haskell';
	haskell.innerText = 'Haskell';


list.appendChild(js);
list.appendChild(haskell);


// 插入指定的节点前面
// 原来html里面存在该节点，因此任然会线删除在增加
list.insertBefore(haskell, ref);

// 删除DOM
// 要删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉：

// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除: 调用父节点的方法，返回是被删除的子节点
var removed = parent.removeChild(self);

removed === self; // true


// 不支持HTML5的浏览器无法识别新的控件，会把它们当做type="text"来显示。支持HTML5的浏览器将获得格式化的字符串。例如，type="date"类型的input的value将保证是一个有效的YYYY-MM-DD格式的日期，或者空字符串。