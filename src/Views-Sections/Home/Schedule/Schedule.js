import React from "react";

import styles from "../Schedule/schedule.module.scss";

const Schedule = () => {
  return (
    <div className={styles["schedule-section-container"]} id="schedule">
      <h2 className={styles["schedule-heading"]}>
        {" "}
        Schedule section will go here
      </h2>
    </div>
  );
};

export default Schedule;
