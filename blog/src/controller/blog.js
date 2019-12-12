const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '1',
            content: '内容A'
        },
        {
            id: 2,
            title: '2',
            content: '内容A'
        },
        {
            id: 3,
            title: '3',
            content: '内容A'
        },
    ]
}

const getDetailById = id => {
    return {
        id,
        content: 'detail',

    }
}

const createNewBlog = (data = {}) => {
    return {
        id: 333
    }
}

const updateBlog = (id, data = {}) => {
    return false
}

const deleteBlogById = id => {
    return true
}
module.exports = {
    getList,
    getDetailById,
    createNewBlog,
    updateBlog,
    deleteBlogById
}
