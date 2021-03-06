let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.6468, -73.2633], 16);
//the following code places a marker on the map
/*let bobstLibrary;
bobstLibrary = L.marker([40.729444, -73.997222]);
bobstLibrary.addTo(firstMap);
bobstLibrary.bindPopup("This is Bobst Library.");
*/
/*let bobstCoords;
bobstCoords = L.latLng(40.729444, -73.997222);
firstMap.panTo(bobstCoords);
//This is an example of the pan to method
let eiffelTower;
eiffelTower = L.latLng(48.858222, 2.2945);
firstMap.panTo(eiffelTower);
*/
//This is an example of a polyline / polygon shape
/*let washingtonSquarePark, washingtonSquareParkMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).addTo(firstMap);
tenThousandth = [[40.7307, -73.9976], [40.7307, -73.9974],
                 [40.7309, -73.9974], [40.7309, -73.9976]];
tenThousandthPolygon = L.polygon(tenThousandth, {
                                  color: "#268bd2",
                                  fillColor: "#fdf6e3"
                                }
                        ).addTo(firstMap);
thousandth = [[washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng + 0.001],
              [washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng + 0.001]];
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
                      ).addTo(firstMap);
*/

let captreePark, captreeMarker, captree, CaptreeMarker;
captreePark = L.latLng(40.6468, -73.2633);
captreeMarker = L.marker(captreePark).bindPopup("Captree state park").addTo(firstMap);
captree = L.latLng(40.6468, -73.2633);
captreeMarker = L.marker(captree).bindPopup("Captree my favorite fishing location").addTo(firstMap);
let circle;
circle = L.circle(captreePark, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#859900",
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(captree,          {radius: 100,
                                          color: "#859900",
                                          fillColor: "#859900",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
