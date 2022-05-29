import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";

import CookieConsent from "react-cookie-consent";

// // ? Styles
import styles from "./Styling/app.module.scss";

// ? Components
import Navigation from "./Components/Navbar/Navigation";
import Home from "./Views-Sections/Home/Home";
import Impressum from "./Views-Sections/Impressum/Impressum";
import ScrollToTop from "../src/Components/ScrollToTop/ScrollToTop";
import ToTopButton from "./Components/ToTopButton/ToTopButton";
import Footer from "./Components/Footer/Footer";
import Dsgvo from "./Views-Sections/DSGVO/Dsgvo";
import Gallery from "./Views-Sections/Gallery/Gallery";

const App = () => {
  // Scroll to top on browser refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Router>
        {/* Scrolls to top on routing */}
        <ScrollToTop />

        {/* Navbar */}
        <Navigation />
        <main>
          {/* Displays scroll to top button once user has scrolled down the page // * (hamburger menu devices only) */}
          <ToTopButton />

          <CookieConsent
            location="bottom"
            buttonText="Got it!"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#f2f2f2" }}
            buttonStyle={{
              color: "#f2f2f2",
              fontSize: "15px",
              background: "#d97b73",
              padding: "10px 20px 10px 20px",
              borderRadius: "5px",
            }}
            expires={150}
          >
            <span className={styles["privacy-consent-text"]}>
              By continuing to use this website you agree to our
            </span>

            <Link
              // style={{ fontSize: "18px", color: "white" }}
              className={styles["privacy-policy-link"]}
              to="/dsgvo"
            >
              {" "}
              Privacy Policy.
            </Link>
          </CookieConsent>

          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/impressum" exact element={<Impressum />} />

            <Route path="/dsgvo" exact element={<Dsgvo />} />

            <Route path="/gallery" exact element={<Gallery />} />

            {/*  Replaces Redirect in react-router-dom 6 */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
