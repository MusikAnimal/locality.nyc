var openedInfo = new google.maps.InfoWindow();

$(document).ready((function() {
  initMap();

  // listeners
  google.maps.event.addListener(map, 'click', function(event) {
    console.log(google.maps.geometry.poly.containsLocation(event.latLng, unionSquare));
  });

  $("#find_address").submit(function(e) {
    var address = $("#address").val();
    var gc = new google.maps.Geocoder();
    gc.geocode({'address' : address}, function(results, status) {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      var latLng = new google.maps.LatLng(lat,lng);
      console.log(google.maps.geometry.poly.containsLocation(latLng, unionSquare));
    });
    e.preventDefault();
  });
}));

function initMap() {
  var mapOptions = {
    // 40.780021,-73.965508
    center: new google.maps.LatLng(40.7902185, -73.945692),
    zoom: 12
  };

  map = new google.maps.Map($("#canvas")[0], mapOptions);
  setUserCoords();
  setUpZones();
}

function setUserCoords() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    map.setCenter(new google.maps.LatLng(lat, lng));
    map.setZoom(11);
  });
}

function setUpZones() {
  $.each(neighborhoods, function(i,zone) {
    var paths = [];
    for(var i in zone.coords) {
      var lat = zone.coords[i].lat;
      var lng = zone.coords[i].lng;
      paths.push(new google.maps.LatLng(lat,lng));
    }

    var poly = new google.maps.Polygon({
      paths: paths,
      strokeColor: "#000000",
      strokeOpacity: 0.25,
      strokeWeight: 2,
      fillColor: '#'+zone.color,
      fillOpacity: 0.45
    });

    poly.infowindow = new google.maps.InfoWindow({
      content : "<div style='font-weight:bold; font-size:14px; color: black'>" + zone.name + "</div>",
      name : i
    });
    poly.setMap(map);
    google.maps.event.addListener(poly, "click", showInfo);
  });
}

function showInfo(e) {
  openedInfo.close();
  if (openedInfo.name != this.infowindow.name) {
    this.infowindow.setPosition(e.latLng);
    this.infowindow.open(map);
    openedInfo = this.infowindow;
  }
}

function createMarker(item, latlng) {
  var marker = new google.maps.Marker({position: latlng, map: map});
  google.maps.event.addListener(marker, "click", function() {
    if (infowindow) {
      infowindow.close();
    }
    infowindow = new google.maps.InfoWindow({content:
      "<a href='http://foursquare.com/v/" + item.venue.id + "' target='_blank' style='font-weight:bold; font-size:14px; color: black'>" + item.venue.name + "</a>" +
      "<p>" + item.beenHere + " check in" + (item.beenHere > 1 ? "s" : "") + " </p>"
    });
    infowindow.open(map, marker);
  });
  return marker;
}

google.maps.Map.prototype.markers = new Array();
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