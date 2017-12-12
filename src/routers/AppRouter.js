import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from './../components/DashboardPage';
import NotFound from './../components/NotFound';

export const history = createHistory();

const AppRouter = () => (
  <Router history={ history }>
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route component={ NotFound }/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter
