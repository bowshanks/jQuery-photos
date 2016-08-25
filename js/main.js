/**
 * Created by Ben on 5/19/16.
 */
$(document).ready(function() {
  var menuButton = $(".js-open-menu"),
  // var menuButton = document.getElementbyClass("js-open-menu");
    logobox =  $(".header__logo_box"),
    scrollScreen = $(".js-scroll-fullscreen"),
    cover = $(".js-cover");

  menuButton.on("toggle", function(){
    $(".menu--02--desktop").addClass('slide-menu');
  })

  logobox.on("click", function(){
    // console.log("howdy");
  });

  scrollScreen.on("click", function(){
    cover.slideToggle(900);
  });

    /// jQuery EXAMPLE you'll need to comment out the pure javascript section below and uncomment the jQuery section

      var photoApp = $('#photo-app'),
          imageClick = $('#get-images'),
          photoContainer = $('<section class="photos-main-container"></section>'),
          search = $('#searchbar'),
          dropDownOpen = $('#openMenu'),
          dropDownMenu = $('.dropdown');



          photoApp.append(photoContainer);


    //   // DONT WORRY ABOUT THIS


      function getPhotos(){

       var unsplash = 'https://api.unsplash.com/photos/?client_id=4f9beca0fae78f820221cd2d69431a078fa02304cc3c669efd06b644c53b59eb';

           $.ajax({
               url: unsplash,
               type: "GET",
               dataType: "json"

           }).done(makePhotoSection).fail( function (msg) { alert(msg); })
    }




      function makePhotoSection(data){
          var responseData = data.images;
              search.val('');

          for(var i = 0; i < 500; i++) {
              var someDiv = $('<div class="box"></div>');
                  photoApp.append(someDiv);

          }
          for (var i = 0; i < responseData.length; i++) {
                 var url = responseData[i].display_sizes[0].uri;
                     anchor = $('<a></a>');
                     anchor.attr('href',url);
                     img = $('<img class="image">');
                     img.attr('src', url);
                     anchor.append(img);
                     photoApp.append(anchor);
             }



            //Here we are using map to iterate over the array

            responseData.map(function(item){
               var url = item.display_sizes[0].uri,
                       img = $('<img class="image">').hide();
                       img.attr('src', url);
                       photoApp.append(img);
                       img.show('normal');

            });


          //We could use a forEach

          // responseData.forEach(function (elem, index) {
          //    var url = elem.display_sizes[0].uri,
          //        img = $('<img class="image">').hide();
          //        img.attr('src', url);
          //        photoApp.append(img);
          //        img.show('normal');
          // });


          // We could use a for loop


      }

      // Here we are watching for the return key to be pressed

          search.on('keyup', function(event) {
              if (event.which == 13) {
                  getPhotos();
              }
          });

          // Here we are watching for a click

          imageClick.on('click', getPhotos);


          dropDownOpen.on('click',function(){
              dropDownMenu.toggleClass('showMenu');
          });




    // Pure Javascript

    (function() {


        var photoApp = document.getElementById('photo-app'),
            imageClick = document.getElementById('get-images'),
            search = document.getElementById('searchbar'),
            photoContainer = document.createElement('section');

        photoContainer.classList.add('photos-container');

        photoApp.appendChild(photoContainer);

        imageClick.addEventListener('click', getPhotos);
        search.addEventListener('keyup', function(event) {
            if (event.which == 13) {
                getPhotos();

            }
        });


        function getPhotos() {
            var unsplash = 'https://api.unsplash.com/photos/?client_id=4f9beca0fae78f820221cd2d69431a078fa02304cc3c669efd06b644c53b59eb';


            var xmlHttp = new XMLHttpRequest();
            xmlHttp.responseType = "json";
            xmlHttp.open("GET", unsplash);
            xmlHttp.send();


            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    return makePhotoSection(xmlHttp.response);
                }
            }

        }

        function makePhotoSection(data) {
            var responseData = data;

            responseData.map(function(item){
                var url = item.urls.regular,
                    img = document.createElement('img');
                    img.setAttribute('src', url);
                    img.classList.add('image');
                    photoApp.appendChild(img);

            });

        }

    })();

});
