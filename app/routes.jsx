import React from 'react';
import App from './containers/app.jsx';
import Home from './containers/home.jsx';
import About from './containers/about.jsx';
import { IndexRoute, Router, Route, Link } from 'react-router';

let routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="home" component={Home}/>
    </Route>
  </Router>
);

export default routes;
