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
          data-text="REVERBERATION Festival"
        >
          REVERBERATION
          <br />
          Festival
        </h1>
        <h1 className={styles["glow"]}>
          REVERBERATION
          <br />
          Festival
        </h1>

        <h2 className={`${styles["glitch"]} ${styles["sub-headings"]}`}>
          Music & art festival in Dresden
        </h2>

        <h2 className={`${styles["glitch"]} ${styles["sub-headings"]}`}>
          September 16-18 - 2022
        </h2>

        <button className={styles["button-container"]}>
          <a
            className={styles["button-a-link"]}
            href="https://reverberation.loveyourartist.store/de/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Ticket Shop"
          >
            Ticket Shop
          </a>
        </button>
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
