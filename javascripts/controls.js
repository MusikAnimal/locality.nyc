$(document).ready(function() {
  $("#show_hide_zones").click(function() {
    $(this).find("img").toggleClass("hidden");
    Zoner.toggleZones();
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

      var abbrAddress = Zoner.getFormattedAddress(match);
      $("#address").val(abbrAddress);
      var latLng = getLatLng(match.geometry.location.lat(),match.geometry.location.lng());
      Zoner.showInfoAndZoom(latLng);
    },this));
  });

  // Listeners
  $(document).on("reset",function() {
    $("#show_hide_zones").find("img").removeClass("hidden");
  });
});