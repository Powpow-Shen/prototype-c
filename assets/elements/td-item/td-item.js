(function() {
  Polymer('td-item', {
    editing: false,
    editAction: function() {
      this.editing = true;
      // schedule focus for the end of microtask, when the input will be visible
      this.asyncMethod(function() {
        this.$.edit.focus();
      });
    },
    commitAction: function() {
      if (this.editing) {
        this.editing = false;
        this.item.title = this.item.title.trim();
        if (this.item.title === '') {
          this.destroyAction();
        }
        this.fire('td-item-changed');
      }
    },
    cancelAction: function() {
      this.editing = false;
    },
    itemChangeAction: function() {
      this.fire('td-item-changed');
    },
    destroyAction: function() {
      this.fire('td-destroy-item', this.item);
    }
  });
})();
