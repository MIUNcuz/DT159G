<!-- //////////////////////////////////////////////////////////////////////////
    //
    // filnamn: statmenu.php
    // Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
    // Kurs: Tillämpad datateknik DT159G
    // Universitet: Mitt Universitet
    / Datum: 2021-05-
    // Beskrivning:
    // 
    // Html-kod som skapar en liknande navigeringsbar som mainmenu.php 
    // till skillnad att denna även tillhandahåller ett option element som
    // som visar län. Samt en knapp "välj län". 
    //
    ////////////////////////////////////////////////////////////////////////// -->
<div id="container">
        <nav id="mainmenu">
            <ul>
                <li><a href="main.php">Karta</a></li>               
                <li><a href="stat.php">Tabell</a></li>
                <li><select id="regVal" class="form-control"></select></li>
                <li><button id="searchbtn" class="button button">Visa Info</button> </li>
            </ul>   
        </nav>
</div>