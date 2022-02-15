import React from "react";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

// ? Images
const logo = require("./Static/logo.png");

const LogoLink = () => {
  return (
    <>
      <img
        className={styles["logo"]}
        src={logo}
        alt="Reverberation Festival Logo - 3 Rs"
      ></img>
    </>
  );
};

export default LogoLink;
