import React from 'react'
import '../styles/PastCardOrForecast.css'

const PastCardorForecast = (props) => {
  const { isPast, data } = props;

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
      {isPast && <div className='pastContainer'>
        <p className='pastDay'>{day[new Date(data.date).getDay()]}</p>
        <img className='smallWeatherImg' src={`http:${data.day.condition.icon}`} alt="" />
        <p className='pastMsg'>{data.day.condition.text}</p>
        <p className='pastMsg'>{data.day.avgtemp_c} &deg;C</p>
      </div>
      }
      {!isPast && <div className='futureContainer'>
        <div className='futureHeading'>
          {day[new Date(data.date).getDay()]} {new Date(data.date).getDate()}
        </div>
        <div className='imgAreaFuture'>
          <img className='smallWeatherImgFuture' src={`https:${data.day.condition.icon}`} alt="" />
          <div className='futureMsgcont'>
            <div className="futureMsg">
              <div className="conditionForecast">
            {data.day.condition.text}
          </div>
              <div className="tempForecast">
                <div>Min : {data.day.mintemp_c} &deg;C</div>
                <div>Max : {data.day.maxtemp_c} &deg;C</div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default PastCardorForecast
