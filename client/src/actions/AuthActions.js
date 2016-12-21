import axios from 'axios';
import jwt from 'jsonwebtoken';

import setAuthorizationToken from '../utils/SetAuthorizationToken.js';
import { SET_CURRENT_USER, USER_INFO_RECEIVED, ADD_ALERT_MESSAGE } from './Types.js';

export function loginRequest(userData, router) {
  return dispatch => {
    var params = new URLSearchParams();
    params.append('email', userData.email);
    params.append('password', userData.password);
    return axios.post('http://localhost:5000/token', params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(
      (results) => {
        const token = results.data.access_token;
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('email', userData.email);
        setAuthorizationToken(token);
         return axios.post('http://localhost:5000/api/user/login', userData).then(
           (results) => {
             localStorage.setItem('currentUserId', results.data.user_id);
             dispatch({
               type: SET_CURRENT_USER,
               currentUserId: results.data.user_id,
               user: jwt.decode(token)
             });
             router.push('/profile');
           },
           (errors) => {
             errors.form = errors.response.data.message;
             this.setState({ errors });
           }
         );
      },
      (errors) => {
        dispatch({
          type: ADD_ALERT_MESSAGE,
          message: {
            type: 'error',
            text: errors.response.data
          }
        });
      }
    );
  }
}

export function setCurrentUser(userId, user) {
  return {
    type: SET_CURRENT_USER,
    currentUserId: userId,
    user
  }
}

export function facebookLogin(userData, profileData) {
  return dispatch => {
    return axios.get('http://localhost:5000/api/user/facebookLogin', {userData, profileData})
    .then((response) => {

    });
  }
}

export function getProfile(id) {
  return dispatch => {
     return axios.get(`http://localhost:5000/api/user/getProfile/${id}`);
    // .then((response) => {
    //   console.log(response);
    //   dispatch({
    //     type: USER_INFO_RECEIVED,
    //     userProfile: response.data,
    //     currentUserId: id,
    //     user: localStorage.user
    //   }
    //);
    //}
  //);
}
}

export function setProfile(data) {
  console.log(data);
  return dispatch => {
    return axios.post('http://localhost:5000/api/user/setProfile/', data,
    { headers: { 'Content-Type': 'application/json' } }
  ).then((response) => {
    console.log(response);
    dispatch({
      type: ADD_ALERT_MESSAGE,
      message: {
        type: 'success',
        text: 'Your information was saved successfully!'
      }
    });
    // dispatch({
    //   type: USER_INFO_RECEIVED,
    //   currentUserId: data.user_id,
    //   user: localStorage.user,
    //   userProfile: response.data
    // });
  }
);
}
}
