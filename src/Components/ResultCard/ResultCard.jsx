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
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OWM_API_KEY}&units=metric`
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
      {error ? (
        <p style={{ fontSize: "30px", color: "rgb(255,0,0)", fontWeight: 600 }}>
          Please enter a valid location
        </p>
      ) : Object.keys(weatherData).length !== 0 ? (
        <div>
          <p>
            Current Weather at :{" "}
            <b>
              {weatherData["name"].toUpperCase() +
                ", " +
                weatherData["sys"]["country"]}
            </b>
          </p>
          <h3>Current Temperature: {weatherData["main"]["temp"]}</h3>
        </div>
      ) : null}
    </div>
  );
};

export default ResultCard;
