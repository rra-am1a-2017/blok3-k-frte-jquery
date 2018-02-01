// Hier wordt gekeken of de index.html pagina helemaal(behalve de plaatjes) geladen is.
$(document).ready(function() {

  // Hier komt alle javascript en jquery code voor je webapp...
  // alert("Hallo JQuery wereld!")
  // We maken nu een javascript object
  var style_li = { "border" : "1px dashed pink",
                "background-color" : "light-green",
                "margin" : "1em",
                "padding" : "1.1em",
                "font-size" : "0.5em" }

  // Je kunt tags selecteren door de naam te gebruiken van de tekst
  $("li").css("border", "5px solid red")
         .css("background-color", "yellow")
         .css("margin", "1em")
         .css("padding", "1em")
         .css("font-size", "1.3em");

  $("li").css(style_li);

  var style_ol = {"background-color" : "rgb(200, 200, 200)",
                  "font-family" : "Verdana",
                  "text-align" : "center"};
  
  $("ol").css(style_ol);

  // Dit is een selector voor een id
  $("#eerste").css({"font-size" : "1.5em"});

  // Dit is een selector voor een class
  $("ol.a .alert").css("font-size", "5em");

  $(".amazing#eerste").css({"font-size" : "1.8em", "border" : "5px dashed orange"});

  $("*").css("font-family", "Verdana");






});




