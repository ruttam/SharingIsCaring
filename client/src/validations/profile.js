import isEmpty from 'lodash/isEmpty';
import Time from 'react-time';

export default function validateInput(data) {
  let errors = {};
  const validator = require('valido');
  if(isEmpty(data.name)) {
    errors.name = 'this field is required';
  }
  if(isEmpty(data.surname)) {
    errors.surname = 'this field is required';
  }
  if(isEmpty(data.profession)) {
    errors.profession = 'this field is required';
  }
  if(isEmpty(data.telephoneNumber)) {
    errors.telephoneNumber = 'this field is required';
  }
  if(isEmpty(data.dateOfBirth)) {
    errors.dateOfBirth = 'this field is required';
  } else {
    var birthDate = new Date(data.dateOfBirth);
    let today_date = new Date();
    let today_year = today_date.getFullYear();
    let today_month = today_date.getMonth();
    let today_day = today_date.getDate();
    let age = today_year - birthDate.getFullYear();
    if( today_month < (birthDate.getMonth() - 1)) {
      age--;
    }
    if(((birthDate.getMonth() - 1) == today_month) && (today_day < birthDate.getDate())) {
      age--;
    }
    if(age < 18){
      errors.dateOfBirth = 'you must be at least 18 years old';
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
