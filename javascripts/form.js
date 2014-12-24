$(document).ready(function() {
  $("#canvas").on('click',function(e) {
    $("input").blur();
  });

  $("#find_address").submit(function(e) {
    var address = $("#address").val();
    var gc = new google.maps.Geocoder();
    gc.geocode({'address' : address}, function(results) {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      Zoner.showInfoAndZoom(lat,lng);
    });
    e.preventDefault();
  });

  $("#reset_address").click(function() {
    $("#address").val("").focus();
    openedInfo.close();
  });
});