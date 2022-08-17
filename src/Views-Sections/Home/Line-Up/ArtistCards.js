import React from "react";
import { BiLink } from "react-icons/bi";

// Same styling as BandCards
import styles from "../Line-Up/band-cards.module.scss";

const ArtistCards = ({ artist }) => {
  return (
    <div className={`${styles["card"]} ${styles["cards-item"]}`}>
      <div className={styles["card-frame"]}>
        <div className={styles["card-picture"]}>
          <img
            className={styles["image"]}
            src={artist.img}
            alt={artist.alt}
            width="100%"
          ></img>
        </div>
        <h2 className={styles["card-title"]}>{artist.artistName}</h2>
        <h3 className={styles["band-country"]}>{artist.country}</h3>

        <div className={styles["links-container"]}>
          <a
            className={styles["visual-artist-website-link"]}
            href={artist.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLink />
          </a>

          {artist.link2 ? (
            <a
              className={styles["visual-artist-website-link"]}
              href={artist.link2}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLink />
            </a>
          ) : null}
        </div>
      </div>
      <div className={styles["card-overlay"]}></div>
      <div className={styles["card-content"]}>
        <p>{artist.text}</p>
      </div>
    </div>
  );
};

export default ArtistCards;
