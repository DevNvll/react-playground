import React from 'react';
import App from './containers/app.jsx';
import Home from './views/home.jsx';
import About from './views/about.jsx';
import { IndexRoute, Router, Route, Link } from 'react-router';

let routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
);

export default routes;
