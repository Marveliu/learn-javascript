
var ajax = ajaxGet('http://...');

ajax.ifSuccess(success)
    .ifFail(fail);

 // 这种链式写法的好处在于，
 // 先统一执行AJAX逻辑，不关心如何处理结果，然后，根据结果是成功还是失败，在将来的某个时候调用success函数或fail函数。
 // 
 // 这种“承诺将来会执行”的对象在JavaScript中称为Promise对象	
 

 function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    log('set timeout to: ' + timeOut + ' seconds.');

    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);

}

// 变量p1是一个Promise对象，它负责执行test函数。由于test函数在内部是异步执行的，当test函数执行成功时，我们告诉Promise对象：
var p1 = new Promise(test);

// 成功执行
var p2 = p1.then(function (result) {
    console.log('成功：' + result);
});

// 失败执行
var p3 = p2.catch(function (reason) {
    console.log('失败：' + reason);
});


new Promise(test).then(function (result) {
    console.log('成功：' + result);
}).catch(function (reason) {
    console.log('失败：' + reason);
});

// 可见Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了：