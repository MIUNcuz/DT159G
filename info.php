<?php 
//////////////////////////////////////////////////////////////////////////
//
// filnamn: info.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet 
// Datum: 2021-05-25
// Beskrivning:
// 
// PHP-fil som fungerar som en informationssida, där html-koden är skriven
// i en textfil för att bibehehålla struktur i koden, samt underlätta   
// läsning. 
//
//////////////////////////////////////////////////////////////////////////

$page_title = "Information";
include("includes/header.php");
include("includes/mainmenu.php");?>

<div id="info">

<!-- inkluderar en textfil som beskriver webbplasten. -->
<?php include("includes/info.txt"); ?>

</div>



<?php include("includes/footer.php"); ?>