import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('India');

  useEffect(() => {
    const API_KEY = 'FWKNV58KCYP4JS9GF83T4LAC4';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=${API_KEY}`;

    axios.get(url)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" value={location} onChange={handleLocationChange} />
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.days[0].temp}</p> 
          <h2>{weatherData.resolvedAddress}</h2>
          
          <p>Weather: {weatherData.days[0].conditions}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
