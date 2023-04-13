import React from 'react'
import loading from '../images/loading.gif'
import '../styles/loading.css'

const Loading = () => {
  return (
    <div className='loading-bg'>
      <div className="loading-gif">
      <img src={loading} alt="" />
      </div>
    </div>
  )
}

export default Loading
