import React from 'react'
import Accordion from './Accordion';
import Accordionfaq from './Accordionfaq';
const Faq = () => {
  return (
    <>


<div className="relative w-full h-60 md:h-80 lg:h-96 flex items-center justify-center">

<div className="absolute inset-0 z-0">
  <img
    className="w-full h-full object-cover"
    src='https://img.freepik.com/premium-photo/3d-flat-vector-as-cybersecurity-policy-icon-with-document-shield-concept-as-vector-illustratio_980716-377960.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid'
    // src='https://img.freepik.com/premium-photo/return-policy-written-yellow-sticker-white-background_392339-3649.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid'
  //   src="https://img.freepik.com/free-photo/laptop-nature-concept_23-2150246092.jpg?t=st=1722235881~exp=1722239481~hmac=e3660012e75de63d10e6c4181a4ea8f88e86b9b55e47bef1e4ce7577b2a45d3d&w=740"
    alt="Product"
  />
</div>

<div className="absolute inset-0 z-0">
  <img
    className="w-full h-full object-cover"
    src='https://img.freepik.com/premium-photo/3d-flat-vector-as-cybersecurity-policy-icon-with-document-shield-concept-as-vector-illustratio_980716-377960.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid'
    // src='https://img.freepik.com/premium-photo/return-policy-written-yellow-sticker-white-background_392339-3649.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid'
  //   src="https://img.freepik.com/free-photo/laptop-nature-concept_23-2150246092.jpg?t=st=1722235881~exp=1722239481~hmac=e3660012e75de63d10e6c4181a4ea8f88e86b9b55e47bef1e4ce7577b2a45d3d&w=740"
    alt="Product"
  />
</div>

{/* <div className="absolute inset-0 flex items-center justify-center text-white
 bg-black bg-opacity-50 p-4 z-10">
  <span className="text-4xl md:text-6xl lg:text-6xl font-bold">PRIVACY POLICY</span>
</div> */}
</div>
      {/* <Accordion /> */}
      <Accordionfaq />
    </>
  )
}

export default Faq
