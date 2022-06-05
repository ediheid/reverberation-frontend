import React from "react";

import BandCards from "./BandCards";

import styles from "../Line-Up/line-up.module.scss";

const LineUp = () => {

  // Todo: Decide how to order - alphabetically? use sort method
const bands = [
  {
bandName: "LoveNJoy",
img: "",
text: "lkjndlvjcnslda",
alt: "",

  },
  {
    bandName: "The Big Idea",
    img: "",
    text: "lkjndlvjcnslda",
    alt: "",
    
      },
      {
        bandName: "Mitsune",
        img: "",
        text: "lkjndlvjcnslda",
        alt: "",
        
          },
          {
            bandName: "Rolando Bruno",
            img: "",
            text: "lkjndlvjcnslda",
            alt: "",
            
              },
              {
                bandName: "13yearcicada",
                img: "",
                text: "lkjndlvjcnslda",
                alt: "",
                
                  },
                  {
                    bandName: "Candy Flip DJ's",
                    img: "",
                    text: "lkjndlvjcnslda",
                    alt: "",
                    
                      },
                      {
                        bandName: "Glue Trip",
                        img: "",
                        text: "lkjndlvjcnslda",
                        alt: "",
                        
                          }
                          
]

// ! Sort bands alphabetically
bands.sort((a,b) => a.bandName.localeCompare(b.bandName))

// console.log(bands)


  return (
    <div className={styles["line-up-container"]} id="line-up">

      {/* // ? Saved for when it goes back to 'to be announced' */}
      {/* <h2 className={styles["section-heading"]}>Line-up</h2> */}
      {/* <h2 className={styles["section-heading"]}>To be Announced</h2> */}

      <div className={styles["bands-container"]}>


<BandCards/>

      
{/* Map sorted bands.. */}
        {bands.map((band) => (

  <div className={styles["band-box"]}>
    
    <img className={styles["band-img"]} src={band.img} alt={band.alt}></img>
    <span className={styles["bandname"]}>{band.bandName}</span>
    
    </div>


        ))}
      
      </div>
    </div>
  );
};

export default LineUp;
