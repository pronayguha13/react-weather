import React, { useState } from "react";
import ResultArea from "./Components/ResultCard/ResultArea";
import SearchArea from "./Components/SearchArea/SearchArea";
import styles from "./App.module.css";
const App = () => {
  const [location, setLocation] = useState("");

  const enterKeyHandler = (e) => {
    if (e.key === "Enter" && location.length) {
      console.log("Enter key pressed");
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
        <ResultArea location={location} />
      ) : (
        <p>Enter Your City or Pin Code</p>
      )}
    </div>
  );
};

export default App;
