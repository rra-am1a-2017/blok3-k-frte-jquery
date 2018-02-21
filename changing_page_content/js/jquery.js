// Hier wordt gekeken of de index.html pagina helemaal(behalve de plaatjes) geladen is.
$(document).ready(function() {
  $("#content").on("click",function () {
    // Hier komt alle code voor de knop
    var content = $(".a").html();
    console.log(content);
    alert(content);
    $(".a").html("<li>Hier is wat nieuwe tekst</li>");    
  });

  $("#content2").on("click", function () {
    $("ol.a li:odd").html("<h1>Dit zijn de oneven li's</h1>");
  });

  $("#content3").on("click", function () {
    $("ol.a li:first").text("<b>Dit is het eerste li van alle li's</b>");
  });

  $("#refresh").on("click", function() {
    window.location.replace("./index.html");
  });

  $("ol.a li").on("mouseover", function() {
    $(this).append(". Er is over mij heen gehoverd");
    // Zet het mouseover event uit
    $(this).off("mouseover");
  })

  $("ol.a li").on("mouseleave", function() {
    $(this).prepend(". De muis is van het li afgegaan");
    // Zet het mouseover event uit
    $(this).off("mouseleave ");
  })

  $("#content4").on("click", function() {
    var nieuwItem = $("<li>Dit is een nieuw listitem</li>");
    nieuwItem.css({"background-color" : "yellow", "border-radius" : "5px"});
    $("ol.a li:eq(2)").after(nieuwItem);
  })

  

  
});




