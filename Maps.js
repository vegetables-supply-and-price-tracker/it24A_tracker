

const marketData = [
{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},
{
"Name": "Manolo Fortich Tabuan",
"Title": "Saturday Market",
"description": "Saturday Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},
{
"Name": "San Miguel Market",
"Title": "Public Market",
"description": "San Miguel Public Market",
"img": "",
"lat": "8.388608181763985",
"lng": "124.83472900823863"
},

{"Name": "San Miguel Market",
"Title": "Saturday Market",
"description": "San Miguel Public Market",
"img": "",
"lat": "8.388608181763985",
"lng": "124.83472900823863"
},
{
"Name": "Alae Public Market",
"Title": "Public Market",
"description": "Public Market",
"img": "",
"lat": "8.423759410958136",
"lng": "124.81326166656369"
},
{
"Name": "Manolo Fortich",
"Title": "Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"},






































{
"Name": "Puring Vegetable Market",
"Title": "Small business stall",
"description": "Small business stall",
"img": "",
"lat": "8.366149607154622 ",
"lng": "124.86582259023582"
},

{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},
{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},
{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},
{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
},{
"Name": "Manolo Fortich",
"Title": "Manolo Fotic Public Market",
"description": "Manolo Fotic Public Market",
"img": "",
"lat": "8.365599481591083",
"lng": "124.86498505662725"
}
];

/// 1. Create map
var map = L.map('map').setView([8.37, 124.85], 12);

// 2. Add OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Add markers
marketData.forEach(market => {
    let lat = parseFloat(market.lat.trim());
    let lng = parseFloat(market.lng.trim());

    let marker = L.marker([lat, lng]).addTo(map);

    marker.on('click', function() {
        const imgHTML = market.img ? `<img src="${market.img.trim()}" width="150" onerror="this.style.display='none'">` : '';
        document.getElementById('sidebar-content').innerHTML = `
            <h3>${market.Name}</h3>
            <strong>${market.Title}</strong>
            <p>${market.description}</p>
            ${imgHTML}
        `;
    });
});
