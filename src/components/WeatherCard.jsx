import React, { useState } from 'react';

const WeatherCard = ({ weather, temp }) => {
  
  const [isCelsius, setisCelsius] = useState(true);
  

  const handleChange = () => {
    setisCelsius(!isCelsius);
  }

  return (
    <div>
      <section>
        <h1>Weather App</h1>
        <h2>
          {weather?.name}, {weather?.sys.country}
        </h2>
        <article>
          <figure>
            <img src="" alt="" />
          </figure>
          <div>
            <h3>{weather?.weather[0].description}</h3>
            <ul>
              <li><span> Wind speed: </span> <span>{weather?.wind.speed} meter/seg</span></li>
              <li><span> Clouds: </span> <span>{weather?.clouds.all}</span></li>
              <li><span> Pressure: </span> <span>{weather?.main.pressure} </span></li>
              <li><span> Humidity: </span> <span>{weather?.main.humidity}%</span></li>
            </ul>
          </div>
        </article>
        <div>
          <h3> {
            isCelsius ? 
              temp?.celsius+ ' °C'
            : 
              temp?.fahrenheit+ ' °F'
          }</h3>
          <button onClick={handleChange}> 
            Change to {isCelsius?'°F': '°C'} 
          </button>
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
