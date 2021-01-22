import React from "react";
import styles from "./SearchArea.module.css";
const SearchArea = (props) => {
  const { location, locationChangeHandler, enterKeyHandler } = props;
  return (
    <div className={styles.locationInputForm}>
      <input
        type="text"
        placeholder="Kolkata"
        value={location}
        onChange={(e) => locationChangeHandler(e)}
        onKeyDown={(e) => enterKeyHandler(e)}
      />
    </div>
  );
};

export default SearchArea;
