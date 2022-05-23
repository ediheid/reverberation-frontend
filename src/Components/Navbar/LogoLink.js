import React from "react";
import { Link } from "react-router-dom";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

// ? Images
const logo = require("./Static/logo.png");

const LogoLink = () => {
  return (
    <>
      <Link smooth to="/">
        <img
          className={styles["logo"]}
          src={logo}
          alt="Reverberation Festival Logo - 3 Rs"
        ></img>
      </Link>
    </>
  );
};

export default LogoLink;
