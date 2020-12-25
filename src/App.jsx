import React, { useState } from "react";
import ResultArea from "./Components/ResultCard/ResultArea";
import SearchArea from "./Components/SearchArea/SearchArea";
import styles from "./App.module.css";
const App = () => {
  const [location, setLocation] = useState("");

  const locationChangeHandler = (e) => {
    if (e.key === "Enter") {
      //call to fetch the API result
    } else {
      setLocation(e.target.value);
    }
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
      />
      <ResultArea />
    </div>
  );
};

export default App;
