import React, { useEffect } from "react";

export default function Weather() {

  const apiKey = 

 useEffect(() => {
  fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat=54.57623&lon=-1.23483&key=API-KEY-HERE")
 })

  return (
    <div className="week-weather-container">
      <h4>This weeks weather</h4>
      <div className="mon-weather">Mon</div>
      <div className="tues-weather">Tues</div>
      <div className="wed-weather">Wed</div>
      <div className="thurs-weather">Thurs</div>
      <div className="fri-weather">Fri</div>
      <div className="sat-weather">Sat</div>
      <div className="sun-weather">Sun</div>
    </div>
  );
}
