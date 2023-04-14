import React, { useContext, useEffect, useState } from 'react'
import '../styles/leftCard.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {getImg} from './getImg'
import pressure from '../images/pressure.png'
import rain from '../images/Rain.png'
import currentDataContext from '../Context/TodaysData/currentDataContext'


const LeftCard = (props) => {
    const context  = useContext(currentDataContext);
    const {weatherData} = context;
    const { loading, callAPI , setErrorMsg } = props;
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [currTime, setCurrTime] = useState(new Date().toTimeString().slice(0, 8));

    useEffect(() => {
      setInterval(()=>{
        setCurrTime(new Date().toTimeString().slice(0, 8));
      }, 1000)
    
    }, [])
    
    
    
    const getTime = () => {
        let date = new Date(weatherData.current.last_updated);
        return day[date.getDay()];
    }

    const handleSearch = () => {
        if(search.value.length === 0){
            console.log('object');
            setErrorMsg("Search Can't be empty");
        }
        else{
            callAPI(search.value);
            search.value = '';
        }
    }

    return (
        <>
            {!loading && <div className="leftContainer-main">
                <div id='picArea'>
                    <div id="locationSearch">
                        <div className='searchCont'>
                        <SearchSharpIcon className='searchIcon' onClick={handleSearch}/>
                        <input id='search' type="text" name="locationSearch" placeholder='search for locations...' />
                        </div>
                    </div>
                    <div className="imgTextArea">
                        <div className="img">
                            <img src={getImg(weatherData.current.condition.code, weatherData.current.condition.is_day)} />
                        </div>
                        <div className="textArea">
                            <div className='weatherCondition'>{weatherData.current.temp_c} &deg;C</div>
                            <div className="time">{getTime()} {currTime}</div>
                        </div>

                    </div>
                </div>
                <div className="littleSummary">
                    <div className='cont'>
                        <img className='summaryImg' src={weatherData.current.condition.icon} alt="" />
                        <div className="message">{weatherData.current.condition.text}</div>
                    </div>
                    <div className='cont'>
                        <img className='summaryImg' src={rain} alt="" />
                        <div className="message">Precipitation : {weatherData.current.precip_mm} mm / {weatherData.current.precip_in} in</div>
                    </div>
                    <div className='cont'>
                        <img className='summaryImg' src={pressure} alt="" />
                        <div className="message">Pressure: {weatherData.current.pressure_mb} mb / {weatherData.current.pressure_in} in</div>
                    </div>
                </div>
            </div>}

        </>
    )
}

export default LeftCard
