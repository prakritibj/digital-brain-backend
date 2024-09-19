const Joi = require('joi');

// Define the validation schema for a resource
const resourceValidationSchema = Joi.object({
  name: Joi.string().min(1).max(100).required().trim()
    .messages({
      'string.empty': 'Name cannot be empty'
    }),

  subcategoryID: Joi.alternatives().try(Joi.string().alphanum().min(1), Joi.number().integer().min(1)).required()
    .messages({
      'alternatives.match': 'SubcategoryID should be a string or a number',
      'string.alphanum': 'SubcategoryID should be an alphanumeric string',
      'number.integer': 'SubcategoryID should be an integer',
      'any.required': 'SubcategoryID is required'
    }),

  link: Joi.string().uri().optional().trim()
    .messages({
     'string.uri': 'Link should be a valid URL',
      'string.empty': 'Link cannot be empty'
    })
});

module.exports = { resourceValidationSchema };
