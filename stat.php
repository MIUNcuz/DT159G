<?php 
//////////////////////////////////////////////////////////////////////////
//
// filnamn: stat.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet
// Datum: 2021-05- 
// Beskrivning:
// 
// Webbsida som visar statiskt för användaren i form av stapeldiagram och
// linjediagram. 
//
//////////////////////////////////////////////////////////////////////////

$page_title = "Statistik";
include("includes/header.php");
include("includes/statmenu.php");?>
<script src="Javascript/main.js"></script>


<section id="centrum"><!--Vald region visas här --></section>
<section id="leftStat">
    <div id="graf"> <!-- Plotly ritas här --></div>

</section>

<section id="rightStat">
    
</section>

<section id="bottomStat">    
</section>
<?php include("includes/footer.php"); ?>
