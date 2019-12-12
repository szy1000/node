const { getList, getDetailById, createNewBlog, updateBlog, deleteBlogById } = require('../controller/blog')
const { SuccessModel, ErrorModel } =require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const { method, path, query, body, id } = req

    if(method === 'GET' && path === '/api/blog/list') {
        const { author = '', keyword = '' } = query
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }

    if(method === 'GET' && path === '/api/blog/detail') {
        const detail = getDetailById(id)
        return new SuccessModel(detail)
    }

    if(method === 'POST' && path === '/api/blog/new') {
        const id = createNewBlog(body)
        return new SuccessModel(id)
    }

    if(method === 'POST' && path === '/api/blog/update') {
        const flag = updateBlog(body)
        if(flag) {
            return new SuccessModel(flag)
        } else {
            return new ErrorModel('更新失败')
        }
    }

    if(method === 'POST' && path === '/api/blog/delete') {
        const flag = deleteBlogById(id)
        if(flag) {
            return new SuccessModel('删除成功')
        } else {
            return new ErrorModel('删除失败')
        }
    }
}

module.exports = handleBlogRouter
