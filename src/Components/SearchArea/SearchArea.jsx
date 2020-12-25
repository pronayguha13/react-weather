import React from "react";
import styles from "./SearchArea.module.css";
const SearchArea = (props) => {
  const { location, locationChangeHandler } = props;
  return (
    <div className={styles.locationInputForm}>
      <form action="submit">
        <input
          type="text"
          placeholder="Enter your pin-code or city"
          autoFocus
          value={location}
          onChange={(e) => locationChangeHandler(e)}
          onKeyDown={(e) => locationChangeHandler(e)}
          // add Enter key press handler
        />
      </form>
    </div>
  );
};

export default SearchArea;
