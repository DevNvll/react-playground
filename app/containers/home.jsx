import React from 'react';

import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg: ''};
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }
  handleClick(){
      AppActions.testAction('This is an action');
  }
  render() {
    return (
      <div className="container">
        <h1>This is Home</h1>
        <br/>
        <input onClick={this.handleClick} type="button" className="btn btn-grey" value="Click Here"/>
        <br/>
        {this.state.msg}
      </div>
      );
  }
  _onChange() {
    this.setState({
      msg: 'Action triggered!'
    });
  }
};
