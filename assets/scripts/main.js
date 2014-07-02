require(['config/require'], function() {
  'use strict';

  require(['jquery'], function($) {
    $(document).ready(function() {
      // Add more apps here according to your document.location.pathname
      require(['scripts/todos_app'], function(TodosApp) {
        var todosApp = new TodosApp();
      });
    });
  });
});
