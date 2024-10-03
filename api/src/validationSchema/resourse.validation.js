

const Joi = require('joi');

// Define the validation schema for a resource
const resourceValidationSchema = Joi.object({
  name: Joi.string().min(1).max(100).required().trim()
    .messages({
      'string.empty': 'Name cannot be empty',
      'any.required': 'Name is required'
    }),
  
    description: Joi.string().min(1).max(500).optional().trim()
    .messages({
      'string.empty': 'description cannot be empty',
      'string.max': 'description must be less than or equal to 500 characters'
    }),

  link: Joi.string().uri().optional().trim()
    .messages({
      'string.uri': 'Link should be a valid URL',
      'string.empty': 'Link cannot be empty'
    }),
  subcategoryId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required() // Validating ObjectId format
    .messages({
      'string.pattern.base': 'Subcategory ID must be a valid ObjectId',
      'any.required': 'Subcategory ID is required'
    })
});

module.exports = { resourceValidationSchema };
