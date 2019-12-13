const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } =require('../model/resModel')

const handleUserRouter = (req, res) => {
    const { method, path, body } = req
    const { username, password } = body
    if(method === 'POST' && path === '/api/user/login') {
        const result = loginCheck(username, password)
        return result.then(data => {
            if(data.username) {
                return new  SuccessModel('登录成功')
            } else {
                return new  ErrorModel('登录失败')
            }
        })
    }
}

module.exports = handleUserRouter
