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

const bookValidation = async (req, res, next)=>{
    const bookPayload = req.body;

    try{
        await bookSchema.validateAsync(bookPayload);
        next();
    }
    catch(err){
        next(err.details[0].message);
        
    }
}

module.exports = { bookValidation };