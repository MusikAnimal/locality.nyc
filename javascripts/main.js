(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55357845-1', 'auto');
ga('send', 'pageview');

var openedInfo = new google.maps.InfoWindow();
var polyIsVisible = true;
var isMobile = false;

$(document).ready((function() {
  if($("footer").not(":visible")) {
    isMobile = true;
  }

  initMap();
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
  var latlng = getLatLng(lat,lng);
  var geoCoder = new google.maps.Geocoder();
  geoCoder.geocode({ location: latlng }, deferred.resolve);

  return deferred.promise();
}

