// ------------------ИКОНКА ЛАЙКА ПО ХОВЕРУ--------------------
// 
// let $want = document.getElementById('icons-want')
//
// $want.onmouseover = toggleActiveWant
// $want.onmouseout= toggleActiveWant
//
// function toggleActiveWant() {
//   $want.classList.toggle ('is-active')
// }


// ------------------ИКОНКА ПЛЕЕРА ПО ХОВЕРУ--------------------

let $headphone = document.getElementById('icons-headphone')


$headphone.onmouseover = toggleActiveHeadphone
$headphone.onmouseout= toggleActiveHeadphone

function toggleActiveHeadphone() {
  $headphone.classList.toggle ('is-active')
}


// ------------------ВИДИМОСТЬ БЛОКА С ПЛЕЕРОМ --------------------

let $player = document.getElementById('player')

$headphone.onclick = TogglePlayerVisible

function TogglePlayerVisible(){
  document.body.classList.toggle('player-is-visible')
}


// ------------------ВИДИМОСТЬ БЛОКА С ТЕКСТОМ ПО ХОВЕРУ НА КАРТОЧКАХ МЕСТ --------------------

let $card = document.querySelectorAll('.card') // Получаем элементы тэгов на странице и скалдываем в массив $card

  $card.forEach(function ($el) {                // Для каждого элемента, массива $tags из тэгов, выполним функцию, в которой на элемент тега "навешиваем" обработчики событий onmouseover, onmouseout, onclick
    $el.onmouseover = function() {
      toggleMouseCardText($el);
    };

    $el.onmouseout = function() {
      toggleMouseCardText($el);
    };

    // $el.onclick = function() {
    //   toggleClicCard($el);
    // }
  });


  function toggleMouseCardText($el) {                // эта функция включает и выключает класс is-onmouse на элементе, который передается в аргумент функции
    $el.classList.toggle('card-is-visible');
  }


//
// // ------------------ВИДИМОСТЬ БЛОКА С ТЕКСТОМ ПО ХОВЕРУ НА КАРТОЧКАХ МЕСТ --------------------
//
// let $card = document.getElementById('card')
//
// $card.onmouseover = toggleActiveCardText
// $card.onmouseout= toggleActiveCardText
//
//
// function toggleActiveCardText(){
//   document.body.classList.toggle('card-is-visible')
// }



// ------------------CSS ТЕГОВ ПО ХОВЕРУ И КЛИКУ--------------------

let $tags = document.querySelectorAll('.tag') // Получаем элементы тэгов на странице и скалдываем в массив $tags

$tags.forEach(function ($el) {                // Для каждого элемента, массива $tags из тэгов, выполним функцию, в которой на элемент тега "навешиваем" обработчики событий onmouseover, onmouseout, onclick
  $el.onmouseover = function() {
    toggleMouseTags($el);
  };

  $el.onmouseout = function() {
    toggleMouseTags($el);
  };

  // $el.onclick = function() {
  //   toggleClickTags($el);
  // }
});

function toggleMouseTags($el) {                // эта функция включает и выключает класс is-onmouse на элементе, который передается в аргумент функции
  $el.classList.toggle('is-onmouse');
}

function toggleClickTags($el) {
  console.log($el);
  $el.classList.toggle('is-click');
}


// ------------------ФИЛЬТРАЦИЯ ПО ТЕГАМ--------------------

let $tagsContainer = document.getElementById('tags')
let $itemsContainer = document.getElementById('items')



$tagsContainer
  .querySelectorAll('li')
  .forEach(function addClickHandler($li) {
    let tagType = $li.dataset.tagType
    $li.onclick = function handleClick() {
      toggleClickTags($li)
      filterItemsBy(tagType)
    }
  })


function filterItemsBy(filter) {
 $itemsContainer
    .querySelectorAll('[data-tag-type]')
    .forEach(function compareItemTypeWithFilter($item) {
      let itemType = $item.dataset.tagType
      if (itemType === filter) {
        $item.style.display = 'block'
      } else {
        $item.style.display = 'none'
      }
    });
}



// ------------------АНИМАЦИЯ НА СКРОЛЛ--------------------

// if ($(window).scrollTop() > 60) {
//     $('header').show();
// } else {
//     $('header').hide();
// }
//
//
//
// $(window).scroll(function() {
//     if ($(this).width() < 992) {
//         if ($(this).height() <= 768) {
//             if ($(this).scrollTop() < 500) {
//                 // создаем эффекты
//             }
//             if($(this).scrollTop() > 1000) {
//             // создаем эффекты
//             }
//         }
//     }
// });

// ------------------Initialize and add the map --------------------


var map;
// function initMap() {
//   // The location of Uluru
//   var uluru = {lat: -25.344, lng: 131.036};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }


 function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: -34.397, lng: 150.644},
     zoom: 8
   });
 }


// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 2,
//     center: new google.maps.LatLng(2.8,-187.3),
//     mapTypeId: 'terrain'
//   });
//
//   // Create a <script> tag and set the USGS URL as the source.
//   var script = document.createElement('script');
//   // This example uses a local copy of the GeoJSON stored at
//   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//   script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
//   document.getElementsByTagName('head')[0].appendChild(script);
// }
//
// // Loop through the results array and place a marker for each
// // set of coordinates.
// window.eqfeed_callback = function(results) {
//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1],coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//   }
// }
