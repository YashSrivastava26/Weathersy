import LeftCard from './Components/LeftCard';
import RightCard from './Components/RightCard';
import './styles/App.css';
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import currentDataContext from './Context/TodaysData/currentDataContext'
import Loading from './Components/Loading';


function App() {
  const todayContext = useContext(currentDataContext);
  // const astroContext = useContext(astroContext);

  const { weatherData, astroData, updateTodaysData } = todayContext;
  // const {astro, updateAstro} = todayContext;

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    callAPI('currentPos');
  }, [])
  
  const callAPI = (query) => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(async (position) => {
      if (position) {
        let weather_api, astronomy_api;
        if(query === 'currentPos'){
          weather_api = `http://api.weatherapi.com/v1/forecast.json?key=31eef01ffbe54ec3b66152337230704&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=yes&alerts=yes`;
          astronomy_api = `http://api.weatherapi.com/v1/astronomy.json?key=31eef01ffbe54ec3b66152337230704&q=${position.coords.latitude},${position.coords.longitude}&dt=${new Date()}`;
        }
        else{
          weather_api = `http://api.weatherapi.com/v1/current.json?key=31eef01ffbe54ec3b66152337230704&q=${query}&days=3&aqi=yes&alerts=yes`;
          astronomy_api = `http://api.weatherapi.com/v1/astronomy.json?key=31eef01ffbe54ec3b66152337230704&q=${query}&dt=${new Date()}`;

        }
        
        let newData = {weather : null, astro : null}
        
        await axios({
          url: weather_api,
          method: "POST",
          withCredentials: false
        }).then((res) => {
          newData.weather = res.data;
        }).catch((err) => {
          console.log(err);
        });
        
        await axios({
          url: astronomy_api,
          method: "POST",
          withCredentials: false
        }).then((res) => {
          newData.astro = res.data.astronomy;
        }).catch((err) => {
          console.log(err);
        });

        updateTodaysData(newData)
      }
    })
  }

  useEffect(() => {
    if(weatherData && astroData){
      setLoading(false);
    }
    console.log(weatherData)
    console.log(astroData)
  }, [todayContext]);
  


  return (<>
    <div className={`baseCont ${!loading ? 'cloudy-bg' : `clear-night-bg`}`}>
      <div className="mainCard">
        <div className="leftCont">
          <LeftCard loading={loading} setLoading={setLoading} callAPI = {callAPI}/>
        </div>
        <div className="rightCont">

          <RightCard loading={loading} setLoading={setLoading}/>
        </div>
      </div>
    </div>
    {loading && <Loading />}
    </>
  );
}

export default App;
