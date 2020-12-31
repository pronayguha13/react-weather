import React from "react";
import ResultCard from "./ResultCard";

const ResultArea = (props) => {
  let { location, fetchAPIData, fetchDataHandler } = props;

  return (
    <div>
      <p>{location}</p>
      <ResultCard
        location={location}
        fetchAPIData={fetchAPIData}
        fetchDataHandler={fetchDataHandler}
      />
    </div>
  );
};

export default ResultArea;
