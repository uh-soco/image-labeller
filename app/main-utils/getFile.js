const fs = require('fs')


// Should probably be async instead
const getFile = (path) => {
    return fs.readFileSync(path)
}


module.exports = getFile