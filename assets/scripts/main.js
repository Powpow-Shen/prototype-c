require(['config/require'], function() {
  'use strict';

  require(['jquery'], function($) {
    $(document).ready(function() {
      // keep all dependencies here.
      require([
        'bootstrap',
        'css!styles/compiled/style.css',
        'scripts/router'
      ], function(bootstrap, style, Router) {
        var router = new Router();

      });
    });
  });
});
