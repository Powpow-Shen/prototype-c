Polymer('todos-main', {
  ready: function() {
    this.list = this.routeMapping(document.location.hash);
    this.todosData = todosApp.todosModel.read();

    // Set up observation of the route here, if necessary.
    var observer = new PathObserver(document.location, 'hash');
    observer.open(function(newVal, oldVal) {
      document.querySelector('todos-main').route = newVal;
    });
  },
  completeTodo: function(e) {
    var id = $(e.target).siblings()[2].value;
    todosApp.todosModel.update(id, null, e.target.checked);
  },
  destroyTodo: function(e) {
    var id = $(e.target).siblings()[2].value;
    todosApp.todosModel.destroy(id);
  },
  completeAll: function(e) {
    todosApp.todosModel.completeAll(e.target.checked);
  },
  routeChanged: function(oldVal, newVal) {
    this.list = this.routeMapping(newVal);
  },
  routeMapping: function(route) {
    var list;
    switch (route) {
      case '#/active':
      case '#/completed':
        list = route.substring(2);
        break;
      default:
        list = 'all';
        break;
    }
    return list;
  }
});
