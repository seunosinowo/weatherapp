import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
// import cloudy from '../assets/cloudy.png'
// import drizzle from '../assets/drizzle.png'
// import humidity from '../assets/humidity.png'
// import rain from '../assets/rain.png'
// import snow from '../assets/snow.png'
// import snow from '../assets/snow.png'



const Weather = () => {
  return (
    <div className='weather'>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <img src={search_icon} alt="search" />
      </div>

      <img src={clear} alt='Sun' className='weather_icon'/>
    </div>
  )
}

export default Weather
