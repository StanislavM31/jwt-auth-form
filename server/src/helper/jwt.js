const jwt = require('jsonwebtoken')

function createToken(userData){
    return jwt.sign(userData[0], "fish")
}






module.exports= {createToken}