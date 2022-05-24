import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import styles from "../Footer/footer.module.scss";

const Footer = () => {
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  return (
    <>
      <div className={styles["footer-container"]}>
        {/* Copyright and Impressum */}
        <span className={styles["copyright-span"]}>
          &copy; Dresden Psych Family e.V. {currentYear}
        </span>

        {/*  Impressum */}

        <div className={styles["links-container"]}>
          <Link to="/impressum" className={styles["footer-links"]}>
            <b>IMPRESSUM</b>{" "}
          </Link>

          <Link to="/dsgvo" className={styles["footer-links"]}>
            <b>DSGVO</b>
          </Link>

          <HashLink to="/#contact" className={styles["footer-links"]}>
            <b>CONTACT</b>
          </HashLink>
        </div>

        {/* Artworks by */}
        <span className={styles["built-by"]}>
          Festival posters and artworks by <br />
          <a
            href="https://artourette.com/"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to artist site"
          >
            Artourette
          </a>
        </span>

        {/* Memorial wall by */}
        <span className={styles["built-by"]}>
          Memorial wall banners by <br />
          <a
            href="https://instagram.com/fluxxwildly?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to Flux Wildly instagram"
          >
            Flux Wildly
          </a>
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
