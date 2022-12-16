const mongoose = require("mongoose");
const config = require('../config/appConfig');
const logger = require('../logger/logger');


mongoose.set('strictQuery', false);

const connectDB = ()=>{
    mongoose.connect(config.DB_URL);

    mongoose.connection.on('connected', ()=>{
        logger.info('connection to mongoDB successful');
    })

    mongoose.connection.on('error', ()=>{
        logger.info('connection to mongoDB failed')
    })

}

module.exports = { connectDB };