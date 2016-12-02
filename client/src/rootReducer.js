import { combineReducers } from 'redux';
import alertMessages from './reducers/AlertMessages';
import auth from './components/Auth.js'

export default combineReducers({
  alertMessages,
  auth
})
