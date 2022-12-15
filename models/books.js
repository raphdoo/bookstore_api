const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    body:{
        type:String,
        required:false
    },
    year:{
        type:Number,
        required:true,
        max:[2022, 'year must be less than or equal to 2022']
    },
    isbn:{
        type:String,
        required:true,
        unique:[true, 'ISBN must be unique']
    },
    price:{
        type:Number,
        required:true,
        min:[0, 'price must be greater than or equal to zero']
    }
},{
    timestamps:true
})

const books = mongoose.model('books', bookSchema);

module.exports = books;