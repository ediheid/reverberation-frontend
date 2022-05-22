import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

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
          <HashLink smooth to="/#about" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.08 }}
            >
              About
            </motion.li>
          </HashLink>

          <HashLink smooth to="/#line-up" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.11 }}
            >
              Line-up
            </motion.li>
          </HashLink>

          <HashLink smooth to="/#schedule" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.14 }}
            >
              Schedule
            </motion.li>
          </HashLink>

          <HashLink smooth to="/#past-events" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.17 }}
            >
              Past Events
            </motion.li>
          </HashLink>

          <HashLink smooth to="/#tickets" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
            >
              Tickets
            </motion.li>
          </HashLink>

          <HashLink smooth to="/#contact" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.23 }}
            >
              Contact
            </motion.li>
          </HashLink>

          <HashLink smooth to="/#landing" onClick={props.closeNavOnClick}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.26 }}
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
