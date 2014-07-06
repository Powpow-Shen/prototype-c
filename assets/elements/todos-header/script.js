Polymer('todos-header', {
  createNewTodo: function(e){
    if(e.keyIdentifier === 'Enter' && this.$.newTodo.value.trim() !== '') {
      var newTodoString = this.$.newTodo.value.trim();
      this.$.newTodo.value = '';
      todosApp.todosModel.create(newTodoString);
    }
  }
});
