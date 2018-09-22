// console.log("loaded map script");


// var map;
// var service;
// var infowindow;

// function initMap() {
//     var mapCenter = new google.maps.LatLng(-33.8617374, 151.2021291);

//     map = new google.maps.Map(document.querySelector('.map'), {
//         center: mapCenter,
//         zoom: 15
//     });
//     //use a hidden input field for the search
//     var hiddenInput = document.getElementById('hidden-pac-input');
//     var searchBox = new google.maps.places.SearchBox(input);
//     var request = {
//         query: '' + hiddenInput,
//         fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
//     };

//     service = new google.maps.places.PlacesService(map);
//     service.findPlaceFromQuery(request, callback);
// }

// function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//             var place = results[i];
//             createMarker(results[i]);
//         }
//     }                                  
// }

var map;
var service;
var infowindow;

function initialize() {
    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    var request = {
        location: pyrmont,
        radius: '500',
        query: 'restaurant'
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
        }
    }
}