import React from "react";
import Aboutus from "./Components/Pages/Aboutus";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LocomotiveScroll from 'locomotive-scroll';

import AOS from "aos";
import "aos/dist/aos.css";

// import Scrolling from "./Components/Scrolling";
import Servicepage from "./Components/Servicepage";
import Home from "./Components/Homefolder/Home";
import LayOut from "./Components/LayOut";
import Contactus from "./Components/Contactus";
import Webdevelopment from "./Components/Webdevelopment";
import Products from "./Components/Products";
import RefundPolicy from "./Components/Refundreturnpolicy";
import PrivacyPolicy from "./Components/Privacypolicy";
// import Servicepage from "./Servicepage";

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
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/Servicepage" element={< Servicepage/>} />
              <Route path="/Webdevelopment" element={< Webdevelopment/>} />
              <Route path="/Products" element={<Products/>} />
              <Route path="/Refundreturnpolicy" element={<RefundPolicy/>} />
              <Route path="/Privacypolicy" element={<PrivacyPolicy/>} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
