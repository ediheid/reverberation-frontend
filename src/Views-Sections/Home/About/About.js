import React from "react";

import styles from "../About/about.module.scss";

const About = () => {
  return (
    <div className={styles["about-section-container"]} id="about">
      <div className={styles["bg-img-container"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["about-heading"]}>About</h2>
          <p className={styles["about-text"]}>
            Reverberation Fest is an annual music and arts festival taking place
            over the course of three days in the city of Dresden in Germany.{" "}
          </p>
          <p className={styles["about-text"]}>
            It connects music with theater, performance, dance and other forms
            of art and was founded in 2014.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
