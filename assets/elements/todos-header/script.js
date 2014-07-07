Polymer('todos-header', {
  createNewTodo: function(e){
    // If the user press 'Enter'(13)
    if(e.keyCode === 13 && this.$.newTodo.value.trim() !== '') {
      var newTodoString = this.$.newTodo.value.trim();
      this.$.newTodo.value = '';
      todosApp.todosModel.create(newTodoString);
    }
  }
});
