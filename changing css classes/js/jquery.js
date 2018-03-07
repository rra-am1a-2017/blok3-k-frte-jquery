// Hier wordt gekeken of de index.html pagina helemaal(behalve de plaatjes) geladen is.
$(document).ready(function() {
  // Selecteer de button
  $("#addclass").on("click", function() {
    // Gebruik addClass om een class toe te voegen    
    $("#eerste").addClass("fat-border");
  });

  // Selecteer de button  
  $("#addFancyClass").on("click", function () {
    // Gebruik addClass om een class toe te voegen        
    $("#eerste").addClass("fancy-div");
  });

  // Selecteer de button  
  $("#rmClass").on("click", function () {
    // Gebruik removeClass om de class te verwijderen    
    $("#tweede").removeClass("roundCorners");
  });

  // Selecteer de button
  $("#addCorners").on("click", function () {
    // Gebruik addClass om de class toe te voegen
    $("#tweede").addClass("roundCorners");
  });

  $("#toggleClass").on("click", function () {
    $("#derde").toggleClass("toggleExample");
  });

});




