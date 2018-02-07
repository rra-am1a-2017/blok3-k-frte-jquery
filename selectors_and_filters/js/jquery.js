// Hier wordt gekeken of de index.html pagina helemaal(behalve de plaatjes) geladen is.
$(document).ready(function() {

  // Hier komt alle javascript en jquery code voor je webapp...
  // alert("Hallo JQuery wereld!")
  // We maken nu een javascript object
  var style_li = { "border" : "1px solid pink",
                "background-color" : "light-green",
                "margin" : "1em",
                "padding" : "1.1em",
                "font-size" : "0.9em" }

  // Je kunt tags selecteren door de naam te gebruiken van de tekst
  $("li").css("border", "5px solid red")
         .css("background-color", "yellow")
         .css("margin", "1em")
         .css("padding", "1em")
         .css("font-size", "1.1em");

  // We selecteren een li tag en we passen de css toe die staat in het js object style_li
  $("li").css(style_li);

  // We maken een js object met drie css property - value paren
  var style_ol = {"background-color" : "rgb(200, 200, 200)",
                  "font-family" : "Verdana",
                  "text-align" : "center"};
  
  // We selecteren de ol geven het js object met css instellingen mee
  $("ol").css(style_ol);

  // Dit is een selector voor een id="eerste" en we passen css toe in een js object
  $("#eerste").css({"font-size" : "1.1em"});

  // Dit is een selector voor een class="alert" in een ol met id="a" en passen css toe in een js object
  $("ol.a .alert").css("font-size", "0.9em");

  // We selecteren een tag met id="eerste" en class="amazing" en passen css in js object toe
  $(".amazing#eerste").css({"font-size" : "1.1em", "border" : "5px solid orange"});

  // We selecteren alle tags op de pagina en passen css toe.
  $("*").css("font-family", "Verdana");

  $("#first").on("click", function () {
    $(".a li:first").css({"background-color" : "olive"});
  });

  $("#last").on("click", function() {
   $(".a li:last").css({"background-color" : "pink", "color" : "green"});
   //alert("hOI");
  });

  $("#odd").on("click", function() {
    $(".a li:odd").css({"background-color" : "pink", "font-size" : "0.9em"});
  });

  $("#even").on("click", function() {
    $(".a li:even").css({"background-color" : "orange", "border-radius" : "5px"});
  });

  $("#gt").on("click", function() {
    $(".a li:gt(1)").css({"background-color" : "black", "border-radius" : "10px", "color" : "white"});
  });

  $("#lt").on("click", function() {
    $(".a li:lt(3)").css({"background-color" : "orange", "border-radius" : "5px", "color" : "grey" });
  });

  $("#eq").on("click", function() {
    $(".a li:eq(1)").css({"background-color" : "grey", "border-radius" : "20px", "color" : "white" });
  });

  $("#attr").on("click", function() {
    $(".b [class]").css({"background-color" : "black", "color" : "white"});
  });

  $("#id").on("click", function() {
    $(".b [id]").css({"background-color" : "purple", "color" : "white"});
  })

  $("#id-eerste").on("click", function() {
    $(".b [id=eerste]").css({"background-color" : "purple", "color" : "white"});
  })

  $("#peppie").on("click", function() {
    $(".b [peppieenkokkie]").css({"background-color" : "green", "color" : "yellow"});
  })

  $("#twee-attr").on("click", function() {
    // $(this).css({"background-color" : "red"}).text("Er is mij geklikt!");
    $(".b [id][class]").css({"background-color" : "brown", "color" : "white"});
  })

  $("#gedeelte-attr").on("click", function() {
    // $(this).css({"background-color" : "red"}).text("Er is mij geklikt!");
    $(".b [class*=maz]").css({"background-color" : "red", "color" : "green"});
  })



});




