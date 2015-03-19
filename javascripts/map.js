function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7033127, -73.979681),
    zoom: 11,
    disableDefaultUI: true
  };

  map = new google.maps.Map($("#canvas")[0], mapOptions);

  // restrict boundaries
  var allowedBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(40.3518381,-74.3515920),
    new google.maps.LatLng(40.9071533,-73.7153225)
  );
  google.maps.event.addListener(map, 'dragend', function() {
    if(allowedBounds.contains(map.getCenter())) return;
    var c = map.getCenter();
    var x = c.lng();
    var y = c.lat();
    var maxX = allowedBounds.getNorthEast().lng();
    var maxY = allowedBounds.getNorthEast().lat();
    var minX = allowedBounds.getSouthWest().lng();
    var minY = allowedBounds.getSouthWest().lat();

    if (x < minX) x = minX;
    if (x > maxX) x = maxX;
    if (y < minY) y = minY;
    if (y > maxY) y = maxY;

    map.setCenter(new google.maps.LatLng(y, x));
  });

  addListeners();

  // setUserCoords();
  Zoner.plot();
}

function addListeners() {
  // Limit the zoom level
  google.maps.event.addListener(map, 'zoom_changed', function() {
    if (map.getZoom() < 10) map.setZoom(10);
  });
  $("#zoom_out").click(function() {
    if(map.getZoom() === 10) return false
    map.setZoom(map.getZoom()-1);
  });
  $("#zoom_in").click(function() {
    map.setZoom(map.getZoom()+1);
  });
  $(document).on("reset", function() {
    openedInfo.close();
  });
}

function createMarker(latlng, content) {
  var marker = new google.maps.Marker({position: latlng, map: map});
  // google.maps.event.addListener(marker, "click", function() {
  openedInfo.close();
  openedInfo = new google.maps.InfoWindow({content: content});
  openedInfo.open(map, marker);
  // });
  return marker;
}

function getLatLng(lat,lng) {
  var latLng;
  if(typeof lat === "number") {
    latLng = new google.maps.LatLng(lat,lng);
  } else {
    latLng = lat;
  }
  return latLng;
}

function highlight(poly) {
  poly.setOptions({strokeWeight: 3.0, strokeColor: 'white', strokeOpacity: 1});
}

function setCenter(lat,lng,zoom) {
  var latLng = getLatLng(lat,lng);
  map.setCenter(latLng);
  map.setZoom(zoom || 15);
}

function setUserCoords() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    map.setCenter(new google.maps.LatLng(lat, lng));
    map.setZoom(11);
  });
}

function unhighlight(poly) {
  poly.setOptions({strokeWeight: 2.0, strokeColor: 'black', strokeOpacity: 0.25});
}

google.maps.Map.prototype.markers = [];
google.maps.Map.prototype.addMarker = function(marker) {
  this.markers[this.markers.length] = marker;
};
google.maps.Map.prototype.getMarkers = function() {
  return this.markers;
};
google.maps.Map.prototype.clearMarkers = function() {
  if(infowindow) {
    infowindow.close();
  }
  for(var i=0; i<this.markers.length; i++){
    this.markers[i].set_map(null);
  }
};