import {combineReducers} from 'redux';
import flashMessages from './FlashMessages';
import auth from './Auth.js'

export default combineReducers({
  flashMessages,
  auth
})
