import React, { useState, useCallback } from "react";

import styles from "../Gallery/gallery.module.scss";

// Gallery Components
import Gallery2021Day1 from "./Gallery2021Day1";
import Gallery2021Day2 from "./Gallery2021Day2";
import Gallery2021Day3 from "./Gallery2021Day3";

// Gifs (styled as 'video')
import gifDay1 from "../Gallery/Static/2020-day1-gif.gif";
import gifDay2 from "../Gallery/Static/2020-day2-gif.gif";
import gifDay3 from "../Gallery/Static/2020-day3-gif.gif";

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
              <img
                className={styles["reverberation-video-container"]}
                src={gifDay1}
                alt="gif festival day 1"
              ></img>

              <div className={styles["button-container"]}>
                <button
                  id={styles["day1-button"]}
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day1"
                >
                  2020 - Day 1
                </button>
              </div>
            </div>

            {/* 2020 - Day 2 */}
            <div className={styles["video-container"]}>
              <img
                className={styles["reverberation-video-container"]}
                src={gifDay2}
                alt="gif festival day 1"
              ></img>

              <div className={styles["button-container"]}>
                <button
                  id={styles["day2-button"]}
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day2"
                >
                  2020 - Day 2
                </button>
              </div>
            </div>

            {/* 2020 - Day 3 */}
            <div className={styles["video-container"]}>
              <img
                className={styles["reverberation-video-container"]}
                src={gifDay3}
                alt="gif festival day 1"
              ></img>

              <div className={styles["button-container"]}>
                <button
                  id={styles["day3-button"]}
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day3"
                >
                  2020 - Day 3
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
