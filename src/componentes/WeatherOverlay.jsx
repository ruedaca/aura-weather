import React, { useState } from 'react';
import WeatherOverlay from './WeatherOverlay';
import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(false);

  // Determinar si es de noche según el icono de OpenWeather ('01n', '02n', etc.)
  const esNoche = clima?.weather?.[0]?.icon?.endsWith('n') || false;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!ciudad.trim()) return;

    setCargando(true);
    try {
      // Reemplazá TU_API_KEY por tu clave de OpenWeather
      const API_KEY = 'TU_API_KEY';
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${API_KEY}`
      );
      const data = await res.json();

      if (res.ok) {
        setClima(data);
      } else {
        alert('Ciudad no encontrada');
      }
    } catch (error) {
      console.error('Error al buscar el clima:', error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className={`app-viewport ${esNoche ? 'bg-night-clear' : 'bg-day-clear'}`}>
      <div className="card-outer-wrapper">
        
        {/* Gráfico 3D (Sol/Luna, Nubes, Lluvia) */}
        <WeatherOverlay
          condicionPrincipal={clima?.weather?.[0]?.main}
          condicionDescripcion={clima?.weather?.[0]?.description}
          esNoche={esNoche}
        />

        {/* Tarjeta Glass */}
        <div className="glass-editorial-card">
          <span className="brand-title">AURA WEATHER</span>

          {/* Buscador */}
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar ciudad..."
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
            <button type="submit" className="search-button" disabled={cargando}>
              {cargando ? '...' : 'Buscar'}
            </button>
          </form>

          {/* Información del clima */}
          {clima && (
            <div className="weather-content-fade-in">
              <h2 className="city-name">{clima.name}</h2>

              <div className="temp-condition-display">
                <span className="condition-text">
                  {clima.weather[0].description}
                </span>
                <span className="current-temp">
                  {Math.round(clima.main.temp)}°C
                </span>
              </div>

              <div className="weather-metrics-row">
                <span>Humedad: {clima.main.humidity}%</span>
                <span className="metric-divider">•</span>
                <span>Viento: {Math.round(clima.wind.speed)} km/h</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;