import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Navbar from '../components/navbar.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container" style={{paddingTop: '50px'}}>
          <RouteHandler/>
        </div>
      </div>
    );
  }
};

export default App;
