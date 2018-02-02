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

  // We selecteren een li tag en we passen de css toe die staat in het js object style_li
  $("li").css(style_li);

  // We maken een js object met drie css property - value paren
  var style_ol = {"background-color" : "rgb(200, 200, 200)",
                  "font-family" : "Verdana",
                  "text-align" : "center"};
  
  // We selecteren de ol geven het js object met css instellingen mee
  $("ol").css(style_ol);

  // Dit is een selector voor een id="eerste" en we passen css toe in een js object
  $("#eerste").css({"font-size" : "1.5em"});

  // Dit is een selector voor een class="alert" in een ol met id="a" en passen css toe in een js object
  $("ol.a .alert").css("font-size", "5em");

  // We selecteren een tag met id="eerste" en class="amazing" en passen css in js object toe
  $(".amazing#eerste").css({"font-size" : "1.8em", "border" : "5px dashed orange"});

  // We selecteren alle tags op de pagina en passen css toe.
  $("*").css("font-family", "Verdana");
});




