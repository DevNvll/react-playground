import React from 'react';
import TargetsTable from '../components/targets.jsx';

export default class About extends React.Component {

  render() {
    return (
      <div className="container">
        <h2>Targets</h2>
        <TargetsTable/>
      </div>
      );
  }
};
