import CurrentDataContext from './currentDataContext'

import React, { useState } from 'react'

const CurrentDataState = (props) => {
    const [todaysData, setTodaysData] = useState({weather:null, astro: null});

    const updateTodaysData= (newData) =>{
        setTodaysData({weather:newData.weather, astro : newData.astro});
    }
    return (
        <CurrentDataContext.Provider value={{weatherData: todaysData.weather, astroData: todaysData.astro, updateTodaysData}}>
            {props.children}
        </CurrentDataContext.Provider>
    )
}

export default CurrentDataState;

