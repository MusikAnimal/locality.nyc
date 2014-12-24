var Zoner = {
  polyList: [],

  plot: function() {
    // TODO: create module for neighborhood
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
        fillOpacity: 0.4
        // clickable: false
      });

      var polyZone = {
        name: zone.name,
        color: zone.color,
        polyIndex: i,
        polygon: poly
      }
      Zoner.polyList.push(polyZone);

      poly.setMap(map);

      // google.maps.event.addListener(poly, "click", showInfo);
      google.maps.event.addListener(poly, "mouseover", highlight.bind(this, poly));
      google.maps.event.addListener(poly, "mouseout", unhighlight.bind(this, poly, zone));
      google.maps.event.addListener(poly, "click", function(e) {
        Zoner.showInfo(e.latLng.lat(),e.latLng.lng());
      });
    });
  },

  getNeighborhoods: function(lat,lng) {
    var latLng = getLatLng(lat,lng);

    return $.grep(Zoner.polyList, function(zone) {
      return google.maps.geometry.poly.containsLocation(latLng, zone.polygon);
    });
  },

  showInfo: function(lat,lng) {
    openedInfo.close();

    var latLng = getLatLng(lat,lng);
    var matches = Zoner.getNeighborhoods(latLng);
    if(!matches) {
      return alert("Not found :(");
    }

    openedInfo = new google.maps.InfoWindow({
      content : Handlebars.templates.infowindow({zones: matches})
    });
    openedInfo.setPosition(latLng);
    openedInfo.open(map);
  }
};