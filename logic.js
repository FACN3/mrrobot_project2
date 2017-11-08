// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    var todos_list = todoFunctions.cloneArrayOfObjects(todos); //copy of todos_list
    var newID = todoFunctions.generateId();
    var task = [{
      'id': newID,
      'description': newTodo,
      'done': false
    }];
    return todos_list.concat(task);
  },

  deleteTodo: function(todos, idToDelete) {
    var todos_list = todoFunctions.cloneArrayOfObjects(todos); //copy of todos_list
    //var ID = todoFunctions.generateId();
    console.log(todos_list);
    todos_list = todos_list.filter(function(task) {
      if (task['id'] != idToDelete) {
        return task;
      }
    });
    console.log(todos_list);
    return todos_list;
  },

  markTodo: function(todos, idToMark) {
    var todos_list = todoFunctions.cloneArrayOfObjects(todos);
    // console.log(todos_list);
    todos_list = todos_list.map(function(task) {
      if (task['id'] == idToMark) {
        // console.log('we are here');
        if (task.done == false) {
          task.done = true;
          // console.log('if = false' + task);
        return task;}
       else {task.done = false;
       return task;}
      }
      else {
        return task;
      }
    });
    // console.log(todos_list);
    return todos_list;
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
