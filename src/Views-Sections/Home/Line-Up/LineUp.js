import React from "react";

import BandCards from "../Line-Up/BandCards";
import ArtistCards from "../Line-Up/ArtistCards";

import styles from "../Line-Up/line-up.module.scss";

// Images
import glueTrip from "./Static/glue-trip.png";

const LineUp = () => {
  const bands = [
    // {
    //   bandName: "LoveNJoy",
    //   country: "UKR",
    //   img: "",
    //   text: "lkjndlvjcnslda",
    //   alt: "",
    // },
    // {
    //   bandName: "The Big Idea",
    //   country: "FR",
    //   img: "",
    //   text: "lkjndlvjcnslda",
    //   alt: "",
    // },
    // {
    //   bandName: "Mitsune",
    //   country: "JP/AUS/DE",
    //   img: "",
    //   text: "lkjndlvjcnslda",
    //   alt: "",
    // },
    // {
    //   bandName: "Rolando Bruno",
    //   country: "ARG",
    //   img: "",
    //   text: "lkjndlvjcnslda",
    //   alt: "",
    // },
    // {
    //   bandName: "13yearcicada",
    //   country: "DE",
    //   img: "",
    //   text: "lkjndlvjcnslda",
    //   alt: "",
    // },
    // {
    //   bandName: "Candy Flip DJ's",
    //   country: "CZ",
    //   img: "",
    //   text: "lkjndlvjcnslda",
    //   alt: "",
    // },
    {
      bandName: "Glue Trip",
      country: "BRA",
      img: glueTrip,
      text: "Glue Trip is a brazilian psychedelic pop band from João Pessoa. They are currently fighting the evil forces of caretice.",
      alt: "",
    },
  ];

  // const artists = [
  //   {
  //     artistName: "Magdalena Dzeko",
  //     country: "DE",
  //     img: "",
  //     text: "lkjndlvjcnslda",
  //     alt: "",
  //   },

  //   {
  //     artistName: "Tereza Chudackova",
  //     country: "CZ",
  //     img: "",
  //     text: "lkjndlvjcnslda",
  //     alt: "",
  //   },

  //   {
  //     artistName: "Aneta Navratilova",
  //     country: "CZ",
  //     img: "",
  //     text: "lkjndlvjcnslda",
  //     alt: "",
  //   },
  // ];

  // ! Sort bands alphabetically
  const sortBandsAlphabetically = () => {
    return bands.sort((a, b) => a.bandName.localeCompare(b.bandName));
  };

  sortBandsAlphabetically();

  // ! Sort artists alphabetically
  // const sortArtistsAlphabetically = () => {
  //   return artists.sort((a, b) => a.artistName.localeCompare(b.artistName));
  // };

  // sortArtistsAlphabetically();

  return (
    <div className={styles["line-up-container"]} id="line-up">
      {/* // ! Saved for when it goes back to 'to be announced' */}
      {/* <h2 className={styles["section-heading"]}>Line-up</h2> */}
      {/* <h2 className={styles["section-heading"]}>To be Announced</h2> */}

      {/* // ? Music */}
      {/* <h2 className={styles["announced-section-headings"]}>Music Line-up</h2> */}

      <div className={styles["bands-container"]}>
        {/* Map sorted bands.. */}
        {bands.map((band, index) => (
          <BandCards key={index} band={band} />
        ))}
      </div>

      <h2 className={styles["announced-section-headings"]}>
        Stay tuned, next announcement coming right up!
      </h2>

      {/* // ? Artists and Performance */}
      {/* <h2 className={styles["announced-section-headings"]}>
        Artists and Performance
      </h2>
      <div className={styles["bands-container"]}>
       
        {artists.map((artist, index) => (
          <ArtistCards key={index} artist={artist} />
        ))}
      </div> */}
    </div>
  );
};

export default LineUp;
