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

    req.cookie = {}
    const cookieStr = req.headers.cookie || ''
    cookieStr.split(';').forEach(item => {
        if(!item) {
           return
        }

        const arr = item.split('=');
        const key = arr[0]
        const value = arr[1]
        req.cookie[key] = value
    })
    console.log(req.cookie)
    postData(req).then(data => {
        req.body = data

        const blogData = handleBlogRouter(req, res)
        const userData = handleUserRouter(req, res)
        if(blogData) {
            blogData.then(data => {
                res.end(JSON.stringify(data))
            })
            return
        }


        if(userData) {
            userData.then(data => {
                res.end(JSON.stringify(data))
            })
            return
        }

        res.writeHead(404, {"Content-type": "text/plain"})
        res.write('404 Not Find')
        res.end()
    })
}

module.exports = serverHandle
