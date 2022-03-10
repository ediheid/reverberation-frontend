import React from "react";

import styles from "../Footer/footer.module.scss";

const Footer = () => {
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  return (
    <>
      <div className={styles["footer-container"]}>
        <span className={styles["copyright-span"]}>
          &copy; Dresden Psych Family e.V. {currentYear} | {/* // ! */}
          {/* // Todo: Add impressum page link */}
          <a>
            {" "}
            <b>IMPRESSUM</b>{" "}
          </a>
        </span>

        <span className={styles["built-by"]}>
          Designed and developed by <br />
          <a
            href="https://www.edithsdev.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Edith Heidmann
          </a>
        </span>

        {/* // ! */}
        {/* // Todo: Add Social media links */}

        {/* // ! */}
        {/* // Todo: Impressum Link will go here - maybe set it that it pops up like in FreshBnb website */}
      </div>
    </>
  );
};

export default Footer;
