import React, { useState } from "react";
import ResultArea from "./Components/ResultCard/ResultArea";
import SearchArea from "./Components/SearchArea/SearchArea";
import styles from "./App.module.css";
const App = () => {
  const [location, setLocation] = useState("Kolkata");
  const [fetchAPIData, setFetchAPIData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = (newState) => {
    setFetchAPIData(newState);
  };

  const enterKeyHandler = (e) => {
    if (e.key === "Enter" && location.length) {
      setIsLoading(true);
      let waitTimer = setTimeout(() => {
        console.log("fetching data");
      }, 2000);
      clearTimeout(waitTimer);
      fetchDataHandler(true);
    }
  };

  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const buttonHandler = () => {
    let waitTimer = setTimeout(() => {
      console.log("fetching data");
    }, 2000);
    clearTimeout(waitTimer);
    fetchDataHandler(true);
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
        buttonHandler={buttonHandler}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {location && location.length ? (
        <ResultArea
          location={location}
          fetchAPIData={fetchAPIData}
          fetchDataHandler={fetchDataHandler}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
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
