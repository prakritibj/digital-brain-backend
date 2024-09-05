const Joi = require("joi")

const userValidationSchema = Joi.object({
  name: Joi.string().required()
    .messages({
      'string.base': 'Name should be a type of string',
      'string.empty': 'Name cannot be empty',
      'any.required': 'Name is required'
    }),
  
  userName: Joi.string().required()
    .messages({
      'string.base': 'Username should be a type of string',
      'string.empty': 'Username cannot be empty',
      'any.required': 'Username is required'
    }),
  
  password: Joi.string().required()
    .messages({
      'string.base': 'Password should be a type of string',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required'
    }),
  
  confirmPassword: Joi.string().valid(Joi.ref('password')).required()
    .messages({
      'string.base': 'Confirm Password should be a type of string',
      'string.empty': 'Confirm Password cannot be empty',
      'any.required': 'Confirm Password is required',
      'any.only': 'Confirm Password must match Password'
    }),
  
  isDeleted: Joi.boolean().optional()
    .messages({
      'boolean.base': 'IsDeleted should be a type of boolean'
    })
});

module.exports = userValidationSchema;
