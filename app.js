const express = require('express');
const httpStatus = require('http-status')
const config = require('./config/index')
const connectDatabase = require('./loaders/index')
const {recordsRoutes} = require('./routes/index')
const errorHandler = require("./middlewares/errorHandler");
const ApiError = require('./errors/ApiError');
const logger = require("./scripts/logger");

config();
connectDatabase();

const app = express();

app.use(express.json())

app.listen(process.env.PORT || 4200, ()=>{
    console.log(`Application is running on ${process.env.PORT || 4200}`)
    app.get('/',(req,res)=>{
    console.log('Welcome!')
    res.status(httpStatus.OK).send('Welcome!')
})

app.use('/records',recordsRoutes)

app.use((req, res, next) => {
    logger.error(`There is no such endpoint as ${req.url}`)
    const error = new ApiError("There is no such endpoint",404);
    next(error);
  });

app.use(errorHandler);
})

module.exports = app