function detectMobile() {
  return $(window).width() <= 700;
}

function lnycAlert(message) {
  alert(message);
}

/** Polyfills */

Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};
