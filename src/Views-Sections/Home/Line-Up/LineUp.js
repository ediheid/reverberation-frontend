import React from "react";

import BandCards from "../Line-Up/BandCards";
import ArtistCards from "../Line-Up/ArtistCards";

import styles from "../Line-Up/line-up.module.scss";

// Images
import toolBandPhoto from "../Line-Up/Static/tool.jpeg";

const LineUp = () => {
  const bands = [
    // ! TEST with Tool
    // {
    //   bandName: "Tool",
    //   country: "US",
    //   img: toolBandPhoto,
    //   text: "Tool is an American rock band from Los Angeles. Formed in 1990, the group's line-up includes vocalist Maynard James Keenan, guitarist Adam Jones and drummer Danny Carey. Justin Chancellor has been the band's bassist since 1995.",
    //   alt: "",
    // },
    // // ! ======

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
      img: "",
      text: "lkjndlvjcnslda",
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
      <h2 className={styles["announced-section-headings"]}>Music Line-up</h2>
      <div className={styles["bands-container"]}>
        {/* Map sorted bands.. */}
        {bands.map((band, index) => (
          <BandCards key={index} band={band} />
        ))}
      </div>

      {/* // ? Artists and Performance */}
      {/* <h2 className={styles["announced-section-headings"]}>
        Artists and Performance
      </h2>
      <div className={styles["bands-container"]}>
       
        {artists.map((artist, index) => (
          <ArtistCards key={index} artist={artist} />
        ))}
      </div> */}

      <h2 className={styles["announced-section-headings"]}>
        Stay tuned, more to be announced soon!
      </h2>
    </div>
  );
};

export default LineUp;
