<?php
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
        <h1>Hyra & Skuld</h1>
    </div>
</header>
<?php include("includes/mainmenu.php");?>
    