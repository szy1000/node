// var server = require("http");

// server.createServer(engine).listen(9090);

// function engine(request,response) {
// 	response.writeHead(200,{'Content-Type':'text/plain'});
// 	response.end('hey');
// 	// console.log("q");
// }

var http = require("http");
var server = http.createServer(engine);

server.listen(9090, function(){
	console.log("Hello");
})

function engine(request,response) {
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('hey'+ request.url);
	// console.log("q");
}