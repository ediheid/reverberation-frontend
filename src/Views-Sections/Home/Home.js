import React from "react";

import styles from "../Home/home.module.scss";

import mainImage from "./Static/wip2.png";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <div className={styles["landing-area"]}>
        <div className={styles["main-image-container"]}>
          {/* // todo - Decide if I should use the img here or as bg image in SCSS */}
          <img
            className={styles["main-image"]}
            src={mainImage}
            alt="Banner.  Artwork by Artourette"
          ></img>
          {/* BANNER WILL GO HERE */}
        </div>
      </div>
    </div>
  );
};

export default Home;
