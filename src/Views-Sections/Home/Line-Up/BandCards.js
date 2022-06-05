import React from "react";

import testImg from "../Line-Up/download.jpeg";

import styles from "../Line-Up/band-cards.module.scss";





const BandCards = () => {




    return (
        <>
        
        {/* <div className={styles["container"]}> */}

<div className={`${styles["card"]} ${styles["cards__item"]}`}>
  <div className={styles["card__frame"]}>
    <div className={styles["card__picture"]}>
     <img className={styles["image"]} src={testImg} alt="" width="100%"></img>
    </div>
    <h2 className={styles["card__title"]}>Tool</h2>
    <h3 className={styles["band-country"]}> US </h3>
  </div>
  <div className={styles["card__overlay"]}></div>
  <div className={styles["card__content"]}>
    <h2>Tool</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum veritatis id quia cupiditate sed architecto aliquam nostrum unde nam minima voluptas dicta, beatae sint reprehenderit sit ducimus officiis ratione?</p>
  </div>
</div>


{/* </div> */}
        </>
    )
}

export default BandCards;