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
  t.deepEqual(actual, expected, 'The task should look like:');
  t.deepEqual(actual1, expected1, 'The task should look like:');
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
  t.deepEqual(actual, expected, 'The task has not been deleted:');
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
  t.deepEqual(actual, expected, 'The task has not been marked:');
  t.deepEqual(actual1, expected1, 'The task has not been marked:');
  t.end();
});
