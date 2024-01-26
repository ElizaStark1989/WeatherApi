import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  //const ApiKey = 'bb76c53d21aef6faf72b80d7d127166e';

  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  

  const success = position=> {
    //console.log(position);
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }
    setCoords(obj);
  }

  useEffect(() => {
    if (coords) {
      const ApiKey = 'bb76c53d21aef6faf72b80d7d127166e';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`;
      axios.get(url)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err));
    }
  }, [coords]);
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  console.log(coords);
  console.log(weather);
  
  return (
    <div>
      <h1>Weather app</h1>
    </div>
  )
}

export default App;
