import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillCloseSquare } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
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
    id: 1,
  },
  {
    img: img2,
    alt: "Insert image description here",
    id: 2,
  },
  {
    img: img3,
    alt: "Insert image description here",
    id: 3,
  },
  {
    img: img4,
    alt: "Insert image description here",
    id: 4,
  },
  {
    img: img5,
    alt: "Insert image description here",
    id: 5,
  },
  {
    img: img6,
    alt: "Insert image description here",
    id: 6,
  },
  {
    img: img7,
    alt: "Insert image description here",
    id: 7,
  },
  {
    img: img8,
    alt: "Insert image description here",
    id: 8,
  },
  {
    img: img9,
    alt: "Insert image description here",
    id: 9,
  },
  {
    img: img10,
    alt: "Insert image description here",
    id: 10,
  },
  {
    img: img11,
    alt: "Insert image description here",
    id: 11,
  },
  {
    img: img12,
    alt: "Insert image description here",
    id: 12,
  },
  {
    img: img13,
    alt: "Insert image description here",
    id: 13,
  },
  {
    img: img14,
    alt: "Insert image description here",
    id: 14,
  },
  {
    img: img15,
    alt: "Insert image description here",
    id: 15,
  },
  {
    img: img16,
    alt: "Insert image description here",
    id: 16,
  },
  {
    img: img17,
    alt: "Insert image description here",
    id: 17,
  },
  {
    img: img18,
    alt: "Insert image description here",
    id: 18,
  },
  {
    img: img19,
    alt: "Insert image description here",
    id: 19,
  },
  {
    img: img20,
    alt: "Insert image description here",
    id: 20,
  },
];

const Gallery2021Day3 = () => {
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
  const length = photosDay3.length;

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
      <h3 className={styles["section-headings"]}>2021 · Day 3</h3>

      {photosDay3.map((photo, index) => {
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
            src={photosDay3[current].img}
            // Alt tag is in gallery view
            alt=""
          ></img>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery2021Day3;
