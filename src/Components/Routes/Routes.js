import React from 'react';
import { Switch } from 'react-router-dom';

import AppliedRoute from '../AppliedRoute/AppliedRoute';
import Login from '../../Pages/Login/Login';
// import NotFound from '../../Pages/NotFound/NotFound';

export default () => (
  <Switch>
    <AppliedRoute exact path='/' component={Login} />
    {/* <AppliedRoute component={NotFound} /> */}
  </Switch>
);