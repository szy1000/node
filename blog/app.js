const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const queryString = require('querystring')

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')

    req.path = req.url.split('?')[0]
    req.query = queryString.parse(req.url.split('?')[1])


    const blogData = handleBlogRouter(req)
    const userData = handleUserRouter(req)
    if(blogData) {
        res.end(JSON.stringify(blogData))
        return
    }

    if(userData) {
        res.end(JSON.stringify(userData))
        return
    }

    res.writeHead(404, {"Content-type": "text/plain"})
    res.write('404 Not Find')
    res.end()
}

module.exports = serverHandle
