// GET and POST
var express = require('express');
var path = require('path');
var app = express();

app.use('/cssFile', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
	res.end(JSON.stringify(req.query));

	var response = "Hello" + req.query.firstName;
	res.end(response);
})

app.listen(9090,function() {
	console.log('Listening at Port 9090');
})