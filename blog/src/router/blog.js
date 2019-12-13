const { getList, getDetailById, createNewBlog, updateBlog, deleteBlogById } = require('../controller/blog')
const { SuccessModel, ErrorModel } =require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const { method, path, query, body } = req

    if(method === 'GET' && path === '/api/blog/list') {
        const { author = '', keyword = '' } = query
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    if(method === 'GET' && path === '/api/blog/detail') {
        const result = getDetailById(query.id)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    if(method === 'POST' && path === '/api/blog/new') {
        const result = createNewBlog(body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    if(method === 'POST' && path === '/api/blog/update') {
        const result = updateBlog(query.id, body)
        return result.then(val => {
            if(val) {
                return new SuccessModel(val)
            } else {
                return new ErrorModel('更新失败')
            }
        })

    }

    if(method === 'POST' && path === '/api/blog/delete') {
        const result = deleteBlogById(query.id, body.author)
        return result.then(res => {
            if(res) {
                return new SuccessModel('删除成功')
            } else {
                return new ErrorModel('删除失败')
            }
        })

    }
}

module.exports = handleBlogRouter
