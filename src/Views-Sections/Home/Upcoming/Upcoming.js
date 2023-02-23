import React from "react";
import styles from "../Upcoming/upcoming.module.scss";
import margaritas from "./static/margaritas.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaBandcamp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Upcoming = () => {
  return (
    <div className={styles["upcoming-container"]} id="upcoming">
      {" "}
      <h2 className={styles["section-heading"]}>Upcoming Events</h2>
      <h2 className={styles["date-heading"]}>10.07.2023</h2>
      <ul className={styles["times-list"]}>
        <li>Doors: 19.00</li>
        <li>Shows: 20.00</li>
        <li>Curfew: 22.00</li>
      </ul>
      <div className={styles["bands-container"]}>
        <h3 className={styles["band-heading"]}>MARGARITAS PODRIDAS (MEX)</h3>
        <div className={styles.band}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img"]}
              src={margaritas}
              alt="Margaritas Podridas - black and white band portrait"
            ></img>
            ...(Rotten Daisies) is a rock band formed in Hermosillo, Sonora,
            which consists of Carolina Enríquez (bass/vocals), Esli Meuly
            (guitar) and Rafael Armenta (guitar/drums). Their debut album
            "Porcelain Mannequin" was released in 2018, it is available on all
            common music platforms and it was released on vinyl. Three years
            later they released their second album self-titled "Margaritas
            Podridas" in April of 2021 and they have been very active since,
            playing important shows in Mexico and United States such as opening
            for IDLES in Mexico City at Palacio de Los Deportes, Festivals such
            as Golden Voice’s This Ain’t No Picnic (Pasadena, California) Ruido
            Fest (Chicago,IL) and opening for the Melvins in Los Angeles. Their
            latest single “No Quiero Ser Madre” was released recently this year
            in August, bringing back the punk and raw sound that characterizes
            the band. Margaritas have recorded important live sessions such as
            KEXP from Seattle (available on YouTube) and VansChannel666, and
            they are currently working on the recording of what would be their
            third album for the next year. In 2023 so far they have already
            announced a show with The Smashing Pumpkins in Mexico City at Foro
            Sol among other relevants bands and artists such as Deafheaven,
            Turnstile and Peter Hook, as well as big bands from Mexico such as
            The Warning and El Shirota. The festival will take place in Foro Sol
            which is one of the biggest forums in Mexico with almost 60,000
            capacity. Margaritas are one of the most active and outstanding
            proyects from Mexico’s Rock Scene and they have plans to continue
            touring around the U.S., Europe and Latin America with the purpose
            of expanding their crowd and sharing their music and contagious
            energy with the rest of the world.
          </p>
          <div className={styles["social-media-links-container"]}>
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://margaritaspodridas.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.instagram.com/margaritaspodridas/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://youtu.be/tAbAofaCcfc"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/MargaritasPodridas"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to facebook page"
              >
                {" "}
                <FaFacebookF className={styles["social-media-links"]} />{" "}
              </a>
            </div>
          </div>
        </div>

        <h3 className={styles["band-heading"]}>BLUE CHESTERFIELD (CZ)</h3>
        <div className={styles["band"]}>
          <p className={styles["band-text"]}>
            Blue Chesterfield is a project started by singer, poet and
            multi-instrumentalist David Jirka from Czech Republic who has been
            later accompanied by several musicians who together created the same
            titled band. Their influence in more traditional genres like
            Country, Blues or Psychedelic Rock is a root stone for their sound,
            but Blue Chesterfield are not afraid to experiment with stuff like
            Shoegaze, Noise or even Jazz, together with its wild live
            performances creating a sonic experience that will be remembered.
          </p>
          <div
            className={styles["social-media-links-container"]}
            id={styles["social-right"]}
          >
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://bluechesterfield.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.instagram.com/_bluechesterfield_/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://youtu.be/dDx0NBIJZjY"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/bluechesterfield"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to facebook page"
              >
                {" "}
                <FaFacebookF className={styles["social-media-links"]} />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3 className={styles["tickets"]}>
        Presale-Tickets via Love Your Artist & Ticket Toaster:
      </h3>
      <a
        className={styles["anchor-tags"]}
        href="https://loveyourartist.com/de/events/margaritas-podridas-berlin-VOUV5J/overview"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to Love Your Artist tickets"
      >
        Love Your Artist{" "}
      </a>

      <a
        className={styles["anchor-tags"]}
        href="https://schokoladen.tickettoaster.de/produkte"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to Tcket Toaster tickets"
      >
        Ticket Toaster{" "}
      </a>

    </div>
  );
};

export default Upcoming;
