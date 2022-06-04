import React, { useState, useCallback } from "react";

import styles from "../Gallery/gallery.module.scss";

import Gallery2021Day1 from "./Gallery2021Day1";
import Gallery2021Day2 from "./Gallery2021Day2";
import Gallery2021Day3 from "./Gallery2021Day3";

import videoDay1 from "../Gallery/Static/event-video-2.mp4"

const Gallery = () => {
// page state for conditional render of gallery components
const [page, setPage] = useState("");


// PageClick function lets user click on day to render the gallery component via the value of the corresponding button - all set inside useCallback function so components do not have to be recalculated 
let pageClick = useCallback((event)=>{

  // Jumps to top of page when Gallery Page is rendered
  window.scrollTo(0, 0)

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
          break;}

},[]);

 

// Back to overview onClick function
const toOverview = () => {
  setPage("")
}

  return (
    <div className={styles["gallery-page-container"]}>
      {/* <div className={styles["header-container"]}> */}
        {/* <h3 className={styles["section-headings"]}>Gallery</h3> */}

        {/* <div className={styles["list-container"]}>
          <div className={styles["container-2021"]}> */}
            {/* Made year correction here but not in the Component names or styles */}
          



            {/* <ul className={styles["ul"]}> */}
              {/* <li>
                <button
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day1"
                >
                  Day 1
                </button>
              </li> */}

              {/* <li>
                <button
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day2"
                >
                  Day 2
                </button>
              </li>

              <li>
                {" "}
                <button
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day3"
                >
                  Day 3
                </button>
              </li> */}
            {/* </ul> */}


          {/* </div>
        </div>
      </div> */}

      <div className={styles["content-container"]}>
        {/* Display overview on render until new day is selected to render */}
        {page === "" ? 
        
        // Page that will be rendered on landing
        <div>


         <div className={styles["video-container"]}>

{/* // ! Year heading */}

<h3 className={styles["year-subheading"]}>2020</h3>


         <video
            className={styles["reverberation-video-container"]}
            autoplay="autoplay"
            muted="true"
            loop="true"
            webkit-playsinline="true"
            playsinline="true"
            alt="2020 festival video"
          >
            <source src={videoDay1} type="video/mp4"></source>
          </video>{" "}

          <button
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day1"
                >
                  Day 1
                </button>
        </div>

        <div className={styles["video-container"]}>
         <video
            className={styles["reverberation-video-container"]}
            autoplay="autoplay"
            muted="true"
            loop="true"
            webkit-playsinline="true"
            playsinline="true"
            alt="2020 festival video"
          >
            <source src={videoDay1} type="video/mp4"></source>
          </video>{" "}

          <button
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day2"
                >
                  Day 2
                </button>
        </div>



        <div className={styles["video-container"]}>
         <video
            className={styles["reverberation-video-container"]}
            autoplay="autoplay"
            muted="true"
            loop="true"
            webkit-playsinline="true"
            playsinline="true"
            alt="2020 festival video"
          >
            <source src={videoDay1} type="video/mp4"></source>
          </video>{" "}

          <button
                  className={styles["gallery-buttons"]}
                  onClick={pageClick}
                  value="2021Day3"
                >
                  Day 3
                </button>
        </div>
        </div>
        
        // Conditional render
        : 
      
        <div>
          <button onClick={toOverview}>Back</button>
          {page}</div>}
      </div>
    </div>
  );
};

export default Gallery;
