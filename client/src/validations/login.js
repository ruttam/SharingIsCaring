import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  const validator = require('valido');
  if(isEmpty(data.email)) {
    errors.email = 'this field is required';
  } else if(!validator.email(data.email)) {
    errors.email = 'email is not valid';
  }
  if(isEmpty(data.password)) {
    errors.password = 'this field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
