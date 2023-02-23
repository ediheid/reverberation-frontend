import React from "react";
import { HashLink } from "react-router-hash-link";

import styles from "../LandingArea/landing-area.module.scss";

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

        {/* <h2 className={styles["sub-headings"]}>Festival for Music & Arts</h2> */}

        {/* <h2 className={styles["sub-headings"]}>
          Dresden · 16.09 - 18.09 · 2022
        </h2> */}

        <h2 className={styles["sub-headings"]}>Presents:</h2>

        <h2 className={styles["sub-headings"]}>A selection of Berlin shows!</h2>

        {/* <HashLink smooth to="/#tickets">
          <button className={styles["ticket-info-button"]}>Ticket info</button>
        </HashLink> */}

        <HashLink smooth to="/#upcoming">
          <button className={styles["ticket-info-button"]}>More info</button>
        </HashLink>

        <a
          href="https://reverberation.loveyourartist.store/de/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Link to Ticket Shop"
        >
          <button className={styles["main-button"]}>Tickets</button>
        </a>
      </div>
    </div>
  );
};

export default LandingArea;
