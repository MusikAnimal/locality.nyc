window.Templates = {
  infowindow: function(zones, showSummary) {
    let content = '';

    if (showSummary && zones.length === 1) {
      content = zones[0].summary || '';

      if (zones[0].polygon) {
        zones[0].miles = new Number(
          google.maps.geometry.spherical.computeLength(zones[0].polygon.getPath()) * 0.000621371
        ).toFixed(2);
        zones[0].acres = new Number(
          (google.maps.geometry.spherical.computeArea(zones[0].polygon.getPath()) / 2.59e+6) * 640
        ).toFixed(0);
      }
    }

    return zones.map(zone => {
      let zoneSizeContent = showSummary && zone.acres && zone.miles
        ? `<span class='zone-size'>${zone.acres} ac, ${zone.miles} mi</span>`
        : '';

      return `<div class='zone-name'>
                <button class="mobile-infowindow--close">&#10005;</button>
                <span class='zone-icon' style='background:#${zone.color}'></span>
                ${zoneSizeContent}
                <span class='zone-link' data-index='${zone.polyIndex}' data-key="${zone.name.toLowerCase().replace(/ /g, '_')}">${zone.name}</span>
              </div>
              <div class='zone-summary'>
                ${content}
              </div>`;
    }).join('');
  }
};
