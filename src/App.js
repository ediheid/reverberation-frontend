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
            {/* <Route path="/" exact component={Home} /> */}

            {/*  // ! Replaces Redirect in react-router-dom 6 */}
            {/* <Redirect to="/" exact /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        {/* // ! Footer will go here.. */}
      </Router>
    </div>
  );
};

export default App;
