$(document).ready(function () {
  $("#selectPics").on("change", function () {
    //alert("Er is iets veranderd in de select");
    var value = $(this).val();
    //alert(value);

    // We gaan asynchroon data ophalen van een php pagina
    $.post("http://localhost/2017-2018/blok3/k-frte-am1a/ajax_carousel/data.php",
            function(data) {
              $("#response").val(data);
            },
           "text");
  });
});