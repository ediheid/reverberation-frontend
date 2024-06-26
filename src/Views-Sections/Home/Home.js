import React from "react";

import styles from "../Home/home.module.scss";
import LandingArea from "./LandingArea/LandingArea";
import LineUp from "./Line-Up/LineUp";
import Schedule from "./Schedule/Schedule";
import PastEvents from "./PastEvents/PastEvents";
import Tickets from "./Tickets/Tickets";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Partners from "./Partners/Partners";
import Upcoming from "./Upcoming/Upcoming";

const Home = () => {
  return (
    // All Components are HashLinked
    <div className={styles["home-container"]}>
      <LandingArea />

      {/* // todo: add back when new events are added */}
      {/* <Upcoming/> */}

      {/* <LineUp /> */}

      {/* <Schedule /> */}

      {/* <Tickets /> */}

      <About />

      <PastEvents />

      {/* <div className={styles["about-contact-bg-container"]}> */}

      {/* <div style={{ height: "50px", backgroundColor: "black" }}></div> */}

      <Contact />

      <Partners />
      {/* </div> */}
    </div>
  );
};

export default Home;
