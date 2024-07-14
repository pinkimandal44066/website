import React from 'react'

import HomeTop from './Components/HomeTop';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomeSecond from './Components/HomeSecond'
import Services from './Components/Service'
import Homethree from './Components/Homethree';
import Homefive from './Components/Homefive';
import Serviceone from './Components/Serviceone';
// import LocomotiveScroll from 'locomotive-scroll';

import AOS from "aos";
import "aos/dist/aos.css";
import Video from './Components/Video';
import Slider from 'react-slick';
import Scrolling from './Components/Scrolling';
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
      
      {/* <Video /> */}
      {/* <Home /> */}
<Navbar />
<HomeTop />
<HomeSecond />
<Serviceone />
{/* <Scrolling /> */}
{/* <Slider /> */}
{/* <Services /> */}
{/* <Homethree /> */}
{/* <Homefive /> */}
{/* <Footer /> */}
    </div>
  )
}

export default App
