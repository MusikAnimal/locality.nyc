$(function() {
  let $address = $('#address');

  $('#canvas').on('click', function() {
    $address.blur();
  });

  $('#find_address').submit(e => {
    e.preventDefault();

    if ($address.val() === '') {
      return lnycAlert('Please provide a search query!');
    }

    $address.blur();
    $(document).trigger('reset', {skipClearForm: true});

    let address = $address.val(),
      query = address.toLowerCase().replace(/_/g,' ');

    for (let borough in boroughs) {
      if (query === borough || boroughs[borough].alternate_names.indexOf(query) !== -1) {
        return Zoner.showBorough(borough);
      }

      const neighborhood = neighborhoods.filter(n => n.name.toLowerCase() === query)[0];

      if (neighborhood) {
        return Zoner.showNeighborhood(query);
      }
    }

    if (!stableConnection) return lnycAlert('You are offline! Please check your internet connection and try again.');

    let gc = new google.maps.Geocoder();

    gc.geocode({'address': query}, results => {
      let locality = results[0];

      if (locality && !Zoner.isInNYC(locality)) {
        locality = $.grep(results, result => {
          return Zoner.isInNYC(result);
        })[0];
      }
      if (!locality) {
        return lnycAlert('Address not found within city limits!\nCheck the spelling or try including the name of the borough.');
      }

      let abbrAddress = Zoner.getFormattedAddress(locality);
      $address.val(abbrAddress);

      let lat = locality.geometry.location.lat();
      let lng = locality.geometry.location.lng();
      Zoner.showInfoAndZoom(lat, lng);
      Zoner.filteredState = abbrAddress;
      updateHistory();
    });
  });

  $('#reset_address').on('click', () => {
    $(document).trigger('reset');
  });

  $(document).on('reset', (e, opts = {}) => {
    if (!opts.skipClearForm) {
      $address.val('');
    }
    if (!opts.skipZoneReset) {
      Zoner.reset();
    }
    if (Zoner.highlightedPoly) {
      unhighlight(Zoner.highlightedPoly);
      Zoner.highlightedPoly = null;
    }
  });
});
