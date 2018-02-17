import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import App from '../App';
import Tabs from './tabs';

export const Routes = () => (
  <Switch>
    <Route exact path="/tabs" component={Tabs} />
  </Switch>
);

export default () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);
