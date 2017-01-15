import { combineReducers } from 'redux';

import alertMessages from './reducers/AlertMessages';
import auth from './reducers/Auth.js';
import tripStore from './reducers/TripStore.js';

export default combineReducers({
  alertMessages,
  tripStore,
  auth
});
