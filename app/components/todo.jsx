import React from 'react';

import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

var _todos = AppStore.getAll();

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    this._onChange = this._onChange.bind(this);
  }
  removeItem(index) {
    AppActions.deleteTodo(index);
  }
  _onChange() {
    this.setState({items: this.props.items});
  }
  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }
  render() {
    var self = this;
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText} <button onClick={self.removeItem.bind(self, index)} className="btn btn-grey btn-sm">X</button></li>;
    };
    return <ul>{this.state.items.map(createItem)}</ul>;
  }
}

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    if(!(this.state.text == '')) {
      AppActions.addTodo(this.state.text);
      this.setState({items: nextItems, text: nextText});
    } else {
      alert('Type something');
    }
  }
  render() {
    var self = this;
    return (
      <div>
        <TodoList items={_todos}/>
        <form role="form" onSubmit={this.handleSubmit}>
            <input style={{  marginRight: '5px' }} placeholder="Type the TODO here..." onChange={this.onChange} value={self.state.text} className="form-control" type="text"/> <br/>
            <button className="btn btn-grey btn-block" type="submit">Add todo</button>
        </form>
      </div>
      );
  }
};
