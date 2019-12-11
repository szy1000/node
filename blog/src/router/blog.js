const handleBlogRouter = (req, res) => {
    const { method, path } = req

    if(method === 'GET' && path === '/api/blog/list') {
        return {
            msg: 'get blog list'
        }
    }

    if(method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: 'get blog detail'
        }
    }

    if(method === 'POST' && path === '/api/blog/new') {
        return {
            msg: 'new blog'
        }
    }

    if(method === 'POST' && path === '/api/blog/update') {
        return {
            msg: 'update blog'
        }
    }

    if(method === 'POST' && path === '/api/blog/delete') {
        return {
            msg: 'delete blog'
        }
    }
}

module.exports = handleBlogRouter
