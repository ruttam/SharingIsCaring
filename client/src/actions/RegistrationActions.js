import axios from 'axios';

export function registrationRequest(userData) {
  return dispatch => {
    return axios.post('http://localhost:5000/api/user/createUser', userData,
      { headers: { 'Content-Type': 'application/json' } });
  }
}

export function isEmailExists(email){
  return dispatch => {
    return axios.get(`http://localhost:5000/api/user/${email}`);
  }
}
