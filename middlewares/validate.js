const httpStatus = require("http-status")
const ApiError = require('../errors/ApiError');
const logger = require("../scripts/logger");

const isValid = (schema,source) => (req,res,next) =>{
    const {value, error} = schema.validate(req[source])

    if(error){
        const errorMessage = error?.details?.map((detail)=>
            detail?.message
        ).join(',')
        logger.error(errorMessage)
        return next(new ApiError(errorMessage,httpStatus.BAD_REQUEST));
    }
    Object.assign(req,value)
    return next();
}

module.exports={
    isValid
}