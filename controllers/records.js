const httpStatus = require('http-status')
const {allRecords,specificRecords} = require('../services/records')
const ApiError = require("../errors/ApiError");
const logger = require("../scripts/logger");


const getAllRecords = (req,res,next) =>{
    allRecords().then((recordList)=>{
        if(!recordList){
            logger.error(`Records could not be fetched`)
            return next(new ApiError("Records could not be fetched", httpStatus.INTERNAL_SERVER_ERROR))
        }
        else{
            logger.info(`Records are fetched succesfully`)
            const resp = {
                code:0,
                msg:"Success",
                records:recordList
            }
            res.status(httpStatus.OK).send(resp) 
        } 
    }).catch((e) =>{
        logger.error(e?.message)
        next(new ApiError(e?.message))
    })
}

const getSpecificRecords = (req,res,next) =>{
    specificRecords(req.body).then((recordList)=>{
      if(!recordList){
        logger.error(`Problem occured while fetching specified record list`)
        return next(new ApiError("Problem occured while fetching specified record list", httpStatus.INTERNAL_SERVER_ERROR))
      } 
      else{
          const resp = {
              code:0,
              msg:"Success",
              records:recordList
          }
          logger.info(`Records are fetched succesfully -> ${JSON.stringify(recordList)} `)
        res.status(httpStatus.OK).send(resp)  
    }
  }).catch(
    (e) =>{
        logger.error(e?.message)
        next(new ApiError(e?.message))
    } 
)
}

module.exports={
    getAllRecords,
    getSpecificRecords
}