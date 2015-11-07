import React from 'react';
import { Link } from 'react-router';

export default class navbarComp extends React.Component {
  render() {
    return (
      <div>
            <Link to="/home">Home</Link>
            <Link to="/targets">Targets</Link>
      </div>
      );
  }
};
