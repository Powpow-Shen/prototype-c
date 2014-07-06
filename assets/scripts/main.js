require(['config/require'], function() {
  'use strict';

  // Wait for dom ready first to have better user experience.
  require(['jquery'], function($) {
    $(document).ready(function() {
      // Add more apps here according to your document.location.pathname
      require(['scripts/todos_app'], function(TodosApp) {
        // Bind app to window for Polymer data-binding.
        window.todosApp = new TodosApp();
      });
    });
  });
});
