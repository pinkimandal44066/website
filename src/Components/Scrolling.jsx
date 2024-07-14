// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import products from '../../public/products.jpg';
// import img8 from '../../public/img8.jpg';
// import img9 from '../../public/img9.jpg';
// import img10 from '../../public/img10.png';
// import img11 from '../../public/img11.png';
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// const Scrolling = () => {
//   return (
//     <>


// <div className="bg-black">
//         <div className="mx-6 flex justify-center items-center">
//           <img className="lg:p-16 pt-10" src={products} />
//         </div>
//       </div>
//       <div className=" bg-white ">
//         <div className=' className=" max-w-screen-xl lg:mx-auto  mx-3 md:mx-10 sm:mx-10 mt-8 lg:mt-0 md:mt-0 sm:mt-0'>
//           <Swiper
//             spaceBetween={30}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//             <div className="bg-transparent ">
//               <img className="" src={img11} />
//             </div>
//             </SwiperSlide>
//             <SwiperSlide >
//               <img src={img11}  />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={img11} />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={img11} />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>

//     </>
//   )
// }

// export default  Scrolling 






















import React from 'react'
import img11 from '../../public/img11.png';
import img8 from '../../public/img8.jpg';
import img9 from '../../public/img9.jpg';
import img10 from '../../public/img10.png';
const Scrolling = () => {
  return (
    <div>
      

<body>
  <div id="app">
    
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">

        <img className="" src={img8} />
        </div>
        <div class="swiper-slide">
        <img className="" src={img11} />
        </div>
        <div class="swiper-slide">
        <img className="" src={img9} />
        </div>
        <div class="swiper-slide">
        <img className="" src={img10} />
        </div>
        <div class="swiper-slide">
        <img className="" src={img11} />
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

  </div>
  
</body>


    </div>
  )
}

export default Scrolling





