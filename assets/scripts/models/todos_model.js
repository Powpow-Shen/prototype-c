/*
 * TodosModel provides default fixed data. This is not even a good design, just for demostration.
 */
define(function(require, exports, module) {
  'use strict';

  module.exports = TodosModel;

  /*
   * TodosModel provides CRUD, validation and etc..
   */
  function TodosModel() {
    this._data = [{
      id: 1,
      title: 'Learn English',
      isCompleted: true
    }, {
      id: 2,
      title: '...',
      isCompleted: false
    }, {
      id: 3,
      title: 'Profit!',
      isCompleted: false
    }];
  }

  TodosModel.prototype = {
    create: function(string) {
      var id = this._data.length ? this._data[this._data.length - 1].id + 1 : 1;
      var obj = {
        title: string,
        id: id,
        isCompleted: false
      };

      // Add code here, if you need to sync with sever.
      this._data.push(obj);
    },

    read: function() {
      return this._data;
    },

    update: function(id, title, isCompleted) {
      var index = this.lookUpIndex(id);

      if (index !== null && index !== undefined) {
        if (title !== null && title !== undefined) {
          this._data[index].title = title;
        }
        if (isCompleted !== null && isCompleted !== undefined) {
          this._data[index].isCompleted = isCompleted;
        }
      }
    },

    /*
     * Yes, because delete is a keyword, so I use destroy.
     */
    destroy: function(id) {
      var index = this.lookUpIndex(id);
      if (id) {
        this._data.splice(index, 1);
      }
    },

    lookUpIndex: function(id) {
      var index;
      for (var i = 0; i < this._data.length; i++) {
        if (this._data[i].id == id) {
          index = i;
        }
      }
      return index;
    }
  };
});
