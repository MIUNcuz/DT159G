<?php 
//////////////////////////////////////////////////////////////////////////
//
// filnamn: stat.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet 
// Beskrivning:
// 
// 
//
//
//////////////////////////////////////////////////////////////////////////

$page_title = "Statistik";
include("includes/header.php");
include("includes/statmenu.php");?>

<script src="Javascript/main.js"></script>

<section class="stat-main">
    <div class="container grid">
        <div id="centrum" class="flex"><!--Vald region visas här --></div>

        <div id="leftStat" class="flex"> <!-- Här visas statistik för hyran-->
        </div>

        <div id="rightStat" class="flex">  <!-- Här visas statistik för skulden-->
        </div>

        <div id="bottomStat" class="flex">    
        </div>
    </div>
</section>
<?php include("includes/footer.php"); ?>
