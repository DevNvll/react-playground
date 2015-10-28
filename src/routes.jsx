import React from 'react';
import App from './containers/app.jsx';
import Home from './views/home.jsx';
import About from './views/about.jsx';
import { DefaultRoute, Link, Route, Router, RouteHandler, IndexRoute } from 'react-router';

let routes = (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute name="home" handler={Home}/>
      <Route name="about" path="/about" handler={About}/>
    </Route>
);

export default routes;
