const { exce } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blog where 1=1 `

    if(author) {
        sql += `and author='${author}' `
    }
    if(keyword) {
        sql += `and title like '%${keyword}%' `
    }

    sql += `order by createtime desc;`
    return exce(sql)
}

const getDetailById = id => {
    const sql = `select * from blog where id = ${id}`
    return exce(sql)
}

const createNewBlog = (data = {}) => {
    const { title, content, author } = data
    const createtime = Date.now()

    const sql = `insert into blog (title, content, author, createtime ) 
    values ('${title}','${content}','${author}','${createtime}') `
    return exce(sql).then(insertData => {
        console.log(insertData)
        return {
            id: insertData.insertId
        }
    })
}

const updateBlog = (id, data = {}) => {
    const { title, content } = data
    const sql = `update blog set title='${title}', content='${content}' where id = ${id}`
    return exce(sql).then(update => {
        if(update.affectedRows > 0) {
            return true
        }
        return false
    })
}

const deleteBlogById = (id, author) => {
    const sql = `delete from blog where id = '${id}' and author = '${author}'`
    return exce(sql)
}
module.exports = {
    getList,
    getDetailById,
    createNewBlog,
    updateBlog,
    deleteBlogById
}
