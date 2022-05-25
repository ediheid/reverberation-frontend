import React, { useState } from "react";

import styles from "../Gallery/gallery.module.scss";

import Gallery2021Day1 from "./Gallery2021Day1";

import img29 from "../Gallery/Static/Day2-1.png";
import img30 from "../Gallery/Static/Day2-2.png";
import img31 from "../Gallery/Static/Day2-5.png";
import img32 from "../Gallery/Static/Day2-6.png";
import img33 from "../Gallery/Static/Day2-7.png";
import img34 from "../Gallery/Static/Day2-8.png";
import img35 from "../Gallery/Static/Day2-11.png";
import img36 from "../Gallery/Static/Day2-17.png";
import img37 from "../Gallery/Static/Day2-18.png";
import img38 from "../Gallery/Static/Day2-19.png";
import img39 from "../Gallery/Static/Day2-20.png";
import img40 from "../Gallery/Static/Day2-24.png";
import img41 from "../Gallery/Static/Day2-28.png";
import img42 from "../Gallery/Static/Day2-31.png";
import img43 from "../Gallery/Static/Day2-32.png";
import img44 from "../Gallery/Static/Day2-33.png";
import img45 from "../Gallery/Static/Day2-36.png";
import img46 from "../Gallery/Static/Day2-39.png";
import img47 from "../Gallery/Static/Day2-40.png";
import img48 from "../Gallery/Static/Day2-41.png";
import img49 from "../Gallery/Static/Day2-43.png";
import img50 from "../Gallery/Static/Day2-44.png";
import img51 from "../Gallery/Static/Day2-45.png";
import img52 from "../Gallery/Static/Day2-46.png";
import img53 from "../Gallery/Static/Day2-47.png";
import img54 from "../Gallery/Static/Day2-48.png";
import img55 from "../Gallery/Static/Day2-49.png";
import img56 from "../Gallery/Static/Day2-55.png";
import img57 from "../Gallery/Static/Day2-56.png";
import img58 from "../Gallery/Static/Day2-58.png";
import img59 from "../Gallery/Static/Day2-62.png";
import img60 from "../Gallery/Static/Day2-64.png";
import img61 from "../Gallery/Static/Day2-66.png";
import img62 from "../Gallery/Static/Day2-67.png";
import img63 from "../Gallery/Static/Day2-68.png";
import img64 from "../Gallery/Static/Day2-69.png";
import img65 from "../Gallery/Static/Day2-74.png";
import img66 from "../Gallery/Static/Day2-76.png";
import img67 from "../Gallery/Static/Day2-80.png";
import img68 from "../Gallery/Static/Day2-81.png";
import img69 from "../Gallery/Static/Day2-86.png";
import img70 from "../Gallery/Static/Day2-87.png";
import img71 from "../Gallery/Static/Day2-88.png";
import img72 from "../Gallery/Static/Day2-89.png";
import img73 from "../Gallery/Static/Day2-90.png";
import img74 from "../Gallery/Static/Day2-92.png";
import img75 from "../Gallery/Static/Day2-93.png";
import img76 from "../Gallery/Static/Day2-96.png";
import img77 from "../Gallery/Static/Day2-98.png";
import img78 from "../Gallery/Static/Day2-99.png";
import img79 from "../Gallery/Static/Day2-100.png";
import img80 from "../Gallery/Static/Day2-102.png";
import img81 from "../Gallery/Static/Day2-105.png";
import img82 from "../Gallery/Static/Day2-109.png";
import img83 from "../Gallery/Static/Day2-110.png";
import img84 from "../Gallery/Static/Day2-111.png";
import img85 from "../Gallery/Static/Day2-114.png";

const Gallery = () => {
  const [page, setPage] = useState("");

  const pages = [
    {
      id: "2021Day1",
      component: <Gallery2021Day1 />,
    },
  ];

  console.log("Test", pages[0].component);

  let pageClick = () => {
    setPage(pages[0].component);
  };

  return (
    <div className={styles["gallery-page-container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["sub-heading-container"]}>
          <h3 className={styles["section-headings"]}>Gallery</h3>

          <ul>
            <h3>2021</h3>
            <li>
              <button onClick={pageClick}>Day 1</button>
            </li>
            <li>Day 2</li>
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
