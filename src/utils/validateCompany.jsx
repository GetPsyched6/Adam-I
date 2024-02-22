import Joi from 'joi';
import { countries } from 'countries-list';

const validCountries = Object.values(countries).map(country => country.name);

export const companySchema = Joi.object({
  companyName: Joi.string().max(255).required().messages({
    'string.base': 'Input must be text.',
    'string.max': 'Input must not exceed 255 characters.',
  }),
  businessType: Joi.string().max(255).required().messages({
    'string.base': 'Input must be text.',
    'string.max': 'Input must not exceed 255 characters.',
  }),
  numberOfEmployees: Joi.number().integer().min(1).max(10000000).required().messages({
    'number.base': 'Input must be an integer.',
    'number.min': 'Input cannot be below 1.',
    'number.max': 'Input cannot be above 10000000.',
  }),
  yearOfEstablishment: Joi.number()
    .integer()
    .min(1500)
    .max(new Date().getFullYear())
    .required()
    .messages({
      'number.base': 'Input must be a number.',
      'number.min': 'Input cannot be below 1500.',
      'number.max': `Input cannot be in the future.`,
    }),
  country: Joi.string()
    .valid(...validCountries)
    .required()
    .messages({
      'string.base': 'Country must be text.',
      'any.only': 'Please select a valid country.',
    }),
  city: Joi.string().max(255).required().messages({
    'string.base': 'Input must be text.',
    'string.max': 'Input must not exceed 255 characters.',
  }),
  postCode: Joi.string().max(255).allow('').allow(null).messages({
    'string.max': 'Input must not exceed 255 characters.',
  }),
  industry: Joi.string().max(255).required().messages({
    'string.base': 'Input must be text.',
    'string.max': 'Input must not exceed 255 characters.',
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
  companyAddress: Joi.string().max(512).required().messages({
    'string.base': 'Input must be text.',
    'string.max': 'Input must not exceed 512 characters.',
  }),
  personOfContact: Joi.string().max(255).required().messages({
    'string.base': 'Input must be text.',
    'string.max': 'Input must not exceed 255 characters.',
  }),
  position: Joi.string().max(255).required().messages({
    'string.base': 'Input must be text.',
    'string.max': 'Input must not exceed 255 characters.',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9-\s]*[0-9]{8,}[0-9-\s]*$/)
    .required()
    .messages({
      'string.pattern.base': 'Input must be a valid phone number.',
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .max(255)
    .required()
    .messages({
      'string.email': 'Please enter a valid email address.',
      'string.max': 'Email must not exceed 255 characters.',
    }),
  companyWebsite: Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .required()
    .messages({
      'string.uri': 'Please enter a valid URL with http or https.',
      'string.uriCustomScheme': 'Please enter a valid URL with http or https.',
    }),
}).with('accountPassword', 'confirmPassword');

export const validateCompanyData = data => {
  const { error } = companySchema.validate(data, { abortEarly: false });
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
