import React from "react";

import styles from "../Tickets/tickets.module.scss";

const Tickets = () => {
  return (
    <div className={styles["tickets-section-container"]}>
      <div className={styles["bg-img-container"]}>
        <div className={styles["content-container"]}>
          {" "}
          Tickets section will go here
        </div>
      </div>
    </div>
  );
};

export default Tickets;
