import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  const validator = require('valido');
  if(isEmpty(data.email)){
    errors.email = 'this field is required';
  } else if(!validator.email(data.email)){
    errors.email = 'email is invalid';
  }
  if(isEmpty(data.password)){
    errors.password = 'this field is required';
  }
  if(isEmpty(data.passwordConfirmation)){
    errors.passwordConfirmation = 'this field is required';
  }
  if(!(data.password === data.passwordConfirmation)){
    errors.passwordConfirmation = 'passwords must match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
