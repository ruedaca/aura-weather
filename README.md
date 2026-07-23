# Aura Weather

Una aplicación de clima construida con React, con un diseño glassmorphic e ilustraciones dinámicas del clima. Buscá cualquier ciudad y obtené información meteorológica en tiempo real con una interfaz minimalista y responsiva.

## Características

- **Datos de Clima en Tiempo Real** - Integración con la API de OpenWeatherMap
- **Ilustraciones 3D Dinámicas** - Sol, luna, nubes y efectos de lluvia animada
- **Modo Día/Noche** - Cambia automáticamente según tu zona horaria local
- **Diseño Glassmorphic** - Tarjeta moderna semi-transparente con blur de fondo
- **Animaciones Suaves** - Animaciones CSS para efectos de clima y transiciones de UI
- **Diseño Responsivo** - Diseño centrado que funciona en todos los tamaños de pantalla
- **Interfaz en Español** - UI completa en español con respuestas de API en español
- **Búsqueda Inteligente** - Capitaliza automáticamente nombres de ciudades y limpia entrada
- **Estados de Carga** - Spinner animado con retroalimentación visual

## Stack Tecnológico

- **Frontend**: React 19 + Vite 8
- **Estilos**: CSS puro con animaciones
- **API**: OpenWeatherMap 2.5 Weather API
- **Linting**: ESLint con React Hooks & Refresh

## Comenzar

### Requisitos Previos
- Node.js 16+ y npm

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Cómo Funciona

1. **Buscar** - Ingresa el nombre de cualquier ciudad en la barra de búsqueda
2. **Obtener** - La app llama a la API de OpenWeatherMap para obtener datos
3. **Mostrar** - Muestra temperatura, condición, humedad y velocidad del viento
4. **Visualizar** - Renderiza ilustraciones dinámicas basadas en las condiciones
5. **Adaptar** - El tema de la UI cambia según día/noche y condiciones de clima

## Ilustraciones del Clima 

- **Cielo Despejado** - Sol (día) o Luna (noche) 
- **Nuboso** - Capas de nubes simples o múltiples 
- **Lluvia** - Gotas de lluvia animadas 
- **Tormenta** - Lluvia con sol/luna oscurecidos 
- **Noche Despejada** - Luna con estrellas titilantes 

## Detalles del Diseño 

- **Glassmorphism**: Tarjeta semi-transparente con blur de 25px
- **Esquema de Colores**: Modo día claro, modo noche oscuro, modo día soleado cálido
- **Animaciones**: 
  - Efecto brillo del sol
  - Efecto brillo de luna
  - Cascada de gotas de lluvia
  - Efecto titilante de estrellas
  - Desvanecimiento de nubes
  - Spinner de carga
  - Transiciones de UI

## Estructura del Proyecto 

```
src/
├── App.jsx              # Componente principal con lógica de clima
├── App.css              # Todos los estilos y animaciones
├── main.jsx             # Punto de entrada de React
├── index.css            # Estilos globales
└── componentes/
    ├── SearchBar.jsx    # Input de búsqueda de ciudad
    └── WeatherCard.jsx  # Tarjeta de visualización del clima
```

## Integración con API

Usa la API OpenWeatherMap 2.5:
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parámetros: nombre de ciudad, unidades métricas, idioma español
- Campos de respuesta: temperatura, humedad, viento, condiciones del clima

## Compatibilidad de Navegadores

Funciona en navegadores modernos con:
- CSS Grid & Flexbox
- Animaciones CSS & Filtros
- Fetch API
- Detección de zona horaria local

## Mejoras Futuras

- Pronóstico de varios días
- Alertas de clima
- Ciudades favoritas guardadas
- Temas personalizados
- Soporte de geolocalización
- Alternancia de unidades de temperatura