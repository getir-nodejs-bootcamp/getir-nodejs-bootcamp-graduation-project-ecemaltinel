const Records = require('../models/records')


const allRecords = () =>{
    return Records.find({});
}

const specificRecords = (data) =>{

    const startDate = new Date(new Date(data.startDate).toISOString())
    const endDate = new Date(new Date(data.endDate).toISOString())
    const minCount = data.minCount
    const maxCount = data.maxCount

    const pipeline = [
        { $match: { createdAt:{$gt:startDate,$lt:endDate}}},   
       {
         $unwind: "$counts"
       },
        { $group: { _id: "$_id", totalCount: { $sum: "$counts" },
        key: { $first: "$key" },
        createdAt: { $first: "$createdAt" } } },
        {$match: {totalCount: {$gt: minCount , $lt: maxCount}}},
        { $project : {
            _id : 0 ,
            totalCount : 1 ,
            key : 1,
            createdAt:1
        }}
     ];
    return Records.aggregate(pipeline);

}

module.exports={
    allRecords,
    specificRecords
}