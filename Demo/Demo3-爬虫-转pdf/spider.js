var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');
var wkhtmltopdf = require('wkhtmltopdf');
var async = require('async');
var URL = require('url');
var Q = require("q");
var Spider = function(){
	var pages = [];
	//获取目录
	function getPages(url){
		var deferred = Q.defer();
		superagent.get(url).end(function(err,sres){
			if (err) {
				deferred.reject(err);

		    }
		    else
		    {
			    var $ = cheerio.load(sres.text);
			    if($('.uk-nav-side').length<2)
			    {
			    	deferred.reject(err);
			    }
			    else
			    {
				    $('.uk-nav-side').each(function (idx, element) {
				    	if(idx ==1)
				    	{
					        var $element = $(element);
					        $element.find('a').each(function(i,e){
					        	var $e = $(e);
					        	pages.push({'title':$e.text(),'url':$e.attr('href')});
					        });
					        deferred.resolve(pages); 
					    }
			        });
				}
			}
		});
		return deferred.promise;
	}

	//通过url获取网络数据
	function getDataByUrl(url){
		
		var deferred = Q.defer();
		superagent.get(url)
		// .timeout(60000)
		// .set('User-Agent','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36')
		.end(function(err,sres){
			if (err) {
				console.log("get",url," data error",err);
		        deferred.reject(err);
		    }
		    else
		    {
			    var $ = cheerio.load(sres.text,{decodeEntities: false});
		        //获取正文
		        $('.x-wiki-content').find('img').remove();
		        var content = $('.x-wiki-content').html();
		        deferred.resolve(content+"<br/><br/>\n\r\n"); 
		        console.log("get",url," success");
		    }

		});
		return deferred.promise;
	}

	//保存到缓存文件
	function saveToTemFile(tmpfile,data){
		
		var deferred = Q.defer();
		fs.appendFile(tmpfile, data, function (err) {
			if(err){
				deferred.reject(err);

			}
			else
			{
				
			  	deferred.resolve(); 				
			}

		});
		return deferred.promise;
	}

	//保存数据到pdf文件
	function saveToPdf(file,tmpfile){
		var wkhtmltopdf = require('wkhtmltopdf');
		if(fs.existsSync(tmpfile))
		{
			var stream = fs.createReadStream(tmpfile);
			wkhtmltopdf(stream).pipe(fs.createWriteStream('out.pdf'));
		}
		
	}



	this.getData = function(url){
		var tmpfile = __dirname + '/'+'content.tmp';
		if(fs.existsSync(tmpfile))
			fs.unlink(tmpfile);
		var urlInfo = URL.parse(url);
		getPages(url).then(function(data){
			//限制并发数目1，保证顺序正确
			async.mapLimit(data,1,function(item,callback){
					var url = urlInfo.host+item['url'];
					getDataByUrl(url).then(function(content){
						saveToTemFile(tmpfile,content).then(function(){
							callback( null,1);
						});
					});
			    }, function(err, results) {
							saveToPdf("file.pdf",tmpfile);
							if(fs.existsSync(tmpfile))
								fs.unlink(tmpfile);
			});
		});
	}
}


module.exports = Spider;