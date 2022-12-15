const mongoose = require('mongoose');
const bookModel = require('../models/books');

const getAllBooks = async(req, res, next)=>{
    try{
        const books = await bookModel.find();
        res.status(200).send(books);
    }catch(err){
        next(err)
    }
};

const getABook = async(req, res, next)=>{
    try{
        const id = req.params.id
        const book = await bookModel.findById(id);
        res.status(200).send(book);
    }catch(err){
        next(err)
    }
};
const createBook = async(req, res, next)=>{
    try{
        const books = await bookModel.create(req.body);
        res.status(200).send(books);
    }catch(err){
        next(err)
    }
};

const updateBook = async(req, res, next)=>{
    try{
        const id = req.params.id
        const book = await bookModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).send(book);
    }catch(err){
        next(err)
    }
};

const deleteABook = async(req, res, next)=>{
    try{
        const id = req.params.id;
        const books = await bookModel.findByIdAndDelete(id);
        res.status(200).send('deleted successfully');
    }catch(err){
        next(err)
    }
};

module.exports = {getAllBooks, getABook, createBook, updateBook, deleteABook};