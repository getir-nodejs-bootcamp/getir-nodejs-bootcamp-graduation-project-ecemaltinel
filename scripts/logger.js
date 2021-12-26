const winston = require('winston')
const path = require("path");

//logs will be written in 2 different files --info/error--
const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: path.join(__dirname, "../", "logs/", "info.log"),
            level: 'info',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json())
        }),
        new winston.transports.File({
            filename: path.join(__dirname, "../", "logs/", "error.log"),
            level: 'error',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json())

        })
    ]
})

module.exports = logger