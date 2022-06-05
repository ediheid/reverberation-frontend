import React, { useState, useCallback } from "react";

import styles from "../Gallery/gallery.module.scss";

// Gallery Components
import Gallery2021Day1 from "./Gallery2021Day1";
import Gallery2021Day2 from "./Gallery2021Day2";
import Gallery2021Day3 from "./Gallery2021Day3";

// Videos
import videoDay1 from "../Gallery/Static/event-video-2020-day1-test.mp4";
import videoDay2 from "../Gallery/Static/event-video-2020-day2-v2.mp4";
import videoDay3 from "../Gallery/Static/event-video-2020-day3.mp4";

const Gallery = () => {
  // page state for conditional render of gallery components
  const [page, setPage] = useState("");

  // PageClick function lets user click on day to render the gallery component via the value of the corresponding button - all set inside useCallback function so components do not have to be recalculated
  let pageClick = useCallback((event) => {
    // Jumps to top of page when Gallery Page is rendered
    window.scrollTo(0, 0);

    // Imported Gallery components
    const pages = [
      {
        id: "2021Day1",
        component: <Gallery2021Day1 />,
      },
      {
        id: "2021Day2",
        component: <Gallery2021Day2 />,
      },
      {
        id: "2021Day3",
        component: <Gallery2021Day3 />,
      },
    ];

    // Switch statement to set the page value and render the correct component via the button value
    switch (event.target.value) {
      case "2021Day1":
        setPage(pages[0].component);
        break;
      case "2021Day2":
        setPage(pages[1].component);
        break;
      case "2021Day3":
        setPage(pages[2].component);
        break;
      default:
        break;
    }
  }, []);

  // Back to overview onClick function
  const toOverview = () => {
    setPage("");
  };

  return (
    <div className={styles["gallery-page-container"]}>
      <div className={styles["content-container"]}>
        {/* Display overview on render until new day is selected to render */}
        {page === "" ? (
          // Page that will be rendered on landing
          <div className={styles["video-bg-container"]}>
            <div className={styles["video-container"]}>
              {/* 2020 - Day 1 */}
              <video
                className={styles["reverberation-video-container"]}
                autoplay="true"
                muted="true"
                loop="true"
                webkit-playsinline="true"
                playsinline="true"
                alt="2020 festival video"
                width="100%"
              >
                <source src={videoDay1} type="video/mp4"></source>
              </video>{" "}
              <div className={styles["button-container"]}>
                <button
                  id={styles["day1-button"]}
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day1"
                >
                  Day 1
                </button>
              </div>
            </div>

            {/* 2020 - Day 2 */}
            <div className={styles["video-container"]}>
              <video
                className={styles["reverberation-video-container"]}
                autoplay="autoplay"
                muted="true"
                loop="true"
                webkit-playsinline="true"
                playsinline="true"
                alt="2020 festival video"
                width="100%"
              >
                <source src={videoDay2} type="video/mp4"></source>
              </video>{" "}
              <div className={styles["button-container"]}>
                <button
                  id={styles["day2-button"]}
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day2"
                >
                  Day 2
                </button>
              </div>
            </div>

            {/* 2020 - Day 3 */}
            <div className={styles["video-container"]}>
              <video
                className={styles["reverberation-video-container"]}
                autoplay="autoplay"
                muted="true"
                loop="true"
                webkit-playsinline="true"
                playsinline="true"
                alt="2020 festival video"
                width="100%"
              >
                <source src={videoDay3} type="video/mp4"></source>
              </video>{" "}
              <div className={styles["button-container"]}>
                <button
                  id={styles["day3-button"]}
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day3"
                >
                  Day 3
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Conditional render
          <div>
            <button
              onClick={toOverview}
              className={styles["back-to-overview-button"]}
            >
              {/* Content is in css */}
              {/* Back */}
            </button>
            {page}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
