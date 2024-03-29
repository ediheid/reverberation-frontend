import React from "react";

import styles from "../Contact/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles["contact-section-container"]} id="contact">
      <div className={styles["bg-img-container"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["contact-heading"]}>Contact</h2>

          <div className={styles["contact-div"]}>
            <span
              className={`${styles["contact-text"]} ${styles["address-heading"]}`}
            >
              Reverberation Festival <br /> c/o Dresden Psych Family e.V.{" "}
            </span>
            <span
              className={`${styles["contact-text"]} ${styles["address-heading"]}`}
            >
              Sebnitzer Straße 35
            </span>
            <span
              className={`${styles["contact-text"]} ${styles["address-heading"]}`}
            >
              01099 Dresden
            </span>
          </div>

          <div className={styles["contact-div"]}>
            <span className={styles["contact-text"]}>General Enquiries</span>

            <span className={styles["name-text"]}>Julian Baunach </span>
            <a
              className={styles["anchor-tags"]}
              href="mailto:julian@reverberationfest.de"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to mail julian@reverberationfest.de"
            >
              julian@reverberationfest.de
            </a>
          </div>

          <div className={styles["contact-div"]}>
            <span className={styles["contact-text"]}>Head of Booking</span>

            <span className={styles["name-text"]}>Robin Heller</span>
            <a
              className={styles["anchor-tags"]}
              href="mailto:robin@reverberationfest.de"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to mail robin@reverberationfest.de"
            >
              robin@reverberationfest.de
            </a>
          </div>

          <div className={styles["contact-div"]}>
            <span className={styles["contact-text"]}>
              Public Relations & Production
            </span>

            <span className={styles["name-text"]}>Hannes Fröhlich </span>
            <a
              className={styles["anchor-tags"]}
              href="mailto:hannes@reverberationfest.de"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to mail hannes@reverberationfest.de"
            >
              hannes@reverberationfest.de
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
