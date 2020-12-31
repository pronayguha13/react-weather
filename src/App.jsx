import React, { useState } from "react";
import ResultArea from "./Components/ResultCard/ResultArea";
import SearchArea from "./Components/SearchArea/SearchArea";
import styles from "./App.module.css";
const App = () => {
  const [location, setLocation] = useState("");
  const [fetchAPIData, setFetchAPIData] = useState(false);
  console.log("🚀 ~ file: App.jsx ~ line 8 ~ App ~ fetchAPIData", fetchAPIData);

  const fetchDataHandler = (newState) => {
    setFetchAPIData(newState);
  };

  const enterKeyHandler = (e) => {
    if (e.key === "Enter" && location.length) {
      //on enter key press call the fetchAPI  method in the resultCard component
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
        <p>Enter Your City or Pin Code</p>
      )}
    </div>
  );
};

export default App;
