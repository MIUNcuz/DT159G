<?php include("resetStats.php");
$time_date2 = date_check2();
?>
<?php include("includes/header.php");?>
<?php include("includes/statmenu.php");?>
<script src="Javascript/main.js"></script>


<!-- <nav id="navMenu">
        <select id="regVal" class="form-control"></select>
        <button id="searchbtn">Välj region</button>
</nav> -->
<section id="centrum"><!--Vald region visas här --></section>
<section id="leftStat">
    <div id="graf"> <!-- Plotly ritas här --></div>

</section>

<section id="rightStat">
    
</section>

<section id="bottomStat">    
</section>
<?php include("includes/footer.php"); ?>
