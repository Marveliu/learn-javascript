// test.js

const assert = require('assert');
const sum = require('./hello');

// 它断言一个表达式为true。如果断言失败，就抛出Error
// 缺点一单是有一个错误，那么之后的测试都不会运行
assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);

console.log('测试成功！')