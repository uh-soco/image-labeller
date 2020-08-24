const jwt = require('jsonwebtoken')

const signJsonWebToken = data => {
    return jwt.sign(
        data.payload
        , data.parsedPrivateKey
        , { algorithm: 'RS256' }
    )

}

module.exports = signJsonWebToken