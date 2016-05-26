/**
 * Created by Ben on 5/19/16.
 */

// Here is the todo example code we went over in class


$(document).ready(function() {

    var todoApp = $('#todo-app');
    var todoTitle = $('<h1>jQuery todo!</h1>');
    var todoInput = $('<input placeholder="add an item..." />');
    var todoInputButton = $('<button>Add</button>');
    var todoClearButton = $('<button>Clear Completed</button>');
    var todoList = $('<ul></ul>');
    var todoItemTemplate = $('<li></li>');

   todoApp.append(todoTitle);
   todoApp.append(todoInput);
   todoApp.append(todoInputButton);
   todoApp.append(todoList);
   todoApp.append(todoClearButton);

   function handleAddItem() {
     var inputText = todoInput.val();
     if (inputText) {
       var todoItem = $('<li></li>');
       todoInput.val('');
       todoItem.text(inputText);
       todoList.append(todoItem);
     }
   }

   todoList.on('click', 'li', function() {
     var todoItem = $(this);
     todoItem.toggleClass('done');
   });

   todoInputButton.on('click', handleAddItem);

   todoInput.on('keyup', function(event) {
     if (event.which == 13) {
       handleAddItem();
     }
   });

   todoClearButton.on('click', function() {
     $('li.done', todoList).remove();
   });

});