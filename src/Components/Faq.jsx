import React from 'react'
import Scrolling from './Scrolling';
import Accordion from './Accordion';
import Accordionfaq from './Accordionfaq';
const Faq = () => {
  return (
    <>

{/* 
<div className="relative w-full h-60 md:h-80 lg:h-96 flex items-center justify-center">

<div className="absolute inset-0 z-0">
  <img
    className="w-full h-full object-cover"
    src='https://img.freepik.com/premium-photo/3d-flat-vector-as-cybersecurity-policy-icon-with-document-shield-concept-as-vector-illustratio_980716-377960.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid'
  
    alt="Product"
  />
</div>

<div className="absolute inset-0 z-0">
  <img
    className="w-full h-full object-cover"
    src='https://img.freepik.com/premium-photo/3d-flat-vector-as-cybersecurity-policy-icon-with-document-shield-concept-as-vector-illustratio_980716-377960.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid'
    
    alt="Product"
  />
</div>

<div className="absolute inset-0 flex items-center justify-center text-white
 bg-black bg-opacity-50 p-4 z-10">
  <span className="text-4xl md:text-6xl lg:text-6xl font-bold">PRIVACY POLICY</span>
</div>
</div> */}



<div className="relative bg-gradient-to-r from-black via-purple-500 to-white w-full h-auto">
  {/* Container */}
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center px-6 py-12 sm:py-20">
    
    {/* Left: Text Content */}
    <div className="text-center sm:text-left sm:w-1/2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
   FAQs
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-white mt-4">
        At <span className="font-bold">SystAIO</span>, we deliver innovative IT solutions tailored to meet your business needs. From software development to AI and cybersecurity, we help organizations excel in a digital world.
      </p>
    </div>

    {/* Right: Cards */}
    <div className="sm:w-1/2 mt-8 sm:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full">
        <p className="text-sm font-semibold text-gray-700 text-center">
          Customized IT Solutions
        </p>
      </div>
      
      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full">
        <p className="text-sm font-semibold text-gray-700 text-center">
          Seamless Integration
        </p>
      </div>
      
      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full">
        <p className="text-sm font-semibold text-gray-700 text-center">
          Scalable Infrastructure
        </p>
      </div>
      
    </div>
  </div>
</div>

      {/* <Accordion /> */}
      <Accordionfaq />
    </>
  )
}

export default  Scrolling(Faq); 
