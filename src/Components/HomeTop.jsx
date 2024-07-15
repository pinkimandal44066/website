import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../public/Systaiologo.png";
import video from "../../public/Systaiovideo.mp4";
import { AiOutlineAntDesign } from "react-icons/ai";

import "./HomeTopCss.css";

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
    <h1>TO OUR</h1>
    <h1>WEBSITE</h1>
</div>

      <div id="main">
        <div id="page1">
          <div className="">
            <body class="relative flex items-center justify-center h-screen">
              <div class="absolute inset-0 overflow-hidden">
                <video className="" autoPlay loop muted>
                  <source src={video} type="video/mp4" />
                </video>
              </div>

              <div class="relative z-10 text-white  text-center bg-opacity-60 p-0 rounded-lg mt-20 ">
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
              </div>
            </body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderAnimation;
