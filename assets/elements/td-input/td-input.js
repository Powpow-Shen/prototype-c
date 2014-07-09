(function() {
  var ENTER_KEY = 13;
  var ESC_KEY = 27;
  Polymer('td-input', {
    keypressAction: function(e, detail, sender) {
      // Listen for enter on keypress but esc on keyup, because
      // IE doesn't fire keyup for enter.
      if (e.keyCode === ENTER_KEY) {
        this.fire('td-input-commit');
      }
    },
    keyupAction: function(e, detail, sender) {
      if (e.keyCode === ESC_KEY) {
        this.fire('td-input-cancel');
      }
    }
  });
})();
