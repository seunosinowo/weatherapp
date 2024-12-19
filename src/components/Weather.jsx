import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
// import cloudy from '../assets/cloudy.png'
// import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
// import rain from '../assets/rain.png'
// import snow from '../assets/snow.png'
import wind from '../assets/wind.png'



const Weather = () => {
  const search = async(city) => {
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

    }catch(error){

    }
  }

  useEffect(() => {
    search("London");
  }, [])

  return (
    <div className='weather'>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <img src={search_icon} alt="search" />
      </div>

      <img src={clear} alt='Sun' className='weather_icon'/>
      <p className='temperature'>16&deg;c</p>
      <p className='location'>London</p>

      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="humidity" />
            <div>
              <p>91%</p>
              <span>Humility</span>
            </div>
        </div>

        <div className="col">
          <img src={wind} alt="humidity" />
            <div>
              <p>3.6 Km/h</p>
              <span>Wind Speed</span>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Weather
