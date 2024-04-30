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
          {/* <HashLink smooth to="/#line-up">
            <li>Line-up</li>
          </HashLink> */}

          {/* <HashLink smooth to="/#schedule">
            <li>Schedule</li>
          </HashLink> */}

          {/* <HashLink smooth to="/#tickets">
            <li>Tickets</li>
          </HashLink> */}

          {/* // todo: add hashlink back */}

          {/* <HashLink smooth to="/#upcoming">
            <li>Upcoming Events</li>
          </HashLink> */}
          {/* // todo: remove this and add hashlink above back.. */}
          <a
            href="https://reverberation.loveyourartist.store/de/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Ticket Shop"
          >
            <li>Upcoming Events</li>
          </a>

          <HashLink smooth to="/#about">
            <li>About</li>
          </HashLink>

          <HashLink smooth to="/#past-events">
            <li>Past Festivals</li>
          </HashLink>

          <HashLink smooth to="/#contact">
            <li>Contact</li>
          </HashLink>

          <Link smooth to="/gallery">
            <li>Gallery</li>
          </Link>

          <HashLink smooth to="/#landing">
            <li>Home</li>
          </HashLink>
        </ul>
      </div>
    </>
  );
};

export default DesktopNavLinks;
