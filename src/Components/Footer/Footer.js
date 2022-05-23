import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import styles from "../Footer/footer.module.scss";

const Footer = () => {
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  return (
    <>
      <div className={styles["footer-container"]}>
        <button className={styles["button-container"]}>
          <Link
            className={styles["button-a-link"]}
            smooth
            to="/contact"
            // href="https://reverberation.loveyourartist.store/de/"
            // target="_blank"
            // rel="noopener noreferrer"
            alt="Contact section"
          >
            Contact
          </Link>
        </button>

        {/* Copyright and Impressum */}
        <span className={styles["copyright-span"]}>
          &copy; Dresden Psych Family e.V. {currentYear} | {/* // ! */}
          {/* // Todo: Add impressum page link */}{" "}
          <Link to="/impressum" className={styles["impressum-link"]}>
            <b>IMPRESSUM</b>{" "}
          </Link>
        </span>

        {/* Built by */}
        <span className={styles["built-by"]}>
          Website designed and developed by <br />
          <a
            href="https://www.edithsdev.com/"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to developer site"
          >
            Edith Heidmann
          </a>
        </span>

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
      </div>
    </>
  );
};

export default Footer;
