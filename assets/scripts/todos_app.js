/*
 * TodosApp
 */
define(function(require, exports, module) {
  'use strict';

  require('css!styles/basic-layout');
  //var Router = require('scripts/router');
  var TodosModel = require('scripts/models/todos_model');
  var TodosAppView = require('scripts/views/todos_app_view');
  var TodosHeaderView = require('scripts/views/todos_header_view');
  var TodosMainView = require('scripts/views/todos_main_view');
  var TodosFooterView = require('scripts/views/todos_footer_view');

  module.exports = TodosApp;

  function TodosApp() {
    //this.router = new Router();
    // set up MV* here.
    this.todosModel = new TodosModel();
    var todosAppView = new TodosAppView();
    todosAppView.render('body');
    var todosHeaderView = new TodosHeaderView();
    todosHeaderView.render('section#todosApp');
    var todosMainView = new TodosMainView();
    todosMainView.render('section#todosApp');
    var todosFooterView = new TodosFooterView();
    todosFooterView.render('section#todosApp');
    
    // Let router sync with current URL.
    //this.router.sync();
  }

});
