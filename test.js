var test = require('tape');
var logic = require('./logic');

var toDo = logic.addTodo;
console.log(logic.addTodo);



test('Example test', function(t) {
  var actual = toDo([], 'make coffee');
  var expected = [{'id' : 1,
              'description' : 'make coffee',
              'done' : false}];
  //t.equal(actual, expected);
  t.equal(actual, expected, 'The task should look like:' + String(expected.description));
  t.end();
});
