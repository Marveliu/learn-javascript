const assert = require('assert');

const hello = require('../hello');

// 测试异步函数需要在函数内部手动调用done()表示测试成功，done(err)表示测试出错。
describe('#async hello', () => {
    describe('#asyncCalculate()', () => {
        // function(done) {}
        it('#async with done', (done) => {
            (async function () {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 15);
                    done();
                } catch (err) {
                    done(err);
                }
            })();
        });

        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

        it('#sync function', () => {
            assert(true);
        });
    });
});
