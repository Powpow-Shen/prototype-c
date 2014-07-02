/*
 * TodosApp
 */
define(function(require, exports, module) {
  'use strict';

  require('boostrap');
  require('css!styles/compiled/style.css');
  var Router = require('scripts/router');

  module.exports = TodosApp;

  function TodosApp() {
    var router = new Router();
    // set up MVC here.
    router.sync();
  }

});
