var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssFile', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: path.join(__dirname, '../html')});
});

app.get(/^(.+)$/, function(req ,resp){
	console.log(req.params);
	try{
		if(fs.statSync(path.join(__dirname, '../html', req.params[0]+'.html')).isFile()){
			resp.sendFile(req.params[0]+ '.html', {root: path.join(__dirname, '../html')});
		}
	} catch(err) {
		resp.sendFile('404.html', {root: path.join(__dirname, '../html')});
	}
});

app.listen(9090,function() {
	console.log('Listening at Port 9090');
});