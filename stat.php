<?php 
//////////////////////////////////////////////////////////////////////////
//
// filnamn: stat.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet 
// Datum: 2021-05-25
// Beskrivning:
// 
// Undersida som plottar statistik, uppdelad i div:s med id:en för att
// kunna hantera utseende av webbplatsens statistik.
//
//////////////////////////////////////////////////////////////////////////

$page_title = "Statistik";
include("includes/header.php");
include("includes/statmenu.php");?>
<script src="Javascript/main.js"></script>
<div>

<div id="centrum"><!--Vald region visas här --></div>

<div id="leftStat"> <!-- Här visas statistik för hyran-->
</div>

<div id="rightStat">  <!-- Här visas statistik för skulden-->
</div>

<div id="bottomStat"> <!-- Här visas korrelationen mellan hyra och skuld -->    
</div>
<?php include("includes/footer.php"); ?>
