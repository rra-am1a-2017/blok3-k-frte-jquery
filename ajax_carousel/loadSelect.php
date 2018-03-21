<?php
  // Maak contact met een mysql-server
  include("./connect_db.php");

  // Selecteer alle records uit de database
  $sql = "SELECT DISTINCT `category` FROM `pictures`";

  // Vuur de query af op de database
  $result = mysqli_query($conn, $sql);

  // Maak van het result een associatief array
  $records = mysqli_fetch_all($result, MYSQLI_ASSOC);

  // Schrijf het naar het scherm
  echo json_encode($records);
?>