import React from "react";

import styles from "../LandingArea/landing-area.module.scss";

import mainImage from "../Static/poster-bg.png";

const LandingArea = () => {
  return (
    <div className={styles["landing-area-container"]} id="landing">
      <div className={styles["landing-area-extra-content"]}>
        <div className={styles["text-effect"]}>
          <h1
            className={`${styles["neon"]} ${styles["main-heading"]}`}
            data-text="REVERBERATION Festival"
            contenteditable
          >
            REVERBERATION
            <br />
            Festival
          </h1>

          <div className={styles["gradient"]}></div>
          <div className={styles["spotlight"]}></div>
        </div>

        <h2 className={styles["sub-headings"]}>
          Music & arts festival in Dresden
        </h2>

        <h2 className={styles["sub-headings"]}>September 16-18 · 2022</h2>

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

      {/* <div className={styles["main-image-container"]}>
        <img
          className={styles["main-image"]}
          src={mainImage}
          alt="Banner.  Artwork by Artourette"
        ></img>
      </div> */}
    </div>
  );
};

export default LandingArea;
