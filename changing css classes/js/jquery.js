// Hier wordt gekeken of de index.html pagina helemaal(behalve de plaatjes) geladen is.
$(document).ready(function() {
  // Selecteer de button
  $("#addclass").on("click", function() {
    $("#eerste").addClass("fat-border");
  });

  $("#addFancyClass").on("click", function () {
    $("#eerste").addClass("fancy-div");
  });

  // Gebruik removeClass om de class te verwijderen
  $("#rmClass").on("click", function () {
    $("#tweede").removeClass("roundCorners");
  });
});




