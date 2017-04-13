var http = require("http")
var fs = require("fs")
var cheerio = require("cheerio")
var iconv = require("iconv-lite")
var path = require('path')
var urlList = JSON.parse(fs.readFileSync('list.json', 'utf8'))

function getContent(chapter) {
    console.log(chapter.link)
    http.get(chapter.link, function(res) {
        var chunks = []
        res.on('data', function(chunk) {
            console.log("this chunk is" + chunk)
            chunks.push(chunk)
        })
        res.on('end', function() {
            var html = iconv.decode(Buffer.concat(chunks), 'utf8')
            var $ = cheerio.load(html, {
                decodeEntities: false
            })
            var content = ($("#content").text()).replace(/\&nbsp;/g, '')
            if (fs.existsSync('太古神王.md')) {
                fs.appendFileSync('太古神王.md', '### ' + chapter.title)
                fs.appendFileSync('太古神王.md', content)
            } else {
                fs.writeFileSync('太古神王.md', '### ' + chapter.title)
                fs.appendFileSync('太古神王.md', content)
            }
        })
    }).on('error', function() {
        console.log("爬取" + chapter.link + "链接出错！")
    })
}

// 非同步
for (let i = 0; i < urlList.length; i++) {
    console.log(urlList[i])
    getContent(urlList[i])
}
