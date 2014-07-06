/*
 * TodosAppView display basic frame for the app.
 */
define(function(require, exports, module) {
  'use strict';

  /*
   * Here demostrate the possiblility of creating DOM without any element, but it is better to keep html in an element.
   */
  require('css!styles/basic-layout');
  var $ = require('jquery');
  module.exports = TodosAppView;

  function TodosAppView(placeHolder) {
    this.frame = '<section id="todosApp"></section>' +
      '<footer id="info"><p>Double-click to edit a todo</p></footer>';
  }

  TodosAppView.prototype = {
    render: function(placeHolder) {
      $(placeHolder).append(this.frame);
    }
  };

});
