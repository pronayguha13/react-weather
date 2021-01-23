import React from "react";
import styles from "./SearchArea.module.css";
const SearchArea = (props) => {
  const {
    location,
    locationChangeHandler,
    enterKeyHandler,
    buttonHandler,
    isLoading,
    setIsLoading,
  } = props;

  const buttonPressHandler = () => {
    setIsLoading(true);
    buttonHandler();
  };
  return (
    <div className={styles.locationInputForm}>
      <input
        type="text"
        placeholder="Kolkata"
        value={location}
        onChange={(e) => locationChangeHandler(e)}
        onKeyDown={(e) => enterKeyHandler(e)}
      />
      {!isLoading ? (
        <img
          className={styles.searchButton}
          src="/icons/enter.png"
          alt="search"
          onClick={() => buttonPressHandler()}
        />
      ) : (
        <img
          className={styles.searchButton}
          src="/icons/clock.png"
          alt="search"
        />
      )}
    </div>
  );
};

export default SearchArea;
