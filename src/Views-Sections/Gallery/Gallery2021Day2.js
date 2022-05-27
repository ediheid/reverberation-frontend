import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillCloseSquare } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

import styles from "../Gallery/gallery.module.scss";

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

const photosDay2 = [
  {
    img: img29,
    alt: "Insert image description here",
  },
  {
    img: img30,
    alt: "Insert image description here",
  },
  {
    img: img31,
    alt: "Insert image description here",
  },
  {
    img: img32,
    alt: "Insert image description here",
  },
  {
    img: img33,
    alt: "Insert image description here",
    id: 1,
  },
  {
    img: img34,
    alt: "Insert image description here",
    id: 2,
  },
  {
    img: img35,
    alt: "Insert image description here",
    id: 3,
  },
  {
    img: img36,
    alt: "Insert image description here",
    id: 4,
  },
  {
    img: img37,
    alt: "Insert image description here",
    id: 5,
  },
  {
    img: img38,
    alt: "Insert image description here",
    id: 6,
  },
  {
    img: img39,
    alt: "Insert image description here",
    id: 7,
  },
  {
    img: img40,
    alt: "Insert image description here",
    id: 8,
  },
  {
    img: img41,
    alt: "Insert image description here",
    id: 9,
  },
  {
    img: img42,
    alt: "Insert image description here",
    id: 10,
  },
  {
    img: img43,
    alt: "Insert image description here",
    id: 11,
  },
  {
    img: img44,
    alt: "Insert image description here",
    id: 12,
  },
  {
    img: img45,
    alt: "Insert image description here",
    id: 13,
  },
  {
    img: img46,
    alt: "Insert image description here",
    id: 14,
  },
  {
    img: img47,
    alt: "Insert image description here",
    id: 15,
  },
  {
    img: img48,
    alt: "Insert image description here",
    id: 16,
  },
  {
    img: img49,
    alt: "Insert image description here",
    id: 17,
  },
  {
    img: img50,
    alt: "Insert image description here",
    id: 18,
  },
  {
    img: img51,
    alt: "Insert image description here",
    id: 19,
  },
  {
    img: img52,
    alt: "Insert image description here",
    id: 20,
  },
  {
    img: img53,
    alt: "Insert image description here",
    id: 21,
  },
  {
    img: img54,
    alt: "Insert image description here",
    id: 22,
  },
  {
    img: img55,
    alt: "Insert image description here",
    id: 23,
  },
  {
    img: img56,
    alt: "Insert image description here",
    id: 24,
  },
  {
    img: img57,
    alt: "Insert image description here",
    id: 25,
  },
  {
    img: img58,
    alt: "Insert image description here",
    id: 26,
  },
  {
    img: img59,
    alt: "Insert image description here",
    id: 27,
  },
  {
    img: img60,
    alt: "Insert image description here",
    id: 28,
  },
  {
    img: img61,
    alt: "Insert image description here",
    id: 29,
  },
  {
    img: img62,
    alt: "Insert image description here",
    id: 30,
  },
  {
    img: img63,
    alt: "Insert image description here",
    id: 31,
  },
  {
    img: img64,
    alt: "Insert image description here",
    id: 32,
  },
  {
    img: img65,
    alt: "Insert image description here",
    id: 33,
  },
  {
    img: img66,
    alt: "Insert image description here",
    id: 34,
  },
  {
    img: img67,
    alt: "Insert image description here",
    id: 35,
  },
  {
    img: img68,
    alt: "Insert image description here",
    id: 36,
  },
  {
    img: img69,
    alt: "Insert image description here",
    id: 37,
  },
  {
    img: img70,
    alt: "Insert image description here",
    id: 38,
  },
  {
    img: img71,
    alt: "Insert image description here",
    id: 39,
  },
  {
    img: img72,
    alt: "Insert image description here",
    id: 40,
  },
  {
    img: img73,
    alt: "Insert image description here",
    id: 41,
  },
  {
    img: img74,
    alt: "Insert image description here",
    id: 42,
  },
  {
    img: img75,
    alt: "Insert image description here",
    id: 43,
  },
  {
    img: img76,
    alt: "Insert image description here",
    id: 44,
  },
  {
    img: img77,
    alt: "Insert image description here",
    id: 45,
  },
  {
    img: img78,
    alt: "Insert image description here",
    id: 46,
  },
  {
    img: img79,
    alt: "Insert image description here",
    id: 47,
  },
  {
    img: img80,
    alt: "Insert image description here",
    id: 48,
  },
  {
    img: img81,
    alt: "Insert image description here",
    id: 49,
  },
  {
    img: img82,
    alt: "Insert image description here",
    id: 50,
  },
  {
    img: img83,
    alt: "Insert image description here",
    id: 51,
  },
  {
    img: img84,
    alt: "Insert image description here",
    id: 52,
  },
  {
    img: img85,
    alt: "Insert image description here",
    id: 53,
  },
];

const Gallery2021Day2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Current will be used to get set the image id from the index of the images array - set with onClick event for modal
  const [current, setCurrent] = useState(0);

  // Handle open/close state of modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // variable and functions to click through modal slideshow
  const length = photosDay2.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Modal custom styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: "80%",
      maxWidth: "100rem",
      backgroundColor: "transparent",
      border: "none",
    },
  };
  return (
    <div className={styles["component-container"]}>
      <h3 className={styles["section-headings"]}>2021 · Day 2</h3>

      {photosDay2.map((photo, index) => {
        // Ids update to index number here so the order can be rearranged
        photo.id = index;

        return (
          <img
            className={styles["img-container"]}
            src={photo.img}
            alt={photo.img}
            key={photo.id}
            onClick={() => openModal(setCurrent(photo.id))}
          ></img>
        );
      })}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles["modal-content-container"]}>
          <button onClick={closeModal} className={styles["close-modal-button"]}>
            <AiFillCloseSquare />
          </button>

          <button onClick={nextSlide} className={styles["next-button"]}>
            <BiChevronRight />
          </button>

          <button onClick={previousSlide} className={styles["previous-button"]}>
            <BiChevronLeft />
          </button>

          <img
            className={styles["modal-img"]}
            src={photosDay2[current].img}
            // Alt tag is in gallery view
            alt=""
          ></img>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery2021Day2;
