/*
 * TodosMainView display todos list.
 */
define(function(require, exports, module) {
  'use strict';

  var importsHTML = require('scripts/libs/importsHTML');
  var $ = require('jquery');
  module.exports = TodosMainView;

  function TodosMainView(placeHolder) {
    importsHTML('elements/todos-main/todos-main');
  }

  TodosMainView.prototype = {
    render: function(placeHolder) {
      $(placeHolder).append('<todos-main>');
    }
  };

});
