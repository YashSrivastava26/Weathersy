import React from 'react'
import '../styles/PastCardOrForecast.css'

const PastCardorForecast = (props) => {
  const { isPast , data } = props;
  return (
    <>
    {isPast && <div className='pastContainer'>
      <img className='smallWeatherImg' src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt="" />
      <p className='pastMsg'>11 &deg;C</p>
    </div>
  }
    {!isPast && <div className='futureContainer'>
    <img className='smallWeatherImgFuture' src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt="" />
    <div className='futureMsgcont'>
      <div className="futureMsg">
        <div className="conditionForecast">
          sunny
        </div>
        <div className="tempForecast">
          <div>Min : {data.day.mintemp_c} &deg;C</div>
          <div>Min : {data.day.maxtemp_c} &deg;C</div>
        </div>
      </div>
    </div>
  </div>}
  </>
  )
}

export default PastCardorForecast
