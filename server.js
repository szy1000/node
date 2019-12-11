const http = require("http");
const queryString = require('querystring')
const server = http.createServer(engine);

function engine(req,res) {
	const { method, url } = req
	const path = url.split('?')[0]
	const query = queryString.parse(url.split('?')[1])

	// res.setHeader('Content-type', 'text/html') // 返回html
	res.setHeader('Content-type', 'application/json') //返回json

	const data = {
		method, url, path, query
	}

	if(method === 'POST') {
		let temp = ''
		req.on('data', chunk => {
			temp += chunk.toString()
		})

		req.on('end', () => {
			data.temp = temp
			res.end(JSON.stringify(data))
		})
	}

	if(method === 'GET') {
		res.end(JSON.stringify(data))
	}

	// res.writeHead(200,{'Content-Type':'text/plain'});
	// res.end(
	// 	JSON.stringify('Hello GET') //不能直接返回对象
	// );
}

server.listen(9090, function(){
	console.log("Listening in port 9090");
})
