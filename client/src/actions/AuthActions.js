import axios from 'axios';
import jwt from 'jsonwebtoken';
import { hashHistory } from 'react-router';

import setAuthorizationToken from '../utils/SetAuthorizationToken.js';
import { isEmailExists, registrationRequest } from './RegistrationActions.js';
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
            errors.form = errors.data.message;
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

export function facebookLoginRequest(userData) {
  return dispatch => {
    console.log(userData);
    return axios.get(`http://localhost:5000/api/user/facebookLogin/${userData.email}`).then(
      (results) => {
        localStorage.setItem('currentUserId', results.data.id);
        localStorage.setItem('jwtToken', userData.accessToken);
        localStorage.setItem('email', userData.email);
        console.log(results);
        dispatch({
          type: SET_CURRENT_USER,
          currentUserId: localStorage.currentUserId,
          user: userData.accessToken
        });
        console.log(userData);
        dispatch(setFacebookProfile(userData));
        hashHistory.push('/profile');
      },
      (errors) => {
        errors.form = errors.data.message;
        this.setState({ errors });
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

export function getProfile(id) {
  return dispatch => {
    return axios.get(`http://localhost:5000/api/user/getProfile/${id}`);
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
    });
  }
}

export function setFacebookProfile(data) {
  console.log(data);
  let profile = {
    about: "",
    dateOfBirth: "",
    lastLoginDate: "",
    lastLoginTime: "",
    name: data.first_name,
    profession: "",
    surname: data.last_name,
    telephoneNumber: "",
    user_id: localStorage.currentUserId
  }
  return dispatch => {
    return axios.post('http://localhost:5000/api/user/setProfile/', profile,
    { headers: { 'Content-Type': 'application/json' } }).then((response) => {
      console.log(response);
    });
  }
}

export function logout(){
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    hashHistory.push('/');
  }
}

export function createTrip(data) {
  return dispatch => {
    return axios.post('http://localhost:5000/api/trip/createTrip', data,
    { headers: { 'Content-Type': 'application/json' } }).then((response) => {
      console.log(response);
      dispatch({
        type: ADD_ALERT_MESSAGE,
        message: {
          type: 'success',
          text: 'Trip was created successfully!'
        }
      });
      dispatch({
        type: 'TRIP_CREATED',
        trips: response.data
      });
    });
  }
}

export function getTrips() {
  return dispatch => {
    return axios.get('http://localhost:5000/api/trips').then(
      (response) => {
        dispatch({
          type: 'SET_TRIPS',
          trips: response.data
        });
      }
    );
    }
  }
