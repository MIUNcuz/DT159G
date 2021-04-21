mapboxgl.accessToken = 'pk.eyJ1IjoiYWxmcmVkayIsImEiOiJja20zamlzdjM0eTlzMm9uMWhsZjk1czhkIn0.JvbY4ViBCPSXT-8msBh7Dw';

//Funktion för att sätta upp kartan
function setupMap() {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:[17.28366, 62.39470],
        zoom:4
        })
        
        map.addControl(new mapboxgl.NavigationControl());

        var marker = new mapboxgl.Marker()
        .setLngLat([17.28425, 62.39462])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Västernorrland</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([18.094, 59.326])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Stockholm</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([20.252, 63.824])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Västerbotten</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([22.154, 65.5842])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Norrbotten</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([12.970, 55.610])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Skåne</h3>"))
        .addTo(map);
        
        var marker = new mapboxgl.Marker()
        .setLngLat([16.330, 58.680])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Kalmar</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([15.600, 56.600])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Blekinge</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([12.830, 56.660])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Halland</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([14.830, 56.890])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Kronoberg</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([14.170, 57.780])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Jönköping</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([11.890, 57.690])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Västra Götaland</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([16.180, 58.610])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Östergötland</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([15.180, 59.280])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Örebro</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([13.480, 59.390])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Värmland</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([16.550, 59.370])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Södermanland</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([17.700, 59.870])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Uppsala</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([115.770, 60.000])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Västmanland</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([14.540, 61.000])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Dalarna</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([14.700, 63.180])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Jämtland</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([17.120, 60.660])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Gävleborg</h3>"))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([18.290, 57.640])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Gotland</h3>"))
        .addTo(map);
}

setupMap();