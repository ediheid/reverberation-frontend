import React from "react";

import styles from "../Gallery/gallery.module.scss";

import img1 from "../Gallery/Static/Day3-3.png";
import img2 from "../Gallery/Static/Day3-5.png";
import img3 from "../Gallery/Static/Day3-10.png";
import img4 from "../Gallery/Static/Day3-11.png";
import img5 from "../Gallery/Static/Day3-12.png";
import img6 from "../Gallery/Static/Day3-13.png";
import img7 from "../Gallery/Static/Day3-15.png";
import img8 from "../Gallery/Static/Day3-16.png";
import img9 from "../Gallery/Static/Day3-19.png";
import img10 from "../Gallery/Static/Day3-20.png";
import img11 from "../Gallery/Static/Day3-21.png";
import img12 from "../Gallery/Static/Day3-23.png";
import img13 from "../Gallery/Static/Day3-27.png";
import img14 from "../Gallery/Static/Day3-28.png";
import img15 from "../Gallery/Static/Day3-33.png";
import img16 from "../Gallery/Static/Day3-34.png";
import img17 from "../Gallery/Static/Day3-35.png";
import img18 from "../Gallery/Static/Day3-36.png";
import img19 from "../Gallery/Static/dima.png";
import img20 from "../Gallery/Static/dima2.png";

const photosDay3 = [
  {
    img: img1,
    alt: "Insert image description here",
  },
  {
    img: img2,
    alt: "Insert image description here",
  },
  {
    img: img3,
    alt: "Insert image description here",
  },
  {
    img: img4,
    alt: "Insert image description here",
  },
  {
    img: img5,
    alt: "Insert image description here",
  },
  {
    img: img6,
    alt: "Insert image description here",
  },
  {
    img: img7,
    alt: "Insert image description here",
  },
  {
    img: img8,
    alt: "Insert image description here",
  },
  {
    img: img9,
    alt: "Insert image description here",
  },
  {
    img: img10,
    alt: "Insert image description here",
  },
  {
    img: img11,
    alt: "Insert image description here",
  },
  {
    img: img12,
    alt: "Insert image description here",
  },
  {
    img: img13,
    alt: "Insert image description here",
  },
  {
    img: img14,
    alt: "Insert image description here",
  },
  {
    img: img15,
    alt: "Insert image description here",
  },
  {
    img: img16,
    alt: "Insert image description here",
  },
  {
    img: img17,
    alt: "Insert image description here",
  },
  {
    img: img18,
    alt: "Insert image description here",
  },
  {
    img: img19,
    alt: "Insert image description here",
  },
  {
    img: img20,
    alt: "Insert image description here",
  },
];

const Gallery2021Day3 = () => {
  return (
    <div className={styles["component-container"]}>

<h3 className={styles["section-headings"]}>2021 · Day 3</h3>

      {photosDay3.map((photo) => (
        <img
          className={styles["img-container"]}
          src={photo.img}
          alt={photo.img}
        ></img>
      ))}
    </div>
  );
};

export default Gallery2021Day3;
