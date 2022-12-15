const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/appConfig');

//import database configuration
const { connectDB } = require('./db/db');
connectDB();

const PORT = config.PORT 

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

//parse application json
app.use(bodyParser.json());

app.get('/', (req, res, next)=>{
    res.status(200).send('Hello, welcome to bookstore');
})

app.listen(PORT, ()=>{
    console.log(`app is listening at port ${PORT}`);
})