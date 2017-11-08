// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'شراء بيض حليب و خبز', 'done': false },
    { id: -2, description: 'ذهاب الى العمل', 'done': false },
    { id: -1, description: 'حضور عرس علي بابا', 'done' : false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener
    var descSpan = document.createElement('span');

    descSpan.innerHTML=todo['description'];
    // add span holding description
    console.log(todo);
    console.log(todo['description']);



    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    var deleteIcon = document.createElement('i');
    deleteIcon.className = "fa fa-trash";
    deleteButtonNode.appendChild(deleteIcon);
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    console.log('todoNode before append delete button' + todoNode.innerHTML);

    console.log('todoNode after append delete button' + todoNode.innerHTML);
    // add markTodo button

    var checkboxNode = document.createElement('input');
    console.log('todo.id' + todo.id);
    if (todo.done == true) {
      checkboxNode.setAttribute('checked', true);
    }
    //var newID = todo.id;
    checkboxNode.type = 'checkbox';
    checkboxNode.id = todo.id;

    checkboxNode.addEventListener('click', function(event) {
      //var newState = todoFunctions.markTodo(state, )
      console.log(checkboxNode.id);
      var newState = todoFunctions.markTodo(state, checkboxNode.id);
      console.log(newState);
      update(newState);
      //console.log(state);
    });
    // add classes for css

    //The order that the todo list generates
    todoNode.appendChild(checkboxNode);
    todoNode.appendChild(descSpan);
    todoNode.contentTee
    todoNode.appendChild(deleteButtonNode);


    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    //addTodoForm.addEventListener('submit', function(event) {}
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = document.getElementById('desc').value;
      document.getElementById('desc').value = ''; //clears the form
      console.log(desc);
      var newState = todoFunctions.addTodo(state, description);
      console.log(state);
      // hint: todoFunctions.addTodo
      //var newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
