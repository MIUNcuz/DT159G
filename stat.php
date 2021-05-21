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

        <div id="leftStat" class="flex"> <!-- Här visas statistik för hyran-->
        </div>

        <div id="rightStat" class="flex">  <!-- Här visas statistik för skulden-->
        </div>

        <div id="bottomStat" class="flex">    
        </div>
    </div>
</section>
<?php include("includes/footer.php"); ?>
