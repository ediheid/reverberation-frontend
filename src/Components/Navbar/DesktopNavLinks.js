import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

const DesktopNavLinks = () => {
  return (
    <>
      <div className={styles["desktop-nav-container"]}>
        <ul className={styles["desktop-nav-list-items"]}>
          <HashLink smooth to="/#line-up">
            <li>Line-up</li>
          </HashLink>

          <HashLink smooth to="/#schedule">
            <li>Schedule</li>
          </HashLink>

          <HashLink smooth to="/#tickets">
            <li>Tickets</li>
          </HashLink>

          <HashLink smooth to="/#past-events">
            <li>Past Events</li>
          </HashLink>

          <HashLink smooth to="/#about">
            <li>About</li>
          </HashLink>

          <HashLink smooth to="/#contact">
            <li>Contact</li>
          </HashLink>

          <HashLink smooth to="/#landing">
            <li>Home</li>
          </HashLink>
        </ul>
      </div>
    </>
  );
};

export default DesktopNavLinks;
