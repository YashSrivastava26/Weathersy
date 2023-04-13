import PastDataContext from './pastDataContext'

import React, { useState } from 'react'

const PastDataState = (props) => {
    const [pastData, setPastData] = useState(null);

    const updatePastData= (newData) =>{
        setPastData({weather:newData.weather, astro : newData.astro});
    }
    return (
        <PastDataContext.Provider value={{pastData, updatePastData}}>
            {props.children}
        </PastDataContext.Provider>
    )
}

export default PastDataState;

