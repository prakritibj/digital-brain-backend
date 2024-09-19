const Joi = require('joi');

const categoryValidationSchema = Joi.object({
    categoryName: Joi.string().required().trim()
    .messages({
      'string.empty': 'Category name is required',
    })
});

module.exports = { categoryValidationSchema }
