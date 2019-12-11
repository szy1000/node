const handleUserRouter = (req, res) => {
    const { method, path, body } = req

    if(method === 'POST' && path === '/api/user/login') {
        return {
            msg: 'login',
            body
        }
    }
}

module.exports = handleUserRouter
