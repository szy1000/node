const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } =require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const { method, path, query } = req

    if(method === 'GET' && path === '/api/blog/list') {
        const { author = '', keyword = '' } = query
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
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
