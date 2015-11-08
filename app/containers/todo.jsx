import React from 'react';
import Todo from '../components/todo.jsx';

export default class TodoComp extends React.Component {

  render() {
    return (
      <div className="container">
        <h2>Todo</h2>
        <Todo/>
      </div>
      );
  }
};
