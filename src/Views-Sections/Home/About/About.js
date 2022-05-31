import React from "react";

import styles from "../About/about.module.scss";

const About = () => {
  return (
    <div className={styles["about-section-container"]} id="about">
      <div className={styles["bg-img-container"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["about-heading"]}>About</h2>
          <p className={styles["about-text"]}>
            Founded in 2014, Reverberation Fest is an annual 3 day music and arts festival held in Dresden, Germany.
          </p>
          <p className={styles["about-text"]}>
            Showcasing and connecting local and international music acts with theater, performance, dance and other forms
            of art.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
