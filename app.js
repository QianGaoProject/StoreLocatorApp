var map;

function initialize() {
  // Create a map centered in Pyrmont, Sydney (Australia).
  map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    center: {lat: -33.8666, lng: 151.1958},
    zoom: 15
  });

  // Search for Google's office in Australia.
  var request = {
    location: map.getCenter(),
    radius: '500',
    query: 'Google Sydney'
  };

  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: results[0].place_id,
        location: results[0].geometry.location
      }
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);


// var marker1, marker2;
// var poly, geodesicPoly;

// function initMap() {
//   var map = new google.maps.Map(document.getElementsByClassName('map')[0], {
//     zoom: 4,
//     center: {lat: 34, lng: -40.605}
//   });

//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(
//       document.getElementById('info'));

//   marker1 = new google.maps.Marker({
//     map: map,
//     draggable: true,
//     position: {lat: 40.714, lng: -74.006}
//   });

//   marker2 = new google.maps.Marker({
//     map: map,
//     draggable: true,
//     position: {lat: 48.857, lng: 2.352}
//   });

//   var bounds = new google.maps.LatLngBounds(
//       marker1.getPosition(), marker2.getPosition());
//   map.fitBounds(bounds);

//   google.maps.event.addListener(marker1, 'position_changed', update);
//   google.maps.event.addListener(marker2, 'position_changed', update);

//   poly = new google.maps.Polyline({
//     strokeColor: '#FF0000',
//     strokeOpacity: 1.0,
//     strokeWeight: 3,
//     map: map,
//   });

//   geodesicPoly = new google.maps.Polyline({
//     strokeColor: '#CC0099',
//     strokeOpacity: 1.0,
//     strokeWeight: 3,
//     geodesic: true,
//     map: map
//   });

//  // update();
// }

// function update() {
//   var path = [marker1.getPosition(), marker2.getPosition()];
//   poly.setPath(path);
//   geodesicPoly.setPath(path);
//   var heading = google.maps.geometry.spherical.computeHeading(path[0], path[1]);
//   document.getElementById('heading').value = heading;
//   document.getElementById('origin').value = path[0].toString();
//   document.getElementById('destination').value = path[1].toString();
// }
  
  // function initMap() {
  
  //   // Create the map.
  //   const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
  //     zoom: 8,
  //     center: {lat: -34.397, lng: 150.644}
  //   });
  
   
  // var drawingManager = new google.maps.drawing.DrawingManager({
  //   drawingMode: google.maps.drawing.OverlayType.MARKER,
  //   drawingControl: true,
  //   drawingControlOptions: {
  //     position: google.maps.ControlPosition.TOP_CENTER,
  //     drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
  //   },
  //   markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
  //   circleOptions: {
  //     fillColor: '#ffff00',
  //     fillOpacity: 1,
  //     strokeWeight: 5,
  //     clickable: false,
  //     editable: true,
  //     zIndex: 1
  //   }
  // });
  // drawingManager.setMap(map);
  
  // }