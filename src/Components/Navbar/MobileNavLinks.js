import React from "react";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

const MobileNavLinks = () => {
  return (
    <>
      <div className={styles["mobile-nav-dropdown-container"]}>
        <ul className={styles["mobile-nav-list-items"]}>
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

export default MobileNavLinks;
