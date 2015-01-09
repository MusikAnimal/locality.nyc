$(document).ready(function() {
  $(".borough-select").click(function() {
    if(!$(this).hasClass("hidden") && Zoner.filteredState) {
      $(document).trigger("reset");
    } else {
      $(document).trigger("reset",{skipZoneRest: true});
      Zoner.showBorough($(this).data('url'));
    }
  });

  $(document).on("reset", function() {
    $(".borough-select").removeClass("hidden");
  });
});