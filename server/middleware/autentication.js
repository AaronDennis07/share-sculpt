const { BadRequestError } = require("../errors")
const { verifyJWT } = require("../utils/jwt")

const authenticateUser =  async(req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1]
    console.log(token)
    if(!token) throw new BadRequestError('Authentication failed')
    const decodedToken =await  verifyJWT({token})
    req.user={
        username:decodedToken.username,
        id:decodedToken.id
    }
    console.log(req.user);
    next()
}

const authorizePermissions = ()=>{

}

module.exports = {
    authenticateUser,
    authorizePermissions
}