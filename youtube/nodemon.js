var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.end('Wow! again!!!')
})

app.listen(9090, function(){
	console.log("Listen at 9090");
})