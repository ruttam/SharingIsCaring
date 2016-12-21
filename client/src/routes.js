import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import LoginPage from './components/login/LoginPage.js';
import RegistrationPage from './components/registration/RegistrationPage.js';
import ProfilePage from './components/ProfilePage.js';
import Trips from './components/Trips.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="registration" component={RegistrationPage} />
    <Route path="profileData" component={ProfilePage} />
    <Route path="trips" component={Trips} />
  </Route>
)
