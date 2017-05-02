var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
	res.cookie('myFirstCookie', 'looks Good');
	res.end("Wow");
});

app.get('/removeCookie', function(req, res){
	res.clearCookie('myFirstCookie');
	res.end("Fine");
});

app.listen(9090, function(){
	console.log("Listen at 9090");
})