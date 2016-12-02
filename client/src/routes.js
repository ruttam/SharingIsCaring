import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Login from './components/login/LoginPage.js';
import RegistrationPage from './components/RegistrationPage.js';
import Profile from './components/Profile.js';
import Trips from './components/Trips.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="registration" component={RegistrationPage} />
    <Route path="profileData" component={Profile} />
    <Route path="trips" component={Trips} />
  </Route>
)
