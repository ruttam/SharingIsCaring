import { SET_CURRENT_USER, USER_INFO_RECEIVED } from '../actions/Types.js';

import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const newState = Object.assign({}, state, { currentUserId: action.userId, isAuthenticated: !isEmpty(action.userId) });
      console.log(newState);
      return newState;
    case USER_INFO_RECEIVED:
      const updatedState = Object.assign({}, state, {
        name: action.userProfile.name,
        surname: action.userProfile.surname,
        telephoneNumber: action.userProfile.telephoneNumber,
        dateOfBirth: action.userProfile.dateOfBirth,
        profession: action.userProfile.profession,
        about: action.userProfile.about,
        isAuthenticated: !isEmpty(action.userProfile.user_id),
        currentUserId: action.userProfile.user_id
      });
      console.log('action: ', updatedState);
      return updatedState;
    default: return state;
  }
}
