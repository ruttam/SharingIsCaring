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
        const token = results.data.token;
        localStorage.setItem('jwtToken', token);
        console.log(results);
        return axios.post('http://localhost:5000/api/user/login', userData).then(
          (results) => {
                  console.log(results);
                  dispatch({
                    type: SET_CURRENT_USER,
                    userId: results.data.user_id
                  });
                  router.push('/profileData');
              },
                (errors) => {
                  console.log(errors);
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
    return axios.post('http://localhost:5000/api/user/login', userData).then(
      (results) => {
              console.log(results);
              dispatch({
                type: SET_CURRENT_USER,
                userId: results.data.user_id
              });
              router.push('/profileData');
          },
            (errors) => {
              dispatch({
                type: ADD_ALERT_MESSAGE,
                message: {
                  type: 'error',
                  text: errors.response.data.message
                }
              });
            }
          );
  }
}

export function setCurrentUser(userId) {
  console.log(userId);
  return {
    type: SET_CURRENT_USER,
    text: userId
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
    return axios.get(`http://localhost:5000/api/user/getProfile/${id}`)
    .then((response) => {
      console.log(response);
      dispatch({
        type: USER_INFO_RECEIVED,
        userProfile: response.data
      });
    }
  );
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
          dispatch({
            type: USER_INFO_RECEIVED,
            userProfile: response.data
          });
        }
      );
  }
}
