Link al curso de React: [REACT DESDE CERO por Sergie Code](https://youtu.be/ladwC6Lrs-M)

# Tutorial para hacer Buscador de películas en React

Este es un tutorial paso a paso para crear un buscador de películas utilizando React. Aprenderás cómo utilizar la biblioteca de React para crear una aplicación web interactiva que consuma datos de la API de OpenWeatherMap y muestre información sobre el clima de una ciudad específica.

## Requisitos

-   Conocimientos básicos de React
-   Node.js instalado en tu computadora
-   Una cuenta en OpenWeatherMap para obtener una API key

## Pasos

### 1. Configuración del proyecto

-   Crea un nuevo repositorio en GitHub.
-   Clona el repositorio en tu computadora.
-   Abre una terminal y navega hasta la carpeta del proyecto.
-   Ejecuta el siguiente comando para crear un nuevo proyecto de React utilizando Vite:

```
    npx create-vite@latest buscador-peliculas-react --template react
```

-   Ingresa a la carpeta del proyecto:

```
    cd buscador-peliculas-react
```

### 2. Obtención de la API key

-   Ve al sitio web de OpenWeatherMap y crea una cuenta si aún no tienes una.
-   Obtén una API key accediendo a tu perfil o a la sección de configuración de la cuenta.
-   Copia tu API key, la necesitarás más adelante.

### 3. Implementación del componente BuscadorPeliculas

-   Crea un nuevo archivo llamado `BuscadorPeliculas.jsx` en la carpeta `src` del proyecto.
-   Copia y pega el siguiente código en el archivo `BuscadorPeliculas.jsx`:


```
import { useState } from "react";
    export const BuscadorPeliculas = () => {
      const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
      const API_KEY = 'your_api_key';
      const difKelvin = 273.15;
    
      const [ciudad, setCiudad] = useState('');
      const [dataClima, setDataClima] = useState(null);
    
      const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (ciudad.length > 0) fetchClima();
      };
    
      const fetchClima = async () => {
        try {
          const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
          const data = await response.json();
          setDataClima(data);
        } catch (error) {
          console.error('Ocurrió el siguiente problema: ', error);
        }
      };

      return (
        <div className="container">
          <h1>Aplicación del Clima</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={ciudad}
              onChange={handleCambioCiudad}
            />
            <button type="submit">Buscar</button>
          </form>
          {dataClima && (
            <div>
              <h2>{dataClima.name}</h2>
              <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}ºC</p>
              <p>Condición meteorológica: {dataClima.weather[0].description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
                alt="Icono del clima"
              />
            </div>
          )}
        </div>
      );
    };

```


### 4. Uso del componente BuscadorPeliculas

-   Abre el archivo `src/App.jsx`.
-   Reemplaza el contenido existente con el siguiente código:

```
import React from "react";
import { BuscadorPeliculas } from "./BuscadorPeliculas";

    function App() {
      return (
        <div className="App">
          <BuscadorPeliculas />
        </div>
      );
    }
```

### 5. Configuración de la API key

-   Abre el archivo `src/BuscadorPeliculas.jsx`.
-   Reemplaza `'your_api_key'` en la línea `const API_KEY = 'your_api_key';` con tu API key obtenida de OpenWeatherMap.

## Recursos adicionales

-   [Documentación de React](https://reactjs.org/docs/getting-started.html)
-   [Documentación de Vite](https://vitejs.dev/guide/)
-   [Documentación de la API de OpenWeatherMap](https://openweathermap.org/api)
-   [Repositorio de ejemplo completo en GitHub](https://github.com/tu-usuario/buscador-peliculas-react)
