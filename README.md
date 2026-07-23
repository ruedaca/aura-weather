# Aura Weather ☀️🌙

A beautiful React weather application built with Vite, featuring a glassmorphic UI design and dynamic weather illustrations. Search for any city and get real-time weather information with an elegant, responsive interface.

## Features ✨

- **Real-time Weather Data** - Integrated with OpenWeatherMap API
- **Dynamic 3D Illustrations** - Sun, moon, clouds, and animated rain effects
- **Day/Night Mode** - Automatically switches based on your local timezone
- **Glassmorphic Design** - Modern, semi-transparent card with backdrop blur
- **Smooth Animations** - CSS-based animations for weather effects and UI transitions
- **Responsive Layout** - Centered design that works on all screen sizes
- **Spanish Language** - Full UI in Spanish with API responses in Spanish
- **Smart Search** - Auto-capitalizes city names, clears input after search
- **Loading States** - Animated spinner with visual feedback

## Tech Stack 🛠️

- **Frontend**: React 19 + Vite 8
- **Styling**: Pure CSS with animations
- **API**: OpenWeatherMap 2.5 Weather API
- **Linting**: ESLint with React Hooks & Refresh

## Getting Started 🚀

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## How It Works 📊

1. **Search** - Enter any city name in the search bar
2. **Fetch** - App calls OpenWeatherMap API for weather data
3. **Display** - Shows temperature, condition, humidity, and wind speed
4. **Visualize** - Renders dynamic 3D weather illustrations based on conditions
5. **Adapt** - UI theme changes based on day/night and weather conditions

## Weather Illustrations 🎨

- **Clear Sky** - Sun (day) or Moon (night) ☀️🌙
- **Cloudy** - Single or multiple cloud layers ☁️
- **Rain** - Animated rain drops ☔
- **Thunderstorm** - Rain with dimmed sun/moon ⛈️
- **Night Clear** - Moon with twinkling stars ⭐

## Design Highlights 🎭

- **Glassmorphism**: Semi-transparent card with 25px blur
- **Color Scheme**: Light day mode, dark night mode, warm sunny mode
- **Animations**: 
  - Sun glimmer effect
  - Moon glow effect
  - Rain drop cascade
  - Star twinkle effect
  - Cloud fade-in
  - Loading spinner
  - UI transitions

## Project Structure 📁

```
src/
├── App.jsx              # Main component with weather logic
├── App.css              # All styling and animations
├── main.jsx             # React entry point
├── index.css            # Global styles
└── componentes/
    ├── SearchBar.jsx    # City search input
    └── WeatherCard.jsx  # Weather display card
```

## API Integration 🔗

Uses OpenWeatherMap 2.5 API:
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: city name, metric units, Spanish language
- Response fields: temperature, humidity, wind, weather conditions

## Browser Support 🌐

Works on modern browsers with:
- CSS Grid & Flexbox
- CSS Animations & Filters
- Fetch API
- Local timezone detection

## Future Enhancements 🔮

- Multi-day forecast
- Weather alerts
- Saved favorite cities
- Custom themes
- Geolocation support
- Temperature unit toggle

## License 📜

This project is open source and available for personal and educational use.

---

**Built with ❤️ as a React practice project**
