import React from "react";

import styles from "../Line-Up/line-up.module.scss";

const LineUp = () => {
  return (
    <div className={styles["line-up-container"]} id="line-up">
      <h2 className={styles["section-heading"]}>Line-up</h2>

      <div className={styles["bands-container"]}>
        {/* // ! Will make an array of bands and info and then map below - this is just for testing purposes */}
        <div className={styles["band-box"]}></div>
        <div className={styles["band-box"]}></div>
        <div className={styles["band-box"]}></div>
        <div className={styles["band-box"]}></div>
        <div className={styles["band-box"]}></div>
      </div>
    </div>
  );
};

export default LineUp;
