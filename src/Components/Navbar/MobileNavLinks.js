import React from "react";
import { motion } from "framer-motion";

// ? Styles
import styles from "../Navbar/navbar.module.scss";

const MobileNavLinks = () => {
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
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.08 }}
          >
            About
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.11 }}
          >
            Line-up
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.14 }}
          >
            Schedule
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.17 }}
          >
            Past Events
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
          >
            Tickets
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.23 }}
          >
            Contact
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.26 }}
          >
            Home
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
};

export default MobileNavLinks;
