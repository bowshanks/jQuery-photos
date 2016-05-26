/**
 * Created by Ben on 5/19/16.
 */

$(document).ready(function() {

    // Make a favorites option that will put your favorite photos into a bucket, save in local storage
    // Make a modal for when you click on a image.
    // Add a more button, to show more photos
    // Black diamond when you search for new photos animate the old photos out and animate the new photos in


    var photoApp = $('#photo-app'),
        imageClick = $('#get-images'),
        photoContainer = $('<section class="photos-main-container"></section>'),
        search = $('#searchbar');


        photoApp.append(photoContainer);



    function getPhotos(){

     var key = '77h7td8ewaukmcjtcwp8awwj', // Api Key
         searchTerm = search.val(), // Search term from input field
         photoUrl = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=' + searchTerm;

        // This is a example of using the jQuery ajax method to get data
         $.ajax({
             url: photoUrl,
             type: "GET",
             dataType: "json",
             headers: {"Api-Key": key}

         }).done(makePhotoSection).fail( function (msg) { alert(msg); })
 }

    function makePhotoSection(data){
        var responseData = data.images;

        // Clear input field
        search.val('');



            // Here we are using map to iterate over the array

          responseData.map(function(item,index){
              var url = item.display_sizes[0].uri,
                      img = $('<img class="image">').hide();
                      img.attr('src', url);
                      photoApp.append(img);
                      img.show('normal');


          });

        // We could use a forEach

        //responseData.forEach(function (elem, index) {
        //    var url = elem.display_sizes[0].uri,
        //        img = $('<img class="image">').hide();
        //        img.attr('src', url);
        //        photoApp.append(img);
        //        img.show('normal');
        //});


        // We could use a for loop

        //for (var i = 0; i < responseData.length; i++) {
            //    var url = responseData[i].display_sizes[0].uri,
            //        img = $('<img class="image">').hide();
            //        img.attr('src', url);
            //        photoApp.append(img);
            //        img.show('normal');
            //}
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