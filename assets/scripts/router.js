/*
 * Router will reflect the change of current URL hash by observing Router.hash.
 *
 * Usage:
 * var router = new Router();
 * // Observe router.hash via Object.observe or dirty-checking
 * router.sync();
 */
define(function(require, exports, module) {
  'use strict';

  module.exports = Router;

  function Router(){
    this.hash = '';
  }

  /*
   * sync method will help router to sync with current url.
   * @method sync
   */
  Router.prototype.sync = function(){
    this.hash = document.location.hash;
    var observer = new PathObserver(document.location, 'hash');
    observer.open(function(newValue, oldValue) {
      this.hash = newValue;
    });
  };

});
