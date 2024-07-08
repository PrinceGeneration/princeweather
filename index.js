const fetch = require('node-fetch');

const apiKey = 'your_api_key';
const city = 'Jakarta';

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
  .then(response => response.json())
  .then(data => {
    console.log(`Current temperature in ${city} is ${data.current.temp_c}°C`);
  })
  .catch(error => console.error('Error:', error));
