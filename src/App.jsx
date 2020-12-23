import React from "react";
import ResultArea from "./Components/ResultCard/ResultArea";
import SearchArea from "./Components/SearchArea/SearchArea";

const App = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <SearchArea />
      <ResultArea />
    </div>
  );
};

export default App;
