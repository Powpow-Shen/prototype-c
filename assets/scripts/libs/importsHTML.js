/**
 * importsHTML utility
 *
 * Write an html imports into the head of window.document.
 * Usage: importsHTML('uri');
 *
 * @params {string} uri URI for the html without '.html'
 */
define(function(require, exports, module) {
  'use strict';

  module.exports = importsHTML;

  function importsHTML(uri) {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = uri + '.html';
    document.head.appendChild(link);
  }

});
