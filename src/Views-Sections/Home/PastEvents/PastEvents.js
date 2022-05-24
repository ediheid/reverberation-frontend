import React from "react";
import { Link } from "react-router-dom";

import styles from "../PastEvents/past-events.module.scss";

// Images
import intro from "../PastEvents/Static/intro.png";
import text2014 from "../PastEvents/Static/2014-text.png";
import poster2014 from "../PastEvents/Static/2014-poster.png";
import text2015 from "../PastEvents/Static/2015-text.png";
import poster2015 from "../PastEvents/Static/2015-poster.png";
import text2016 from "../PastEvents/Static/2016-text.png";
import poster2016 from "../PastEvents/Static/2016-poster.png";
import text2017 from "../PastEvents/Static/2017-text.png";
import poster2017 from "../PastEvents/Static/2017-poster.png";
import text2018 from "../PastEvents/Static/2018-text.png";
import poster2018 from "../PastEvents/Static/2018-poster.png";
import text2019 from "../PastEvents/Static/2019-text.png";
import poster2019 from "../PastEvents/Static/2019-poster.png";
import text2020 from "../PastEvents/Static/2020-text.png";
import poster2020 from "../PastEvents/Static/2020-poster.png";
import text2021 from "../PastEvents/Static/2021-text.png";
import poster2021 from "../PastEvents/Static/2021-poster.png";

const years = [
  // 2014
  {
    id: 2014,
    textSrc: text2014,
    textAlt: "2014 information text banner",
    posterSrc: poster2014,
    posterAlt:
      "2014 festival poster - green background with illustration of elephant and yellow writing",
  },

  // 2015
  {
    id: 2015,
    textSrc: text2015,
    textAlt: "2015 information text banner",
    posterSrc: poster2015,
    posterAlt:
      "2015 festival poster - painted background with illustration of two elephants and white writing",
  },

  // 2016
  {
    id: 2016,
    textSrc: text2016,
    textAlt: "2016 information text banner",

    posterSrc: poster2016,
    posterAlt: "2016 festival poster - ",
  },

  // 2017
  {
    id: 2017,
    textSrc: text2017,
    textAlt: "2017 information text banner",

    posterSrc: poster2017,
    posterAlt: "2017 festival poster - ",
  },

  // 2018
  {
    id: 2018,
    textSrc: text2018,
    textAlt: "2018 information text banner",

    posterSrc: poster2018,
    posterAlt: "2018 festival poster - ",
  },

  // 2019
  {
    id: 2019,
    textSrc: text2019,
    textAlt: "2019 information text banner",

    posterSrc: poster2019,
    posterAlt: "2019 festival poster - ",
  },

  // 2020
  {
    id: 2020,
    textSrc: text2020,
    textAlt: "2020 information text banner",

    posterSrc: poster2020,
    posterAlt: "2020 festival poster - ",
  },

  // 2021
  {
    id: 2021,
    textSrc: text2021,
    textAlt: "2021 information text banner",

    posterSrc: poster2021,
    posterAlt: "2021 festival poster - ",
  },
];

const PastEvents = () => {
  return (
    <div className={styles["past-events-page-container"]} id="past-events">
      <div className={styles["content-container"]}>
        <img
          className={styles["poster-img"]}
          src={intro}
          alt="Reverberation memorial wall introduction text"
        ></img>

        {/*  Map through years.. */}
        {years.map((year) => (
          <div className={styles["images-content-container"]}>
            <img
              className={styles["poster-img"]}
              src={year.posterSrc}
              alt={year.posterAlt}
            ></img>

            <img
              className={styles["text-img"]}
              src={year.textSrc}
              alt={year.textAlt}
            ></img>
          </div>
        ))}

        <Link to="/gallery" alt="Link to festival image gallery page">
          <button className={styles["links-button"]}>Festival Gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default PastEvents;
