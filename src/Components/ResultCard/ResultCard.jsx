import React, { useState, useEffect } from "react";
import axios from "axios";
const ResultCard = (props) => {
  const { location, fetchAPIData, fetchDataHandler } = props;
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    weatherDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAPIData]);

  const weatherDataHandler = () => {
    if (fetchAPIData) {
      fetchDataHandler(false);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a745c9695747e9f3f6fc78102b03fe49&units=metric`
        )
        .then((res) => {
          setWeatherData(res.data);
        })
        .catch((err) => {
          console.log("Error -> ", err);
          setError(true);
        });
    }
  };
  return (
    <div>
      <p>
        Current Weather at : <b>{location.toUpperCase()}</b>
      </p>
      {error ? (
        <p>Please enter a valid location</p>
      ) : Object.keys(weatherData).length !== 0 ? (
        <h3>Current Temperature: {weatherData["main"]["temp"]}</h3>
      ) : null}
    </div>
  );
};

export default ResultCard;
