// Set up module management
require.config({
  // CSS plugin. Try not to use unless it is necessary. The usage: 'css!styles/...'.
  map: {
    '*': {
      'css': 'components/require-css/css.min'
    }
  },
  // By default load any component from assets
  baseUrl: '/',
  paths: {
    'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min', 'components/jquery/dist/jquery.min'],
  },
  shim: {
    'jquery': {
      exports: '$'
    }
  }
});
