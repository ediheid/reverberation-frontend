import React from "react";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

const DesktopNavLinks = () => {
  return (
    <>
      <div className={styles["desktop-nav-container"]}>
        <ul className={styles["desktop-nav-list-items"]}>
          <li>About</li>
          <li>Line-up</li>
          <li>Schedule</li>
          <li>Past Events</li>
          <li>Tickets</li>
          <li>Contact</li>

          <li>Home</li>
        </ul>
      </div>
    </>
  );
};

export default DesktopNavLinks;
