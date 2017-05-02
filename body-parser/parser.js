var express = require('express');
var path = require('path');
var fs = require('fs');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.use('/cssFile', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
	res.sendFile('form.html', {root: path.join(__dirname, '../html')});
})

app.post('/', function(req, res) {
	res.end(JSON.stringify(req.body));
})

app.listen(9090,function() {
	console.log('Listening at Port 9090');
})