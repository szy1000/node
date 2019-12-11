const http = require("http");
const queryString = require('querystring')
const server = http.createServer(engine);

function engine(request,response) {
	const { method, url, path } = request
	if(method === 'POST') {
		let temp = ''
		request.on('data', chunk => {
			temp += chunk.toString()
		})

		request.on('end', () => {
			console.log(temp)
			response.end('Hello POST')
		})
	}
	// const query = queryString.parse(url.split('?')[1])
	// console.log('query', JSON.stringify(query))
	// response.writeHead(200,{'Content-Type':'text/plain'});
	// response.end(
	// 	JSON.stringify('Hello GET') //不能直接返回对象
	// );
}

server.listen(9090, function(){
	console.log("Listening in port 9090");
})
