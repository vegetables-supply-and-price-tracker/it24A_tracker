// --- NEW: Separate Price Data Structure ---
// Custom marker icon
const iconType1 = L.icon({
    iconUrl: 'SmallShop.jpg',iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: 'custom-marker1'
});

const iconType2 = L.icon({
    iconUrl: 'Medium.jpg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: 'custom-marker2'
});

const iconType3 = L.icon({
    iconUrl: 'large.jpg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: 'custom-marker3'
});


const marketPricesList = {
    "Manolo Fortich": [
        { item: "Carrot (kg)", price: 95.00 },
        { item: "Onion (kg)", price: "Out of stock" },
        { item: "Cabbage (kg)", price: 80.00 },
        { item: "Tomato (kg)", price: 75.00 },
        { item: "Potato (kg)", price: 105.00 },
        { item: "Eggplant (kg)", price: "Out of stock" },
        { item: "Kangkong (bunch)", price: 60.00 },
        { item: "String Beans (kg)", price: 70.00 },
        { item: "Bell Pepper (kg)", price: "Out of stock" },
        { item: "Calabash (kg)", price: 65.00 }
    ],
    "San Miguel Market": [
        { item: "Carrot (kg)", price: 98.50 },
        { item: "Onion (kg)", price: "Out of stock" },
        { item: "Cabbage (kg)", price: 82.00 },
        { item: "Tomato (kg)", price: 78.00 },
        { item: "Potato (kg)", price: 110.00 },
        { item: "Eggplant (kg)", price: 90.00 },
        { item: "Kangkong (bunch)", price: 55.00 },
        { item: "String Beans (kg)", price: "Out of stock" },
        { item: "Bell Pepper (kg)", price: 85.00 },
        { item: "Calabash (kg)", price: 68.00 }
    ],
    "Alae Public Market": [
        { item: "Carrot (kg)", price: 89.00 },
        { item: "Onion (kg)", price: 105.00 },
        { item: "Cabbage (kg)", price: "Out of stock" },
        { item: "Tomato (kg)", price: 77.50 },
        { item: "Potato (kg)", price: 108.00 },
        { item: "Eggplant (kg)", price: 92.00 },
        { item: "Kangkong (bunch)", price: "Out of stock" },
        { item: "String Beans (kg)", price: 72.00 },
        { item: "Bell Pepper (kg)", price: 88.00 },
        { item: "Calabash (kg)", price: 67.00 }
    ],
    "Puring Vegetable Market": [
        { item: "Carrot (kg)", price: "Out of stock" },
        { item: "Onion (kg)", price: 107.00 },
        { item: "Cabbage (kg)", price: 79.00 },
        { item: "Tomato (kg)", price: "Out of stock" },
        { item: "Potato (kg)", price: 112.00 },
        { item: "Eggplant (kg)", price: 89.00 },
        { item: "Kangkong (bunch)", price: 63.00 },
        { item: "String Beans (kg)", price: 71.00 },
        { item: "Bell Pepper (kg)", price: "Out of stock" },
        { item: "Calabash (kg)", price: 66.00 }
    ],
    "Jarales Store": [
        { item: "Carrot (kg)", price: "Out of stock" },
        { item: "Onion (kg)", price: 108.00 },
        { item: "Cabbage (kg)", price: 81.00 },
        { item: "Tomato (kg)", price: 79.00 },
        { item: "Potato (kg)", price: "Out of stock" },
        { item: "Eggplant (kg)", price: 91.00 },
        { item: "Kangkong (bunch)", price: 62.00 },
        { item: "String Beans (kg)", price: 73.00 },
        { item: "Bell Pepper (kg)", price: 86.00 },
        { item: "Calabash (kg)", price: "Out of stock" }
    ],
    "Mulberry vegetable store": [
        { item: "Carrot (kg)", price: 94.00 },
        { item: "Onion (kg)", price: 106.00 },
        { item: "Cabbage (kg)", price: "Out of stock" },
        { item: "Tomato (kg)", price: 76.00 },
        { item: "Potato (kg)", price: 109.00 },
        { item: "Eggplant (kg)", price: 88.00 },
        { item: "Kangkong (bunch)", price: 60.00 },
        { item: "String Beans (kg)", price: 70.00 },
        { item: "Bell Pepper (kg)", price: 84.00 },
        { item: "Calabash (kg)", price: 65.00 }
    ],
    "Upper agusan cayon Public Market": [
        { item: "Carrot (kg)", price: 93.00 },
        { item: "Onion (kg)", price: 104.00 },
        { item: "Cabbage (kg)", price: 78.00 },
        { item: "Tomato (kg)", price: 74.00 },
        { item: "Potato (kg)", price: 105.00 },
        { item: "Eggplant (kg)", price: "Out of stock" },
        { item: "Kangkong (bunch)", price: 61.00 },
        { item: "String Beans (kg)", price: 69.00 },
        { item: "Bell Pepper (kg)", price: 83.00 },
        { item: "Calabash (kg)", price: 64.00 }
    ],
    "Camp Juan Public Market": [
        { item: "Carrot (kg)", price: 95.00 },
        { item: "Onion (kg)", price: 107.00 },
        { item: "Cabbage (kg)", price: "Out of stock" },
        { item: "Tomato (kg)", price: 77.00 },
        { item: "Potato (kg)", price: 110.00 },
        { item: "Eggplant (kg)", price: 90.00 },
        { item: "Kangkong (bunch)", price: 62.00 },
        { item: "String Beans (kg)", price: 71.00 },
        { item: "Bell Pepper (kg)", price: 85.00 },
        { item: "Calabash (kg)", price: "Out of stock" }
    ],
    "Camp Philips Public Market": [
        { item: "Carrot (kg)", price: 98.00 },
        { item: "Onion (kg)", price: 109.00 },
        { item: "Cabbage (kg)", price: 82.00 },
        { item: "Tomato (kg)", price: 78.00 },
        { item: "Potato (kg)", price: 112.00 },
        { item: "Eggplant (kg)", price: 92.00 },
        { item: "Kangkong (bunch)", price: "Out of stock" },
        { item: "String Beans (kg)", price: 74.00 },
        { item: "Bell Pepper (kg)", price: 87.00 },
        { item: "Calabash (kg)", price: 66.00 }
    ],
    "Libona Public Market": [
        { item: "Carrot (kg)", price: 96.00 },
        { item: "Onion (kg)", price: 108.00 },
        { item: "Cabbage (kg)", price: 80.00 },
        { item: "Tomato (kg)", price: 76.00 },
        { item: "Potato (kg)", price: "Out of stock" },
        { item: "Eggplant (kg)", price: 91.00 },
        { item: "Kangkong (bunch)", price: 63.00 },
        { item: "String Beans (kg)", price: 70.00 },
        { item: "Bell Pepper (kg)", price: 85.00 },
        { item: "Calabash (kg)", price: 65.00 }
    ],
    "Kilog Public Market": [
        { item: "Carrot (kg)", price: 95.00 },
        { item: "Onion (kg)", price: 107.00 },
        { item: "Cabbage (kg)", price: 79.00 },
        { item: "Tomato (kg)", price: 75.00 },
        { item: "Potato (kg)", price: 108.00 },
        { item: "Eggplant (kg)", price: 90.00 },
        { item: "Kangkong (bunch)", price: "Out of stock" },
        { item: "String Beans (kg)", price: 71.00 },
        { item: "Bell Pepper (kg)", price: 84.00 },
        { item: "Calabash (kg)", price: 66.00 }
    ],
    "Santo NINO Public Market": [
        { item: "Carrot (kg)", price: 97.00 },
        { item: "Onion (kg)", price: "Out of stock" },
        { item: "Cabbage (kg)", price: 82.00 },
        { item: "Tomato (kg)", price: 78.00 },
        { item: "Potato (kg)", price: 110.00 },
        { item: "Eggplant (kg)", price: 92.00 },
        { item: "Kangkong (bunch)", price: 63.00 },
        { item: "String Beans (kg)", price: 72.00 },
        { item: "Bell Pepper (kg)", price: 87.00 },
        { item: "Calabash (kg)", price: "Out of stock" }
    ]
};

  document.addEventListener('DOMContentLoaded', () => {
    // Market data (example)
    const marketData = [
      {"Name":"Manolo Fortich","Title":"Manolo Fortich Public Market","description":"Main public market","img":"", "lat":"8.365599481591083","lng":"124.86498505662725", "iconType": "type3"},
      {"Name":"San Miguel Market","Title":"San Miguel Public Market","description":"Another market","img":"", "lat":"8.388608181763985","lng":"124.83472900823863", "iconType": "type3"},
      {"Name":"Alae Public Market","Title":"Alae Public Market","description":"Public Market","img":"", "lat":"8.423759410958136","lng":"124.81326166656369", "iconType": "type3"},
      {"Name":"Puring Vegetable Market","Title":"Puring Vegetable Market","description":"Small business stall","img":"", "lat":"8.366149607154622","lng":"124.86582259023582", "iconType": "type1"}


      ,{"Name":"Jarales Store","Title":"Small Vegetable Store","description":"Located in Dicklum with good enough volume","img":"", "lat":"8.37791","lng":"124.84822", "iconType": "type1"},
      {"Name":"Mulberry vegetable store","Title":"Small Vegetable Store","description":"Located in Mulberry, Good volume with almost no waste","img":"", "lat":"8.363344","lng":"124.86258", "iconType": "type1"},
      {"Name":"Upper agusan cayon Public Market","Title":"Medium Small Vegetable Store","description":"Public Market","img":"", "lat":"8.35118","lng":"124.82431", "iconType": "type2"},
      {"Name":"Camp Juan Public Market","Title":"Public market","description":"Public Market Lcoated in Camphilips Area ","img":"", "lat":"8.33979","lng":"124.82619", "iconType": "type3"},


      {"Name":"Camp Philips Public Market","Title":"Public market","description":"Public Market Lcoated in Del Monte area ","img":"", "lat":"8.3052","lng":"124.81293", "iconType": "type3"},
      {"Name":"Libona Public Market","Title":"Public market","description":"Public Market Lcoated in Agusan ","img":"", "lat":"8.33350","lng":"124.74229", "iconType": "type3"},
      {"Name":"Kilog Public Market","Title":"Public market","description":" ","img":"", "lat":"8.33353","lng":"124.70350", "iconType": "type3"},
      {"Name":" Santo NINO Public Market","Title":"Public market","description":"","img":"", "lat":"8.43230","lng":"124.86517", "iconType": "type3"},
      
    ];// Icon mapping for scalable selection
const iconMapping = {
    type1: iconType1,
    type2: iconType2,
    type3: iconType3
};


    // Initialize map centered on Manolo Fortich
    const map = L.map('map').setView([8.365599481591083,124.86498505662725], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);


    // Add markers and click handler to update sidebar
    marketData.forEach((market) => {
        const lat = parseFloat(market.lat);
        const lng = parseFloat(market.lng);
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

        // scalable icon selection
        const chosenIcon = iconMapping[market.iconType] || iconType1;

        const marker = L.marker([lat, lng], { icon: chosenIcon }).addTo(map);
        marker.bindPopup(`<strong>${market.Title}</strong><br>${market.Name}`);

        marker.on('click', () => {
            map.setView([lat, lng], 14, { animate: true });

            // Render price list
           // Render price list
        const prices = marketPricesList[market.Name] || [];
        let priceListHTML = '<ul class="price-list">';
        if (prices.length > 0) {
            prices.forEach(item => {
                const priceText = typeof item.price === 'number' ? `₱${item.price.toFixed(2)}` : item.price;
                priceListHTML += `
                    <li class="price-item-sidebar">
                        <span>${item.item}</span>
                        <span class="price-value-sidebar">${priceText}</span>
                    </li>
                `;
            });
        } else {
            priceListHTML += '<li>No current price data available.</li>';
        }
        priceListHTML += '</ul>';


            const imgHTML = market.img ? `<img src="${market.img}" alt="${market.Title}">` : '';
            document.getElementById('sidebar-content').innerHTML = `
                <h3>${market.Name}</h3>
                <strong>${market.Title}</strong>
                <p>${market.description}</p>
                <h4>Current Prices:</h4>
                ${priceListHTML}
                ${imgHTML}
            `;
        });
    });

    // WEATHER panel logic
    const openBtn = document.getElementById("openWeatherBtn");
    const closeBtn = document.getElementById("closeWeatherBtn");
    const weatherPanel = document.getElementById("weatherPanel");

    // Ensure getWeather is defined in this scope
    const apiKey = "63e8b75fb1661588955c8428c4f4cd55";

    async function getWeather() {
      // <-- you used prompt flows earlier; keep that or replace with input inside the panel
      const city = prompt("Enter a city name to fetch weather (e.g. Manolo Fortich)");
      if (!city) {
        document.getElementById('weatherResult').innerHTML = '<p style="color:#666">No city entered.</p>';
        return;
      }
      const weatherResult = document.getElementById("weatherResult");
      weatherResult.innerHTML = '<p>Loading...</p>';

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found or API error');
        const data = await response.json();
        weatherResult.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind: ${data.wind.speed} m/s</p>
        `;
      } catch (err) {
        weatherResult.innerHTML = `<p style="color:red">Error: ${err.message}</p>`;
        console.error(err);
      }
    }

    openBtn.addEventListener('click', () => {
      weatherPanel.classList.add('show');
      weatherPanel.setAttribute('aria-hidden','false');
      // call getWeather() if you want to immediately ask for city
      getWeather();
    });
    closeBtn.addEventListener('click', () => {
      weatherPanel.classList.remove('show');
      weatherPanel.setAttribute('aria-hidden','true');
    });
  });
 

  // Global variable to hold JSON data for easy access
let marketPrices = {}; 

// --- RENDERING FUNCTION ---
function renderPrices(timePeriod) {
    const prices = window.marketPrices[timePeriod];

    if (!prices || prices.length === 0) {
        // Handle empty data case for all panels
        document.getElementById('manolo-fortich-panel').querySelector('.panel-content').innerHTML = '<p>No data found.</p>';
        document.getElementById('damilag-panel').querySelector('.panel-content').innerHTML = '<p>No data found.</p>';
        document.getElementById('alae-panel').querySelector('.panel-content').innerHTML = '<p>No data found.</p>';
        return;
    }

    // --- 1. Manolo Fortich Panel ---
    const manoloContent = document.getElementById('manolo-fortich-panel').querySelector('.panel-content');
    manoloContent.innerHTML = ''; // Clear content
    prices.forEach(item => {
        manoloContent.innerHTML += `
            <div class="price-item">
                <span>${item.item.replace(/\s*\(.*\)/, '')}</span>
                <span class="price-value">₱${item.Manolo_Fortich.toFixed(2)}</span>
            </div>
        `;
    });

    // --- 2. Damilag Panel ---
    const damilagContent = document.getElementById('damilag-panel').querySelector('.panel-content');
    damilagContent.innerHTML = ''; // Clear content
    prices.forEach(item => {
        damilagContent.innerHTML += `
            <div class="price-item">
                <span>${item.item.replace(/\s*\(.*\)/, '')}</span>
                <span class="price-value">₱${item.Damilag.toFixed(2)}</span>
            </div>
        `;
    });
    
    // --- 3. Alae Panel ---
    const alaeContent = document.getElementById('alae-panel').querySelector('.panel-content');
    alaeContent.innerHTML = ''; // Clear content
    prices.forEach(item => {
        alaeContent.innerHTML += `
            <div class="price-item">
                <span>${item.item.replace(/\s*\(.*\)/, '')}</span>
                <span class="price-value">₱${item.Alae.toFixed(2)}</span>
            </div>
        `;
    });
}

// --- CONTROLLER FUNCTIONS ---

function setupFilterListeners() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Update active state across all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const timePeriod = this.getAttribute('data-time');
            // This is the core: call the new function to update all three panels
            renderPrices(timePeriod); 
        });
    });
}

// Function to fetch data and initially render prices
async function fetchAndRenderMarketData() {
    try {
        // Fetch your JSON data
        const response = await fetch('marketData.json'); 
        const data = await response.json();
        
        window.marketPrices = data.market_data;

        // Initial rendering (1_day)
        renderPrices('1_day');
        
        // Setup event listeners after data is loaded
        setupFilterListeners();

    } catch (error) {
        console.error('Error fetching market data:', error);
        // Display a message if data cannot be loaded
        document.getElementById('manolo-fortich-panel').querySelector('.panel-content').innerHTML = '<p style="color:red;">Error loading data.</p>';
        document.getElementById('damilag-panel').querySelector('.panel-content').innerHTML = '<p style="color:red;">Error loading data.</p>';
        document.getElementById('alae-panel').querySelector('.panel-content').innerHTML = '<p style="color:red;">Error loading data.</p>';
    }
}

// Run the function after the main map setup
document.addEventListener('DOMContentLoaded', fetchAndRenderMarketData);