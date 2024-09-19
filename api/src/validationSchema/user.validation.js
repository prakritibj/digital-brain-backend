const Joi = require("joi")
const userValidationSchema = Joi.object({
  
  name: Joi.string().required().trim()
    .messages({
      'string.empty': 'Name is required'
    }),
  
  userName: Joi.string().required().trim()
    .messages({
     'string.empty': 'username is required'
    }),
  
  
  password: Joi.string().required().trim()
    .messages({
      'string.empty': 'Password is required',
     
    }),
  
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().trim()
    .messages({
      'string.empty': 'Confirm Password cannot be empty',
    }),
  
  isDeleted: Joi.boolean().optional()
    .messages({
      'boolean.base': 'IsDeleted should be a type of boolean'
    })
});

// login

const loginValidationSchema = Joi.object({
  userName: Joi.string().required().trim()
    .messages({
      'string.empty': 'User name is required'
    }),
  
  password: Joi.string().required().trim()
    .messages({
      'string.empty': 'Password cannot be empty',
    })
});

module.exports = {userValidationSchema, loginValidationSchema};
