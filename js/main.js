/**
 * Created by Ben on 5/19/16.
 */

$(document).ready(function() {

    //console.log(window.localStorage);

    // Make a modal for when you click on a image.
    // Add a more button, to show more photos
    // Make a favorites option that will put your favorite photos into a bucket, save in local storage
    // Black diamond when you search for new photos animate the old photos out and animate the new photos in



 //   var photoApp = $('#photo-app'),
 //       imageClick = $('#get-images'),
 //       photoContainer = $('<section class="photos-main-container"></section>'),
 //       search = $('#searchbar'),
 //       dropDownOpen = $('#openMenu'),
 //       dropDownMenu = $('.dropdown');
 //
 //
 //
 //       photoApp.append(photoContainer);
 //
 //
 //   // DONT WORRY ABOUT THIS
 //
 //
 //   function getPhotos(){
 //
 //    var key = '77h7td8ewaukmcjtcwp8awwj', // Api Key
 //        searchTerm = search.val(), // Search term from input field
 //        photoUrl = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=' + searchTerm;
 //
 //        $.ajax({
 //            url: photoUrl,
 //            type: "GET",
 //            dataType: "json",
 //            headers: {"Api-Key": key}
 //
 //        }).done(makePhotoSection).fail( function (msg) { alert(msg); })
 //}
 //
 //
 //
 //
 //   function makePhotoSection(data){
 //       var responseData = data.images;
 //           search.val('');
 //
 //       for(var i = 0; i < 500; i++) {
 //           var someDiv = $('<div class="box"></div>');
 //               photoApp.append(someDiv);
 //
 //       }
 //       //for (var i = 0; i < responseData.length; i++) {
 //       //        var url = responseData[i].display_sizes[0].uri;
 //       //            anchor = $('<a></a>');
 //       //            anchor.attr('href',url);
 //       //            img = $('<img class="image">');
 //       //            img.attr('src', url);
 //       //            anchor.append(img);
 //       //            photoApp.append(anchor);
 //       //    }
 //
 //
 //
 //         // Here we are using map to iterate over the array
 //
 //         //responseData.map(function(item){
 //         //    var url = item.display_sizes[0].uri,
 //         //            img = $('<img class="image">').hide();
 //         //            img.attr('src', url);
 //         //            photoApp.append(img);
 //         //            img.show('normal');
 //         //
 //         //});
 //
 //
 //       // We could use a forEach
 //
 //       //responseData.forEach(function (elem, index) {
 //       //    var url = elem.display_sizes[0].uri,
 //       //        img = $('<img class="image">').hide();
 //       //        img.attr('src', url);
 //       //        photoApp.append(img);
 //       //        img.show('normal');
 //       //});
 //
 //
 //       // We could use a for loop
 //
 //
 //   }
 //
 //   // Here we are watching for the return key to be pressed
 //
 //       search.on('keyup', function(event) {
 //           if (event.which == 13) {
 //               getPhotos();
 //           }
 //       });
 //
 //       // Here we are watching for a click
 //
 //       imageClick.on('click', getPhotos);
 //
 //
 //       dropDownOpen.on('click',function(){
 //           dropDownMenu.toggleClass('showMenu');
 //       })
 //



        // Pure Javascript

        (function(){


            var photoApp = document.getElementById('photo-app'),
                imageClick =  document.getElementById('get-images'),
                search =  document.getElementById('searchbar'),
                dropDownOpen =  document.getElementById('openMenu'),
                dropDownMenu =  document.querySelectorAll('.dropdown'),
                photoContainer = document.createElement('section');
                photoContainer.className = 'photos-container';

                photoApp.appendChild(photoContainer);

                imageClick.addEventListener('click',getPhotos);
                search.addEventListener('keyup', function(event) {
                        if (event.which == 13) {
                            getPhotos();

                        }
            });


            function getPhotos(){

                    var unsplash = 'https://api.unsplash.com/photos/?client_id=4f9beca0fae78f820221cd2d69431a078fa02304cc3c669efd06b644c53b59eb';

                        $.ajax({
                            url: unsplash,
                            type: "GET",
                            dataType: "json"


                        }).done(makePhotoSection).fail( function (msg) { alert(msg); });
                 }

                function makePhotoSection(data){
                    var responseData = data[0].categories[0].links.photos,
                        apiId = "client_id=4f9beca0fae78f820221cd2d69431a078fa02304cc3c669efd06b644c53b59eb";


                    $.ajax({
                        url: responseData + '?' + apiId ,
                        type: "GET",
                        dataType: "json"

                    }).done(function(data){
                        data.map(function(item){
                            var url =  item.urls.full,
                                    img = document.createElement('img');
                                    img.className = 'image';
                                    img.setAttribute('src', url);
                                    photoApp.appendChild(img);


                        });

                    }).fail( function (msg) { alert(msg); });

                }



        })();

});

//function getPhotos() {
//    console.log('hey');
//    var key = '77h7td8ewaukmcjtcwp8awwj', // Api Key
//        searchTerm = search.value, // Search term from input field
//        unsplash = 'https://api.unsplash.com/photos/?client_id=4f9beca0fae78f820221cd2d69431a078fa02304cc3c669efd06b644c53b59eb';
//
//
//    var xmlHttp = new XMLHttpRequest();
//    xmlHttp.open("GET", unsplash, false);
//    xmlHttp.send(null);
//
//    return  makePhotoSection(xmlHttp.responseText);;
//
//}
