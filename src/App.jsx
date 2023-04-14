import LeftCard from './Components/LeftCard';
import RightCard from './Components/RightCard';
import './styles/App.css';
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import currentDataContext from './Context/TodaysData/currentDataContext'
import pastDataContext from './Context/PastData/pastDataContext'
import Loading from './Components/Loading';
import {getBg} from './Components/getImg';
import Alert from '@mui/material/Alert';


function App() {
  const todayContext = useContext(currentDataContext);
  const { weatherData, astroData, updateTodaysData } = todayContext;

  const pastContext = useContext(pastDataContext);
  const { pastData, updatePastData } = pastContext;

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    callAPI('currentPos');
  }, [])
  
  const callAPI = (query) => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(async (position) => {
      if (position) {
        let weather_api, astronomy_api, pastData_api;
        if(query === 'currentPos'){
          weather_api = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=yes&alerts=yes`;
          astronomy_api = `http://api.weatherapi.com/v1/astronomy.json?key=${api_key}&q=${position.coords.latitude},${position.coords.longitude}&dt=${new Date()}`;
          pastData_api = `http://api.weatherapi.com/v1/history.json?key=${api_key}&q=${position.coords.latitude},${position.coords.longitude}&dt=${new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}&unixend_dt=${Math.ceil(new Date().getTime() / 1000)}`;
        }
        else{
          weather_api = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${query}&days=3&aqi=yes&alerts=yes`;
          astronomy_api = `http://api.weatherapi.com/v1/astronomy.json?key=${api_key}&q=${query}&dt=${new Date()}`;
          pastData_api = `http://api.weatherapi.com/v1/history.json?key=${api_key}&q=${query}&dt=${new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}&unixend_dt=${Math.ceil(new Date().getTime() / 1000)}`;

        }
        
        let newData = {weather : null, astro : null}
        
        await axios({
          url: weather_api,
          method: "POST",
          withCredentials: false,
          timeout: 5000
        }).then((res) => {
          newData.weather = res.data;
        }).catch((err) => {
          console.log(err);
          setErrorMsg('Error while fetching data');
        });
        
        await axios({
          url: astronomy_api,
          method: "POST",
          withCredentials: false,
          timeout: 5000
        }).then((res) => {
          newData.astro = res.data.astronomy;
        }).catch((err) => {
          console.log(err);
          setErrorMsg('Error while fetching data');
        });


        await axios({
          url: pastData_api,
          method: "POST",
          withCredentials: false,
          timeout: 5000
        }).then((res) => {
          updatePastData(res.data)
        }).catch((err) => {
          console.log(err);
          setErrorMsg('Error while fetching data');
        });

        updateTodaysData(newData)
      }
    })
  }

  useEffect(() => {
    if(weatherData && astroData && pastData){
      setLoading(false);
    }
  }, [todayContext]);
  

useEffect(() => {
  if(errorMsg){
    setTimeout(()=>{setErrorMsg(null)}, 2000);
  }
}, [errorMsg])

  return (<>
    {errorMsg && <Alert severity="error" className='errMsg'>{errorMsg}</Alert>}
    <div className={`baseCont ${!loading ? getBg(weatherData.current.condition.code, weatherData.current.is_day) : `clear_night_bg`}`}>
      <div className="mainCard">
        <div className="leftCont">
          <LeftCard loading={loading} setLoading={setLoading} callAPI = {callAPI} setErrorMsg = {setErrorMsg}/>
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
