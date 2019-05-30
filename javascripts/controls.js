$(document).ready(function() {
  $('#show_hide_zones').on('click', function() {
    $(this).find('img').toggleClass('hidden');
    Zoner.toggleZones();
  });

  $('#mylocation').on('click', function() {
    $('#address').val('Fetching location...');
    let timeout1 = setTimeout(function() {
      $('#address').val('Still working...');
    }, 5000);
    let timeout2 = setTimeout(function() {
      $('#address').val('');
      lnycAlert('Error fetching location');
    }, 10000);
    $.when(getCurrentPosition()).pipe(setCurrentPosition).done(function(results,status) {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      let match = results[0];

      let abbrAddress = Zoner.getFormattedAddress(match);
      $('#address').val(abbrAddress);
      let latLng = getLatLng(match.geometry.location.lat(),match.geometry.location.lng());
      Zoner.showInfoAndZoom(latLng);
    });
  });

  // Listeners
  $(document).on('reset',function() {
    $('#show_hide_zones').find('img').removeClass('hidden');
  });

  $('.variation-btn').on('click', function() {
    $('.variation-btn').removeClass('selected');
    $(this).addClass('selected');

    let style = $(this).data('variation');
    setStyle(style);
    window.localStorage.setItem('lnyc-variation', style);
  });
});
