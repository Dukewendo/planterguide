import React, { useEffect, useState } from "react";

import "./weather.css"

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?lat=54.57623&lon=-1.23483&key=1bc5d906302743a99e8d79bfe5fc42da"
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

  //add server status codes for other errors
  if (!Array.isArray(weatherData)) {
    return <div className="loading-data">Weather data not available..</div>;
  }

  const days_of_the_week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const now = new Date();
  const currentDay = now.getDay();

  
  const iconMapping = {
    "Thunderstorm with light rain": "storm-icon",
    "Thunderstorm with rain": "storm-icon",
    "Thunderstorm with heavy rain": "storm-icon",
    "Thunderstorm with light drizzle": "storm-icon",
    "Thunderstorm with drizzle": "storm-icon",
    "Thunderstorm with heavy drizzle": "storm-icon",
    "Thunderstorm with Hail": "storm-icon",
    "Unknown Precipitation": "rain-icon",
    "Light Drizzle": "rain-icon",
    Drizzle: "rain-icon",
    "Heavy Drizzle": "rain-icon",
    "Light rain": "rain-icon",
    "Moderate rain": "rain-icon",
    "Heavy rain": "rain-icon",
    "Freezing rain": "rain-icon",
    "Light shower rain": "rain-icon",
    "Shower rain": "rain-icon",
    "Heavy shower rain": "rain-icon",
    "Light snow": "snow-icon",
    Snow: "snow-icon",
    "Heavy Snow": "snow-icon",
    "Mix snow/rain": "snow-icon",
    Sleet: "snow-icon",
    "Heavy sleet": "snow-icon",
    "Snow shower": "snow-icon",
    "Heavy snow shower": "snow-icon",
    Flurries: "snow-icon",
    Mist: "mist-icon",
    Smoke: "mist-icon",
    Haze: "mist-icon",
    Fog: "mist-icon",
    "Freezing Fog": "mist-icon",
    "Clear sky": "sun-icon",
    "Few clouds": "overcast-icon",
    "Scattered clouds": "overcast-icon",
    "Broken clouds": "overcast-icon",
    "Overcast clouds": "overcast-icon",
  };

  return (
    <div className="week-weather-container">
      <h4>This week's weather</h4>
      {weatherData.map((dayData, index) => {
        const dayIndex = (currentDay + index) % 7;
        return (
          <div key={index} className={`day-weather-day-${index}`}>
            {days_of_the_week[dayIndex]}: {dayData.weather.description}
            <img
              className={
                iconMapping[dayData.weather.description] || "default-icon"
              }
            ></img>
          </div>
        );
      })}
    </div>
  );
}

