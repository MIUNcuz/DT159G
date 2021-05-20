<?php include("resetStats.php");
$time_date1 = date_check1();
?>
<?php include("includes/header.php"); ?>
<?php include("includes/mainmenu.php");?>
<section>
        <div id="map">
                <link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet">
                <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
            <script src='Javascript/maps.js'> </script>
        <div>
        <div class='mapStats'>
                <div><strong>Län:</strong> <span id='lan'></span></div>
                <div><strong>Årshyra:</strong> <span id='mhyra'></span><span> Kr/kvm</span></div>
                <div><strong>Medelskuld:</strong> <span id='mskuld'></span><span> Kr/person</span></div>
        </div>

        <div id="menu">
                <!-- See a list of Mapbox-hosted public styles at -->
                <!-- https://docs.mapbox.com/api/maps/styles/#mapbox-styles -->
                <input id="light-v10" type="radio" name="rtoggle" value="light" checked="checked">
                <label for="light-v10">Ljus</label>
                <input id="satellite-v9" type="radio" name="rtoggle" value="satellite">
                <label for="satellite-v9">Satellit</label>
                <input id="dark-v10" type="radio" name="rtoggle" value="dark">
                <label for="dark-v10">Mörk</label>
                <input id="streets-v11" type="radio" name="rtoggle" value="streets">
                <label for="streets-v11">Gator</label>
                <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors">
                <label for="outdoors-v11">Utomhus</label>
        </div>

</section>
<?php include("includes/footer.php"); ?>


