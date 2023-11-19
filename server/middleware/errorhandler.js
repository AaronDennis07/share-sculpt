const { StatusCodes } = require("http-status-codes")

const errorHandlerMiddleware = (err,req,res,next)=>{
    const customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Something went wrong'
    }
    if(err.message==='invalid signature'){
        customError.message='Authentication Failed'
        customError.statusCode=StatusCodes.BAD_REQUEST
    }
    if(err?.code === 11000 && err?.keyValue?.username){
        customError.message='Username already exists'
        customError.statusCode=StatusCodes.BAD_REQUEST
    }
    if(err?.code === 11000 && err?.keyValue?.email){
        customError.message='Email already exists'
        customError.statusCode=StatusCodes.BAD_REQUEST
    }
    return res.status(customError.statusCode).json({
        msg:customError.message
    })
}

module.exports = errorHandlerMiddleware