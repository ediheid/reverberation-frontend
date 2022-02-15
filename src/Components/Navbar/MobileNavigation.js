import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

// ? Components
import LogoLink from "./LogoLink";
import MobileNavLinks from "./MobileNavLinks";

const MobileNavigation = () => {
  // On click/toggle Hamburger Hook
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className={styles["navbar-container"]}>
        {/* Logo / Link to home */}
        <LogoLink />

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
      </nav>
      {isOpen && <MobileNavLinks />}
    </div>
  );
};

export default MobileNavigation;
