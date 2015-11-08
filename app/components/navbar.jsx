import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class navbarComp extends React.Component {
  render() {
    return (
      <div className="links">
            <IndexLink  to="/" activeStyle={ {color: '#f9ac00'} }>Home</IndexLink >
            <Link to="/targets" activeStyle={ {color: '#f9ac00'} }>Targets</Link>
            <Link to="/todo" activeStyle={ {color: '#f9ac00'} }>Todo</Link>
      </div>
      );
  }
};
