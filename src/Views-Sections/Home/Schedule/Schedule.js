import React from "react";

import styles from "../Schedule/schedule.module.scss";

const Schedule = () => {
  return (
    <div className={styles["schedule-section-container"]} id="schedule">
      <h2 className={styles["schedule-heading"]}>
        {" "}
        Schedule
      </h2>

      <h2 className={styles["schedule-heading"]}>To be Announced</h2>
    </div>
  );
};

export default Schedule;
