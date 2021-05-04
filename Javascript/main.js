function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);

            document.getElementById("rightStat").innerHTML = "<p>"+data+"</p>";
            //var lan = data["y"];
            
            
            //Plotly.newPlot('graf', data );
            //console.log(data);
        }
    };

    xhttp.open("GET", "getSbeta.php", true);
    xhttp.send();
}

