const mongoose = require("mongoose");
const config = require('../config/appConfig');

mongoose.set('strictQuery', false);

const connectDB = ()=>{
    mongoose.connect(config.DB_URL);

    mongoose.connection.on('connected', ()=>{
        console.log('connection to mongoDB successful');
    })

    mongoose.connection.on('error', ()=>{
        console.log('connection to mongoDB failed')
    })

}

module.exports = { connectDB };