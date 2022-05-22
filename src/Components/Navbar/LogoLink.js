import React from "react";
import { HashLink } from "react-router-hash-link";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

// ? Images
const logo = require("./Static/logo.png");

const LogoLink = () => {
  return (
    <>
      <HashLink smooth to="/#landing">
        <img
          className={styles["logo"]}
          src={logo}
          alt="Reverberation Festival Logo - 3 Rs"
        ></img>
      </HashLink>
    </>
  );
};

export default LogoLink;
