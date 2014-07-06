/*
 * TodosApp
 */
define(function(require, exports, module) {
  'use strict';

  require('css!styles/basic-layout');
  var Router = require('scripts/router');
  var TodosModel = require('scripts/models/todos_model');
  var TodosAppView = require('scripts/views/todos_app_view');
  var TodosHeaderView = require('scripts/views/todos_header_view');
  var TodosHeaderController = require('scripts/controllers/todos_header_controller');
  var TodosMainView = require('scripts/views/todos_main_view');
  var TodosMainController = require('scripts/controllers/todos_main_controller');
  var TodosFooterView = require('scripts/views/todos_footer_view');
  var TodosFooterController = require('scripts/controllers/todos_footer_controller');

  module.exports = TodosApp;

  function TodosApp() {
    var router = new Router();
    // set up MVC here.
    this.todosModel = new TodosModel();
    var todosAppView = new TodosAppView();
    todosAppView.render('body');
    var todosHeaderView = new TodosHeaderView();
    todosHeaderView.render('section#todosApp');
    var todosHeaderController = new TodosHeaderController();
    var todosMainView = new TodosMainView();
    todosMainView.render('section#todosApp');
    var todosMainController = new TodosMainController();
    var todosFooterView = new TodosFooterView();
    todosFooterView.render('section#todosApp');
    var todosFooterController = new TodosFooterController();
    
    // Let router sync with current URL.
    router.sync();
  }

});
