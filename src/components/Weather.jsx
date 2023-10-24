import React, { useEffect, useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

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
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!weatherData) {
    return <div className="loading-data">Loading weather data...</div>;
  }

  const days_of_the_week = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

  const now = new Date();
  const currentDay = now.getDay();

  return (
    <div className="week-weather-container">
      <h4>This weeks weather</h4>
      {weatherData.map((dayData, index) => (
        <div key={index} className={`day-weather-day-${index}`}>
          {days_of_the_week[currentDay + (index % 7)]}:{" "}
          {dayData.weather.description}
        </div>
      ))}
    </div>
  );
}
