import React from "react";

import styles from "./after-movie.module.scss";

const AfterMovie = ({ embedId }) => {
  return (
    <section className={styles["section"]}>
      <div className={styles["video-container"]}>
        <iframe
          className={styles["iframe-element"]}
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
      </div>
    </section>
  );
};

export default AfterMovie;