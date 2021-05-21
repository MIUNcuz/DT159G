//////////////////////////////////////////////////////////////////////////
//
// filnamn: maps.js
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet 
// Beskrivning:
// 
// 
//
//
//////////////////////////////////////////////////////////////////////////

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxmcmVkayIsImEiOiJja20zamlzdjM0eTlzMm9uMWhsZjk1czhkIn0.JvbY4ViBCPSXT-8msBh7Dw';
var data = [];
document.addEventListener("DOMContentLoaded", function () {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) { // Förfrågan klar
            if (xmlhttp.status == 200) {  // Alles OK, => 200 "vi fortsätter"
                data = JSON.parse(xmlhttp.responseText);
                mapInfo(data);
                changeLayer();
            }
            else if (xmlhttp.status == 400) { // Något fel uppstod => 400 Bad request.
                alert("There was an error 400");
            }
            else { // Mer fel.. => "vi är för oss själva"
                alert("something else other than 200 was returned: " + xmlhttp.status);
            }
        }
    };

    xmlhttp.open("GET", "getComp.php", true);
    xmlhttp.send();
});

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [17.28366, 62.39470],
    zoom: 4,
    maxZoom: 6,
    minZoom: 4
})
map.addControl(new mapboxgl.NavigationControl());

////////Funktion för att byta utseende på kartan
function changeLayer() {
    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');

    function switchLayer(layer) {
        var layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
    }
}
////////Funktion för att skapa element
function createDiv() {
    var markers = [];
    for (var i = 0; i < 21; ++i) {
        markers[i] = document.createElement('div');
        markers[i].className = 'marker';
    }
    return markers;
}

el1 = createDiv()

var vnMarker = new mapboxgl.Marker(el1[0])
    .setLngLat([17.28425, 62.39462])
    .addTo(map);

var stMarker = new mapboxgl.Marker(el1[1])
    .setLngLat([18.094, 59.326])
    .addTo(map);

var vbMarker = new mapboxgl.Marker(el1[2])
    .setLngLat([20.252, 63.824])
    .addTo(map);

var nbMarker = new mapboxgl.Marker(el1[3])
    .setLngLat([22.154, 65.5842])
    .addTo(map);

var skMarker = new mapboxgl.Marker(el1[4])
    .setLngLat([12.970, 55.610])
    .addTo(map);

var kaMarker = new mapboxgl.Marker(el1[5])
    .setLngLat([16.330, 56.680])
    .addTo(map);

var blMarker = new mapboxgl.Marker(el1[6])
    .setLngLat([15.590, 56.160])
    .addTo(map);

var haMarker = new mapboxgl.Marker(el1[7])
    .setLngLat([12.830, 56.660])
    .addTo(map);

var krMarker = new mapboxgl.Marker(el1[8])
    .setLngLat([14.830, 56.890])
    .addTo(map);

var joMarker = new mapboxgl.Marker(el1[9])
    .setLngLat([14.170, 57.780])
    .addTo(map);

var vgMarker = new mapboxgl.Marker(el1[10])
    .setLngLat([11.890, 57.690])
    .addTo(map);

var ogMarker = new mapboxgl.Marker(el1[11])
    .setLngLat([16.180, 58.610])
    .addTo(map);

var orMarker = new mapboxgl.Marker(el1[12])
    .setLngLat([15.180, 59.280])
    .addTo(map);

var vlMarker = new mapboxgl.Marker(el1[13])
    .setLngLat([13.480, 59.390])
    .addTo(map);

var slMarker = new mapboxgl.Marker(el1[14])
    .setLngLat([16.550, 59.370])
    .addTo(map);

var upMarker = new mapboxgl.Marker(el1[15])
    .setLngLat([17.700, 59.870])
    .addTo(map);

var vmlMarker = new mapboxgl.Marker(el1[16])
    .setLngLat([15.770, 60.000])
    .addTo(map);

var daMarker = new mapboxgl.Marker(el1[17])
    .setLngLat([14.540, 61.000])
    .addTo(map);

var jlMarker = new mapboxgl.Marker(el1[18])
    .setLngLat([14.700, 63.180])
    .addTo(map);

var gbMarker = new mapboxgl.Marker(el1[19])
    .setLngLat([17.120, 60.660])
    .addTo(map);

var glMarker = new mapboxgl.Marker(el1[20])
    .setLngLat([18.290, 57.640])
    .addTo(map);


////////Funktion för att visa data på kartsidan
function mapInfo(data) {
    var lanDisplay = document.getElementById('lan');
    var mhyraDisplay = document.getElementById('mhyra');
    var mskuldDisplay = document.getElementById('mskuld');

    //Data visas för stockholm innan ett län har tryckts på kartan
    lanDisplay.innerHTML = "Stockholm";
    mhyraDisplay.innerHTML = data[0]["r_rent"]["Stockholms län"][4];
    mskuldDisplay.innerHTML = data[0]["d_debt"]["STOCKHOLMS LÄN"][4];
    
    vnMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Västernorrland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Västernorrlands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["VÄSTERNORRLANDS LÄN"][4];
    });
    stMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Stockholm";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Stockholms län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["STOCKHOLMS LÄN"][4];
    });
    vbMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Västerbotten";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Västerbottens län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["VÄSTERBOTTENS LÄN"][4];
    });
    nbMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Norrbotten";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Norrbottens län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["NORRBOTTENS LÄN"][4];
    });
    skMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Skåne";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Skåne län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["SKÅNE LÄN"][4];
    });
    kaMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Kalmar";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Kalmar län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["KALMAR LÄN"][4];
    });
    blMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Blekinge";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Blekinge län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["BLEKINGE LÄN"][4];
    });
    haMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Halland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Hallands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["HALLANDS LÄN"][4];
    });
    krMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Kronoberg";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Kronobergs län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["KRONOBERGS LÄN"][4];
    });
    joMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Jönköping";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Jönköpings län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["JÖNKÖPINGS LÄN"][4];
    });
    vgMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Västra Götaland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Västra Götalands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["VÄSTRA GÖTALANDS LÄN"][4];
    });
    ogMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Östergötland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Östergötlands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["ÖSTERGÖTLANDS LÄN"][4];
    });
    orMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Örebro";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Örebro län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["ÖREBRO LÄN"][4];
    });
    vlMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Värmland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Värmlands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["VÄRMLANDS LÄN"][4];
    });
    slMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Södermanland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Södermanlands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["SÖDERMANLANDS LÄN"][4];
    });
    upMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Uppsala";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Uppsala län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["UPPSALA LÄN"][4];
    });
    vmlMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Västmanland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Västmanlands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["VÄSTMANLANDS LÄN"][4];
    });
    daMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Dalarna";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Dalarnas län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["DALARNAS LÄN"][4];
    });
    jlMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Jämtland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Jämtlands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["JÄMTLANDS LÄN"][4];
    });
    gbMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Gävleborg";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Gävleborgs län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["GÄVLEBORGS LÄN"][4];
    });
    glMarker.getElement().addEventListener('click', () => {
        lanDisplay.innerHTML = "Gotland";
        mhyraDisplay.innerHTML = data[0]["r_rent"]["Gotlands län"][4];
        mskuldDisplay.innerHTML = data[0]["d_debt"]["GOTLANDS LÄN"][4];
    });
}