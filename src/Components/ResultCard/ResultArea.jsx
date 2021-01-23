import React from "react";
import ResultCard from "./ResultCard";

const ResultArea = (props) => {
  let {
    location,
    fetchAPIData,
    fetchDataHandler,
    isLoading,
    setIsLoading,
  } = props;

  return (
    <div>
      <ResultCard
        location={location}
        fetchAPIData={fetchAPIData}
        fetchDataHandler={fetchDataHandler}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default ResultArea;
