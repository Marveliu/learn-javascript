	// jQuery的选择器不会返回undefined或者nul
	// 返回的是一个jquery对象，而其是数组，如果是有多个匹配的，那么需要按照索引来取得对应的对象
	var div = $('#abc');
	var divDom = div.get(0); // 假设存在div，获取第1个DOM元素
	var another = $(divDom); // 重新把DOM包装为jQuery对象
	// 如果是jquery对象的话，你就可以使用jqueyr里面丰富的API了
	
	var ps = $('p'); // 返回所有<p>节点
	alert(ps.length); // 数一数页面有多少个<p>节点

	var a = $('.show'); // 注意没有空格！

	// dom 操作
	var dom = a.get[0];
	// dom.innerHTML(ps.length);
	// jquery 操作
	
	// 属性查找
	var email = $('[name=email]'); // 找出<??? name="email
	var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
	// 例如: name="icon-1", name="icon-2"
	var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
	// 例如: name="startswith", name="endsw

	// 多项选择器
	$('p,div'); // 把<p>和<div>都选出来
	$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来

	//  要注意的是，选出来的元素是按照它们在HTML中出现的顺序排列的，而且不会有重复元素。
	//  例如，<p class="red green">不会被上面的$('p.red,p.green')选择两次。
	 
	 // advance select
	$('ul.lang li.lang-javascript'); // [<li class="lang-javascript">JavaScript</li>]
	$('div.testing li.lang-javascript'); // [<li class="lang-javascript">JavaScript</li>]

	// 子选择器$('parent>child')类似层级选择器，
	// 但是限定了层级关系必须是父子关系，就是<child>节点必须是<parent>节点的直属子节点。
	
	$('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点
	$('ul.lang li:first-child'); // 仅选出JavaScript
	$('ul.lang li:last-child'); // 仅选出Lua
	$('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
	$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
	$('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素

	// :input：可以选择<input>，<textarea>，<select>和<button>；
	// :file：可以选择<input type="file">，和input[type=file]一样；
	// :checkbox：可以选择复选框，和input[type=checkbox]一样；
	// :radio：可以选择单选框，和input[type=radio]一样；
	// :focus：可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；
	// :checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')；
	// :enabled：可以选择可以正常输入的<input>、<select>
	// 等，也就是没有灰掉的输入；
	// :disabled：和:enabled正好相反，选择那些不能输入的
	// 
	
	var ul = $('ul.lang'); // 获得<ul>
	var dy = ul.find('.dy'); // 获得JavaScript, Python, Scheme
	var swf = ul.find('#swift'); // 获得Swift
	var hsk = ul.find('[name=haskell]'); // 获得Haskell

	var swf = $('#swift'); // 获得Swift
	var parent = swf.parent(); // 获得Swift的上层节点<ul>
	var a = swf.parent('div.red'); // 从Swift的父节点开始向上查找，直到找到某个符合条件的节点并返回

	var swift = $('#swift');
	swift.next(); // Scheme
	swift.next('[name=haskell]'); // Haskell，因为Haskell是后续第一个符合选择器条件的节点

	swift.prev(); // Python
	swift.prev('.js'); // JavaScript，因为JavaScript是往前第一个符合选择器条件的节点

	// filter
	var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
	var a = langs.filter('.dy'); // 拿到JavaScript, Python, Scheme
	var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
	langs.filter(function () {
	    return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点
	}); // 拿到Swift, Scheme

	var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
	var arr = langs.map(function () {
	    return this.innerHTML;
	}).get(); // 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']