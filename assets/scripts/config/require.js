// Set up module management
require.config({
  // Plugins
  map: {
    '*': {
      'css': 'components/require-css/css'
    }
  },
  // By default load any component from assets
  baseUrl: '/',
  paths: {
    'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min', 'components/jquery/dist/jquery.min'],
    'bootstrap': ['//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min', 'components/bootstrap/dist/js/bootstrap.min']
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'bootstrap': {
      deps: ['css!components/bootstrap/dist/css/bootstrap.min.css'],
      exports: 'bootstrap'
    }
  }
});
