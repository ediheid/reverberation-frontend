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

import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        {/* // ! Scroll to top will go here */}

        {/* // todo: Navbar might go here if it does not need to change on other pages */}
        <Navigation />
        <main>
          <Routes>
            {/* // ! Routes will go here.. */}
            <Route path="/" exact element={<Home />} />

            <Route path="/impressum" exact element={<Impressum />} />

            {/*  // ! Replaces Redirect in react-router-dom 6 */}
            {/* <Redirect to="/" exact /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
        {/* // ! Footer will go here.. */}
      </Router>
    </div>
  );
};

export default App;
