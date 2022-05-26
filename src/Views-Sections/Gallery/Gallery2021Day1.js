import React from "react";

import styles from "../Gallery/gallery.module.scss";

import img1 from "../Gallery/Static/Day1-2.png";
import img2 from "../Gallery/Static/Day1-3.png";
import img3 from "../Gallery/Static/Day1-4.png";
import img4 from "../Gallery/Static/Day1-8.png";
import img5 from "../Gallery/Static/Day1-9.png";
import img6 from "../Gallery/Static/Day1-10.png";
import img7 from "../Gallery/Static/Day1-11.png";
import img8 from "../Gallery/Static/Day1-12.png";
import img9 from "../Gallery/Static/Day1-13.png";
import img10 from "../Gallery/Static/Day1-14.png";
import img11 from "../Gallery/Static/Day1-23.png";
import img12 from "../Gallery/Static/Day1-26.png";
import img13 from "../Gallery/Static/Day1-29.png";
import img14 from "../Gallery/Static/Day1-30.png";
import img15 from "../Gallery/Static/Day1-37.png";
import img16 from "../Gallery/Static/Day1-38.png";
import img17 from "../Gallery/Static/Day1-39.png";
import img18 from "../Gallery/Static/Day1-46.png";
import img19 from "../Gallery/Static/Day1-47.png";
import img20 from "../Gallery/Static/Day1-48.png";
import img21 from "../Gallery/Static/Day1-49.png";
import img22 from "../Gallery/Static/Day1-50.png";
import img23 from "../Gallery/Static/Day1-53.png";
import img24 from "../Gallery/Static/Day1-54.png";
import img25 from "../Gallery/Static/Day1-55.png";
import img26 from "../Gallery/Static/Day1-56.png";
import img27 from "../Gallery/Static/Day1-58.png";
import img28 from "../Gallery/Static/Day1-61.png";

const photosDay1 = [
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
  {
    img: img21,
    alt: "Insert image description here",
  },
  {
    img: img22,
    alt: "Insert image description here",
  },
  {
    img: img23,
    alt: "Insert image description here",
  },
  {
    img: img24,
    alt: "Insert image description here",
  },
  {
    img: img25,
    alt: "Insert image description here",
  },
  {
    img: img26,
    alt: "Insert image description here",
  },
  {
    img: img27,
    alt: "Insert image description here",
  },
  {
    img: img28,
    alt: "Insert image description here",
  },
];

const Gallery2021Day1 = () => {
  return (
    <div className={styles["component-container"]}>
 
        <h3 className={styles["section-headings"]}>2021 · Day 1</h3>
     



      {photosDay1.map((photo) => (
        <img
          className={styles["img-container"]}
          src={photo.img}
          alt={photo.img}
        ></img>
      ))}
    </div>
  );
};

export default Gallery2021Day1;
