// 可以调整浏览器窗口大小试试:
alert('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);


// navigator 对象表示浏览器的信息
alert('appName = ' + navigator.appName + '\n' +
      'appVersion = ' + navigator.appVersion + '\n' +
      'language = ' + navigator.language + '\n' +
      'platform = ' + navigator.platform + '\n' +
      'userAgent = ' + navigator.userAgent);

// 获得浏览器的width
// 这个方式不好
// var width;
// if (getIEVersion(navigator.userAgent) < 9) {
//     width = document.body.clientWidth;
// } else {
//     width = window.innerWidth;
// }

// var width = window.innerWidth || document.body.clientWidth;

// alert('Screen size = ' + screen.width + ' x ' + screen.height);


// location
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'


// document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
document.title = '努力学习JavaScript!';

// dom
var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');
var i, s, menu, drinks;

menu = document.getElementById('drink-menu');
menu.tagName; // 'DL'

drinks = document.getElementsByTagName('dt');
s = '提供的饮料有:';
for (i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
alert(s);


// cookie 设置httpOnly
// history对象保存了浏览器的历史记录，JavaScript可以调用history对象的back()或forward ()，相当于用户点击了浏览器的“后退”或“前进”按钮。
// 这个对象属于历史遗留对象，对于现代Web页面来说，由于大量使用AJAX和页面交互，简单粗暴地调用history.back()可能会让用户感到非常愤怒。
// 新手开始设计Web页面时喜欢在登录页登录成功时调用history.back()，试图回到登录前的页面。这是一种错误的方法。
// 任何情况，你都不应该使用history这个对象了。