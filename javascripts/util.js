function detectMobile() {
  return $(window).width() <= 700;
}

function lnycAlert(message, buttonName, callback) {
  if (window.cordova) {
    navigator.notification.alert(message, $.noop, 'Whoops!', buttonName || 'OK');
  } else {
    alert(message);
  }
}
