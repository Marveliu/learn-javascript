var https = require("https")
var fs = require("fs")
var cheerio = require("cheerio")
var iconv = require("iconv-lite")
var path = require('path')
//var urlList = JSON.parse(fs.readFileSync('list.json', 'utf8'))

function getContent(chapter) {
    console.log(chapter)
    https.get(chapter, function(res) {
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
            var clothes = new Object()
            clothes.name = ($(".tb-detail-hd h1").text()).replace(/\&nbsp;/g, '')
            console.log(clothes)
        })
    }).on('error', function() {
        console.log("爬取" + chapter + "链接出错！")
    })
}

// 非同步
//for (let i = 0; i < urlList.length; i++) {
//  console.log(urlList[i])
    getContent("https://detail.tmall.com/item.htm?id=551017780653&ali_refid=a3_430583_1006:1103518667:N:%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E5%A4%8F%E5%AD%A3:251e398be255fbc5d90c535f207d1155&ali_trackid=1_251e398be255fbc5d90c535f207d1155&spm=a230r.1.14.1.uKTY6a")
//}
