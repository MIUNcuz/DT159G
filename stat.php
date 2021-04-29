<?php include("includes/header.php"); ?>
<nav id="navMenu">
        <select id="regVal" class="form-control"></select>
        <button id="searchbtn">Välj region</button>
</nav>
<section id="leftStat">
    <div id="graf"> <!-- Plotly ritas här --></div>

    <h1>Plott av data</h1>
    <p>Data hämta från php, som i sin tur hämtar från en annan server via REST.</p>

    <button type="button" onclick="loadDoc()">Ladda om</button>
</section>

<section id="rightStat">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus, porro explicabo accusantium vero obcaecati saepe eos dolorum esse voluptas veritatis corporis. Maiores fugiat ullam ipsam earum ducimus blanditiis nihil.
</section>

<section id="bottomStat">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae earum sunt nihil doloremque facere nostrum repellat ea tempore alias placeat quos sint, rem tenetur. Dolore provident eaque fuga repellat dolorem!
</section>
<?php include("includes/footer.php"); ?>
