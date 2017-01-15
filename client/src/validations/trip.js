import isEmpty from 'lodash/isEmpty';
import Time from 'react-time';

export default function validateInput(data) {
  let errors = {};
  const validator = require('valido');
  if(isEmpty(data.from)) {
    errors.from = 'this field is required';
  }
  if(isEmpty(data.to)) {
    errors.to = 'this field is required';
  }
  if(isEmpty(data.numberOfSeats)) {
    errors.numberOfSeats = 'this field is required';
  }
  if(isEmpty(data.time)) {
    errors.time = 'this field is required';
  }
  if(isEmpty(data.date)) {
    errors.date = 'this field is required';
  } 
  if(isEmpty(data.car)) {
    errors.car = 'this field is required';
  }
  if(!(data.password === data.passwordConfirmation)) {
    errors.passwordConfirmation = 'passwords must match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
