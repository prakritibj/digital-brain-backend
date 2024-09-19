const Joi = require('joi');

const noteValidationSchema = Joi.object({
  title: Joi.string().min(1).max(100).required().trim()
    .messages({
      'string.base': 'Title should be a type of string',
      'string.empty': 'Title cannot be empty',
      'string.min': 'Title should have at least 1 character',
      'string.max': 'Title should have a maximum length of 100 characters',
      'any.required': 'Title is required'
    }),

  writeNote: Joi.string().optional().trim()
    .messages({
      'string.base': 'WriteNote should be a type of string'
    })
});

module.exports = { noteValidationSchema };
