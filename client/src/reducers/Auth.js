import { SET_CURRENT_USER, USER_INFO_RECEIVED } from '../actions/Types.js';

import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  currentUserId: {},
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        currentUserId: action.currentUserId,
        user: action.user,
        isAuthenticated: !isEmpty(action.user)
      }
    case USER_INFO_RECEIVED:
      return {
        currentUserId: action.currentUserId,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        name: action.userProfile.name,
        surname: action.userProfile.surname,
        telephoneNumber: action.userProfile.telephoneNumber,
        dateOfBirth: action.userProfile.dateOfBirth,
        profession: action.userProfile.profession,
        about: action.userProfile.about
      }
    default: return state;
  }
}
