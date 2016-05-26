/**
 * Created by Ben on 5/19/16.
 */

// Here is the todo example code we went over in class


$(document).ready(function() {

    var photoApp = $('#photo-app'),
        imageClick = $('#get-images'),
        photoContainer = $('<section class="photos-main-container"></section>'),
        search = $('#searchbar');
        photoApp.append(photoContainer);




 function getPhotos(){

     var key = '77h7td8ewaukmcjtcwp8awwj', // Api Key
         searchTerm = search.val(), // Search term from input field
         photoUrl = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=' + searchTerm;

         $.ajax({
             url: photoUrl,
             type: "GET",
             dataType: "json",
             headers: {"Api-Key": '77h7td8ewaukmcjtcwp8awwj'},
             success: makePhotoSection,
             error: function (msg) { alert(msg); }

         });
 }

    function makePhotoSection(data){
            var responseData = data.images;
                search.val('');
            for (var i = 0; i < responseData.length; i++) {
                var url = responseData[i].display_sizes[0].uri,
                    img = $('<img class="image">').hide();
                    img.attr('src', url);
                    photoApp.append(img);
                    img.show('normal');
            }
    }
    // Here we are watching for the return key to be pressed

        search.on('keyup', function(event) {
            if (event.which == 13) {
                getPhotos();
            }
        });

        // Here we are watching for a click

        imageClick.on('click', getPhotos);


});