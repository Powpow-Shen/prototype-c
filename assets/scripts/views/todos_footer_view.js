/*
 * TodosFooterView display todos list.
 */
define(function(require, exports, module) {
  'use strict';

  var importsHTML = require('scripts/libs/importsHTML');
  var $ = require('jquery');
  module.exports = TodosFooterView;

  function TodosFooterView(placeHolder) {
    importsHTML('elements/todos-footer/todos-footer');
  }

  TodosFooterView.prototype = {
    render: function(placeHolder) {
      $(placeHolder).append('<todos-footer>');
    }
  };

});
