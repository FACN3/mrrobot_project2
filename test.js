var test = require('tape');
var logic = require('./logic');

var toDo = logic.addTodo;
var deleteTodo = logic.deleteTodo;
var markTodo = logic.markTodo;



test('Example test', function(t) {
  var actual = toDo([], 'make coffee');
  var expected = [{
    'id': 1,
    'description': 'make coffee',
    'done': false
  }];
  var expected1 = [{
      'id': 1,
      'description': 'make coffee',
      'done': false
    },
    {
      'id': 2,
      'description': 'make tea',
      'done': false
    }
  ];
  var actual1 = toDo([{
    'id': 1,
    'description': 'make coffee',
    'done': false
  }], 'make tea');
  //t.equal(actual, expected);
  t.deepEqual(actual, expected, 'Expected make coffee to have an id and done');
  t.deepEqual(actual1, expected1, 'Expected make tea added to the todo list');
  t.end();
});

test('Delete test', function(t) {
  var expected = [{
    'id': 1,
    'description': 'make coffee',
    'done': false
  }];
  var actual = deleteTodo([{
      'id': 1,
      'description': 'make coffee',
      'done': false
    },
    {
      'id': 2,
      'description': 'make tea',
      'done': false
    }
  ], 2);

  var expected1 = [{
    'id': 1,
    'description': 'make orange juice',
    'done': false
  }];
  var actual1 = deleteTodo([{
      'id': 1,
      'description': 'make orange juice',
      'done': false
    },
    {
      'id': 2,
      'description': 'make chocolate',
      'done': true
    }
  ], 2);
  t.deepEqual(actual, expected, 'Expeceted make tea removed from the todolist');
  t.deepEqual(actual1, expected1, 'Expected make chocolate removed from the todolist');
  t.end();
});

test('Mark test', function(t) {
  var expected = [{
    'id': 1,
    'description': 'make coffee',
    'done': true
  }];
  var actual = markTodo([{
    'id': 1,
    'description': 'make coffee',
    'done': false
  }], 1);
  var expected1 = [{
    'id': 1,
    'description': 'make coffee',
    'done': false
  }];
  var actual1 = markTodo([{
    'id': 1,
    'description': 'make coffee',
    'done': true
  }], 1);
  t.deepEqual(actual, expected, 'Expected the task to be marked');
  t.deepEqual(actual1, expected1, 'Expected the task to be marked');
  t.end();
});
