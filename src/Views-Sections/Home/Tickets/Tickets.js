import React from "react";

import styles from "../Tickets/tickets.module.scss";

const Tickets = () => {
  return (
    <div className={styles["tickets-section-container"]} id="tickets">
      <div className={styles["bg-img-container"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["tickets-heading"]}>
            Early bird tickets available from 3.6.22
          </h2>
          <a
            href="https://reverberation.loveyourartist.store/de/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Ticket Shop"
          >
            <button className={styles["ticket-button"]}>To ticket shop</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
