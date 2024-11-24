// import React from "react";
// import Aboutus from "./Components/Pages/Aboutus";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import LocomotiveScroll from 'locomotive-scroll';

// import AOS from "aos";
// import "aos/dist/aos.css";

// // import Scrolling from "./Components/Scrolling";
// import Servicepage from "./Components/Servicepage";
// import Home from "./Components/Homefolder/Home";
// import LayOut from "./Components/LayOut";
// import Contactus from "./Components/Contactus";
// import Webdevelopment from "./Components/Webdevelopment";
// import Products from "./Components/Products";
// import RefundPolicy from "./Components/Refundreturnpolicy";
// import PrivacyPolicy from "./Components/Privacypolicy";
// import Faq from "./Components/Faq";
// // import Servicepage from "./Servicepage";

// // import Slider from 'react-slick';
// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 700,
//       easing: "ease-in",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   // const locomotiveScroll = new LocomotiveScroll();
//   return (
//     <div>
//       <div>
//         <Router>
//           <Routes>
//             <Route path="/" element={<LayOut />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/aboutus" element={<Aboutus />} />
//               <Route path="/contactus" element={<Contactus />} />
//               <Route path="/Servicepage" element={< Servicepage/>} />
//               <Route path="/Webdevelopment" element={< Webdevelopment/>} />
//               <Route path="/Products" element={<Products/>} />
//               <Route path="/Refundreturnpolicy" element={<RefundPolicy/>} />
//               <Route path="/Privacypolicy" element={<PrivacyPolicy/>} />
//               <Route path="/Faq" element={<Faq/>} />
//             </Route>
//           </Routes>
//         </Router>
//       </div>
//     </div>
//   );
// };

// export default App;





import React from "react";
import Aboutus from "./Components/Pages/Aboutus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Servicepage from "./Components/Servicepage";
import Webdesign from "./Components/Servicesdeatilspage/Webdesign";
import Softwaredevelopment from "./Components/Servicesdeatilspage/Softwaredevelopment";
import Digitalmarketing from "./Components/Servicesdeatilspage/Digitalmarketing";
import Mobileapps from "./Components/Servicesdeatilspage/Mobileapps";
import Influencermarketing from "./Components/Servicesdeatilspage/Influencermarketing";
import Home from "./Components/Homefolder/Home";
import LayOut from "./Components/LayOut";
import Contactus from "./Components/Contactus";
import Careers from './Components/Careers';
import Webdevelopment from "./Components/Webdevelopment";
import Products from "./Components/Products";
import RefundPolicy from "./Components/Refundreturnpolicy";
import PrivacyPolicy from "./Components/Privacypolicy";
import Faq from "./Components/Faq";
import Contactcareer from './Components/Contactcareer';
import { Toaster } from "react-hot-toast";

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
              <Route path="/webdesign" element={< Webdesign/>} />
              <Route path="/softwaredevelopment" element={< Softwaredevelopment/>} />
              <Route path="/digitalmarketing" element={< Digitalmarketing/>} />
              <Route path="/mobileapps" element={< Mobileapps/>} />
              <Route path="/influencermarketing" element={< Influencermarketing/>} />
            
              <Route path="/Careers" element={<Careers/>} />
              <Route path="/Webdevelopment" element={< Webdevelopment/>} />
              <Route path="/Products" element={<Products/>} />
              <Route path="/Refundreturnpolicy" element={<RefundPolicy/>} />
              <Route path="/Privacypolicy" element={<PrivacyPolicy/>} />
              <Route path="/Faq" element={<Faq/>} />
              <Route path="/Contactcareer" element={<Contactcareer/>} />
            </Route>
          </Routes>
          <Toaster />
        </Router>
      </div>
    </div>
  );
};

export default App;
