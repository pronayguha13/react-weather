import React from "react";
import ResultArea from "./Components/ResultCard/ResultArea";
import SearchArea from "./Components/SearchArea/SearchArea";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <h1>
          <img src="/icons/icon.png" alt="weather_icon" /> Weather App
        </h1>
      </div>
      <SearchArea />
      <ResultArea />
    </div>
  );
};

export default App;
