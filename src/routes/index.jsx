import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import App from '../App';
import Tabs from './tabs';
import AtlassianDemo from './atlassian';
import TearoutWindow from '../Tearout/TearoutWindow';

export const Routes = () => (
  <Switch>
    <Route exact path="/tearout/:index" component={TearoutWindow} />
    <Route exact path="/tabs" component={Tabs} />
    <Route exact path="/atlassian" component={AtlassianDemo} />
  </Switch>
);

export default () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);
