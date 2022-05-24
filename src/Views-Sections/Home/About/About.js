import React from "react";

import styles from "../About/about.module.scss";

const About = () => {
  return (
    <div className={styles["about-section-container"]} id="about">
      <div className={styles["bg-img-container"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["about-heading"]}>
            About section will go here
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
