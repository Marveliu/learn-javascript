	//ajax 方法 
	function success(text) {
		    var textarea = document.getElementById('test-response-text');
		    textarea.value = text;
		}

		function fail(code) {
		    var textarea = document.getElementById('test-response-text');
		    textarea.value = 'Error code: ' + code;
		}

		var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

		// XMLHttpRequest对象的open()方法有3个参数，第一个参数指定是GET还是POST，第二个参数指定URL地址，第三个参数指定是否使用异步，默认是true，所以不用写。

		// 注意，千万不要把第三个参数指定为false，否则浏览器将停止响应，直到AJAX请求完成。如果这个请求耗时10秒，那么10秒内你会发现浏览器处于“假死”状态。

		// 最后调用send()方法才真正发送请求。GET请求不需要参数，POST请求需要把body部分以字符串或者FormData对象传进去。
		
		request.onreadystatechange = function () { // 状态发生变化时，函数被回调
		    if (request.readyState === 4) { // 成功完成
		        // 判断响应结果:
		        if (request.status === 200) {
		            // 成功，通过responseText拿到响应的文本:
		            return success(request.responseText);
		        } else {
		            // 失败，根据响应码判断失败原因:
		            return fail(request.status);
		        }
		    } else {
		        // HTTP请求还在继续...
		    }
		}

		// 发送请求:
		request.open('GET', '/api/categories');
		request.send();
		alert('请求已发送，请等待响应...');

		// 安全策略，同源策略
		// 
		//域名要相同（www.example.com和example.com不同），
		//协议要相同（http和https不同），
		//端口号要相同（默认是:80端口，它和:8080就不同）。
		//有的浏览器口子松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。
		//
		//
		//方法1
		//flash现在一般是不用了
		//
		//方法2
		//二是通过在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器：，代理服务器再返回结果
		//
		//方法3
		//JSONP，它有个限制，只能用GET请求，并且要求返回JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用JavaScript资源
		//
		//方法3，cors,基于和html5
		//Origin表示本域，也就是浏览器当前页面的域。
		//当JavaScript向外域（如sina.com）发起请求后，浏览器收到响应后，首先检查Access-Control-Allow-Origin是否包含本域，
		//如果是，则此次跨域请求成功，如果不是，则请求失败，JavaScript将无法获取到响应的任何数据。
		//跨域能否成功，取决于对方服务器是否愿意给你设置一个正确的Access-Control-Allow-Origin，决定权始终在对方手中。
		//除了js.css都要进行检查，包括字体一类的
		//对于PUT、DELETE以及其他类型如application/json的POST请求，在发送AJAX请求之前，浏览器会先发送一个OPTIONS请求（称为preflighted请求）到这个URL上，询问目标服务器是否接受：
		//
		// OPTIONS /path/to/resource HTTP/1.1
		// Host: bar.com
		// Origin: http://my.com
		// Access-Control-Request-Method: POST
		// 
		// 服务器响应
		// 
		// HTTP/1.1 200 OK
		// Access-Control-Allow-Origin: http://my.com
		// Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS
		// Access-Control-Max-Age: 86400
		// 
		// 浏览器确认服务器响应的Access-Control-Allow-Methods头确实包含将要发送的AJAX请求的Method，才会继续发送AJAX，否则，抛出一个错误。