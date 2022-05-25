import React, { useState } from "react";

import styles from "../Gallery/gallery.module.scss";

import Gallery2021Day1 from "./Gallery2021Day1";
import Gallery2021Day2 from "./Gallery2021Day2";

const Gallery = () => {
  const [page, setPage] = useState("");

  const pages = [
    {
      id: "2021Day1",
      component: <Gallery2021Day1 />,
    },
    {
      id: "2021Day2",
      component: <Gallery2021Day2 />,
    },
  ];

  // Todo: get index of object and pass into switch statement

  let pageClick = (event) => {
    // event.preventDefault();

    switch (event.target.name) {
      case "2021Day1":
        setPage(pages[0].component);
        break;
      case "2021Day2":
        setPage(pages[1].component);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles["gallery-page-container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["sub-heading-container"]}>
          <h3 className={styles["section-headings"]}>Gallery</h3>
        </div>

        <div className={styles["list-container"]}>
          <ul>
            <h3>2021</h3>
            <li>
              <button onClick={pageClick} value="2021Day1" name="2021Day1">
                Day 1
              </button>
            </li>

            <li>
              <button onClick={pageClick} value="2021Day2" name="2021Day2">
                Day 2
              </button>
            </li>

            <li>Day 3</li>
          </ul>
        </div>

        <div>{page}</div>

        {/* <Gallery2021Day1 /> */}
      </div>
    </div>
  );
};

export default Gallery;
