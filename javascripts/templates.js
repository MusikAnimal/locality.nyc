window.Templates = {
  infowindow: function (zones) {
    return zones.map(function (zone) {
      return "<div class='zone-name'>" +
        "<span style='background:#" + zone.color + "'></span>" +
        "<a class='zone-link' href='javascript:' data-index='" + zone.polyIndex + "' " +
        	"data-key=\"" + zone.name.toLowerCase().replace(/ /g, '_') + "\">" + zone.name + "</a>" +
        "</div>";
    }).join('');
  }
};
