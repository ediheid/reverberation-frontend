import React from "react";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

const MobileNavLinks = () => {
  return (
    <div>
      <div className={styles["nav-list-items"]}>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavLinks;
