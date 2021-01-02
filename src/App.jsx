import React, { useState } from "react";
import ResultArea from "./Components/ResultCard/ResultArea";
import SearchArea from "./Components/SearchArea/SearchArea";
import styles from "./App.module.css";
const App = () => {
  const [location, setLocation] = useState("Kolkata");
  const [fetchAPIData, setFetchAPIData] = useState(true);

  const fetchDataHandler = (newState) => {
    setFetchAPIData(newState);
  };

  const enterKeyHandler = (e) => {
    if (e.key === "Enter" && location.length) {
      fetchDataHandler(true);
    }
  };

  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <h1>
          <img src="/icons/icon.png" alt="weather_icon" /> Weather App
        </h1>
      </div>
      <SearchArea
        location={location}
        locationChangeHandler={locationChangeHandler}
        enterKeyHandler={enterKeyHandler}
      />
      {location && location.length ? (
        <ResultArea
          location={location}
          fetchAPIData={fetchAPIData}
          fetchDataHandler={fetchDataHandler}
        />
      ) : (
        <p style={{ fontSize: "30px", fontWeight: 400 }}>
          Enter Your City or Pin Code
        </p>
      )}
    </div>
  );
};

export default App;
