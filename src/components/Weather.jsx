import React, { useEffect } from "react";

export default function Weather() {
  useEffect(() => {
    fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?lat=54.57623&lon=-1.23483&key=API_KEY_HERE"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("data retrieved", data);
        console.log(data.data[0].weather.description)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const days_of_the_week = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thurs",
      "Fri",
      "Sat",
    ];

    const now = new Date();
    const day_today = now.getDay();
    // console.log(
    //   `Today is ${days_of_the_week[day_today]} and the forecast is ${data.data[0].weather.description}:`
    //);
  }, []);

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
