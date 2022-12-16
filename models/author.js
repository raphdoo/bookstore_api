const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:false
    },
    country:{
        type:String,
        required:false,
    },
    books:{
        type:Array,
        default:[]
    }
},{
    timestamps:true
})

const authors = mongoose.model('authors', authorSchema);

module.exports = authors;