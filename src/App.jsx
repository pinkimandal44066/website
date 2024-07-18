import React from "react";
import Aboutus from "./Components/Pages/Aboutus";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LocomotiveScroll from 'locomotive-scroll';

import AOS from "aos";
import "aos/dist/aos.css";

// import Scrolling from "./Components/Scrolling";
import Home from "./Components/Homefolder/Home";
import LayOut from "./Components/LayOut";
// import Slider from 'react-slick';
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
