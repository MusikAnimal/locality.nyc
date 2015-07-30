function initMap() {
  var style = window.localStorage.getItem("lnyc-variation") || "pale_dawn";
  $(".variation-btn[data-variation="+style+"]").addClass("selected");

  var mapOptions = {
    center: new google.maps.LatLng(40.7033127, -73.979681),
    disableDefaultUI: true,
    // streetViewControl: true,
    styles: defaultStyles.concat(mapStyles[style]),
    zoom: 11
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
  $("#zoom_out").on("click", function() {
    if(map.getZoom() === 10) return false
    map.setZoom(map.getZoom()-1);
  });
  $("#zoom_in").on("click", function() {
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
  if(detectMobile()) map.panBy(0, -($("nav").outerHeight() / 2));
}

function setStyle(variation) {
  var styles = [];
  if(variation) {
    styles = defaultStyles.concat(mapStyles[variation]);
  }
  map.setOptions({ styles: styles });
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

var mapStyles = {
  fuse : [{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]}],
  just_retro : [{"featureType":"road","elementType":"geometry","stylers":[{"color":"#b1ab85"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#8cc0c3"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#cde6cf"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#efede8"}]}],
  greyscale : [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}],
  old_map : [{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#abbaa4"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]},{"featureType":"road.highway","stylers":[{"color":"#ad9b8d"}]}],
  pale_dawn : [{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}],
  retro : [{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}],
  default : []
};

var defaultStyles = [{
  featureType: "administrative.neighborhood",
  elementType: "labels.text",
  stylers: [
    { visibility: "off" }
  ]
}];