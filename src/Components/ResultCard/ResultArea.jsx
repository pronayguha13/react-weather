import React from "react";
import ResultCard from "./ResultCard";

const ResultArea = (props) => {
  let { location } = props;

  return (
    <div>
      <p>{location}</p>
      <ResultCard />
    </div>
  );
};

export default ResultArea;
