// import React, { useEffect } from "react";
// import { useState } from "react";
// import logo from "../../public/Systaiologo.png";
// import video from "../../public/Systaiovideo.mp4";
// import { AiOutlineAntDesign } from "react-icons/ai";
// import { NavLink } from "react-router-dom";

// // import "./Homecss.css";
// const LoaderAnimation = () => {
//   const [flag, setFlag] = useState(false);

//   const toggleMenu = () => {
//     setFlag((prevFlag) => !prevFlag);
//   };
//   useEffect(() => {
//     const loader = document.querySelector("#loader");
//     setTimeout(() => {
//       loader.style.top = "-100%";
//     }, 4200);
//   }, []);
//   return (
//     <div>
//       <div style={{ fontFamily: 'PT Serif, serif', fontWeight: 'bold' }} className='' id="loader">
//     <h1>WELCOME</h1>
//     <h1>TO </h1>
//     <h1>SYSTAIO</h1>
// </div>

//       <div id="main" className="">
//         <div id="page1">
//           <div className="">
//             <body className=" relative flex items-center justify-center h-screen">
//               <div className="absolute inset-0 overflow-hidden">
//                 <video className="lg:mt-10 md:mt-16 sm:mt-28" autoPlay loop muted>
//                   <source src={video} type="video/mp4" />
//                 </video>
//               </div>

// <div className="relative z-10 text-white  text-center bg-opacity-60 p-0 rounded-lg md:-mt-40 sm:-mt-96
// lg:-mt-0 ">
// <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// <div className="flex flex-col justify-center items-center border-2 border-white w-40 mx-auto h-16    cursor-pointer">

//                   <NavLink to='/Servicepage'>
//                   <p>WEB DESIGN</p>
//                   </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center border-2 border-white w-40 mx-auto
//                    h-16 rounded  cursor-pointer">

//                   <NavLink to='/Servicepage'>
//                   <p> SOFTWARE DEVELOPMENT</p>
//                   </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center border-2 border-white w-40
//                    mx-auto h-16 rounded  cursor-pointer">

//                   <NavLink to='/Servicepage'>
//                   <p>DIGITAL MARKETING</p>
//                   </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center border-2 border-white
//                    w-40 mx-auto h-16 rounded  cursor-pointer">

//                   <NavLink to='/Servicepage'>
//                   <p>MOBILE APPS</p>
//                   </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center border-2 border-white
//                    w-40 mx-auto h-16 rounded  cursor-pointer">

//                   <NavLink to='/Servicepage'>
//                   <p>CONTENT MANAGEMENT</p>
//                   </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center border-2 border-white
//                    w-40 mx-auto h-16 rounded  cursor-pointer">

//                   <NavLink to='/Servicepage'>
//                   <p>24*7 SUPPORT</p>
//                   </NavLink>
//                   </div>
// </div>
// </div>

//             </body>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoaderAnimation;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import video from "../../public/Systaiovideo.mp4";
// // import "./Homecss.css";
// import "./Hometop.css";
// const LoaderAnimation = () => {
//   const [flag, setFlag] = useState(false);

//   const toggleMenu = () => {
//     setFlag((prevFlag) => !prevFlag);
//   };

//   useEffect(() => {
//     const loader = document.querySelector("#loader");
//     setTimeout(() => {
//       loader.style.top = "-100%";
//     }, 4200);
//   }, []);

//   return (
//     <div>

// <div style={{ fontFamily: 'PT Serif, serif', fontWeight: 'bold' }} className='' id="loader">
//     <h1>WELCOME</h1>
//     <h1>TO </h1>
//     <h1>SYSTAIO</h1>
// </div>
//       <div id="main">
//         <div id="page1">
//           <div className="">
//             <body className="relative flex items-center justify-center lg:h-screen  md:h-96 sm:h-96">
//               <div className="absolute inset-0 overflow-hidden">
//                 {/* Ensure the video always fills the screen */}
//                 <video className=" lg:object-cover -mt-4 w-full" autoPlay loop muted>
//                   <source src={video} type="video/mp4" />
//                 </video>
//               </div>

