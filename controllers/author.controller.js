const mongoose = require('mongoose');
const authorModel = require('../models/author');

const getAllAuthors = async(req, res, next)=>{
    try{
        const authors = await authorModel.find();
        res.status(200).send(authors);
    }catch(err){
        next(err)
    }
};

const getAnAuthor = async(req, res, next)=>{
    try{
        const id = req.params.id
        const author = await authorModel.findById(id);
        res.status(200).send(author);
    }catch(err){
        next(err)
    }
};
const createAuthor = async(req, res, next)=>{
    try{
        const author = await authorModel.create(req.body);
        res.status(200).send(author);
    }catch(err){
        next(err)
    }
};

const updateAuthor = async(req, res, next)=>{
    try{
        const id = req.params.id
        const author = await authorModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).send(author);
    }catch(err){
        next(err)
    }
};

const deleteAnAuthor = async(req, res, next)=>{
    try{
        const id = req.params.id;
        const author = await authorModel.findByIdAndDelete(id);
        res.status(200).send('deleted successfully');
    }catch(err){
        next(err)
    }
};

module.exports = {getAllAuthors, getAnAuthor, createAuthor, updateAuthor, deleteAnAuthor};