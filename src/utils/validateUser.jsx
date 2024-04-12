import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().max(255).required().messages({
    'string.base': 'Name must be text.',
    'string.max': 'Name must not exceed 255 characters.',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .max(255)
    .required()
    .messages({
      'string.email': 'Please enter a valid email address.',
      'string.max': 'Email must not exceed 255 characters.',
    }),
  accountPassword: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$_.!@#%^&*()\-+=]{8,128}$/)
    .required()
    .messages({
      'string.pattern.base': 'Password requirements not met.',
    }),
  confirmPassword: Joi.valid(Joi.ref('accountPassword')).required().messages({
    'any.only': 'Passwords must match.',
  }),
}).with('accountPassword', 'confirmPassword');

export const validateUserData = data => {
  const { error } = userSchema.validate(data, { abortEarly: false });
  if (!error) return null;

  const customErrors = error.details.reduce((acc, detail) => {
    const { message } = detail;

    // *Remove empty field warning.
    if (message.includes('is not allowed to be empty')) {
      acc[detail.path[0]] = '';
      return acc;
    }

    acc[detail.path[0]] = message;

    return acc;
  }, {});

  return customErrors;
};
