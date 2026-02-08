
function getWeather(city) {
  return new Promise((resolve, reject) => {
    if (!city) return reject("❌ Please enter a city name");


    setTimeout(() => {
      const weatherData = {
        Tbilisi: "☀️ Sunny, 27°C",
        Batumi: "🌧️ Rainy, 22°C",
        Kutaisi: "⛅ Partly Cloudy, 25°C",
      };

      const weather = weatherData[city];
      if (weather) resolve(weather);
      else resolve("🌤️ Clear sky, 24°C (default)");
    }, 1500);
  });
}


const input = document.getElementById("cityInput");
const button = document.getElementById("getWeatherBtn");
const resultDiv = document.getElementById("result");


button.addEventListener("click", () => {
  const city = input.value.trim();

  getWeather(city)
    .then((weather) => {
      console.log(`Weather in ${city}: ${weather}`);
      resultDiv.textContent = `Weather in ${city}: ${weather}`;
    })
    .catch((error) => {
      console.error(error);
      resultDiv.textContent = `Error: ${error}`;
    })
    .finally(() => {
      console.log("✔️ Operation complete");
    });
});
