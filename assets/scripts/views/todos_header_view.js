/*
 * TodosHeaderView display todos list.
 */
define(function(require, exports, module) {
  'use strict';

  var importsHTML = require('scripts/libs/importsHTML');
  var $ = require('jquery');
  module.exports = TodosHeaderView;

  function TodosHeaderView(placeHolder) {
    importsHTML('elements/todos-header/todos-header');
  }

  TodosHeaderView.prototype = {
    render: function(placeHolder) {
      $(placeHolder).append('<todos-header>');
    }
  };

});
