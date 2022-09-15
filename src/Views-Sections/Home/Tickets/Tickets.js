import React from "react";

import styles from "../Tickets/tickets.module.scss";

const Tickets = () => {
  return (
    <div className={styles["tickets-section-container"]} id="tickets">
      <div className={styles["bg-img-container"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["tickets-heading"]}>Ticket Pricing Info</h2>
          {/* All days container */}
          <section className={styles["all-days-container"]}>
            <div className={styles["day-container"]}>
              {/* Friday */}
              <h3 className={styles["sub-headings"]}>
                Friday <span>(day pass)</span>
              </h3>
              <ul className={styles["list"]}>
                <li className={styles["ticket-prices"]}>
                  Pre-Sale: <span>16,50 EUR incl. fees</span>
                </li>
                <li className={styles["ticket-prices"]}>
                  Box Office: <span>20,00 EUR</span>
                </li>
              </ul>
            </div>

            {/*  Saturday */}
            <div className={styles["day-container"]}>
              <h3 className={styles["sub-headings"]}>
                Saturday <span>(day pass)</span>
              </h3>
              <ul className={styles["list"]}>
                <li className={styles["ticket-prices"]}>
                  Pre-Sale: <span>27,50 EUR incl. fees</span>
                </li>
                <li className={styles["ticket-prices"]}>
                  Box Office: <span>30,00 EUR</span>
                </li>
              </ul>
            </div>

            {/*  Sunday */}
            <div className={styles["day-container"]}>
              <h3 className={styles["sub-headings"]}>
                Sunday <span>(day pass)</span>
              </h3>
              <ul className={styles["list"]}>
                <li className={styles["ticket-prices"]}>
                  Pre-Sale: <span>16,50 EUR incl. fees</span>
                </li>
                <li className={styles["ticket-prices"]}>
                  Box Office: <span>20,00 EUR</span>
                </li>
              </ul>
            </div>

            {/*  Festival Pass */}
            <div className={styles["day-container"]}>
              <h3 className={styles["sub-headings"]}>
                Festival Pass <span>(3 days)</span>
              </h3>
              <ul className={styles["list"]}>
                <li className={styles["ticket-prices"]}>
                  Pre-Sale: <span>44,00 EUR incl. fees</span>
                </li>
                <li className={styles["ticket-prices"]}>
                  Box Office: <span>45,00 EUR</span>
                </li>
              </ul>
            </div>
          </section>

          <a
            href="https://reverberation.loveyourartist.store/de/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Ticket Shop"
            className={styles["ticket-shop-link"]}
          >
            <button
              className={styles["links-button"]}
              data="Buy online"
            ></button>
          </a>
        </div>
        {/* <button className={styles["ticket-shop-button"]}>Buy online</button> */}
      </div>
    </div>
  );
};

export default Tickets;
