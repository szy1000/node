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
module.exports = {
    getList,
    getDetailById
}
