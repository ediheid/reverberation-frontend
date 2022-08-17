import React from "react";

// Data arrays
import { bands } from "./bandsData";
import { artists } from "./artistsData";
import { outdoor } from "./outdoorTreatsData";

// Card Components
import BandCards from "../Line-Up/BandCards";
import ArtistCards from "../Line-Up/ArtistCards";
import OutdoorTreatsCard from "./OutdoorTreatsCard";

import styles from "../Line-Up/line-up.module.scss";

const LineUp = () => {
  // ! Sort bands alphabetically
  const sortBandsAlphabetically = () => {
    return bands.sort((a, b) => a.bandName.localeCompare(b.bandName));
  };

  sortBandsAlphabetically();

  // ! Sort artists alphabetically
  const sortArtistsAlphabetically = () => {
    return artists.sort((a, b) => a.artistName.localeCompare(b.artistName));
  };

  sortArtistsAlphabetically();

  // ! Sort outdoor treats alphabetically
  const sortOutdoorTreatsAlphabetically = () => {
    return outdoor.sort((a, b) => a.outdoorName.localeCompare(b.outdoorName));
  };

  sortOutdoorTreatsAlphabetically();

  return (
    <div className={styles["line-up-container"]} id="line-up">
      {/* // ! Saved for when it goes back to 'to be announced' */}
      {/* <h2 className={styles["section-heading"]}>Line-up</h2> */}
      {/* <h2 className={styles["section-heading"]}>To be Announced</h2> */}

      {/* // ? Music */}
      <h2 className={styles["announced-section-headings"]}>Music Line-up</h2>

      <div className={styles["bands-container"]}>
        {/* Map sorted bands.. */}
        {bands.map((band, index) => (
          <BandCards key={index} band={band} />
        ))}
      </div>

      {/* // ? Artists and Performance */}
      <h2 className={styles["announced-section-headings"]}>
        Artists and Performance
      </h2>
      <div className={styles["bands-container"]}>
        {artists.map((artist, index) => (
          <ArtistCards key={index} artist={artist} />
        ))}
      </div>

      {/* // ? Outdoor treats */}

      <h2 className={styles["announced-section-headings"]}>Outdoor Treats</h2>
      <div className={styles["bands-container"]}>
        {outdoor.map((outdoor, index) => (
          <OutdoorTreatsCard key={index} outdoor={outdoor} />
        ))}
      </div>

      {/* <h2 className={styles["announced-section-headings"]}>
        Stay tuned, next announcement coming right up!
      </h2> */}
    </div>
  );
};

export default LineUp;
