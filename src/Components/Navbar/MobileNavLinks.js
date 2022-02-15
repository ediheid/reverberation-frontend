import React from "react";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

const MobileNavLinks = () => {
  return (
    <div>
      <div className={styles["nav-list-items"]}>
        <ul>
          <li>About</li>
          <li>Line-up</li>
          <li>Schedule</li>
          <li>Past Events</li>
          <li>Tickets</li>
          <li>Contact</li>
          <li>Impressum</li>

          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavLinks;
