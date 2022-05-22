import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

// ? Components
import LogoLink from "./LogoLink";
import MobileNavLinks from "./MobileNavLinks";
import DesktopNavLinks from "./DesktopNavLinks";

const Navigation = () => {
  // On click/toggle Hamburger Hook
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className={styles["navbar-container"]}>
        {/* Logo / Link to home */}
        <LogoLink />

        <DesktopNavLinks />

        {/* Content right container */}
        <div className={styles["right-content-nav-container"]}>
          {/* Social media links */}
          <div className={styles["social-media-links-container"]}>
            <a
              href="https://www.facebook.com/reverberationfest/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to facebook page"
            >
              {" "}
              <FaFacebookF className={styles["social-media-links"]} />{" "}
            </a>

            <a
              href="https://instagram.com/reverberationfestival?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Instagram page"
            >
              <FiInstagram className={styles["social-media-links"]} />
            </a>
          </div>

          {/* Hamburger */}
          <div className={styles["hamburger-container"]}>
            <Hamburger
              label="Show menu"
              size={25}
              toggled={isOpen}
              toggle={setIsOpen}
              rounded
              hideOutline={false}
            />
          </div>
        </div>
      </nav>
      {isOpen && <MobileNavLinks />}
    </div>
  );
};

export default Navigation;
