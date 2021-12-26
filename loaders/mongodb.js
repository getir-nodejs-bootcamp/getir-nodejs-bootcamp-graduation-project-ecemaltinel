const Mongoose = require('mongoose')
const logger = require("../scripts/logger");

const db = Mongoose.connection;

db.once('open',()=>{
    console.log('DB connection is successfull')
    logger.info(`DB connection is successfull`)
})

const connectDB = async () => {
    const {DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME,DB_OPTIONS} = process.env; 
    
    //mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true
    await Mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?${DB_OPTIONS}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}


module.exports ={
    connectDB
}