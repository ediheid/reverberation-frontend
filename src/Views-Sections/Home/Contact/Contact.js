import React from "react";

import styles from "../Contact/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles["contact-section-container"]} id="contact">
      <div className={styles["bg-img-container"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["contact-heading"]}>Contact</h2>

          <div className={styles["contact-div"]}>
            <p className={styles["contact-text"]}>Dresden Psych Family e.V.</p>
            <p className={styles["contact-text"]}>Sternstraße 35</p>
            <p className={styles["contact-text"]}>01139 Dresden</p>
          </div>

          <div className={styles["contact-div"]}>
            <span className={styles["contact-text"]}>General Enquiries</span>

            <span>
              Julian Baunach
              <a
                className={styles["anchor-tags"]}
                href="mailto:julian@reverberationfest.de"
                alt="link to mail julian@reverberationfest.de"
              >
                julian@reverberationfest.de
              </a>
            </span>
          </div>

          <div className={styles["contact-div"]}>
            <span className={styles["contact-text"]}>Booking & Production</span>

            <span>
              Robin Heller
              <a
                className={styles["anchor-tags"]}
                href="mailto:robin@reverberationfest.de"
                alt="link to mail robin@reverberationfest.de"
              >
                robin@reverberationfest.de
              </a>
            </span>
          </div>

          <div className={styles["contact-div"]}>
            <span className={styles["contact-text"]}>Booking & Production</span>

            <span>
              Hannes Fröhlich
              <a
                className={styles["anchor-tags"]}
                href="mailto:hannes@reverberationfest.de"
                alt="link to mail hannes@reverberationfest.de"
              >
                hannes@reverberationfest.de
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
