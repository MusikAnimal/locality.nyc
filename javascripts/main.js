(function(i,s,o,g,r,a,m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments);
  },i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55357845-1', 'auto');
ga('send', 'pageview');

let openedInfo = new google.maps.InfoWindow(),
  polyIsVisible = true,
  isMobile = false,
  stableConnection = true, reconnectTimeout, reconnectInterval = 3;

$(function() {
  initMap();
  addMainListeners();
});

function getCurrentPosition(options) {
  let deferred = $.Deferred();

  navigator.geolocation.getCurrentPosition(
    deferred.resolve,
    deferred.reject,
    options
  );

  return deferred.promise();
}

function setCurrentPosition(position) {
  let deferred = $.Deferred();

  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  let latlng = getLatLng(lat,lng);
  let geoCoder = new google.maps.Geocoder();
  geoCoder.geocode({ location: latlng }, deferred.resolve);

  return deferred.promise();
}

function setupShareLinks(name) {
  $('#share-modal .share-modal--name').text(name || 'locality.nyc');
  $('#share_url_input').val(document.URL);
  $('.copy-url').text('Copy');
  $('.copy-url').on('click', e => {
    $('#share_url_input').select();
    document.execCommand('copy');
    $(e.target).text('Copied!');
  });
  $('.facebook-share-link').prop(
    'href',
    `https://www.facebook.com/sharer.php?u=${encodeURIComponent(document.URL)}`
  );
  $('.twitter-share-link').prop(
    'href',
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(document.URL)}&text=Check out "${name}" on locality.nyc`
  );
  $('.linkedin-share-link').prop(
    'href',
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(document.URL)}&title="${name}" on locality.nyc&summary=Exploring the neighborhoods of New York City&source=locality.nyc`
  );
}

function addMainListeners() {
  $(document).on('keyup', e => {
    if (e.keyCode === 27) {
      $('.modal').removeClass('show');
      $('body').removeClass('show-mobile-menu')
        .removeClass('show-modal');

      if ($(document.activeElement).is('body')) {
        $(document).trigger('reset');
      } else {
        $(document.activeElement).blur();
      }
    }
  });

  $('body').on('click', '.modal-link', e => {
    e.preventDefault();
    $('body').removeClass('show-mobile-menu')
      .addClass('show-modal');
    const targetId = $(e.target).data('target');
    $('#' + targetId).addClass('show');

    if ('share-modal' === targetId) {
      setupShareLinks($(e.target).data('name'));
    }
  });
  $('.modal-close').on('click', () => {
    $('.modal').removeClass('show');
    $('body').removeClass('show-modal');
  });

  $('#offline_notice').on('click', function() {
    lnycAlert('You are offline! locality.nyc uses Google Maps which may be cached on your device, however search functionality will not work while you are offline.');
  });
  setTimeout(checkNetwork, 5000);
}

function checkNetwork() {
  if (typeof Connection !== 'undefined' && navigator.connection) {
    updateConnectivityState([Connection.UNKNOWN, Connection.CELL, Connection.NONE].indexOf(navigator.connection.type) === -1);
  } else {
    updateConnectivityState(navigator.onLine);
  }
}

function updateConnectivityState(state) {
  if (state) {
    if (!stableConnection) {
      stableConnection = true;
      $('#offline_notice').removeClass('active');
    }
    setTimeout(checkNetwork, 5000);
  } else {
    if (stableConnection) {
      stableConnection = false;
      reconnectInterval = 0;
      $('#offline_notice').addClass('active');
    }
    if (reconnectInterval < 5) {
      reconnectInterval++;
    }
    setTimeout(checkNetwork, reconnectInterval * 1000);
  }
}
