//import Validator from 'valido';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  const Validator = require('valido');
  if(data.email == ""){
    errors.email = 'this field is required';
  } else if(!Validator.email(data.email)){
      errors.email = 'email is not valid';
    }
  if(data.password == ""){
    errors.password = 'this field is required';
  }
  if(data.passwordConfirmation == ""){
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