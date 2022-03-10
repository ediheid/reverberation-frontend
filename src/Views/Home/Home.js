import React from "react";

import styles from "../Home/home.module.scss";

import mainImage from "./Static/wip2.png";

const Home = () => {
  return (
    <>
      <div className={styles["home-container"]}>
        <div className={styles["main-image"]}>
          {/* // todo - Decide if I should use the img here or as bg image in SCSS */}
          {/* <img src={mainImage}></img> */}
          {/* BANNER WILL GO HERE */}
        </div>
      </div>
    </>
  );
};

export default Home;
