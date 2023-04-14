import React ,{ useContext, useState } from 'react'
import '../styles/forecastArea.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PastCardOrForecast from './PastCardOrForecast';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import currentDataContext from '../Context/TodaysData/currentDataContext'
import pastDataContext from '../Context/PastData/pastDataContext'

const ForcastArea = () => {
  const [choice, setCoice] = useState('past');
  const pastContext = useContext(pastDataContext);
  const currentContext = useContext(currentDataContext);

  const { pastData } = pastContext;
  const { weatherData } = currentContext;

  const handleOnchange = (event, newChoice) => {
    setCoice(newChoice);
  };

  return (
    <div className='foreCast-Card'>
      <div className="choice">
      <div className='locationDisplay'>
        {weatherData.location.name}, {weatherData.location.country}
      <LocationOnSharpIcon/>
      </div>
      <ToggleButtonGroup
        value={choice}
        exclusive
        onChange={handleOnchange}
        aria-label="text alignment"
      >
        <ToggleButton id='past' value="past" aria-label="left aligned" size='small' disabled={choice === 'past'} onClick={handleOnchange} style={choice === 'past' ? {backgroundColor: '#605f5f6e', fontWeight: '600'} : {backgroundColor: ''}}>
          Past Week
        </ToggleButton>
        <ToggleButton id='future' value="future" aria-label="centered" size='small' disabled={choice === 'future'} onClick={handleOnchange} style={choice === 'future' ? {backgroundColor: '#605f5f6e', fontWeight: '600'} : {backgroundColor: ''}}>
          Forecast
        </ToggleButton>
      </ToggleButtonGroup>
      </div>

      {choice == 'past' && 
      <div className="historyContainer row d-flex my-3">
        <div className="historycard col col-6"><PastCardOrForecast isPast={true} data={pastData[0]}/></div>
        <div className="historycard col col-6"><PastCardOrForecast isPast={true} data={pastData[1]}/></div>
        <div className="historycard col col-6"><PastCardOrForecast isPast={true} data={pastData[2]}/></div>
        <div className="historycard col col-6"><PastCardOrForecast isPast={true} data={pastData[3]}/></div>
        <div className="historycard col col-6"><PastCardOrForecast isPast={true} data={pastData[4]}/></div>
        </div>
        }
      {choice == 'future' && 
      <div className="historyContainer row d-flex justify-content-around my-3">
        {console.log(weatherData)}
        <div className="forecastcard col col-3"><PastCardOrForecast isPast={false} data={weatherData.forecast.forecastday[0]}/></div>
        <div className="forecastcard col col-3"><PastCardOrForecast isPast={false} data={weatherData.forecast.forecastday[1]}/></div>
        <div className="forecastcard col col-3"><PastCardOrForecast isPast={false} data={weatherData.forecast.forecastday[2]}/></div>
      </div>
        }
    </div>
  )
}

export default ForcastArea
