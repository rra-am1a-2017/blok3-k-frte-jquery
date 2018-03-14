$(document).ready(function () {

  $("#selectPics").on("change", function () {
    //alert("Er is iets veranderd in de select");
    var value = $(this).val();

    // We gaan asynchroon data ophalen van een php pagina
    $.post("http://localhost/2017-2018/blok3/k-frte-am1a/ajax_carousel/data.php",
            {'category' : value},
            function(data) {
              $("#response").val(data[2].name);
              
              var i;
              for (i = 0;  i < data.length; i++) {
                $(".carousel-inner img").eq(i).attr("src", "./images/" + data[i].name);
              }

            },
           "json");
  });
});