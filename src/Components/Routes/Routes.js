import React from 'react';
import { Switch } from 'react-router-dom';

import AppliedRoute from '../AppliedRoute/AppliedRoute';
import Login from '../../Pages/Login/Login';
import Registration from '../../Pages/Registration/Registration';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import ViewLogs from '../../Pages/ViewLogs/ViewLogs';
import NewLog from '../../Pages/NewLog/NewLog';
import SingleDayView from '../../Pages/SingleDayView/SingleDayView';
// import NotFound from '../../Pages/NotFound/NotFound';

export default () => (
  <Switch>
    <AppliedRoute exact path='/' component={Login} />
    <AppliedRoute exact path='/login' component={Login} />
    <AppliedRoute exact path='/registration' component={Registration} />
    <AppliedRoute exact path='/dashboard' component={Dashboard} />
    <AppliedRoute exact path='/view-logs' component={ViewLogs} />
    <AppliedRoute exact path='/new-log' component={NewLog} />
    <AppliedRoute exact path='/view-logs/:completedOn' component={SingleDayView} />
    {/* <AppliedRoute component={NotFound} /> */}
  </Switch>
);