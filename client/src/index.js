import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import jwt from 'jsonwebtoken';

import routes from './routes.js';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/SetAuthorizationToken.js'
import { setCurrentUser } from './actions/AuthActions.js'

const store = createStore (
  rootReducer,
  compose (
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
  )
);

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(localStorage.currentUserId, jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render (
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
let message = "Welcome to Važiuoju-Vežu App!";
console.log(message);
