// import React from 'react'
// import '../index.css';
// import video from '../../public/Systaiovideo.mp4';
// import img0 from '../../public/img0.png';
// const HomeTop = () => {
//   return (
//     <>
//       <body>
//     <div id="loader">
//         <h1>WELCOME</h1>
//         <h1>MY</h1>
//         <h1>WEBSITE</h1>
//     </div>
//     <div id="fixed-image">

//     </div>


//         <div id="page1">
//             <nav>
          
//                 <div id="nav-part2">
//                     <h4><a href="#">Work</a></h4>
//                     <h4><a href="#">Studio</a></h4>
//                     <h4><a href="#">Contact</a></h4>
//                 </div>
//                 <h3>Menu</h3>
//             </nav>
//             <div id="center">
               
//            <video  loop muted src={video}></video>
           
//         </div>
       
       
      

     
//     </div>
 
//     <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
//     <script src="script.js"></script>
// </body>
//     </>
//   )
// }

// export default HomeTop






// import React from 'react'
// import Systaiologo from '../../public/Systaiologo.png';
// import './HomeTopCss.css';
// import video from '../../public/Systaiovideo.mp4';
// // import './Script.js';
// const HomeTop = () => {


  
//   return (
    
//     <>
      
//       <div id="loader">
//         <h1>ENVIRONMENTS</h1>
//         <h1>EXPERIENCES</h1>
//         <h1>CONTENT</h1>
//     </div>
//       <div id="main">

// <div id="page1">
//       <nav className=''>
//                 <img src={Systaiologo} alt=''/>
//                 <div id="nav-part2">
//                     <h4><a href="#">HOME</a></h4>
//                     <h4><a href="#">ABOUT US</a></h4>
//                     <h4><a href="#">SERVICES</a></h4>
//                     <h4><a href="#">PRODUCTS</a></h4>
//                     <h4><a href="#">BLOG</a></h4>
//                     <h4><a href="#">CAREERS</a></h4>
//                     <h4><a href="#">CONTACT US</a></h4>
//                 </div>
//                 <h3>Menu</h3>
//             </nav>
//             {/* <video autoplay loop muted src={video}></video> */}
//             <div className="">
//             {/* absolute w-full h-full top-0 left-0 z-0" */}
//           <video
//             className=""
//             // absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover
//             autoPlay
//             loop
//             muted
//           >
//             <source src={video} type="video/mp4" />
//           </video>
//         </div>

        
//             </div>
//             <div id="full-scr">
//             <div id="full-div1">
                
//             </div>
//         </div>
           
//             </div>
           
          
//     </>
//   )
// }

// export default HomeTop


















// import React from 'react'
import React, { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../public/Systaiologo.png';
import video from '../../public/Systaiovideo.mp4';
// import '../HomeTopCss.css';
import './HomeTopCss.css';
// const HomeTop = () => {
  const LoaderAnimation = () => {
    
// const MenuAnimation = () => {
  const [flag, setFlag] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
      setFlag(prevFlag => !prevFlag); // Toggle flag between true/false
  };
    useEffect(() => {
        const loader = document.querySelector("#loader");
        setTimeout(() => {
            loader.style.top = "-100%";
        }, 4200);
    }, []);
  return (
    <div>
      
     

      {/* <body> */}
     
    {/* <div style={{ fontFamily: 'PT Serif, serif', fontWeight: 'bold' }} className='' id="loader">
    <h1>WELCOME</h1>
    <h1>TO OUR</h1>
    <h1>WEBSITE</h1>
</div> */}

    <div id="fixed-image">

    </div>


    <div id="main">

<div id="page1">
<nav className="">
                <img src={logo} alt='' />
                <div id="nav-part2">
                <h4><a href="#">HOME</a></h4>
                    <h4><a href="#">ABOUT US</a></h4>
                    <h4><a href="#">SERVICES</a></h4>
                    <h4><a href="#">PRODUCTS</a></h4>
                    <h4><a href="#">BLOG</a></h4>
                    <h4><a href="#">CAREER</a></h4>
                    <h4><a href="#">CONTACT US</a></h4>
                </div>
                <h3>Menu</h3>
            </nav>
            {/* <video autoplay loop muted src={video}></video> */}
            {/* <video autoplay loop muted src={video}></video> */}
            <div className="">
            {/* absolute w-full h-full top-0 left-0 z-0" */}
          <video
            className=""
            // absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            {/* <source src="https://videos.pexels.com/video-files/5207408/5207408-hd_1920_1080_25fps.mp4" type="video/mp4" /> */}
            
          </video>
        </div>
            </div>
            <div id="elem-container">
            </div>
            </div>
      {/* </body> */}
    </div>
  )
}

export default LoaderAnimation
