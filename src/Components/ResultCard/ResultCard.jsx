import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";
const ResultCard = (props) => {
  const {
    location,
    fetchAPIData,
    fetchDataHandler,
    isLoading,
    setIsLoading,
  } = props;
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    weatherDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAPIData]);

  const weatherDataHandler = () => {
    if (fetchAPIData) {
      fetchDataHandler(false);
      let targetLocation = location.length ? location : "Kolkata";
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${targetLocation}&appid=${process.env.REACT_APP_OWM_API_KEY}&units=metric`
        )
        .then((res) => {
          setWeatherData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Error -> ", err);
          setError(true);
        });
    }
  };

  return (
    <div>
      {!isLoading ? (
        error ? (
          <p
            style={{ fontSize: "30px", color: "rgb(255,0,0)", fontWeight: 600 }}
          >
            Please enter a valid location
          </p>
        ) : Object.keys(weatherData).length !== 0 ? (
          <Card weatherData={weatherData} />
        ) : null
      ) : (
        <p style={{ fontSize: "30px", color: "rgb(255,0,0)", fontWeight: 600 }}>
          Loading ....
        </p>
      )}
    </div>
  );
};

export default ResultCard;
