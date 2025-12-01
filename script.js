// Initialize map
var map = L.map('map').setView([51.505, -0.09], 13);

// Tile Layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);


  //Manolo Fortich area
L.marker(8.365648536387054, 124.8652267706409).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();