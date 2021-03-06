<?php
//////////////////////////////////////////////////////////////////////////
//
// filnamn: main.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet
// Datum: 2021-05-25 
// Beskrivning:
// 
// Startsidan för webbplatsen. Visar en karta över världen med fokus på
// Sverige. Möjliggör för användaren att klicka på olika markers för att
// kunna visa information av valt län. 
//
//////////////////////////////////////////////////////////////////////////

$page_title = "Karta";
 include("includes/header.php");
include("includes/mainmenu.php");?>
<div>
        <div id="map">   <!--Div för kartan-->
                <link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet">
                <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
            <script src='Javascript/maps.js'> </script>
                <div class='mapStats'>
                        <div><span id='lan'></span></div>
                        <div><strong>Årshyra:</strong> <span id='mhyra'></span><span> Kr/kvm</span></div>
                        <div><strong>Medelskuld:</strong> <span id='mskuld'></span><span> Kr/skuldsatt</span></div>
                        <div><strong>Antal skuldsatta:</strong> <span id='antSkuld'></span><span> personer</span></div>
                </div>
        </div>
        <div id="menu">  <!--Div för att byta layout på kartan-->
                <!--Kod hämtad från mapbox-->
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

</div>
<?php include("includes/footer.php"); ?>


