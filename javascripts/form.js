$(document).ready(function() {
  $("#canvas").on('click',function(e) {
    $("#address").blur();
  });

  $("#find_address").submit(function(e) {
    e.preventDefault();

    if($("#address").val() === "") {
      return lnycAlert("Please provide a search query!");
    }

    $("#address").blur();
    $(document).trigger("reset", {skipClearForm: true});

    var address = $("#address").val(),
        query = address.toLowerCase().replace(/_/g,' ');

    for(var key in boroughedNeighborhoods) {
      var borough = boroughedNeighborhoods[key];
      if(query === key || boroughs[key].alternate_names.indexOf(query) !== -1) {
        return Zoner.showBorough(key);
      } else if(borough[query]) {
        var hasSetCenter = Zoner.showNeighborhood(query, key);
        if(!hasSetCenter) {
          query += ' ' + key;
        } else {
          return;
        }
        break;
      }
    }

    if(!stableConnection) return lnycAlert("You are offline! Please check your internet connection and try again.");

    var gc = new google.maps.Geocoder();

    gc.geocode({'address' : query}, function(results) {
      var locality = results[0];

      if(locality && !Zoner.isInNYC(locality)) {
        locality = $.grep(results, function(result, i) {
          return Zoner.isInNYC(result);
        })[0];
      }
      if(!locality) {
        return lnycAlert("Address not found within city limits!\nCheck the spelling or try including the name of the borough.");
      }

      var abbrAddress = Zoner.getFormattedAddress(locality);
      $("#address").val(abbrAddress);

      var lat = locality.geometry.location.lat();
      var lng = locality.geometry.location.lng();
      Zoner.showInfoAndZoom(lat,lng);
    });
  });

  $("#reset_address").on("click", function() {
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
    if(Zoner.highlightedPoly) {
      unhighlight(Zoner.highlightedPoly);
      Zoner.highlightedPoly = null;
    }
  });

  if(!("options" in document.createElement("datalist"))) {
    // no support for datalist, damn Safari!
    var oldValue = "";

    $("#address").on("keydown", function(e) {
      var keyCode = e.which;
      if(keyCode >= 97 && keyCode <= 122) keyCode = keyCode - 32;

      if(keyCode === 8 || keyCode === 32 || keyCode === 39 || keyCode === 45 || (keyCode >= 65 && keyCode <= 92)) {
        $("#polyfill_select").show();
        setTimeout(function() {
          console.log(e.target.value);
          if(e.target.value !== oldValue) {
            oldValue = e.target.value;
            neighborhoodAutocomplete(oldValue);
          }
        }, 0);
      }
    });

    $("#address").on("blur", function(e) {
      $("#polyfill_select").hide();
    });

    $("#polyfill_select").on("mousedown", "li", function(e) {
      $("#address").val($(this).text());
      $("form").trigger("submit");
    });
  }
});

function neighborhoodAutocomplete(query) {
  $("#polyfill_select").html("");
  var regex = new RegExp('.*?'+query+'.*?', 'i');
  return $.map(Zoner.names, function(result) {
    if(result.match(regex)) {
      $("#polyfill_select").append("<li class='autocomplete-result'>"+result+"</li>");
    }
  });
}