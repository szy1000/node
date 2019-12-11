const handleUserRouter = (req, res) => {
    const { method, path } = req

    if(method === 'POST' && path === '/api/user/login') {
        return {
            msg: 'get blog list'
        }
    }
}

module.exports = handleUserRouter
