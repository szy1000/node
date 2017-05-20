var express = require('express');
var app = express();

console.log(__dirname);

app.use('/cssFile', express.static(__dirname + '/assets'));

app.get('/helloThere',function(request, response) {
	response.send('Hello There');
});

app.listen(9090,function() {
	console.log('Listening at Port 9090');
})