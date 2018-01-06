// 如果是单独的写在这个文件里面，就无法调用jquery里面的具体功能，十分的奇怪

	var j1 = $('#test-ul li.js');
	var j2 = $('#test-ul li[name=book]');
	j1.html('<span style="color: grey">JavaScript</span>');
	j2.text('JavaScript & fuck');
	$('ul.lang>li').css('background-color', '#ffd351').css('color', 'red');
	// 注意，jQuery对象的所有方法都返回一个jQuery对象（可能是新的也可能是自身），这样我们可以进行链式调用，非常方便。
	j2.hide();

	// dom的信息
	// 浏览器可视窗口大小:
	alert(
		$(window).width()+ // 800
		$(window).height()+ // 600

		// HTML文档大小:
		$(document).width()+ // 800
		$(document).height() // 3500
	)

	var div = $('#test-div');
	div.attr('data'); // undefined, 属性不存在
	div.attr('name'); // 'Test'
	div.attr('name', 'Hello'); // div的name属性变为'Hello'
	div.removeAttr('name'); // 删除name属性
	div.attr('name'); // undefined

	// attr()和prop()对于属性checked处理有所不同
	 var radio = $('#test-radio');
	radio.attr('checked'); // 'checked'
	radio.prop('checked'); // true
	var radio = $('#test-radio');
	radio.is(':checked'); // true

	// 对于表单元素，jQuery对象统一提供val()方法获取和设置对应的value属性
