define([], function() {
  'use strict';

  /**
   * htmlImports utility
   *
   * Write an html imports into the head of window.document.
   * Usage: htmlImports('uri');
   *
   * @params {string} uri URI for the html
   */
  function htmlImports(uri) {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = uri;
    document.head.appendChild(link);
  }

  return htmlImports;
});
