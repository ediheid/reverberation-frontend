import React, { useState } from "react";

import styles from "../Gallery/gallery.module.scss";

import Gallery2021Day1 from "./Gallery2021Day1";
import Gallery2021Day2 from "./Gallery2021Day2";
import Gallery2021Day3 from "./Gallery2021Day3";

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
    {
      id: "2021Day3",
      component: <Gallery2021Day3 />,
    },
  ];

  // Todo: get index of object and pass into switch statement

  let pageClick = (event) => {
    // event.preventDefault();

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
  };

  return (
    <div className={styles["gallery-page-container"]}>
      <div className={styles["header-container"]}>
        ouhfgoivuabdfivbadfoiuvgoifbvifbv
      </div>

      <div className={styles["sub-heading-container"]}>
        {/* <h3 className={styles["section-headings"]}>Gallery</h3> */}

        <div className={styles["list-container"]}>
          <ul className={styles["ul"]}>
            <h3>2021</h3>
            <li>
              <button onClick={pageClick} value="2021Day1">
                Day 1
              </button>
            </li>

            <li>
              <button onClick={pageClick} value="2021Day2">
                Day 2
              </button>
            </li>

            <li>
              {" "}
              <button onClick={pageClick} value="2021Day3">
                Day 3
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles["content-container"]}>
        {/* // ? Conditionally render gallery page Component */}
        <div>{page}</div>
      </div>
    </div>
  );
};

export default Gallery;
