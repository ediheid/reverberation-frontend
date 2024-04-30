import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

const MobileNavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <div className={styles["mobile-nav-dropdown-container"]}>
        <motion.ul
          className={styles["mobile-nav-list-items"]}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
        >
          {/* // * 0.8s */}
          {/* <HashLink smooth to="/#line-up" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.08 }}
            >
              Line-up
            </motion.li>
          </HashLink> */}

          {/* // * 0.14s */}
          {/* <HashLink smooth to="/#schedule" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.14 }}
            >
              Schedule
            </motion.li>
          </HashLink> */}

          {/* // * 0.17s */}
          {/* <HashLink smooth to="/#tickets" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.17 }}
            >
              Tickets
            </motion.li>
          </HashLink> */}
          {/* 
        
      */}

          {/* // todo: add hashlink back */}
          {/* 
          <HashLink smooth to="/#upcoming" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.17 }}
            >
              Upcoming Events
            </motion.li>
          </HashLink> */}

          {/* // todo: remove this and add hashlink above back.. */}
          <a
            href="https://reverberation.loveyourartist.store/de/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Ticket Shop"
          >
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.17 }}
            >
              Upcoming Events
            </motion.li>
          </a>

          <HashLink smooth to="/#about" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
            >
              About
            </motion.li>
          </HashLink>

          <HashLink smooth to="/#past-events" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.23 }}
            >
              Past Festivals
            </motion.li>
          </HashLink>

          <HashLink smooth to="/#contact" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.27 }}
            >
              Contact
            </motion.li>
          </HashLink>

          <Link to="/gallery" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.3 }}
            >
              Gallery
            </motion.li>
          </Link>

          <HashLink smooth to="/#landing" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.32 }}
            >
              Home
            </motion.li>
          </HashLink>
        </motion.ul>
      </div>
    </>
  );
};

export default MobileNavLinks;
