(function() {
  var ENTER_KEY = 13;
  var ESC_KEY = 27;
  Polymer('td-todos', {
    modelIdChanged: function() {
      this.model = document.querySelector('#' + this.modelId);
    },
    routeChanged: function() {
      if (this.model) {
        this.model.filter = this.route;
      }
    },
    addTodoAction: function() {
      this.model.newItem(this.$['new-todo'].value);
      // when polyfilling Object.observe, make sure we update immediately
      Platform.flush();
      this.$['new-todo'].value = '';
    },
    cancelAddTodoAction: function() {
      this.$['new-todo'].value = '';
    },
    itemChangedAction: function() {
      if (this.model) {
        this.model.itemsChanged();
      }
    },
    destroyItemAction: function(e, detail) {
      this.model.destroyItem(detail);
    },
    toggleAllCompletedAction: function(e, detail, sender) {
      this.model.setItemsCompleted(sender.checked);
    },
    clearCompletedAction: function() {
      this.model.clearItems();
    }
  });
})();
