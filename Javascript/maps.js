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
        .setLngLat([14.367, 63.1706])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Norrbotten</h3>"))
        .addTo(map);
         
}

setupMap();