var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _todos = [];

var CHANGE_EVENT = 'change';

function addTodo(todo){
    _todos.push(todo);
}

function deleteTodo(index){
    _todos.splice(index,1);
}


var AppStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _todos;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
   this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType) {
    case "TEST":
      console.log(action.item);
      AppStore.emitChange();
      break;
    case "ADD_TODO":
      addTodo(action.data);
      AppStore.emitChange();
      break;
    case 'DELETE_TODO':
      deleteTodo(action.index);
      AppStore.emitChange();
      break;

  }
  return true;
});

module.exports = AppStore;
