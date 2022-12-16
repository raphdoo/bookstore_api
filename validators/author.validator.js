const Joi = require("joi");

const authorSchema = Joi.object({
  firstname: Joi.string().max(255).trim().required(),

  lastname: Joi.string().max(255).trim().required(),

  dob: Joi.date().greater('01-01-1900').less('01-01-2022').optional(),

  country: Joi.string().trim().required(),
  books: Joi.array().items(Joi.string()).optional(),
});

const authorUpdateSchema = Joi.object({
  firstname: Joi.string().max(25).trim().optional(),

  lastname: Joi.string().max(25).trim().optional(),

  dob: Joi.date().min(1900).max(2022).optional(),

  country: Joi.string().trim().optional(),
  books: Joi.array().items(Joi.string()).optional(),
});

const authorValidation = async (req, res, next) => {
  const bookPayload = req.body;

  try {
    await authorSchema.validateAsync(bookPayload);
    next();
  } catch (err) {
    next({
      message: err.details[0].message,
      status: 406,
    });
  }
};

const authorUpdateValidation = async (req, res, next) => {
  const bookPayload = req.body;

  try {
    await authorUpdateSchema.validateAsync(bookPayload);
    next();
  } catch (err) {
    next({
      message: err.details[0].message,
      status: 406,
    });
  }
};

module.exports = { authorValidation, authorUpdateValidation };
