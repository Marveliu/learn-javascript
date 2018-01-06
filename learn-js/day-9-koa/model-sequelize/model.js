// scan all models defined in models:
const fs = require('fs');
const db = require('./db');

let files = fs.readdirSync(__dirname + '/models');

// 选中所有以js结尾的文件
let js_files = files.filter((f)=>{
    return f.endsWith('.js');
}, files);

module.exports = {};

// 引入对应models的js
for (let f of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + f);
}

module.exports.sync = () => {
    db.sync();
};
