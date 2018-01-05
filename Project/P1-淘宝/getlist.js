var http = require("http")
var fs = require("fs")
var cheerio = require("cheerio")
var iconv = require("iconv-lite")
var url = 'http://www.biquge.com/4_4140/'

http.get(url, function(res) {  //资源请求
    var chunks = []
    res.on('data', function(chunk) {
        chunks.push(chunk)
    })
    res.on('end', function() {
        var html = iconv.decode(Buffer.concat(chunks), 'utf8') //转码操作
        var $ = cheerio.load(html, {
            decodeEntities: false
        })
        var links = []
        $('#list dd').children('a').each(function(i, elem) {
            var link = new Object()
            link.title = $(this).text()
            link.link = 'http://www.biquge.com' + $(this).attr('href') //补齐 URL 信息
            if (i > 5) {
                links.push(link)
            }
        })
        fs.writeFile("list.json", JSON.stringify(links), function(err) {
            if (!err) {
                console.log("写文件成功")
            }
        })
    }).on('error', function() {
        console.log("网页访问出错")
    })
})