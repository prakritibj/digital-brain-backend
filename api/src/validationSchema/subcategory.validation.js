const Joi = require('joi')

// Define the validation schema for a subcategory
const subcategoryValidationSchema = Joi.object({
  subcategoryName: Joi.string().min(1).max(100).required().trim()
    .messages({
      'string.empty': 'SubcategoryName cannot be empty',
    }),

  categoryId: Joi.alternatives().try(
    Joi.string().alphanum().min(1),
    Joi.number().integer().min(1)
  ).required()
    .messages({
      'alternatives.match': 'CategoryId should be a string or a number',
      'string.alphanum': 'CategoryId should be an alphanumeric string',
      'number.integer': 'CategoryId should be an integer',
      'any.required': 'CategoryId is required'
    })
})

module.exports = { subcategoryValidationSchema }
