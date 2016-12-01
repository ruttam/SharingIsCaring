import {SET_CURRENT_USER, USER_INFO_RECEIVED} from '../actions/Types.js';
import isEmpty from 'lodash/isEmpty';

const state = {
  isAuthenticated: false,
  user: {}
};

export default (state = {}, action = {}) => {
  console.log(action);
  switch (action.type) {
    case SET_CURRENT_USER:
      const newState = Object.assign({}, state, {currentUserId: action.user, isAuthenticated: !isEmpty(action.user)});
      return newState;
      case 'USER_INFO_RECEIVED':
        const updatedState = Object.assign({}, state, {userProfile: action.userProfile, isAuthenticated: !isEmpty(action.user)});
        console.log('action: ', action);
        return updatedState;
    default: return state;

  }
}
