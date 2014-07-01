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
    var head = document.querySelector('head'),
      link = document.createElement('link');
    link.setAttribute('rel', 'import');
    link.setAttribute('href', uri);
    head.appendChild(link);
  }

  return htmlImports;
});
