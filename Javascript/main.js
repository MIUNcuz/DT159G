function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            Plotly.newPlot('graf', data );
            console.log(data);
        }
    };

    xhttp.open("GET", "getStats1.php", true);
    xhttp.send();
}

