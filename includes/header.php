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
// Fungerar som själva huvudet på webbplatsen, därmed innehåller den stand-
// ard kod som återfinns för html. 
//
//////////////////////////////////////////////////////////////////////////

include("includes/config.php");
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $site_title . $divider . $page_title; ?></title>
    <link rel="stylesheet" href="./CSS/styles.css">
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<body>
<header id="mainheader">
    <div class="container">
    <img src="img/red.png" id="hLogo" alt="Korrelation logotyp">
    </div>
</header>

    