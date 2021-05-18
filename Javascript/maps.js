mapboxgl.accessToken = 'pk.eyJ1IjoiYWxmcmVkayIsImEiOiJja20zamlzdjM0eTlzMm9uMWhsZjk1czhkIn0.JvbY4ViBCPSXT-8msBh7Dw';
//var data = null;
document.addEventListener("DOMContentLoaded", function () {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) { // Förfrågan klar
        if (xmlhttp.status == 200) {  // Alles OK, => 200 "vi fortsätter"
          data = JSON.parse(xmlhttp.responseText);
          //console.log(data);
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
//console.log(data);

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-day-v1',
        center: [17.28366, 62.39470],
        zoom: 4,
        maxZoom: 6,
        minZoom: 4
    })
    map.addControl(new mapboxgl.NavigationControl());
    var vnMarker = new mapboxgl.Marker()
    .setLngLat([17.28425, 62.39462])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Västernorrland</h3>"))
    .addTo(map);

var stMarker = new mapboxgl.Marker()
    .setLngLat([18.094, 59.326])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Stockholm</h3>"))
    .addTo(map);

var vbMarker = new mapboxgl.Marker()
    .setLngLat([20.252, 63.824])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Västerbotten</h3>"))
    .addTo(map);

var nbMarker = new mapboxgl.Marker()
    .setLngLat([22.154, 65.5842])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Norrbotten</h3>"))
    .addTo(map);

var skMarker = new mapboxgl.Marker()
    .setLngLat([12.970, 55.610])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Skåne</h3>"))
    .addTo(map);

var kaMarker = new mapboxgl.Marker()
    .setLngLat([16.330, 56.680])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Kalmar</h3>"))
    .addTo(map);

var blMarker = new mapboxgl.Marker()
    .setLngLat([15.600, 56.600])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Blekinge</h3>"))
    .addTo(map);

var haMarker = new mapboxgl.Marker()
    .setLngLat([12.830, 56.660])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Halland</h3>"))
    .addTo(map);

var krMarker = new mapboxgl.Marker()
    .setLngLat([14.830, 56.890])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Kronoberg</h3>"))
    .addTo(map);

var joMarker = new mapboxgl.Marker()
    .setLngLat([14.170, 57.780])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Jönköping</h3>"))
    .addTo(map);

var vgMarker = new mapboxgl.Marker()
    .setLngLat([11.890, 57.690])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Västra Götaland</h3>"))
    .addTo(map);

var ogMarker = new mapboxgl.Marker()
    .setLngLat([16.180, 58.610])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Östergötland</h3>"))
    .addTo(map);

var orMarker = new mapboxgl.Marker()
    .setLngLat([15.180, 59.280])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Örebro</h3>"))
    .addTo(map);

var vlMarker = new mapboxgl.Marker()
    .setLngLat([13.480, 59.390])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Värmland</h3>"))
    .addTo(map);

var slMarker = new mapboxgl.Marker()
    .setLngLat([16.550, 59.370])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Södermanland</h3>"))
    .addTo(map);

var upMarker = new mapboxgl.Marker()
    .setLngLat([17.700, 59.870])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Uppsala</h3>"))
    .addTo(map);

var vmlMarker = new mapboxgl.Marker()
    .setLngLat([15.770, 60.000])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Västmanland</h3>"))
    .addTo(map);

var daMarker = new mapboxgl.Marker()
    .setLngLat([14.540, 61.000])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Dalarna</h3>"))
    .addTo(map);

var jlMarker = new mapboxgl.Marker()
    .setLngLat([14.700, 63.180])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Jämtland</h3>"))
    .addTo(map);

var gbMarker = new mapboxgl.Marker()
    .setLngLat([17.120, 60.660])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Gävleborg</h3>"))
    .addTo(map);

var glMarker = new mapboxgl.Marker()
    .setLngLat([18.290, 57.640])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Gotland</h3>"))
    .addTo(map);

function mapInfo(){
    var magDisplay = document.getElementById('lan');
    var locDisplay = document.getElementById('mhyra');
    var dateDisplay = document.getElementById('mskuld');

    vnMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Västernorrland";
        locDisplay.innerHTML = "T";
    });
    stMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Stockholm";
    });
    vbMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Västerbotten";
    });
    nbMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Norrbotten";
    });
    skMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Skåne";
    });
    kaMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Kalmar";
    });
    blMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Blekinge";
    });
    haMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Halland";
    });
    krMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Kronoberg";
    });
    joMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Jönköping";
    });
    vgMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Västra Götaland";
    });
    ogMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Östra Götaland";
    });
    orMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Örebro";
    });
    vlMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Värmland";
    });
    slMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Södermanland";
    });
    upMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Uppsala";
    });
    vmlMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Västmanland";
    });
    daMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Dalarna";
    });
    jlMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Jämtland";
    });
    gbMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Gävleborg";
    });
    glMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Gotland";
    });
}