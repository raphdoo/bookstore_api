const express = require('express');

const router = express.Router();

const { authorValidation, authorUpdateValidation } = require('../validators/author.validator');
const {getAllAuthors, getAnAuthor, createAuthor, updateAuthor, deleteAnAuthor} = require('../controllers/author.controller');

router.route('/')
    .get(getAllAuthors)
    .post(authorValidation, createAuthor)

router.route('/:id')
    .get(getAnAuthor)
    .put(authorUpdateValidation, updateAuthor)
    .delete(deleteAnAuthor)

module.exports = router;