Polymer('todos-main', {
  ready: function() {
    this.todosData = todosApp.todosModel.read();
  },
  completeTodo: function(e) {
    var id = $(e.target).siblings()[2].value;
    todosApp.todosModel.update(id, null, e.target.checked);
  },
  destroyTodo: function(e) {
    var id = $(e.target).siblings()[2].value;
    todosApp.todosModel.destroy(id);
  }
});
