import React from "react";

import styles from "../Home/home.module.scss";
import LandingArea from "./LandingArea/LandingArea";
import LineUp from "./Line-Up/LineUp";
import Schedule from "./Schedule/Schedule";
import PastEvents from "./PastEvents/PastEvents";
import Tickets from "./Tickets/Tickets";
import About from "./About/About";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    // All Components are HashLinked
    <div className={styles["home-container"]}>
      <LandingArea />

      {/* <Tickets /> */}

      <LineUp />

      <Schedule />

      <About />

    

      <PastEvents />

      {/* <div className={styles["about-contact-bg-container"]}> */}
     

        {/* <div style={{ height: "50px", backgroundColor: "black" }}></div> */}

        <Contact />
      {/* </div> */}
    </div>
  );
};

export default Home;
