const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } =require('../model/resModel')

const handleUserRouter = (req, res) => {
    const { method, path, body, query } = req
    // const { username, password } = body
    const { username, password } = query
    if(method === 'GET' && path === '/api/user/login') {
        const result = login(username, password)
        return result.then(data => {
            if(data.username) {
                // 操作cookie
                res.setHeader('Set-Cookie', `username=${data.username}; path=/`)
                return new  SuccessModel('登录成功')
            } else {
                return new  ErrorModel('登录失败')
            }
        })
    }

    if(method === 'GET' && req.path === '/api/user/login-test') {
        if(req.cookie.username) {
            return  Promise.resolve(new SuccessModel())
        }
        return Promise.resolve(new ErrorModel('尚未登录'))
    }
}

module.exports = handleUserRouter
