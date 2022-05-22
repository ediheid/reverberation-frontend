import React from "react";

import styles from "../LandingArea/landing-area.module.scss";

import mainImage from "../Static/wip2.png";

const LandingArea = () => {
  return (
    <div className={styles["landing-area-container"]}>
      {/* // Todo: What content do we want here? */}
      <div className={styles["landing-area-extra-content"]}>
        <h1
          className={`${styles["glitch"]} ${styles["main-heading"]}`}
          data-text="REVERBERATION"
        >
          REVERBERATION
        </h1>
        <h1 className={styles["glow"]}>REVERBERATION</h1>

        <h2
          className={`${styles["glitch"]} ${styles["sub-headings"]}`}
          data-text="Music & art festival in Dresden"
        >
          Music & art festival in Dresden
        </h2>

        <h2
          className={`${styles["glitch"]} ${styles["sub-headings"]}`}
          data-text="September 16-18, 2022"
        >
          September 16-18, 2022
        </h2>
      </div>

      <div className={styles["main-image-container"]}>
        <img
          className={styles["main-image"]}
          src={mainImage}
          alt="Banner.  Artwork by Artourette"
        ></img>
      </div>
    </div>
  );
};

export default LandingArea;
