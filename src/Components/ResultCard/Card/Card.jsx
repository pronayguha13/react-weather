import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const { weatherData } = props;
  return (
    <div className={styles.Card}>
      <div className="card-body">
        <div className={styles.cardHeader}>
          <div className={styles.textHeader}>
            <h5 className="card-title">
              {weatherData["name"].toUpperCase() +
                ", " +
                weatherData["sys"]["country"]}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {new Date().toLocaleString()}
            </h6>
          </div>
        </div>
        <div className={styles.tempData}>
          <div className={styles.tempDetails}>
            <p>
              {weatherData["main"]["temp"]} <sup>o</sup>C
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData["weather"][0]["icon"]}.png`}
              alt="weather-condition"
            />
          </div>
          <h6 className="card-subtitle mb-2 text-muted">
            feels like: {weatherData["main"]["feels_like"]} <sup>o</sup>C
          </h6>
          <div className={styles.windHumidityDetails}>
            <p>
              <img src="/icons/wind.png" alt="wind" />
              {(weatherData.wind.speed * 1.852).toFixed(2)}km/h
            </p>
            <p>
              <img src="/icons/humidity.png" alt="humidity" />
              {weatherData.main.humidity}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
