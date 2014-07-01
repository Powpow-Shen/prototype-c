require(['config/require'], function() {
  'use strict';

  require(['jquery'], function($) {
    $(document).ready(function() {
      // keep all dependencies here.
      require([
        'bootstrap',
        'css!styles/compiled/style.css',
        'scripts/router',
        'scripts/libs/htmlImports'
      ], function(bootstrap, style, Router, htmlImports) {
      });
    });
  });
});
