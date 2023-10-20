import React from 'react'

import './weather.css'

export default function Weather() {
  return (
    <div className='weather-container'>
        <div className="week-container">
          <h4>Weather forcast</h4>
            <div className="monday">Mon</div>
            <div className="tuesday">Tues</div>
            <div className="wednesday">Wed</div>
            <div className="thursday">Thurs</div>
            <div className="friday">Fri</div>
            <div className="saturday">Sat</div>
            <div className="sunday">Sun</div>
        </div>
    </div>
  )
}
