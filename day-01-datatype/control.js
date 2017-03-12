var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

// 条件判断的方式
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}

var n = 4;
while(n){
	n = n-1;
}
alert(n);

// do while if else is same as C's