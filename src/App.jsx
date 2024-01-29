import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {
  //const ApiKey = 'bb76c53d21aef6faf72b80d7d127166e';

  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  const success = (position) => {
    console.log(position);
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    setCoords(obj);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const ApiKey = 'bb76c53d21aef6faf72b80d7d127166e';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`;
      axios.get(url)
        .then(res => {
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(2),
            fahrenheit: ((res.data.main.temp - 273.15) * (9/5) + 32).toFixed(2),
          }
          setTemp(obj);
          setWeather(res.data);    
        })
        .catch(err => console.log(err));
    }
  }, [coords]);

  return (
    <div className='app'>
      <WeatherCard 
        weather = {weather}
        temp =  {temp}
      />
    </div>
  );
}

export default App;
