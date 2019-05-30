let updateTimeout;

let Zoner = {
  polyList: [],
  names: [],
  filteredState: null,
  highlightedPoly: null,

  plot: function() {
    $.each(neighborhoods, function(i,zone) {
      let paths = [];
      for (let j in zone.coords) {
        let lat = zone.coords[j].lat;
        let lng = zone.coords[j].lng;
        paths.push(new google.maps.LatLng(lat,lng));
      }

      let poly = new google.maps.Polygon({
        paths: paths,
        strokeColor: '#000000',
        strokeOpacity: 0.25,
        strokeWeight: 2,
        fillColor: '#' + zone.color,
        fillOpacity: zone.color === 'FFFFFF' ? 0 : 0.4
        // clickable: false
      });

      let polyZone = {
        name: zone.name,
        borough: zone.borough,
        color: zone.color,
        polyIndex: i,
        polygon: poly,
        summary: zone.summary
      };
      Zoner.polyList.push(polyZone);
      Zoner.names.push(polyZone.name);

      poly.setMap(map);

      if (!isMobile) {
        google.maps.event.addListener(poly, 'mouseover', highlight.bind(this, poly));
        google.maps.event.addListener(poly, 'mouseout', unhighlight.bind(this, poly, zone));
      }

      google.maps.event.addListener(poly, 'click', function(e) {
        updateTimeout = setTimeout(function() {
          Zoner.showInfo(e.latLng.lat(), e.latLng.lng());
        }, 200);
      });
    });

    google.maps.event.addListener(map, 'dblclick', function(e) {
      clearTimeout(updateTimeout);
    });

    Zoner.names.sort(function(a,b) {
      return a.localeCompare(b);
    });

    if ('options' in document.createElement('datalist')) {
      Zoner.names.forEach(function(name) {
        $('datalist').append('<option value="' + name + '"></option>');
      });
    }
  },

  getNeighborhoods: function(lat,lng) {
    let latLng = getLatLng(lat,lng);

    return $.grep(Zoner.polyList, function(zone) {
      return google.maps.geometry.poly.containsLocation(latLng, zone.polygon);
    });
  },

  getFormattedAddress: function(locality) {
    // FIXME: use our neighborhood address, not what Google gives you
    let abbrAddress = locality.address_components[0].short_name + ' ' + locality.address_components[1].short_name;
    if (locality.address_components[2].short_name !== 'New York') {
      abbrAddress += ', ' + locality.address_components[2].short_name;
    }
    return abbrAddress;
  },

  isInNYC: function(locality) {
    if (!locality.address_components.length) {
      return false;
    }
    for (let i = 0; i < locality.address_components.length; i++) {
      if (locality.address_components[i].types.indexOf('administrative_area_level_2') >= 0) {
        return !!locality.address_components[i].long_name.match(/New York County|Kings County|Queens County|Bronx County|Richmond County/i);
      }
      if (locality.address_components[i].types.indexOf('locality') >= 0) {
        return !!locality.address_components[i].long_name.match(/New York/i);
      }
      if (locality.address_components[i].types.indexOf('sublocality') >= 0) {
        return !!locality.address_components[i].long_name.match(/Manhattan|Brooklyn|Queens|Bronx|Staten Island/i);
      }
    }
    return false;
  },

  reset: function() {
    $.each(Zoner.polyList, function(index, el) {
      el.polygon.filtered = false;
      el.polygon.setMap(map);
    });
    Zoner.filteredState = null;
    updateHistory();
  },

  showBorough: function(name, lat, lng, zoom) {
    $.each(Zoner.polyList, function(index, el) {
      if (el.borough.toLowerCase().replace(/ /g, '_') === name) {
        el.polygon.filtered = true;
        el.polygon.setMap(map);
      } else {
        el.polygon.filtered = false;
        el.polygon.setMap(null);
      }
    });
    let center = boroughs[name];
    setCenter(lat || center.lat, lng || center.lng, zoom || 11);
    let $button = $(".borough-select[data-url='" + name + "']");
    $button.removeClass('hidden').siblings().addClass('hidden');
    $('#address').val($button.text());
    Zoner.filteredState = name;
    updateHistory();
  },

  showNeighborhood: function(name) {
    name = name.replace(/_/g, ' ');
    $.each(Zoner.polyList, (index, el) => {
      if (el.name.toLowerCase() === name.toLowerCase()) {
        el.polygon.filtered = true;
        el.polygon.setMap(map);
      } else {
        el.polygon.filtered = false;
        el.polygon.setMap(null);
      }
    });
    let humanName = name, // = name is a safeguard, should always be replaced.
      infoLat, infoLng, i;
    for (i = 0; i < neighborhoods.length; i++) {
      if (neighborhoods[i].name.toLowerCase() === name.toLowerCase()) {
        infoLat = neighborhoods[i].center.lat;
        infoLng = neighborhoods[i].center.lng;
        humanName = neighborhoods[i].name;
        break;
      }
    }
    Zoner.filteredState = name.replace(/ /g, '_');
    Zoner.showInfo(infoLat, infoLng, i, true);

    if (detectMobile() && !$('.mobile-infowindow').hasClass('show')) {
      $('.mobile-infowindow').html(Templates.infowindow([neighborhoods[i]], true));
    }

    map.fitBounds(Zoner.polyList[i].polygon.getBounds());

    $('#address').val(humanName);
    updateHistory();
  },

  showInfo: function(lat, lng, highlightPolyIndex, showSummary) {
    openedInfo.close();

    if (Zoner.highlightedPoly) {
      unhighlight(Zoner.highlightedPoly);
      Zoner.highlightedPoly = null;
    }

    let latLng = getLatLng(lat, lng);
    let matches = Zoner.getNeighborhoods(latLng);

    if (matches.length === 0 && !highlightPolyIndex) {
      return lnycAlert('Neighborhood not established!');
    }

    if (Number.isInteger(highlightPolyIndex)) {
      highlight(Zoner.polyList[highlightPolyIndex].polygon);
      Zoner.highlightedPoly = Zoner.polyList[highlightPolyIndex].polygon;

      // Narrow down to the one that was click on.
      matches = matches.filter(match => match.name === Zoner.polyList[highlightPolyIndex].name);
    }

    if (showSummary && matches.length === 1) {
      $('.mobile-infowindow')
        .html(Templates.infowindow(matches, true))
        .addClass('show');
    }

    if (!detectMobile() || !showSummary) {
      openedInfo = new google.maps.InfoWindow({
        content: Templates.infowindow(matches, !!showSummary)
      });
      openedInfo.setPosition(latLng);
      openedInfo.open(map);
    }

    google.maps.event.addListener(openedInfo, 'domready', () => {
      $('body').off('click.infowindow').one('click.infowindow', '.zone-link', e => {
        Zoner.showNeighborhood($(e.target).data('key'));
      });

      $.each(matches, (i, zone) => {
        $('.zone-link[data-index=' + zone.polyIndex + ']').hover(() => {
          highlight(zone.polygon);
        }, function() {
          unhighlight(zone.polygon);
        });
      });
    });
  },

  showInfoAndZoom: function(lat, lng, showSummary = false) {
    const matches = Zoner.getNeighborhoods(lat, lng);
    if (matches.length === 1) {
      this.showNeighborhood(matches[0].name);
    } else {
      Zoner.showInfo(lat, lng, null, showSummary);
      setCenter(lat, lng);
    }
  },

  toggleZones: function() {
    $.each(Zoner.polyList, function(index, el) {
      if (el.polygon.map) {
        el.polygon.setMap(null);
      } else if (el.polygon.filtered && Zoner.filteredState) {
        el.polygon.setMap(map);
      } else if (!Zoner.filteredState) {
        el.polygon.setMap(map);
      }
    });
    polyIsVisible = !polyIsVisible;
  }
};
