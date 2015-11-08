import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

var AppActions = {
  testAction: function(item){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.TEST,
      item: item
    });
  },
  addTodo: function(data) {
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_TODO,
      data: data
    });
  },
  deleteTodo: function(index) {
    AppDispatcher.handleViewAction({
      actionType:AppConstants.DELETE_TODO,
      index: index
    });
  }
};

module.exports = AppActions;
