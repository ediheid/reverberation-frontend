import React from "react";
import styles from "../Upcoming/upcoming.module.scss";
import margaritas from "./static/margaritas.jpeg";
import blueChesterfield from "./static/blue-chesterfield.jpg";
import acidTongue from "./static/acid-tongue.jpg";
import jackLadder from "./static/jack-ladder.jpeg";
import teleboys from "./static/teleboys.png";
import glueTrip from "./static/glue-trip.jpeg";
import vitorNoah from "./static/vitor-noah.jpeg";
import loveNJoy from "./static/love-n-joy.jpg";
import chillera from "./static/chillera.jpg";
import dharmaChain from "./static/dharma-chain.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaBandcamp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaMixcloud } from "react-icons/fa";

const Upcoming = () => {
  // todo: refactor events and create a reusable component
  // const event = [
  //   {
  //     eventDate: "26.05.2023",
  //     evenLocation: "Schokoladen",
  //     doors: "19.00",
  //     shows: "20.00",
  //     curfew: "22.00",
  //     afterShow: "22.30",

  //     band: {
  //       bandName: "Neumatic Parlo",
  //       img: neumaticParlo,
  //       alt: "Neumatic Parlo band portrait, credit Max Mueller",
  //       bandText: "",
  //     },
  //   },
  // ];

  return (
    <div className={styles["upcoming-container"]} id="upcoming">
      {" "}
      <h2 className={styles["section-heading"]}>Upcoming Events</h2>
      {/* // ?? start section */}
      <h2 className={styles["date-heading"]}>
        24.06.2023 <br />
        Schokoladen
      </h2>
      <ul className={styles["times-list"]}>
        <li>Doors: 19.00</li>
        <li>Shows: 20.00</li>
        <li>Aftershow: 22.00</li>
      </ul>
      <div className={styles["bands-container"]}>
        <h3 className={styles["band-heading"]}>ACID TONGUE (US)</h3>
        <div className={styles.band}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img"]}
              src={acidTongue}
              alt="Acid Tongue band portrait"
            ></img>
            Guy Keltner, the primary songwriter for Acid Tongue, took a rough
            couple of years and turned them into libretto. “I became incredibly
            depressed and started spending a lot of time at the Arboretum in
            Seattle. I had just moved home and was spending all day absorbing
            this diversity of plants and sounds at the park. I poured myself
            into writing some deeply personal songs, heavily influenced by the
            artists in my immediate orbit.” During the recording of Arboretum,
            Keltner was diagnosed with bipolar disorder, and decided to get
            sober from alcohol. “Kicking booze helped me focus in the studio,
            but I needed help finishing this album. I was incredibly fortunate
            to work with musicians that I actually listened to and enjoyed. They
            individually elevated each song to be something beautiful and
            unique.” The members of Seattle rock & roll outfit Acid Tongue are
            quite literally bouncing off the walls. In fact, it’s hard to even
            call them a “Seattle band”. There’s the core duo of songwriter
            Keltner and drummer/vocalist Ian Cunningham—currently based in the
            Pacific Northwest—but with numerous touring and studio musicians
            scattered between Paris, New York, London, Mexico City, Los Angeles,
            & Austin, the rotating roster seems to grow larger by the day.. The
            band’s latest release, Arboretum, takes things in the next logical
            direction. Part glam-rock opus, part mixtape, this LP from Acid
            Tongue marks a significant step forward for a band well-versed in
            straddling the line between psychedelia and power-pop.
          </p>
          <div className={styles["social-media-links-container"]}>
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://acidtongue.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.instagram.com/acidtongue/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://youtu.be/_7TLodRM2AA"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/AcidTongue/"
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

        <h3 className={styles["band-heading"]}>TOMMY AND THE TELEBOYS (DE)</h3>
        <div className={styles["band"]}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img-left"]}
              src={teleboys}
              alt="Teleboys band portrait, four members, black and white photograph"
            ></img>
            Tommy and the Teleboys play psychedelic death boogie in the
            wasteland between Halle and Berlin. Inspired by the raw energy of
            garage and noise, their music is loaded with a ten-ton shovel of
            guitar riffs and driving synth lines. Psychedelic soundscapes
            alternate with hard-hitting fuzz storms and sugar sweet westcoast
            melodies.This is a sound that yearns for the golden era of
            psychedelic rock yet plays joyfully with innovation and weirdness.
            Tommy and the Teleboys consist of Tommy (Drums,Synth, Vocals) and
            the Teleboys (Vocals, Guitars, Bass, Synth). This formation came
            together during the uncertainty of the pandemic. They managed to
            grow into a well-rehearsed unit after scoring local gigs despite the
            difficult times. After months of hard work and two studio EPs Tommy
            and the Teleboys have hit their current style. So no time to rest -
            new releases are in the making.It*s gonna be wild!
          </p>
          <div
            className={styles["social-media-links-container"]}
            id={styles["social-right"]}
          >
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://tommyandtheteleboys.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://instagram.com/tommyandtheteleboys?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.youtube.com/watch?v=W9vD9orgbsw&t=948s"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/TommyandtheTeleboys"
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
      <h2 className={styles["date-heading"]}>
        Aftershow with Heller Than Hell & Flux Wildly
      </h2>
      <div className={styles["aftershow-container"]}>
        <div className={styles["aftershow-acts"]}>
          <h3 className={`${styles["band-heading"]} ${styles["acts-heading"]}`}>
            Heller Than Hell
          </h3>
          <p className={styles["acts-text"]}>
            Funk, Afro-Hi-Life, Psychedelic Cumbia, Latin Jazz, Oriental Breaks,
            RnB, Disco.
          </p>
          <div className={styles["acts-social-container"]}>
            <a
              href="https://www.instagram.com/hellerthanhell"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Instagram page"
            >
              <FiInstagram className={styles["social-media-links"]} />
            </a>
            <a
              href="https://soundcloud.com/hellerthanhell"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Soundcloud page"
            >
              <FaSoundcloud className={styles["social-media-links"]} />
            </a>
          </div>
        </div>
        <div className={styles["aftershow-acts"]}>
          {" "}
          <h3 className={`${styles["band-heading"]} ${styles["acts-heading"]}`}>
            Flux Wildly
          </h3>
          <p className={styles["acts-text"]}>
            Weird, Obscure, Rock, Crazy, Tropical, Surprising - Reverberation
            Fest's long-time host jets up the road to deliver musical code.
          </p>
          <div className={styles["acts-social-container"]}>
            <a
              href="https://www.mixcloud.com/.../radio-brain-wave-20-march-2022/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Mixcloud"
            >
              <FaMixcloud className={styles["social-media-links"]} />
            </a>
          </div>
        </div>
      </div>
      <h3 className={styles["tickets"]}>
        Presale-Tickets via Love Your Artist & Ticket Toaster:
      </h3>
      <div className={styles["tickets-container"]}>
        <a
          className={styles["anchor-tags"]}
          href="https://loveyourartist.com/en/events/acid-tongue-tommy-berlin-QTDS4X/overview"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to Love Your Artist tickets"
        >
          Love Your Artist{" "}
        </a>
        <a
          className={styles["anchor-tags"]}
          href="https://schokoladen.tickettoaster.de/produkte/55391-tickets-neumatic-parlo-lawn-chair-schokoladen-berlin-am-26-05-2023"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to Tcket Toaster tickets"
        >
          Ticket Toaster{" "}
        </a>
      </div>
      {/* // ?? end section */}
      {/* // !! start section */}
      <h2 className={styles["date-heading"]}>
        10.07.2023 <br />
        Schokoladen
      </h2>
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
      <div className={styles["tickets-container"]}>
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
      {/* // !! end */}
      {/* // * Next dates */}
      <h2 className={styles["date-heading"]}>
        18.07.2023 <br />
        8mm Bar
      </h2>
      <ul className={styles["times-list"]}>
        <li>ONLY GERMAN SHOW 2023</li>
        <li>On stage: 20.00</li>
      </ul>
      <div className={styles["bands-container"]}>
        <h3 className={styles["band-heading"]}>JACK LADDER (AUS)</h3>
        <div className={styles.band}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img"]}
              src={jackLadder}
              alt="Portrait of Jack Ladder"
            ></img>
            A singular character in Australian music, sardonic and sentimental,
            Jack Ladder brings his towering and tender baritone to bear on tales
            of beauty, love, hope and redemption. A master of musical narrative,
            he conjures lyrics that celebrate the absurdity of the human
            condition in songs that groove in subtle ways. Ladder has toured
            with and worked alongside some of the brightest names in the
            business - Bill Callahan, Angel Olsen, John Cale, Sharon Van Etten,
            Father John Misty, Weyes Blood, Alex Cameron and The Killers.
          </p>
          <div className={styles["social-media-links-container"]}>
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://jackladder.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.instagram.com/jackladder/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.youtube.com/user/JackLadderTV"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/JackLadderAndTheDreamlanders"
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
      <div className={styles["tickets-container"]}>
        <a
          className={styles["anchor-tags"]}
          href="https://loveyourartist.com/en/events/jack-ladder-berlin-NE81BP/overview"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to Love Your Artist tickets"
        >
          Love Your Artist{" "}
        </a>
      </div>
      {/* // * end */}
      {/* // ! start next date */}
      <h2 className={styles["date-heading"]}>
        {" "}
        27.07.2023 <br />
        Live at Kantine am Berghain
        <br />
        Reverberation Fest, FluxFM, Sharewood Booking & Dynamite Konzerte
        present:
        <br />
        Benefit show for Musicians Defend Ukraine.
      </h2>
      <h2 className={styles["date-heading"]}>
        All proceeds go straight to the charity fund{" "}
        <span className={styles["inline-link"]}>
          <a
            href="https://musiciansdefendukraine.com/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Musicians Defend Ukraine website"
          >
            Musicians Defend Ukraine
          </a>
        </span>
      </h2>
      <ul className={styles["times-list"]}>
        <li>Doors: 19.00</li>
        <li>Shows: 20.00</li>
      </ul>
      <div className={styles["bands-container"]}>
        <h3 className={styles["band-heading"]}>LOVE'N'JOY (UKR)</h3>
        <div className={styles.band}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img"]}
              src={loveNJoy}
              alt="Band portrait, Love'n'Joy"
            ></img>
            War in their own country and still on tour: even if the
            circumstances could hardly be more absurd at the moment, Love'N'Joy
            from Kyiv are on an endless tour through Europe and beyond. Not only
            to escape the war and spread Ukrainian culture internationally, but
            also to collect donations for their self-organised campaign
            "Musicians Defend Ukraine", which supports musicians currently
            active in Ukraine for defence, with humanitarian aid. Therefore,
            every concert is also held as a benefit in support of all musicians
            who currently cannot enjoy the privilege of leaving the country and
            provide aid in their home country. Love’n’Joy is one of the most
            successful Ukrainian Indie-Rock bands with an international profile.
            Having played numerous shows all over Europe, including festivals
            such as Reeperbahn and Eurosonic Noorderslag, they have also shared
            the stage with bands like Kikagaku Moyo, Boogarins, The Shivas and
            Petrol Girls. Love'n'Joy's sound draws influences from Brit-Pop, 60s
            and 70s Psychedelia and elements of Indie Rock. Plenty of heavy
            guitars are giving their sound a rougher edge, and the strong,
            contemporary lyrics reflect the spirit of a new, resurgent Ukrainian
            culture. The band has performed over 90 concerts across Europe and
            the UK, and has been interviewed by BBC UK, Rolling Stone US, KEXP,
            WDR Rockpalast, TAZ, and many others as their endless tour goes on
            and on.
          </p>
          <div className={styles["social-media-links-container"]}>
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://lovenjoy.bandcamp.com/album/half-home-2"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.instagram.com/lovenjoyband/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.youtube.com/watch?v=wYE_zyl7ArM&ab_channel=Love%27n%27JoyBand"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/lovenjoyband/"
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

        <h3 className={styles["band-heading"]}>CHILLERA (UKR)</h3>
        <div className={styles["band"]}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img-left"]}
              src={chillera}
              alt="Portrait of Chillera"
            ></img>
            Chillerа is a project founded by Anastasiia Marykutsa, Hanna
            Bryzhata and Polina Matskevych as an instrumental trio. Project
            idea: to find ways of communication between the participants by
            synthesizing various musical structures and directions using
            acoustic instruments. It arose as an attempt to combine two
            dimensions in one composition: the rhythm of the dub bass and the
            surf guitar. Inspired by the result and realizing the experience
            gained in the form of 2 EPs on the Muscut label, the band members
            come to the idea of releasing a classic dub material, where one side
            represents the classic version of the composition, and the other is
            a mix collage, the result of the work of a dub engineer.
          </p>
          <div
            className={styles["social-media-links-container"]}
            id={styles["social-right"]}
          >
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://muscut.bandcamp.com/album/schax"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.instagram.com/chillerafun"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://youtu.be/fBflvG7tgwI"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/chillerafun/"
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
        <h3 className={styles["band-heading"]}>THE DHARMA CHAIN (DE)</h3>
        <div className={styles.band}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img"]}
              src={dharmaChain}
              alt="Band portrait, The Dhrama Chain"
            ></img>
            The Dharma Chain are a 6-piece psychedelic rock & roll band from
            Byron Bay, Australia who have recently relocated to Berlin, Germany.
            Since moving the band have signed with the Berlin-based label Anomic
            Records, and are in the process of releasing a brand new album in
            2023.​
          </p>
          <div className={styles["social-media-links-container"]}>
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://thedharmachain.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.instagram.com/the.dharma.chain"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://youtu.be/D7dLE5JTxWU"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/The.Dharma.Chain/"
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
      <h2 className={styles["date-heading"]}>
        Aftershow with Heller Than Hell & Flux Wildly
      </h2>
      <div className={styles["aftershow-container"]}>
        <div className={styles["aftershow-acts"]}>
          <h3 className={`${styles["band-heading"]} ${styles["acts-heading"]}`}>
            Heller Than Hell
          </h3>
          <p className={styles["acts-text"]}>
            Funk, Afro-Hi-Life, Psychedelic Cumbia, Latin Jazz, Oriental Breaks,
            RnB, Disco.
          </p>
          <div className={styles["acts-social-container"]}>
            <a
              href="https://www.instagram.com/hellerthanhell"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Instagram page"
            >
              <FiInstagram className={styles["social-media-links"]} />
            </a>
            <a
              href="https://soundcloud.com/hellerthanhell"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Soundcloud page"
            >
              <FaSoundcloud className={styles["social-media-links"]} />
            </a>
          </div>
        </div>
        <div className={styles["aftershow-acts"]}>
          {" "}
          <h3 className={`${styles["band-heading"]} ${styles["acts-heading"]}`}>
            Flux Wildly
          </h3>
          <p className={styles["acts-text"]}>
            Weird, Obscure, Rock, Crazy, Tropical, Surprising - Reverberation
            Fest's long-time host jets up the road to deliver musical code.
          </p>
          <div className={styles["acts-social-container"]}>
            <a
              href="https://www.mixcloud.com/.../radio-brain-wave-20-march-2022/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Mixcloud"
            >
              <FaMixcloud className={styles["social-media-links"]} />
            </a>
          </div>
        </div>
      </div>
      {/* // todo: */}
      <h3 className={styles["tickets"]}>
        Presale-Tickets via Love Your Artist & Ticket Toaster:
      </h3>
      <div className={styles["tickets-container"]}>
        <a
          className={styles["anchor-tags"]}
          href="https://loveyourartist.com/de/events/glue-trip-vitor-noah-berlin-7FNXVS/overview"
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
      {/* // ! end  */}
      {/* // ? Next dates */}
      <h2 className={styles["date-heading"]}>
        16.11.2023 <br />
        Schokoladen
      </h2>
      <ul className={styles["times-list"]}>
        <li>Doors: 19.00</li>
        <li>Shows: 20.00</li>
        <li>Curfew: 22.00</li>
      </ul>
      <div className={styles["bands-container"]}>
        <h3 className={styles["band-heading"]}>GLUE TRIP (BR)</h3>
        <div className={styles.band}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img"]}
              src={glueTrip}
              alt="Band portrait, Glue Trip"
            ></img>
            ...is a musical project led by Brazilian musician Lucas Santa Cruz.
            Formed in 2013 as an experimental recording project, it was quickly
            invited to perform live for the first time at the Prata da Casa
            project (SESC Pompeia). With three albums released and viral hits
            like Elbow Pain(17 million views on Youtube) and La Edad del Futuro,
            Glue Trip has become a reference for contemporary Brazilian
            psychedelic music in Brazil and around the world. Showing maturity
            with their album Nada Tropical, released in July 2022, the band has
            been solidifying their career for a decade, increasingly
            incorporating their Brazilian roots into their compositions.
            Produced by Zé Nigro, this album features collaborations with great
            names in Brazilian music, including maestro Arthur Verocai, São
            Paulo singer YMA, and musicians Otto and Felipe S from Pernambuco.
            With several international tours under their belt, including
            sold-out shows in London and Paris on their last tour, Glue Trip is
            building a solid background and a steady rise. They stand out as one
            of the most interesting and innovative musical projects of today.
          </p>
          <div className={styles["social-media-links-container"]}>
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://gluetrip.bandcamp.com/album/nada-tropical"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Bandcamp page"
              >
                <FaBandcamp className={styles["social-media-links"]} />
              </a>

              <a
                href="https://www.instagram.com/gluetrip"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://youtu.be/tQ-WI46nmu0"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/GlueTrip"
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

        <h3 className={styles["band-heading"]}>VITOR NOAH (BR)</h3>
        <div className={styles["band"]}>
          <p className={styles["band-text"]}>
            <img
              className={styles["band-img-left"]}
              src={vitorNoah}
              alt="Portrait of Vitor Noah"
            ></img>
            ...Vitor Noah is a Brazilian-born classical guitarist currently
            based in Berlin. His first musical experiences were with the
            electric bass, as founder member of the stoner rock band
            "Hellbenders", with whom he recorded the band's first album. Vitor
            has participated in various music festivals and seminars, working
            with leading guitarists such as David Russell, Manuel Barrueco, Pepe
            Romero, Judicael Perroy, Zoran Dukic, Tillman Hoppstock, Pablo
            Márquez, Eduardo Isaac, Fábio Zanon, Paul Galbraith, Roberto Aussel,
            Eduardo Fernández and Paul O’Dette. He will open this night of
            Brazilian music with a solo guitar performance that will probably
            leave the audiences mouths wide open.
          </p>
          <div
            className={styles["social-media-links-container"]}
            id={styles["social-right"]}
          >
            <div className={styles["social-icons-wrapper"]}>
              <a
                href="https://www.instagram.com/vitornoah"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to Instagram page"
              >
                <FiInstagram className={styles["social-media-links"]} />
              </a>

              <a
                href="https://youtu.be/KY_WMcwRV7U"
                target="_blank"
                rel="noopener noreferrer"
                alt="Link to youTube video"
              >
                {" "}
                <FaYoutube className={styles["social-media-links"]} />{" "}
              </a>

              <a
                href="https://www.facebook.com/vitornoah/"
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
      <div className={styles["tickets-container"]}>
        <a
          className={styles["anchor-tags"]}
          href="https://loveyourartist.com/de/events/glue-trip-vitor-noah-berlin-7FNXVS/overview"
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
      {/* // ? end */}
    </div>
  );
};

export default Upcoming;
