import React from 'react';
import App from './containers/app.jsx';
import Home from './containers/home.jsx';
import Targets from './containers/targets.jsx';
import { IndexRoute, Router, Route, Link } from 'react-router';

let routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="targets" component={Targets}/>
      <Route path="home" component={Home}/>
    </Route>
  </Router>
);

export default routes;
