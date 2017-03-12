'use strict';

var fs = require('fs');

// 流也是一个对象，我们只需要响应流的事件就可以了：
// data事件表示流的数据已经可以读取了，end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。
// 打开一个流:
var rs = fs.createReadStream('./day-07/stream/sample.txt', 'utf-8');

// 响应的事件
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});


var ws1 = fs.createWriteStream('./day-07/stream/output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('./day-07/stream/output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();


// pipe
// var rs = fs.createReadStream('sample.txt');
// var ws = fs.createWriteStream('copied.txt');

// rs.pipe(ws);