//Create map
const map = L.map("mapid").setView([-19.7786427, -44.1061843], 17);

//Create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng} ) {

  // Create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidht: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}" class="choose-orphanages"><img src="/images/arrow-white.svg"></a>`
  );

  //Creat and add markler

  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}
const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})
