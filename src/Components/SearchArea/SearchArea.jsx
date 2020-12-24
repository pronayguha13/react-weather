import React from "react";
import styles from "./SearchArea.module.css";
const SearchArea = () => {
  return (
    <div className={styles.locationInputForm}>
      <form action="submit">
        <input
          type="text"
          placeholder="Enter your pin-code or city"
          autoFocus
        />
      </form>
    </div>
  );
};

export default SearchArea;
