import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Navbar from '../components/navbar.jsx';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container" style={{paddingTop: '50px'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
};
