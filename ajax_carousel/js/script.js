$(document).ready(function () {

  // Roep hier een functie aan met daarin een ajax call naar een pagina loadSelect.php

  loadSelect();
  getPictures("fruit");

  function loadSelect() {
     // We gaan asynchroon data ophalen van een php pagina
     $.post("http://localhost/2017-2018/blok3/k-frte-am1a/ajax_carousel/loadSelect.php",
            {},
            function(data) {
              // console.log(data);
              var options = "<option>-Kies een onderwerp-</option>";
              var i;
              for (i = 0; i < data.length; i++) {
                options += "<option value='" + data[i].category + "'>" + data[i].category + "</option>";
              }
              
              $("#selectPics").html(options);
            },
            "json");
  }


  // Plaats hier een de functie loadSelect() met daarin de Ajax call 

  // Maak de pagina loadSelect.php die alle verschillende categorieen selecteert en die stopt in een JSON-string

  // Maak een selector voor de selecttag en plaats de verschillende categorieen in de option-tags.



  //getPictures("groenten");

  $("#selectPics").on("change", function () {
    //alert("Er is iets veranderd in de select");
    var value = $(this).val();
    getPictures(value);
  });

  function getPictures(value) {
    // We gaan asynchroon data ophalen van een php pagina
    $.post("http://localhost/2017-2018/blok3/k-frte-am1a/ajax_carousel/data.php",
            {'category' : value},
            function(data) {
              var i;
              for (i = 0;  i < data.length; i++) {
                $(".carousel-inner img").eq(i).attr("src", "./images/" + data[i].name);
                $(".carousel-inner h5").eq(i).html(data[i].title);
                $(".carousel-inner p").eq(i).html(data[i].info);
              }
            },
           "json");
  }


});