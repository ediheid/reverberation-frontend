import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// // ? Styles
// import styles from "./Styling/app.module.scss";

// ? Components
import Navigation from "./Components/Navbar/Navigation";
import Home from "./Views-Sections/Home/Home";
import Impressum from "./Views-Sections/Impressum/Impressum";
import ScrollToTop from "../src/Components/ScrollToTop/ScrollToTop";
import ToTopButton from "./Components/ToTopButton/ToTopButton";
import Contact from "./Views-Sections/Home/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Dsgvo from "./Views-Sections/DSGVO/Dsgvo";

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

          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/impressum" exact element={<Impressum />} />

            <Route path="/dsgvo" exact element={<Dsgvo />} />

            {/* <Route path="/contact" exact element={<Contact />} /> */}

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
