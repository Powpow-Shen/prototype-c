Polymer('todos-footer', {
  ready: function() {
    this.list = this.routeMapping(document.location.hash);
    this.pathname = document.location.pathname;
    this.todosData = todosApp.todosModel.read();

    // Set up observation of the route here, if necessary.
    var observer = new PathObserver(document.location, 'hash');
    observer.open(function(newVal, oldVal) {
      document.querySelector('todos-footer').route = newVal;
    });
  },
  todosDataChanged: function(oldVal, newVal) {
    this.todosCount = this.countTodos();
  },
  routeChanged: function(oldVal, newVal) {
    this.list = this.routeMapping(newVal);
    this.todosCount = this.countTodos();
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
  },
  countTodos: function() {
    if (this.list === 'all') {
      return this.todosData.length;
    } else {
      var counter = 0;
      for (var i = 0; i < this.todosData.length; i++) {
        if (this.todosData[i].isCompleted) {
          counter++;
        }
      }
      if (this.list === 'active') {
        return this.todosData.length - counter;
      } else if (this.list === 'completed') {
        return counter;
      }
    }
  }
});
