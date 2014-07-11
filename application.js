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

  $("#canvas").on('click',function(e) {
    $("input").blur();
  });

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
      content : "<div class='zone-name'>" +
                "<span style='background:#" + zone.color + "'></span>" + zone.name +
                "</div>",
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

function mobileCheck() {
  var check = false;
  (function(a) {
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
      check = true;
    }
  )(navigator.userAgent||navigator.vendor||window.opera);

  return check;
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
