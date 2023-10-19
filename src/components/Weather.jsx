import React from 'react'

import './weather.css'

export default function Weather() {
  return (
    <div className='weather-container'>
        <div className="week-container">
            <div className="monday">Monday</div>
            <div className="tuesday">Tuesday</div>
            <div className="wednesday">Wednesday</div>
            <div className="thursday">Thursday</div>
            <div className="friday">Friday</div>
            <div className="saturday">Saturday</div>
            <div className="sunday">Sunday</div>
        </div>
    </div>
  )
}
