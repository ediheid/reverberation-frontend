import React from "react";
import styles from "../Upcoming/upcoming.module.scss";
import margaritas from "./static/margaritas.jpeg";
import blueChesterfield from "./static/blue-chesterfield.jpg";
import neumaticParlo from "./static/neumatic-parlo.jpg";
import lawnChair from "./static/lawn-chair.jpg";
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
            <img
              className={styles["band-img-left"]}
              src={blueChesterfield}
              alt="Blue Chesterfield band portrait - members on steps"
            ></img>
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
      {/* // !!! Next dates */}
      <h2 className={styles["date-heading"]}>10.07.2023</h2>
      <ul className={styles["times-list"]}>
        <li>Doors: 19.00</li>
        <li>Shows: 20.00</li>
        <li>Curfew: 22.00</li>
      </ul>
      <div className={styles["bands-container"]}>
        <h3 className={styles["band-heading"]}>NEUMATIC PARLO</h3>
        <div className={styles.band}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img"]}
              src={neumaticParlo}
              alt="Neumatic Parlo band portrait, credit Max Mueller"
            ></img>
            Melancholia! Where your face should be reflected on the glittering
            surface of the Rhine, there is nothing but emptiness. The river
            carries our thoughts away in an endless stream of doubt and teenage
            angst. An intense longing located somewhere between Düsseldorf's
            notorious old town and the Oberkassel district on the other side of
            the Rhine. Where could rebellion against boredom thrive better than
            here in Düsseldorf's uptown? In an area of tension between deceptive
            wealth, abonded sub culture spaces and the fabled salon des
            amateurs, there’s something cooking and suddenly Oberkassel and L.A.
            are not that far away anymore. On their second EP ‘Random Toaster’
            Neumatic Parlo play melancholic psychedelic pop. Gloomy lyrics meet
            delicate melodies and dreamy soundscapes. Vincent Göttler, Justin
            Jansen, Luis Wedekind, Frederick Oltersdorf and Simon Hartmann
            create a sound that is simultaneously international but with
            Motorik, synthesizers and rattling guitars always rooted in the
            tradition of their hometown. As if he were an antihero of the early
            80s, Göttler sings about fear, doubt and a long search. The answer
            whether he will find what he is looking for is still pending, but
            the existential need already sounds just like honey. After their
            debut EP All Purpose Slicer still sounded like post punk and no
            wave, Neumatic Parlo are much more psychedelic and playful on Random
            Toaster. Sometimes that sounds a little like Yo La Tengo or as
            grueling and noisy as a Ty Segall. Songs like “Real Insight” and
            “Airplane” rave about dark romantic trips into other spheres, while
            “Nicolas Winding Refn” is a scenario full of paranoia that could
            have sprung from a film by the same Danish cult director. The
            anxiety becomes almost palpable when Göttler's nervous vocal line
            lies over a rumbling drum kit and is then literally overrun by a
            wall of guitars and noise. In “Lake Perris State Recreation Area”
            Neumatic Parlo reveal the band's own myth and tell of the joint road
            trip to the Desert Daze Festival in the Californian desert. In
            addition to countless Fuzz War escapades, it was an appearance by
            Slowdive that clearly left its mark here. For the recordings of
            Random Toaster, the band and producer Patrick Stäudle retired to a
            farm in the Black Forest. Seclusion and inner contemplation clearly
            reverberate here. Random Toaster will be released on May 14th on
            UNIQUE Records.
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

        <h3 className={styles["band-heading"]}>Lawn Chair</h3>
        <div className={styles["band"]}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img-left"]}
              src={lawnChair}
              alt="Lawn Chair band portrait, credit Frederike Wetzels"
            ></img>
            LAWN CHAIR sind hier, um zu bleiben! Seit ihrem Bühnendebüt Ende
            2021 hat die deutsch- amerikanische Indie-Punk-Band unermüdlich
            geprobt, aufgenommen und Shows gespielt, unter anderem beim
            Reeperbahn Festival, Waves Vienna, c/o-pop und Watt En Schlick. Die
            fünfköpfige Band um die aus Seattle stammende Sängerin Claudia
            Schlutius, die zusammen mit Gitarrist Eric Haupt die Songs schreibt,
            hat sich mit ihrem gitarrenlastigen, energiegeladenen Sound,
            Schlutius' kraftvoller Bühnenpräsenz und ihrem akribischen
            Songwriting schnell einen Namen in der deutschen Indie-Szene
            gemacht. Nach der Veröffentlichung einer selbstproduzierten ersten
            EP im Frühjahr 2022 folgten im Herbst die Aufnahmen für den
            Nachfolger "Eat The Beans And Wear The Jeans!". Hierbei konnten sie
            die Hilfe von Produzent Olaf Opal und des in L.A. ansässigen
            Mischers Chris Coady in Anspruch nehmen. 2023 gehen LAWN CHAIR auf
            ihre erste eigene Headline-Tour durch Deutschland. “Eat The Beans
            And Wear The Jeans!” ist die zweite EP von LAWN CHAIR und führt den
            mit der 2022 veröffentlichten Debüt-EP eingeschlagenen Weg
            konsequent fort. Einen Schritt nach vorne nehmend vom DIY-Ansatz der
            letzten Veröffentlichung arbeitete die Band diesmal mit dem
            renommierten Produzenten Olaf Opal (The Notwist u.v.m.) sowie mit
            dem in L.A. ansässigen Mischer Chris Coady (Beach House, TV On The
            Radio) zusammen. Herausgekommen sind Songs, die ein noch
            ausgefeilteres Soundspektrum bieten und gleichzeitig immer noch 100
            Prozent LAWN CHAIR sind. Schrammelige Punkgitarren mit
            selbstironischen Countrylicks, schwelgerische Reverbarien und
            monotone, treibende Drumbeats tragen den mal lethargischen, mal
            explosiven Gesang von Frontfrau Claudia Schlutius durch Songs über
            Selbstmitleid, den Traum vom Leben im Showbusiness und die
            Ausweglosigkeit des ländlichen Idyllenhorrors.
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
    </div>
  );
};

export default Upcoming;
