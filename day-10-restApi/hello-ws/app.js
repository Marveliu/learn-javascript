const WebSocket = require('ws');

// 创建一个websocket实例
const WebSocketServer = WebSocket.Server;

// 实例化 3000端口
const wss = new WebSocketServer({
    port: 3000
});

// connection 创建
wss.on('connection', function(ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function(message) {
        console.log(`[SERVER] Received: ${message}`);
        setTimeout(() => {
            ws.send(`What's your name?`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        }, 1000);
    })
});

console.log('ws server started at port 3000...');

// client test:

let count = 0;

// 打开一个WebSocket:
let ws = new WebSocket('ws://localhost:3000/ws/chat');

ws.on('open', function() {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

// 响应onmessage事件:
ws.on('message', function(message) {
    console.log(`[CLIENT] Received: ${message}`);
    count++;
    if (count > 3) {
        ws.send('Goodbye!');
        ws.close();
    } else {
        setTimeout(() => {
            ws.send(`Hello, I'm Mr No.${count}!`);
        }, 1000);
    }
});


// WebSocket协议本身不要求同源策略（Same-origin Policy），也就是某个地址为http://a.com的网页可以
// 通过WebSocket连接到ws://b.com。
// 但是，浏览器会发送Origin的HTTP头给服务器，服务器可以根据Origin拒绝这个WebSocket请求。所以，是否要求同源要看服务器端如何检查。

// 还需要注意到服务器在响应connection事件时并未检查请求的路径，
// 因此，在客户端打开ws://localhost:3000/any/path可以写任意的路径。