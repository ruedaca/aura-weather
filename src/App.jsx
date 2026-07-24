import { useState, useRef } from 'react';
import WeatherCard from './componentes/WeatherCard';
import './App.css';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isNight, setIsNight] = useState(false);
  const searchBarRef = useRef(null);

  const handleSearch = async (ciudad) => {
    if (!ciudad.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      console.log('API_KEY:', API_KEY);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&units=metric&lang=es&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Ciudad no encontrada o API Key en proceso de activación');
      }

      const data = await response.json();
      const realTemp = Math.round(data.main.temp);
      const weatherMain = data.weather[0].main.toLowerCase();

      const currentTime = data.dt;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;
      const isNighttime = currentTime < sunrise || currentTime > sunset;
      setIsNight(isNighttime);

      const formattedCity = ciudad.trim().charAt(0).toUpperCase() + ciudad.trim().slice(1).toLowerCase();

      const description = data.weather[0].description;
      const capitalizedCondition = description.charAt(0).toUpperCase() + description.slice(1);

      setWeatherData({
        city: formattedCity,
        temp: realTemp,
        condition: capitalizedCondition,
        mainCondition: weatherMain,
        humidity: data.main.humidity,
        wind: Math.round(data.wind.speed),
        cloudiness: data.clouds.all
      });

      if (searchBarRef.current) {
        searchBarRef.current.clearInput();
      }

    } catch (err) {
      console.error(err);
      setError('No pudimos encontrar esa ciudad. Verificá el nombre.');
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const isRaining = weatherData?.mainCondition === 'rain' || weatherData?.mainCondition === 'drizzle' || weatherData?.mainCondition === 'thunderstorm';

  const getBackgroundClass = () => {
    if (isNight) return 'bg-night-clear';
    if (weatherData?.mainCondition === 'clear') return 'bg-day-sunny-cream';
    return 'bg-day-clear';
  };

  return (
    <div className={`app-viewport ${getBackgroundClass()} ${isNight && isRaining ? 'rain-night' : ''}`}>
      <div className="card-outer-wrapper">
        <WeatherCard
          weatherData={weatherData}
          onSearch={handleSearch}
          isNight={isNight}
          isLoading={isLoading}
          error={error}
          searchBarRef={searchBarRef}
        />
      </div>
    </div>
  );
}

export default App;