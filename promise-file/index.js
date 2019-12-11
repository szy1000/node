const fs = require('fs')
const path = require('path')

// function getFileContent(fileName, callback) {
//     const fullFileName = path.resolve(__dirname, './', fileName)
//     fs.readFile(fullFileName, (err, data) => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         callback(JSON.parse(data.toString()))
//     })
// }
//
// getFileContent('a.json', aData => {
//     console.log('a Data', aData)
//     getFileContent(aData.next, bData => {
//         console.log('b Data', bData)
//         getFileContent(bData.next, cData => {
//             console.log('cData', cData)
//         })
//     })
// })

function getFileContent(fileName) {
    const promise = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, './', fileName)
        fs.readFile(fullFileName, (err, data) => {
            if(err) {
                reject(err)
                return
            }
            resolve(JSON.parse(data.toString()))
        })
    })
    return promise
}

getFileContent('a.json').then(res => {
    console.log(res)
    return getFileContent(res.next)
}).then(res2 => console.log(res2))
