import React from 'react'
import video from '../../public/Systaiovideo.mp4';
import { AiOutlineAntDesign } from "react-icons/ai";
import './HomeTopCss.css';
const Video = () => {
  return (
    <div>
      <body class="relative flex items-center justify-center h-screen">
    <div class="absolute inset-0 overflow-hidden">
        
           <video
            className=""
            
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          
            
          </video>
       
    </div>
    {/* <div class="relative z-10 text-white text-center bg-opacity-60 p-6 rounded-lg">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="bg-white bg-opacity-20 p-4 rounded-lg">
                <h2 class="text-lg font-semibold">WEB DESIGN</h2>
            </div>
            <div class="bg-white bg-opacity-20 p-4 rounded-lg">
                <h2 class="text-lg font-semibold">DEVELOPMENT</h2>
            </div>
            <div class="bg-white bg-opacity-20 p-4 rounded-lg">
                <h2 class="text-lg font-semibold">DIGITAL MARKETING</h2>
            </div>
            <div class="bg-white bg-opacity-20 p-4 rounded-lg">
                <h2 class="text-lg font-semibold">
                MOBILE APPS
</h2>
            </div>
            <div class="bg-white bg-opacity-20 p-4 rounded-lg">
                <h2 class="text-lg font-semibold">CONTENT MANAGEMENT</h2>
            </div>
        </div>
    </div> */}

<div class="relative z-10 text-white  text-center bg-opacity-60 p-6 rounded-lg ">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        
<div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm 
 text-center border border-white border-thin max-w-md mx-auto">
    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
    <h2 class="text-lg font-semibold">WEB DESIGN</h2>
</div>


<div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm  
 text-center border border-white border-thin max-w-md mx-auto">
    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
    <h2 class="text-lg font-semibold">DEVELOPMENT</h2>
</div>

<div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm 
 text-center border border-white border-thin max-w-md mx-auto">
    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
    <h2 class="text-lg font-semibold">DIGITAL MARKETING</h2>
</div>

<div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm  
 text-center border border-white border-thin max-w-md mx-auto">
    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
    <h2 class="text-lg font-semibold">MOBILE APPS</h2>
</div>

<div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm 
 text-center border border-white border-thin max-w-md mx-auto">
    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
    <h2 class="text-lg font-semibold">CONTENT MANAGEMENT</h2>
</div>
<div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm 
 text-center border border-white border-thin max-w-md mx-auto">
    <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
    <h2 class="text-lg font-semibold">24*7 SUPPORT</h2>
</div>

        {/* <div class="bg-white bg-opacity-20 p-4 rounded-lg">
            <h2 class="text-lg font-semibold">DEVELOPMENT</h2>
        </div>
        <div class="bg-white bg-opacity-20 p-4 rounded-lg">
            <h2 class="text-lg font-semibold">DIGITAL MARKETING</h2>
        </div>
        <div class="bg-white bg-opacity-20 p-4 rounded-lg">
            <h2 class="text-lg font-semibold">MOBILE APPS</h2>
        </div>
        <div class="bg-white bg-opacity-20 p-4 rounded-lg">
            <h2 class="text-lg font-semibold">CONTENT MANAGEMENT</h2>
        </div> */}
    </div>
    
</div>









{/* <div class="relative z-10 text-white text-center bg-opacity-60 p-6 rounded-lg">
    <div class="flex flex-wrap justify-center gap-4 mx-auto max-w-7xl">

        <div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm text-center border border-white border-thin">
            <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
            <h2 class="text-lg font-semibold">WEB DESIGN</h2>
        </div>

        <div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm text-center border border-white border-thin">
            <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
            <h2 class="text-lg font-semibold">DEVELOPMENT</h2>
        </div>

        <div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm text-center border border-white border-thin">
            <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
            <h2 class="text-lg font-semibold">DIGITAL MARKETING</h2>
        </div>

        <div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm text-center border border-white border-thin">
            <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
            <h2 class="text-lg font-semibold">MOBILE APPS</h2>
        </div>

        <div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm text-center border border-white border-thin">
            <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
            <h2 class="text-lg font-semibold">CONTENT MANAGEMENT</h2>
        </div>

        <div class="flex flex-col items-center justify-center bg-opacity-20 p-6 rounded-sm text-center border border-white border-thin">
            <AiOutlineAntDesign class="text-3xl font-semibold mb-2 text-yellow-500" />
            <h2 class="text-lg font-semibold">24*7 SUPPORT</h2>
        </div>

    </div>
</div> */}


</body>
    </div>
  )
}

export default Video
