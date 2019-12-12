const loginCheck = (username, password) => {
    if(username === 'szy' && password === 123) {
        return true
    } else {
        return false
    }
}

module.exports = {
    loginCheck
}
