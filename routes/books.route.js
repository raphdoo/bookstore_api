const express = require('express');

const router = express.Router();

const { bookValidation, bookUpdateValidation } = require('../validators/book.validator')
const {getAllBooks, getABook, createBook, updateBook, deleteABook} = require('../controllers/book.controller');

router.route('/')
    .get(getAllBooks)
    .post(bookValidation, createBook)

router.route('/:id')
    .get(getABook)
    .put(bookUpdateValidation, updateBook)
    .delete(deleteABook)

module.exports = router;