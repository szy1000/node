require('colors');
var http = require('http');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<p>Node JS </p>');
})

server.listen(3000, function(){
	console.log('finish start node server!'.rainbow);
});