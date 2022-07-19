import React from "react";
import { BiLink } from "react-icons/bi";
import { FaBandcamp } from "react-icons/fa";

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

        {/* Links */}
        <div className={styles["links-container"]}>
          {band.link ? (
            <a
              className={styles["artist-website-link"]}
              href={band.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLink />
            </a>
          ) : null}
          {band.bandCampLink ? (
            <a
              className={styles["artist-website-link"]}
              href={band.bandCampLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBandcamp />
            </a>
          ) : null}
        </div>
      </div>

      {/* Overlay */}
      <div className={styles["card-overlay"]}></div>
      <div className={styles["card-content"]}>
        <h2>{band.bandName}</h2>
        <p>{band.text}</p>
      </div>
    </div>
  );
};

export default BandCards;
