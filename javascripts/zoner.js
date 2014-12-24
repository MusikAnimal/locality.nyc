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
        Zoner.showInfo(e.latLng.lat(),e.latLng.lng(),false);
      });
    });
  },

  getNeighborhoods: function(lat,lng) {
    var latLng = getLatLng(lat,lng);

    return $.grep(Zoner.polyList, function(zone) {
      return google.maps.geometry.poly.containsLocation(latLng, zone.polygon);
    });
  },

  getFormattedAddress: function(locality) {
    // FIXME: use our neighborhood address, not what Google gives you
    var abbrAddress = locality.address_components[0].short_name + " " + locality.address_components[1].short_name;
    if(locality.address_components[2].short_name !== "New York") {
      abbrAddress += ", " + locality.address_components[2].short_name;
    }
    return abbrAddress;
  },

  isInNYC: function(locality) {
    if(!locality.address_components.length) {
      return false;
    }
    for(var i=0; i<locality.address_components.length; i++) {
      if(locality.address_components[i].types.indexOf("administrative_area_level_2") >= 0) {
        return !!locality.address_components[i].long_name.match(/New York County|Kings County|Queens County|Bronx County|Richmond County/i);
      }
      if(locality.address_components[i].types.indexOf("locality") >= 0) {
        return !!locality.address_components[i].long_name.match(/New York/i);
      }
      if(locality.address_components[i].types.indexOf("sublocality") >= 0) {
        return !!locality.address_components[i].long_name.match(/Manhattan|Brooklyn|Queens|Bronx|Staten Island/i);
      }
    }
    return false;
  },

  showInfo: function(lat,lng,zoomTo) {
    openedInfo.close();

    var latLng = getLatLng(lat,lng);
    var matches = Zoner.getNeighborhoods(latLng);
    if(!matches) {
      return alert("Nieghborhood not established");
    }

    openedInfo = new google.maps.InfoWindow({
      content : Handlebars.templates.infowindow({zones: matches})
    });
    openedInfo.setPosition(latLng);
    openedInfo.open(map);

    $.each(matches, function(i, zone) {
      $(".zone-link[data-index="+zone.polyIndex+"]").hover(function() {
        highlight(zone.polygon);
      }.bind(this), function() {
        unhighlight(zone.polygon);
      }.bind(this));
    });
  },

  showInfoAndZoom: function(lat,lng) {
    Zoner.showInfo(lat,lng);
    setCenter(lat,lng);
  }
};