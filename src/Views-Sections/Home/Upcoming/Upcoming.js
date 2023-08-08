import React from "react";
import styles from "../Upcoming/upcoming.module.scss";
import glueTrip from "./static/glue-trip.jpeg";
import vitorNoah from "./static/vitor-noah.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaBandcamp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaMixcloud } from "react-icons/fa";

const Upcoming = () => {
  // todo: refactor events and create a reusable component

  const events = [
    {
      eventDate: "16.11.2023",
      evenLocation: "Schokoladen",
      doors: "19.00",
      shows: "20.00",
      curfew: "22.00",

      bands: [
        {
          bandName: "GLUE TRIP (BR)",
          img: glueTrip,
          alt: "Glue Trip band portrait",
          bandText:
            'Glue Trip is a musical project led by Brazilian musician Lucas Santa Cruz. Formed in 2013 as an experimental recording project, it was quickly invited to perform live for the first time at the Prata da Casa project (SESC Pompeia). With three albums released and viral hits like "Elbow Pain" (17 million views on Youtube) and "La Edad del Futuro," Glue Trip has become a reference for contemporary Brazilian psychedelic music in Brazil and around the world. Showing maturity with their album "Nada Tropical," released in July 2022, the band has been solidifying their career for a decade, increasingly incorporating their Brazilian roots into their compositions. Produced by Zé Nigro, this album features collaborations with great names in Brazilian music, including maestro Arthur Verocai, São Paulo singer YMA, and musicians Otto and Felipe S from Pernambuco. With several international tours under their belt, including sold-out shows in London and Paris on their last tour, Glue Trip is building a solid background and a steady rise. They stand out as one of the most interesting and innovative musical projects of today.',
          bandcampLink: "https://gluetrip.bandcamp.com/album/nada-tropical",
          instagramLink: "https://www.instagram.com/gluetrip",
          youTubeLink: "https://youtu.be/tQ-WI46nmu0",
          facebookLink: "https://www.facebook.com/GlueTrip",
        },
        // Add a second band here
        {
          bandName: "VITOR NOAH (BR)",
          img: vitorNoah,
          alt: "Vitor Noah portrait",
          bandText:
            "Vitor Noah is a Brazilian-born classical guitarist currently based in Berlin. His first musical experiences were with the electric bass, as a founding member of the stoner rock band 'Hellbenders', with whom he recorded the band's first album. Vitor has participated in various music festivals and seminars, working with leading guitarists such as David Russell, Manuel Barrueco, Pepe Romero, Judicael Perroy, Zoran Dukic, Tillman Hoppstock, Pablo Márquez, Eduardo Isaac, Fábio Zanon, Paul Galbraith, Roberto Aussel, Eduardo Fernández, and Paul O’Dette. He will open this night of Brazilian music with a solo guitar performance that will probably leave the audience's mouths wide open.",
          instagramLink: "https://www.instagram.com/vitornoah",
          youTubeLink: "https://youtu.be/KY_WMcwRV7U",
          facebookLink: "hhttps://www.facebook.com/vitornoah/",
        },
      ],
      loveYourArtistTicketLink:
        "https://loveyourartist.com/de/events/glue-trip-vitor-noah-berlin-7FNXVS/overview",
      venueLink: "https://schokoladen.tickettoaster.de/produkte",
      venueLinkName: "Love Your Artist",
    },
  ];

  // ! todo: update styling to fit new mapping
  return (
    <div className={styles["upcoming-container"]} id="upcoming">
      {" "}
      <h2 className={styles["section-heading"]}>Upcoming Events</h2>
      <div>
        {/* event */}
        {events.map((event, index) => (
          <section key={index}>
            <h2 className={styles["date-heading"]}>
              {event.eventDate} <br />
              {event.evenLocation}
            </h2>
            <ul className={styles["times-list"]}>
              <li>Doors: {event.doors}</li>
              <li>Shows: {event.shows}</li>
              <li>Curfew: {event.curfew}</li>
            </ul>
            {/* band mapping */}
            <div className={styles["bands-container"]}>
              {event.bands.map((band, bandIndex) => (
                <div key={bandIndex} className={styles.band}>
                  <h3 className={styles["band-heading"]}>{band.bandName}</h3>
                  <p className={styles["band-text"]}>
                    <img
                      className={styles["band-img"]}
                      src={band.img}
                      alt={band.alt}
                    ></img>
                    {band.bandText}
                  </p>
                  {/* social media */}
                  <div className={styles["social-media-links-container"]}>
                    <div className={styles["social-icons-wrapper"]}>
                      {band.bandcampLink && (
                        <a
                          href={band.bandcampLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Link to Bandcamp page"
                        >
                          <FaBandcamp
                            className={styles["social-media-links"]}
                          />
                        </a>
                      )}

                      {band.instagramLink && (
                        <a
                          href={band.instagramLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Link to Instagram page"
                        >
                          <FiInstagram
                            className={styles["social-media-links"]}
                          />
                        </a>
                      )}

                      {band.youTubeLink && (
                        <a
                          href={band.youTubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Link to YouTube video"
                        >
                          <FaYoutube className={styles["social-media-links"]} />
                        </a>
                      )}

                      {band.facebookLink && (
                        <a
                          href={band.facebookLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Link to Facebook page"
                        >
                          <FaFacebookF
                            className={styles["social-media-links"]}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h3 className={styles["tickets"]}>
              Presale-Tickets via Love Your Artist & Ticket Toaster:
            </h3>
            <div className={styles["tickets-container"]}>
              <a
                className={styles["anchor-tags"]}
                href={event.loveYourArtistTicketLink}
                target="_blank"
                rel="noreferrer noopener"
                alt="Link to Love Your Artist tickets"
              >
                Love Your Artist{" "}
              </a>

              {event.venueLink && (
                <a
                  className={styles["anchor-tags"]}
                  href={event.venueLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  alt="Link to Tcket Toaster tickets"
                >
                  {event.venueLinkName}
                </a>
              )}
            </div>{" "}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
