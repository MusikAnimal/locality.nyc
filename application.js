// 206-218 Madison St, New York, NY
var openedInfo = new google.maps.InfoWindow();
var polyList = [];
var polyIsVisible = true;
var isMobile = false;

$(document).ready((function() {
  if($("footer").not(":visible")) {
    isMobile = true;
  }

  initMap();

  $("#find_address").submit(function(e) {
    var address = $("#address").val();
    var gc = new google.maps.Geocoder();
    gc.geocode({'address' : address}, function(results) {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      infoNeighborhood(lat,lng);
    });
    e.preventDefault();
  });

  $("#reset_address").click(function() {
    $("#address").val("").focus();
  });

  $("#show_hide_zones").click(function() {
    $(this).find("img").toggleClass("hidden");
    toggleZones();
  });

  $("#mylocation").click(function() {
    $("#address").val("Fetching location...");
    var timeout1 = setTimeout(function() {
      $("#address").val("Still working...");
    }, 4000);
    var timeout2 = setTimeout(function() {
      $("#address").val("");
      alert("Error fetching location");
    }, 8000);
    $.when(getCurrentPosition()).pipe(setCurrentPosition).then($.proxy(function(results,status) {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      var match = results[0];

      var abbrAddress = match.address_components[0].short_name + " " + match.address_components[1].short_name;
      if(match.address_components[2].short_name !== "New York") {
        abbrAddress += ", " + match.address_components[2].short_name;
      }

      $("#address").val(abbrAddress);
      infoNeighborhood(match.geometry.location.lat(),match.geometry.location.lng());
    },this));
  });

  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });

  // restrict boundaries
  var allowedBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(40.3518381,-74.0140133),
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

  // Limit the zoom level
  google.maps.event.addListener(map, 'zoom_changed', function() {
   if (map.getZoom() < 10) map.setZoom(10);
  });
}));

function getCurrentPosition(options) {
  var deferred = $.Deferred();

  navigator.geolocation.getCurrentPosition(
    deferred.resolve,
    deferred.reject,
    options
  );

  return deferred.promise();
}

function setCurrentPosition(position) {
  var deferred = $.Deferred();

  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  var latlng = new google.maps.LatLng(lat,lng);
  var geoCoder = new google.maps.Geocoder();
  geoCoder.geocode({ location: latlng }, deferred.resolve);

  return deferred.promise();
}

function getNeighborhood(lat,lng) {
  var latLng = new google.maps.LatLng(lat,lng);

  return $.grep(polyList, function(zone) {
    return google.maps.geometry.poly.containsLocation(latLng, zone);
  });
}

function infoNeighborhood(lat,lng,skipZoom) {
  var matches = getNeighborhood(lat,lng);
  if(matches) {
    var html = "";
    for(var i in matches) {
      html += matches[i].infowindow.content;
      if(!matches[i].map) {
        matches[i].setMap(map);
      }
    }
    var latLng = new google.maps.LatLng(lat,lng);
    if(skipZoom) {
      map.setCenter(latLng);
      map.setZoom(15);
    }
    openedInfo.close();
    openedInfo = new google.maps.InfoWindow({
      content : html
    });
    openedInfo.setPosition(latLng);
    openedInfo.open(map);
  } else {
    alert("Not found :(");
  }
  return matches;
}

function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7902185, -73.945692),
    zoom: 12,
    streetViewControl : false,
    mapTypeControl : false,
    rotateControl : true
  };

  // if(isMobile) {
  //   mapOptions = $.extend({
  //     disableDefaultUI : true
  //   },mapOptions)
  // }

  map = new google.maps.Map($("#canvas")[0], mapOptions);
  // setUserCoords();
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
    for(var j in zone.coords) {
      var lat = zone.coords[j].lat;
      var lng = zone.coords[j].lng;
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

    polyList.push(poly);
  });
}

function showInfo(e) {
  openedInfo.close();
  infoNeighborhood(e.latLng.lat(),e.latLng.lng());
  // if(openedInfo.name != this.infowindow.name) {
  //   this.infowindow.setPosition(e.latLng);
  //   this.infowindow.open(map);
  //   openedInfo = this.infowindow;
  // }
}

function toggleZones() {
  $.each(polyList, function(index, el) {
    if(polyIsVisible) {
      el.setMap(null);
    } else {
      el.setMap(map);
    }
  });
  polyIsVisible = !polyIsVisible;
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
