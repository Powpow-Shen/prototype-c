/**
 * htmlImports utility
 *
 * Write an html imports into the head of window.document.
 * Usage: htmlImports('uri');
 *
 * @params {string} uri URI for the html
 */
define(function(require, exports, module) {
  'use strict';

  module.exports = htmlImports;

  function htmlImports(uri) {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = uri;
    document.head.appendChild(link);
  }

});
