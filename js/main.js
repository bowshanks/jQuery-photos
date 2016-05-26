/**
 * Created by Ben on 5/19/16.
 */

// Here is the todo example code we went over in class


$(document).ready(function() {

    var photoApp = $('#photo-app'),
        imageClick = $('#get-images'),
        photoContainer = $('<section class="photo-main-container"></section>');
        photoApp.append(photoContainer);




 function getPhotos(){
     var key = '77h7td8ewaukmcjtcwp8awwj';
     var secret = 'nEH7kxpr6jQCgpMqAVVZFgQC2M7WXwXsEt4F6DcDXgvPc';
     var photoUrl = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best';

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




        for (var i = 0; i < responseData.length; i++) {
                var url = responseData[i].display_sizes[0].uri;
                //photoApp.append(url);
            var  img = $('<img class="image">');
                 img.attr('src', url);

                photoContainer.append(img)


        }
    }
    imageClick.on('click', getPhotos);



});