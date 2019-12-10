const http = require("http");
const queryString = require('querystring')
const server = http.createServer(engine);

function engine(request,response) {
	const {method, url} = request
	console.log(method)
	console.log(url)
	if(method === 'POST') {
		console.log(request.headers)
	}
	const query = queryString.parse(url.split('?')[1])
	console.log(query)
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end(
		JSON.stringify(query) //不能直接返回对象
	);
}

server.listen(9090, function(){
	console.log("Listening in port 9090");
})
