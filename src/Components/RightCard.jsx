import React, { useContext } from 'react'
import '../styles/rightCard.css'
import sunrise from '../images/sunrise.png'
import sunset from '../images/sunset.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ForcastArea from './ForcastArea'
import currentDataContext from '../Context/TodaysData/currentDataContext'
import { getAQIImg } from './getImg'


const RightCard = (props) => {
  const todaysContext = useContext(currentDataContext);

  const { weatherData, astroData } = todaysContext;



  return (
    <>
      {!(props.loading) && <div className='rightcontainer'>
        <div className="data">
            <ForcastArea />
        </div>
        <div className="todaysSummary">
          <p className='highlight-title'>Today's Highlights</p>
          <div className='d-flex row justify-content-around'>
            <div className='col col-md-3 cardCont'>
              <p className='cardTitle'>UV Index</p>
              <div className="contents"><div className="circularProgressContainer" style={{ transform: 'rotate(-0.25turn)' }}>
                <CircularProgressbar
                  maxValue={15}
                  value={weatherData.current.uv}
                  circleRatio={0.5}
                  styles={{
                    path: {
                      stroke: 'orange'
                    }
                  }}
                />
                <p id='CircularProgressbarvalue'>{weatherData.current.uv}</p>
              </div></div>
            </div>
            <div className='col col-md-3 cardCont'>
              <p className='cardTitle'>Wind Speed</p>
              <div className="contents"><div className='contentTitle'><div className="fitContent"><h2 className='pre-text ml-20p'>{weatherData.current.wind_kph}</h2> <h5 className='pre-text'>km/hr</h5></div></div></div>
            </div>
            <div className='col col-md-3 cardCont'>
              <p className='cardTitle'>Sunrise & Sunset</p>
              <div className="contents"><div className='sunTimeContents'><img className='sunImg' src={sunrise} alt="" />
                <p className='sunTime'>{astroData.astro.sunrise}</p></div>
                <div className='sunTimeContents'><img className='sunImg' src={sunset} alt="" />
                  <p className='sunTime'>{astroData.astro.sunset}</p></div></div>
            </div>

          </div>
          <div className='d-flex row justify-content-around' style={{ marginTop: '2%' }}>
            <div className='col col-md-3 cardCont'>
              <p className='cardTitle'>Humidity</p>
              <div className="contents"><div className='contentTitle'><div className="fitContent"><h2 className='pre-text ml-20p'>{weatherData.current.humidity}</h2> <h5 className='pre-text'>%</h5></div></div>
                <div className='verticalProgress'>
                  <span className="dot" style={{ left: `${weatherData.current.humidity * 0.76}%` }}></span>
                </div></div>
            </div>
            <div className='col col-md-3 cardCont'>
              <p className='cardTitle'>Visibility</p>
              <div className="contents"><div className='contentTitle'><div className="fitContent"><h2 className='pre-text ml-20p'>{weatherData.current.vis_km}</h2> <h5 className='pre-text'>km</h5></div></div></div>
            </div>
            <div className='col col-md-3 cardCont'>
              <p className='cardTitle'>Air Quality</p>
              <div className="contents"><div className='aqiContainer'><img className='aqiImg' src={getAQIImg(weatherData.current.air_quality["us-epa-index"])} alt="" />
                <h4 className='aqiValue'>{weatherData.current.air_quality["us-epa-index"]}</h4></div>
                <div className='verticalProgress'>
                  <span className="dot" style={{ left: `${weatherData.current.air_quality["us-epa-index"] * 100 / 6 * 0.76}%` }}></span>
                </div></div>
            </div>

          </div>
        </div>
      </div>}</>
  )
}

export default RightCard
