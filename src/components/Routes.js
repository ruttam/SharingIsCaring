import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App.js';
import Login from './Login.js';
import RegistrationPage from './RegistrationPage.js';
import Profile from './Profile.js';
import Trips from './Trips.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="registration" component={RegistrationPage} />
    <Route path="profileData" component={Profile} />
    <Route path="trips" component={Trips} />
  </Route>
)
