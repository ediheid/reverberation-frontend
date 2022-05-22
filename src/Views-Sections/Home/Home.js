import React from "react";

import styles from "../Home/home.module.scss";
import LandingArea from "./LandingArea/LandingArea";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <LandingArea />
    </div>
  );
};

export default Home;
