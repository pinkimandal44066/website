import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../public/Systaiologo.png";
import video from "../../public/Systaiovideo.mp4";
import { AiOutlineAntDesign } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import "./HomeTopCss.css";
import "./Homecss.css";
const LoaderAnimation = () => {
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
    <div>
      <div style={{ fontFamily: 'PT Serif, serif', fontWeight: 'bold' }} className='' id="loader">
    <h1>WELCOME</h1>
    <h1>TO </h1>
    <h1>SYSTAIO</h1>
</div>

      <div id="main" className="">
        <div id="page1">
          <div className="">
            <body className=" relative flex items-center justify-center h-screen">
              <div className="absolute inset-0 overflow-hidden">
                <video className="lg:mt-10 md:mt-16 sm:mt-28" autoPlay loop muted>
                  <source src={video} type="video/mp4" />
                </video>
              </div>

              {/* <div class="relative z-10 text-white  text-center bg-opacity-60 p-0 rounded-lg mt-20 ">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div
                    class="flex flex-col items-center justify-center bg-opacity-20 p-2 rounded-sm 
 text-center border border-white border-thin max-w-md mx-auto"
                  >
                    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
                    <h2 class="text-lg font-semibold">WEB DESIGN</h2>
                  </div>

                  <div
                    class="flex flex-col items-center justify-center bg-opacity-20 p-2 rounded-sm  
 text-center border border-white border-thin max-w-md mx-auto"
                  >
                    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
                    <h2 class="text-lg font-semibold">DEVELOPMENT</h2>
                  </div>

                  <div
                    class="flex flex-col items-center justify-center bg-opacity-20 p-2 rounded-sm 
 text-center border border-white border-thin max-w-md mx-auto"
                  >
                    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
                    <h2 class="text-lg font-semibold">DIGITAL MARKETING</h2>
                  </div>

                  <div
                    class="flex flex-col items-center justify-center bg-opacity-20 p-2 rounded-sm  
 text-center border border-white border-thin max-w-md mx-auto"
                  >
                    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
                    <h2 class="text-lg font-semibold">MOBILE APPS</h2>
                  </div>

                  <div
                    class="flex flex-col items-center justify-center bg-opacity-20 p-2 rounded-sm 
 text-center border border-white border-thin max-w-md mx-auto"
                  >
                    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
                    <h2 class="text-lg font-semibold">CONTENT MANAGEMENT</h2>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center bg-opacity-20 p-2 rounded-sm 
 text-center border border-white border-thin max-w-md mx-auto"
                  >
                    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
                    <h2 class="text-lg font-semibold">24*7 SUPPORT</h2>
                  </div>
                </div>
              </div> */}


<div className="relative z-10 text-white  text-center bg-opacity-60 p-0 rounded-lg md:-mt-40 sm:-mt-96  
lg:-mt-0 ">
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="flex flex-col justify-center items-center border-2 border-white w-40 mx-auto h-16    cursor-pointer">
                  {/* <AiOutlineAntDesign class="lg:text-3xl font-semibold text-yellow-500" /> */}
                  <NavLink to='/Servicepage'>
                  <p>WEB DESIGN</p>
                  </NavLink>
                  </div>
                  <div className="flex flex-col justify-center items-center border-2 border-white w-40 mx-auto
                   h-16 rounded  cursor-pointer">
                  {/* <AiOutlineAntDesign class="lg:text-3xl font-semibold text-yellow-500" /> */}
                  <NavLink to='/Servicepage'>
                  <p> SOFTWARE DEVELOPMENT</p>
                  </NavLink>
                  </div>
                  <div className="flex flex-col justify-center items-center border-2 border-white w-40 
                   mx-auto h-16 rounded  cursor-pointer">
                  {/* <AiOutlineAntDesign class="lg:text-3xl font-semibold text-yellow-500" /> */}
                  <NavLink to='/Servicepage'>
                  <p>DIGITAL MARKETING</p>
                  </NavLink>
                  </div>
                  <div className="flex flex-col justify-center items-center border-2 border-white
                   w-40 mx-auto h-16 rounded  cursor-pointer">
                  {/* <AiOutlineAntDesign class="lg:text-3xl font-semibold text-yellow-500" /> */}
                  <NavLink to='/Servicepage'>
                  <p>MOBILE APPS</p>
                  </NavLink>
                  </div>
                  <div className="flex flex-col justify-center items-center border-2 border-white
                   w-40 mx-auto h-16 rounded  cursor-pointer">
                  {/* <AiOutlineAntDesign class="lg:text-3xl font-semibold text-yellow-500" /> */}
                  <NavLink to='/Servicepage'>
                  <p>CONTENT MANAGEMENT</p>
                  </NavLink>
                  </div>
                  <div className="flex flex-col justify-center items-center border-2 border-white
                   w-40 mx-auto h-16 rounded  cursor-pointer">
                  {/* <AiOutlineAntDesign class="lg:text-3xl font-semibold text-yellow-500" /> */}
                  <NavLink to='/Servicepage'>
                  <p>24*7 SUPPORT</p>
                  </NavLink>
                  </div>
</div>
</div>

             





            </body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderAnimation;
