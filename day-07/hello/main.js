'use strict';

// 引入hello模块:
// 注意到引入hello模块用Node提供的require函数：
var greet = require('./hello');
var s = 'Michael';
greet(s); // Hello, Michael!