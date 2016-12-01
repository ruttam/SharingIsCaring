import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import Routes from './components/Routes.js';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './components/RootReducer';
import setAuthorizationToken from './utils/SetAuthorizationToken.js'
import jwt from 'jsonwebtoken';
import {setCurrentUser} from './actions/AuthActions.js'

const store = createStore(
  //(state = {}) => state,
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
  )
);

if(localStorage.token){
  setAuthorizationToken(localStorage.token);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
}



ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory} routes={Routes}/>
  </Provider>, document.getElementById('app')
);
let message = "Welcome to Važiuoju-Vežu App!";
console.log(message);
