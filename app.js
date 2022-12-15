const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/appConfig');
const bookRoute = require('./routes/books.route')


//import database configuration
const { connectDB } = require('./db/db');
connectDB();

const PORT = config.PORT 

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

//parse application json
app.use(bodyParser.json());

//routes
app.use('/api/v1/books', bookRoute)

app.get('/', (req, res, next)=>{
    res.status(200).send('Hello, welcome to bookstore');
})

app.use((error, req, res, next)=>{
    console.log(error);
    const errorStatus = error.status || 500;
    res.status(errorStatus).send(error.message);
})

app.listen(PORT, ()=>{
    console.log(`app is listening at port ${PORT}`);
})