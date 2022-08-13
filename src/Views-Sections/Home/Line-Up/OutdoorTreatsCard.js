import React from "react";
import { BiLink } from "react-icons/bi";

import styles from "../Line-Up/band-cards.module.scss";

const OutdoorTreatsCard = ({ outdoor }) => {
  return (
    <div className={`${styles["card"]} ${styles["cards-item"]}`}>
      <div className={styles["card-frame"]}>
        <div className={styles["card-picture"]}>
          <img
            className={styles["image"]}
            src={outdoor.img}
            alt={outdoor.alt}
            width="100%"
          ></img>
        </div>
        <h2 className={styles["card-title"]}>{outdoor.outdoorName}</h2>
        <h3 className={styles["band-country"]}>{outdoor.country}</h3>

        {/* Links */}
        <div className={styles["links-container"]}>
          {outdoor.link ? (
            <a
              className={styles["artist-website-link"]}
              href={outdoor.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLink />
            </a>
          ) : null}
        </div>
      </div>

      {/* Overlay */}
      <div className={styles["card-overlay"]}></div>
      <div className={styles["card-content"]}>
        <h2>{outdoor.outdoorName}</h2>
        <p>{outdoor.text}</p>
      </div>
    </div>
  );
};

export default OutdoorTreatsCard;
