const Joi = require('joi');

const bookSchema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(25)
        .trim()
        .required(),

    description: Joi.string()
    .min(5)
    .max(25)
    .trim()
    .optional(),
    
    body: Joi.string()
        .min(10)
        .max(250)
        .trim()
        .optional(),
        
    year: Joi.number()
        .integer()
        .max(2022)
        .required(),
    isbn: Joi.string()
        .min(5)
        .max(40)
        .trim()
        .required(),
    price: Joi.number()
        .min(0)
        .required()

})

const bookUpdateSchema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(25)
        .trim()
        .optional(),

    description: Joi.string()
    .min(5)
    .max(25)
    .trim()
    .optional(),
    
    body: Joi.string()
        .min(10)
        .max(250)
        .trim()
        .optional(),
        
    year: Joi.number()
        .integer()
        .max(2022)
        .optional(),
    isbn: Joi.string()
        .min(5)
        .max(40)
        .trim()
        .optional(),
    price: Joi.number()
        .min(0)
        .optional()

})

const bookValidation = async (req, res, next)=>{
    const bookPayload = req.body;

    try{
        await bookSchema.validateAsync(bookPayload);
        next();
    }
    catch(err){
        next({
            message: err.details[0].message,
            status:406
    });
        
    }
}

const bookUpdateValidation = async (req, res, next)=>{
    const bookPayload = req.body;

    try{
        await bookUpdateSchema.validateAsync(bookPayload);
        next();
    }
    catch(err){
        next({
            message: err.details[0].message,
            status:406
    });
        
    }
}

module.exports = { bookValidation, bookUpdateValidation };