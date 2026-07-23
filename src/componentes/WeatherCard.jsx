import React from 'react';
import SearchBar from './SearchBar';

function WeatherCard({ weatherData, onSearch, isNight, isLoading, error, searchBarRef }) {
  const formatCityName = (name) => {
    if (!name) return '';
    return name
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Lógica de condiciones visuales
  const isRaining = weatherData?.mainCondition === 'rain' || weatherData?.mainCondition === 'drizzle';
  const isCloudy = weatherData?.mainCondition === 'clouds';
  const isClear = weatherData?.mainCondition === 'clear';
  const isSnowing = weatherData?.mainCondition === 'snow';
  const isThunderstorm = weatherData?.mainCondition === 'thunderstorm';

  // Mostrar/ocultar elementos
  const showSun = !isNight && (isClear || isCloudy);
  const showMoon = isNight;
  const showClouds = isCloudy || isRaining || isSnowing || isThunderstorm;
  const showRain = isRaining || isThunderstorm;
  const showStars = isNight && isClear;

  // Determinar cantidad de nubes basada en nubosidad
  const cloudiness = weatherData?.cloudiness || 0;
  const heavilyOvercast = cloudiness > 70;
  const moderatelyCloudy = cloudiness > 40;

  return (
    <div className="card-outer-wrapper">

      {/* ILUSTRACIÓN 3D DINÁMICA (SOL / LUNA + NUBES + LLUVIA + ESTRELLAS) */}
      <div className="weather-illustration-container">

        {/* Sol o Luna */}
        {showSun && <div className={isThunderstorm || isRaining ? "sun-behind-element astro-dimmed" : "sun-behind-element"}></div>}
        {showMoon && <div className={isThunderstorm || isRaining ? "moon-behind-element moon-rain" : "moon-behind-element"}></div>}

        {/* Estrellas (noche despejada) */}
        {showStars && (
          <div className="stars-container">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="star star-6"></div>
            <div className="star star-7"></div>
            <div className="star star-8"></div>
          </div>
        )}

        {/* Nubes (solo si hay nubes) */}
        {showClouds && (
          <div className="cloud-front-element">
            <div className="cloud-circle cloud-center"></div>
            <div className="cloud-circle cloud-left"></div>
            <div className="cloud-circle cloud-right"></div>
            {moderatelyCloudy && (
              <>
                <div className="cloud-circle cloud-extra-left"></div>
                <div className="cloud-circle cloud-extra-right"></div>
              </>
            )}
            {heavilyOvercast && (
              <>
                <div className="cloud-circle cloud-top-left"></div>
                <div className="cloud-circle cloud-top-right"></div>
                <div className="cloud-circle cloud-bottom-center"></div>
              </>
            )}
          </div>
        )}

        {/* Lluvia (animada) */}
        {showRain && (
          <div className="rain-over-astro-group">
            <div className="rain-drop-line d1"></div>
            <div className="rain-drop-line d2"></div>
            <div className="rain-drop-line d3"></div>
            <div className="rain-drop-line d4"></div>
            <div className="rain-drop-line d5"></div>
          </div>
        )}

      </div>

      {/* TARJETA GLASS */}
      <div className="glass-editorial-card">
        <span className="brand-title">AURA WEATHER</span>

        <SearchBar ref={searchBarRef} onSearch={onSearch} isLoading={isLoading} />

        {error && <p className="error-message">{error}</p>}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="status-message">Buscando clima...</p>
          </div>
        )}

        {!isLoading && weatherData && (
          <div className="weather-content-fade-in">
            <div className="weather-main-info">
              <h2 className="city-name">
                {formatCityName(weatherData.city)}
              </h2>
              <div className="temp-condition-display">
                <span className="condition-text">{weatherData.condition}</span>
                <span className="current-temp">{weatherData.temp}°C</span>
              </div>
            </div>

            <div className="weather-metrics-row">
              <span>Humedad: <strong>{weatherData.humidity}%</strong></span>
              <span className="metric-divider">•</span>
              <span>Viento: <strong>{weatherData.wind} km/h</strong></span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default WeatherCard;