//               <div className="relative z-10 text-white  text-center
//                bg-opacity-60 p-0 rounded-lg md:mt-0 sm:mt-0 lg:-mt-0 ">
//                 <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   <div className="flex flex-col justify-center items-center border-2 text-xs
//                    border-white w-40 mx-auto lg:h-16  h-10 cursor-pointer">
//                     <NavLink to='/Servicepage'>
//                       <p>WEB DESIGN</p>
//                     </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center text-xs
//                   border-2 border-white w-40 mx-auto lg:h-16 h-10 rounded cursor-pointer">
//                     <NavLink to='/Servicepage'>
//                       <p>SOFTWARE DEVELOPMENT</p>
//                     </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center border-2 border-white text-xs
//                    w-40 mx-auto lg:h-16  h-10 rounded cursor-pointer">
//                     <NavLink to='/Servicepage'>
//                       <p>DIGITAL MARKETING</p>
//                     </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center
//                   items-center border-2 border-white w-40 lg:h-16  mx-auto h-10 rounded cursor-pointer text-xs">
//                     <NavLink to='/Servicepage'>
//                       <p>MOBILE APPS</p>
//                     </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center
//                    border-2 border-white w-40 mx-auto lg:h-16  h-10 rounded cursor-pointer text-xs">
//                     <NavLink to='/Servicepage'>
//                       <p>CONTENT MANAGEMENT</p>
//                     </NavLink>
//                   </div>
//                   <div className="flex flex-col justify-center items-center border-2 text-xs
//                    border-white w-40 mx-auto lg:h-16  h-10 rounded cursor-pointer">
//                     <NavLink to='/Servicepage'>
//                       <p>24*7 SUPPORT</p>
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             </body>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoaderAnimation;










import React, { useEffect } from "react";
import Video from "../../public/Systaiovideo.mp4";
import { NavLink } from "react-router-dom";
import "./Hometop.css";
// import "./Homecss.css";
import { useState } from "react";

const HeroSection = () => {
  const [flag, setFlag] = useState(false);

  const toggleMenu = () => {
    setFlag((prevFlag) => !prevFlag);
  };
  useEffect(() => {
    const loader = document.querySelector("#loader");
    setTimeout(() => {
      loader.style.top = "-100%";
    }, 4200);
  }, []);
  return (
    <>
      <div
        style={{ fontFamily: "PT Serif, serif", fontWeight: "bold" }}
        className=""
        id="loader"
      >
        <h1>WELCOME</h1>
        <h1>TO </h1>
        <h1>SYSTAIO</h1>
      </div>
      <div className="relative w-full lg:h-screen  md:h-96 sm:h-96 h-96">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover  filter brightness-75  "
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div
          className="relative z-10 flex  flex-col items-center justify-center text-white text-center px-4 lg:px-96 
      "
        >
          <div className="flex flex-wrap justify-center gap-4 mt-24 lg:mt-60">
            {/* <button className="px-4 py-2 bg-transparent hover:bg-black text-blue-600 hover:text-white transition rounded-lg">
  Web Design
</button> */}

            <NavLink to="/Servicepage">
              <button
                className="px-4 py-2 bg-black bg-opacity-55 hover:bg-white hover:font-bold
 hover:text-black text-white  rounded-lg 
 "
              >
                Web Design
              </button>
            </NavLink>

            <NavLink to="/Servicepage">
              <button
                className="px-4 py-2 bg-black bg-opacity-55 hover:bg-white hover:font-bold
 hover:text-black text-white  rounded-lg"
              >
                Software Solution 
              </button>
            </NavLink>

            <NavLink to="/Servicepage">
              <button
                className="px-4 py-2 bg-black bg-opacity-55 hover:bg-white hover:font-bold
 hover:text-black text-white  rounded-lg"
              >
                Digital Marketing
              </button>
            </NavLink>

            <NavLink to="/Servicepage">
              <button
                className="px-4 py-2 bg-black bg-opacity-55 hover:bg-white hover:font-bold
 hover:text-black text-white  rounded-lg"
              >
                Mobile Apps
              </button>
            </NavLink>

            <NavLink to="/Servicepage">
              <button
                className="px-4 py-2 bg-black bg-opacity-55 hover:bg-white hover:font-bold
 hover:text-black text-white  rounded-lg"
              >
                Content Management
              </button>
            </NavLink>

            <NavLink to="/Servicepage">
              <button
                className="px-4 py-2 bg-black bg-opacity-55 hover:bg-white hover:font-bold
 hover:text-black text-white  rounded-lg"
              >
                24*7 Support
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
