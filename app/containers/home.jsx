import React from 'react';

import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class Home extends React.Component {
  handleClick(){
      AppActions.addItem('This is an action');
  }
  render() {
    return (
      <div className="container">
        This is Home <br/> <input onClick={this.handleClick} type="button" className="btn btn-info" value="Click Here And Check Console"/>
      </div>
      );
  }
};
