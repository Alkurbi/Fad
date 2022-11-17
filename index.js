function initMap() {
  // The location of Uluru
  const uluru = { lat: 17.493145601173904, lng: 47.110055910150166 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
window.initMap = initMap;
 