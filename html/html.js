var express = require('express');
var path = require('path');
var app = express();

console.log(__dirname);
app.use('/cssFile', express.static(__dirname + '/assets'));

console.log(__dirname);
app.get('/', function(req, res) {
	res.sendFile('index.html', {root: path.join(__dirname, '../html')});
})
console.log(__dirname);

app.listen(9090,function() {
	console.log('Listening at Port 9090');
})