require(['./require.config'], function() {
  require(['jquery'], function($) {
    $(document).ready(function() {
      // keep all dependencies here.
      require([
        'bootstrap',
        'css!styles/compiled/style.css'
      ]);
    });
  });
});
