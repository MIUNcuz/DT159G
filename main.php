<?php include("resetStats.php");
$time_date1 = date_check1();
?>
<?php include("includes/header.php"); ?>
<section>
        <div id="map">
                <link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet">
                <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
            <script src='Javascript/maps.js'> </script>
        <div>
        <div class='quakeInfo'>
                <div><strong>Län:</strong> <span id='lan'></span></div>
                <div><strong>Medelhyra:</strong> <span id='mhyra'></span></div>
                <div><strong>Medelskuld:</strong> <span id='mskuld'></span></div>
        </div>
</section>
<?php include("includes/footer.php"); ?>


