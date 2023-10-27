import React, { useEffect, useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?lat=54.57623&lon=-1.23483&key=API_KEY"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("data retrieved", data);
        setWeatherData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (weatherData === null) {
    return <div className="loading-data">Loading weather data...</div>;
  }

  if (!Array.isArray(weatherData)) {
    return <div className="loading-data">Weather data not available..</div>;
  }

  const days_of_the_week = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

  const now = new Date();
  const currentDay = now.getDay();

  // Need to see the exact wording responses from API
  const iconMapping = {
    "sunny" : "sunny-icon",
    "rain" : "raining-icon",
    "overcast" : "overcast-icon",
    "snow": "snow-icon",
    "windy": "wind-icon",
    "storm": "storm-icon"

  }

  return (
    <div className="week-weather-container">
      <h4>This week's weather</h4>
      {weatherData.map((dayData, index) => {
        const dayIndex = (currentDay + index) % 7;
        return (
          <div key={index} className={`day-weather-day-${index}`}>
            {days_of_the_week[dayIndex]}: {dayData.weather.description}
            <i className={iconMapping[dayData.weather.description] || "default-icon"}></i>
          </div>
        );
      })}
    </div>
  );
}
