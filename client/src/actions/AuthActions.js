import axios from 'axios';
import setAuthorizationToken from '../utils/SetAuthorizationToken.js';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './Types.js';

export function loginRequest(userData, router) {
  return dispatch => {
    return axios.post('http://localhost:5000/api/user/login', userData).then(
      (results) => {
        console.log(results);

        dispatch({
          type: SET_CURRENT_USER,
          user: results.data.user_id
        });
        router.push('/profileData');
      },
      (errors) => {
        this.setState({errors: errors.response.data.message});
        console.log(this.state.errors);
      }
    );
  }
}

export function facebookLogin(userData, profileData) {
  return dispatch => {
    return axios.get('http://localhost:5000/api/user/facebookLogin', {userData, profileData});
  }
}

export function getProfile(id) {
  return dispatch => {
    return axios.get(`http://localhost:5000/api/user/getProfile/${id}`)
    .then((response) => {
      console.log(response);
      dispatch({
        type: "USER_INFO_RECEIVED",
        userProfile: response.data
      });
    }
  );
  }
}

export function setProfile(data) {
  return dispatch => {
    return axios.post('http://localhost:5000/api/user/setProfile/', data)
    .then((response) => {
      console.log(response);

    }
  );
  }
}

// export function setCurrentUser(user){
//   return(
//     type: SET_CURRENT_USER,
//     user
//   );
// }

// export function isEmailExists(email) {
//   return dispatch => {
//     return axios.get(`http://localhost:5000/api/user/${email}`);
//   }
// }
