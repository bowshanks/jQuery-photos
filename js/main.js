/**
 * Created by Ben on 5/19/16.
 */

// Here is the todo example code we went over in class


$(document).ready(function() {

    var photApp = $('#photo-app'),
        imageClick = $('#get-images');


    //todoApp.append(todoTitle);


    //function handleAddItem() {
    //    var inputText = todoInput.val();
    //    if (inputText) {
    //        var todoItem = $('<li></li>');
    //        todoInput.val('');
    //        todoItem.text(inputText);
    //        todoList.append(todoItem);
    //    }
    //}
 function getPhotos(){
     var key = '77h7td8ewaukmcjtcwp8awwj';
     var secret = 'nEH7kxpr6jQCgpMqAVVZFgQC2M7WXwXsEt4F6DcDXgvPc';
     var photoUrl = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best';

         $.ajax({
             url: photoUrl,
             type: "GET",
             dataType: "json",
             headers: {"Api-Key": '77h7td8ewaukmcjtcwp8awwj'},
             success: function (data) {
                 var responseData = data.images;
                 console.log(responseData.length)

                 for (var i = 0; i < responseData.length; i++) {
                     console.log(responseData[i])



                 }
             },
             error: function (msg) { alert(msg); }


         });



 }

    imageClick.on('click', getPhotos);

    //todoInput.on('keyup', function(event) {
    //    if (event.which == 13) {
    //        handleAddItem();
    //    }
    //});
    //
    //todoClearButton.on('click', function() {
    //    $('li.done', todoList).remove();
    //});

});