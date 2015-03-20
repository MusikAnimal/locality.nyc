$(document).ready(function() {
  $("#canvas").on('click',function(e) {
    $("input").blur();
  });

  $("#find_address").submit(function(e) {
    e.preventDefault();
    $("input").blur();
    $(document).trigger("reset", {skipClearForm: true});

    var address = $("#address").val(),
        query = address.toLowerCase().replace(/_/g,' ');

    for(var key in boroughs) {
      var borough = boroughs[key];
      if(query === key || borough.alternate_names.indexOf(query) !== -1) {
        return Zoner.showBorough(key);
      }
    }

    var gc = new google.maps.Geocoder();

    gc.geocode({'address' : address}, function(results) {
      var locality = results[0];

      if(locality && !Zoner.isInNYC(locality)) {
        locality = $.grep(results, function(result, i) {
          return Zoner.isInNYC(result);
        })[0];
      }
      if(!locality) {
        return alert("Address not found within city limits!\nCheck the spelling or try including the name of the borough.");
      }

      var abbrAddress = Zoner.getFormattedAddress(locality);
      $("#address").val(abbrAddress);

      var lat = locality.geometry.location.lat();
      var lng = locality.geometry.location.lng();
      Zoner.showInfoAndZoom(lat,lng);
    });
  });

  $("#reset_address").click(function() {
    $(document).trigger("reset");
  });

  $(document).on("reset", function(e, opts) {
    if(!opts) opts = {};
    if(!opts.skipClearForm) {
      $("#address").val("");
    }
    if(!opts.skipZoneReset) {
      Zoner.reset();
    }
  });
});