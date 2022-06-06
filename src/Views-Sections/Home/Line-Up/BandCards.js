import React from "react";

// import testImg from "../Line-Up/download.jpeg";

import styles from "../Line-Up/band-cards.module.scss";

const BandCards = ({ band }) => {
  return (
    <div className={`${styles["card"]} ${styles["cards-item"]}`}>
      <div className={styles["card-frame"]}>
        <div className={styles["card-picture"]}>
          <img
            className={styles["image"]}
            src={band.img}
            alt={band.alt}
            width="100%"
          ></img>
        </div>
        <h2 className={styles["card-title"]}>{band.bandName}</h2>
        <h3 className={styles["band-country"]}>{band.country}</h3>
      </div>
      <div className={styles["card-overlay"]}></div>
      <div className={styles["card-content"]}>
        <h2>{band.bandName}</h2>
        <p>{band.text}</p>
      </div>
    </div>
  );
};

export default BandCards;
