const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/appConfig');
const bookRoute = require('./routes/books.route');
const authorRoute = require('./routes/author.route');
const rateLimit = require('express-rate-limit');
const helmet = require("helmet");
const logger = require('./logger/logger');
const auth0 = require('./auth/auth0');
const { requiresAuth } = require('express-openid-connect');




//import database configuration
const { connectDB } = require('./db/db');
connectDB();

const PORT = config.PORT 

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

//authO setup
app.use(auth0);

//helmet security middleware
app.use(helmet());

//parse application json
app.use(bodyParser.json());


//rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

//routes
app.use('/api/v1/books', requiresAuth(), bookRoute);
app.use('/api/v1/authors', requiresAuth(), authorRoute);


app.get('/', (req, res, next)=>{
    res.status(200).send('Hello, welcome to bookstore');
})

app.use((error, req, res, next)=>{
    console.log(error);
    const errorStatus = error.status || 500;
    res.status(errorStatus).send(error.message);
})

app.listen(PORT, ()=>{
    logger.info(`app is listening at port ${PORT}`);
})