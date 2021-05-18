mapboxgl.accessToken = 'pk.eyJ1IjoiYWxmcmVkayIsImEiOiJja20zamlzdjM0eTlzMm9uMWhsZjk1czhkIn0.JvbY4ViBCPSXT-8msBh7Dw';

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

document.addEventListener("DOMContentLoaded", function () {
    var magDisplay = document.getElementById('lan');
    var locDisplay = document.getElementById('mhyra');
    var dateDisplay = document.getElementById('mskuld');

    vnMarker.getElement().addEventListener('click', () => {
        magDisplay.innerHTML = "Västernorrland";
        locDisplay.innerHTML = "Test";
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
})

// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/light-v10',
//     center: [-77.034084142948, 38.909671288923],
//     zoom: 13,
//     scrollZoom: false
//     });

//   var stores = {
//     "type": "FeatureCollection",
//     "features": [
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.034084142948,
//             38.909671288923
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(202) 234-7336",
//           "phone": "2022347336",
//           "address": "1471 P St NW",
//           "city": "Washington DC",
//           "country": "United States",
//           "crossStreet": "at 15th St NW",
//           "postalCode": "20005",
//           "state": "D.C."
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.049766,
//             38.900772
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(202) 507-8357",
//           "phone": "2025078357",
//           "address": "2221 I St NW",
//           "city": "Washington DC",
//           "country": "United States",
//           "crossStreet": "at 22nd St NW",
//           "postalCode": "20037",
//           "state": "D.C."
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.043929,
//             38.910525
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(202) 387-9338",
//           "phone": "2023879338",
//           "address": "1512 Connecticut Ave NW",
//           "city": "Washington DC",
//           "country": "United States",
//           "crossStreet": "at Dupont Circle",
//           "postalCode": "20036",
//           "state": "D.C."
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.0672,
//             38.90516896
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(202) 337-9338",
//           "phone": "2023379338",
//           "address": "3333 M St NW",
//           "city": "Washington DC",
//           "country": "United States",
//           "crossStreet": "at 34th St NW",
//           "postalCode": "20007",
//           "state": "D.C."
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.002583742142,
//             38.887041080933
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(202) 547-9338",
//           "phone": "2025479338",
//           "address": "221 Pennsylvania Ave SE",
//           "city": "Washington DC",
//           "country": "United States",
//           "crossStreet": "btwn 2nd & 3rd Sts. SE",
//           "postalCode": "20003",
//           "state": "D.C."
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -76.933492720127,
//             38.99225245786
//           ]
//         },
//         "properties": {
//           "address": "8204 Baltimore Ave",
//           "city": "College Park",
//           "country": "United States",
//           "postalCode": "20740",
//           "state": "MD"
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.097083330154,
//             38.980979
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(301) 654-7336",
//           "phone": "3016547336",
//           "address": "4831 Bethesda Ave",
//           "cc": "US",
//           "city": "Bethesda",
//           "country": "United States",
//           "postalCode": "20814",
//           "state": "MD"
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.359425054188,
//             38.958058116661
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(571) 203-0082",
//           "phone": "5712030082",
//           "address": "11935 Democracy Dr",
//           "city": "Reston",
//           "country": "United States",
//           "crossStreet": "btw Explorer & Library",
//           "postalCode": "20190",
//           "state": "VA"
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.10853099823,
//             38.880100922392
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(703) 522-2016",
//           "phone": "7035222016",
//           "address": "4075 Wilson Blvd",
//           "city": "Arlington",
//           "country": "United States",
//           "crossStreet": "at N Randolph St.",
//           "postalCode": "22203",
//           "state": "VA"
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -75.28784,
//             40.008008
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(610) 642-9400",
//           "phone": "6106429400",
//           "address": "68 Coulter Ave",
//           "city": "Ardmore",
//           "country": "United States",
//           "postalCode": "19003",
//           "state": "PA"
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -75.20121216774,
//             39.954030175164
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(215) 386-1365",
//           "phone": "2153861365",
//           "address": "3925 Walnut St",
//           "city": "Philadelphia",
//           "country": "United States",
//           "postalCode": "19104",
//           "state": "PA"
//         }
//       },
//       {
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             -77.043959498405,
//             38.903883387232
//           ]
//         },
//         "properties": {
//           "phoneFormatted": "(202) 331-3355",
//           "phone": "2023313355",
//           "address": "1901 L St. NW",
//           "city": "Washington DC",
//           "country": "United States",
//           "crossStreet": "at 19th St",
//           "postalCode": "20036",
//           "state": "D.C."
//         }
//       }
//     ]
//   };

//   /**
// * Assign a unique id to each store. You'll use this `id`
// * later to associate each point on the map with a listing
// * in the sidebar.
// */
// stores.features.forEach(function(store, i){
//     store.properties.id = i;
//   });

//   map.on('load', function (e) {
//     /* Add the data to your map as a layer */
//     map.addLayer({
//       "id": "locations",
//       "type": "circle",
//       /* Add a GeoJSON source containing place coordinates and information. */
//       "source": {
//         "type": "geojson",
//         "data": stores
//       }
//     });
//   });

//   function buildLocationList(data) {
//     data.features.forEach(function(store, i){
//       /**
//        * Create a shortcut for `store.properties`,
//        * which will be used several times below.
//       **/
//       var prop = store.properties;

//       /* Add a new listing section to the sidebar. */
//       var listings = document.getElementById('listings');
//       var listing = listings.appendChild(document.createElement('div'));
//       /* Assign a unique `id` to the listing. */
//       listing.id = "listing-" + data.features[i].properties.id;
//       /* Assign the `item` class to each listing for styling. */
//       listing.className = 'item';

//       /* Add the link to the individual listing created above. */
//       var link = listing.appendChild(document.createElement('a'));
//       link.href = '#';
//       link.className = 'title';
//       link.id = "link-" + prop.id;
//       link.innerHTML = prop.address;

//       /* Add details to the individual listing. */
//       var details = listing.appendChild(document.createElement('div'));
//       details.innerHTML = prop.city;
//       if (prop.phone) {
//         details.innerHTML += ' · ' + prop.phoneFormatted;
//       }
//       if (prop.distance) {
//         var roundedDistance = Math.round(prop.distance * 100) / 100;
//         details.innerHTML +=
//           '<p><strong>' + roundedDistance + ' miles away</strong></p>';
//       }
//     });
//   }