const queryString = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const postData = (req) => {
    const {method, headers} = req
    const promise = new Promise((resolve, reject) => {
        if(method !== 'POST') {
            resolve({})
            return
        }
        if(headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let temp = ""
        req.on('data', chunk => {
            temp += chunk.toString()
        })
        req.on('end', () => {
            if(!temp) {
                resolve({})
                return
            }
            resolve(JSON.parse(temp))
        })

    })
    return promise
}

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')

    req.path = req.url.split('?')[0]
    req.query = queryString.parse(req.url.split('?')[1])
    postData(req).then(data => {
        req.body = data

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
    })
}

module.exports = serverHandle
