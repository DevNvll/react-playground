var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register(function(payload){
  console.log(payload);
  var action = payload.action;
  switch(action.actionType) {
    case "ADD_ITEM":
      console.log(action.item);
      break;
  }
  return true;
});




module.exports = AppStore;
