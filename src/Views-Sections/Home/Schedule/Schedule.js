import React from "react";

import styles from "../Schedule/schedule.module.scss";

import scheduleMain from "./static/schedule-main-poster.png";
import friday from "./static/friday.png";
import staurdayIndoor from "./static/saturday-indoor.png";
import saturdayOutdoor from "./static/saturday-outdoor.png";
import sunday from "./static/sunday.png";

const Schedule = () => {
  return (
    <div className={styles["schedule-section-container"]} id="schedule">
      <h2 className={styles["schedule-heading"]}> Schedule</h2>

      <img
        className={styles["large-schedule"]}
        src={scheduleMain}
        alt="Schedule poster, painting of a human figure in pinks and oranges holding a round object with an abstract background in warm reds, browns and yellows of two trees and ground on a white background by Artourette. Accompanied by text - festival name, date and heading Time Schedule."
      ></img>
      <img
        className={styles["large-schedule"]}
        src={friday}
        alt="Friday line-up poster, close up of painting with a white banner."
      ></img>

      <div className={styles["saturday-container"]}>
        <img
          className={styles["saturday-schedule"]}
          src={staurdayIndoor}
          alt="Friday line-up poster, close up of painting with a white banner."
        ></img>
        <img
          className={styles["saturday-schedule"]}
          src={saturdayOutdoor}
          alt="Friday line-up poster, close up of painting with a white banner."
        ></img>
      </div>

      <img
        className={styles["large-schedule"]}
        src={sunday}
        alt="Friday line-up poster, close up of painting with a white banner."
      ></img>

      {/* <h2 className={styles["schedule-heading"]}>To be Announced</h2> */}
    </div>
  );
};

export default Schedule;
