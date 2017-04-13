console.log("start");

for(var i = 1; i<=3;i++)
{
    setTimeout(function() {
        console.log(i);
    }, 0);
};

async.series({
	one: function(callback){
		callback(null, 1);
	},
	two: function(callback){
		callback(null, 2);
	}
},function(err, results) {
	console.log(results);
});