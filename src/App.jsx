import React from "react";
import ResultArea from "./Components/ResultCard/ResultArea";
import SearchArea from "./Components/SearchArea/SearchArea";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.App}>
      <h1>Weather App</h1>
      <SearchArea />
      <ResultArea />
    </div>
  );
};

export default App;
