


// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import './Swiperslider.css';
// import imgg from '../../public/imgg.jpg';
// // import "../../App.css";
// // import "../Pages/Aboutcss.css"
// // import required modules
// import { Pagination, Navigation } from "swiper/modules";
// const Swiperslider = () => {
//   return (
//     <>
//        <div className="max-w-screen-xl lg:mx-auto mx-5 lg:mt-16 md:mt-16 sm:mt-20 mt-16">


// <div className="  flex justify-between items-center">
// <div>
// <p className="text-black lg:text-5xl  md:text-4xl sm:text-3xl text-2xl text-center lg:text-start sm:text-start md:text-start font-semibold">
//     Our <span className="text-[#FF8526]">Services</span>
//   </p>
// </div>
// <div>


// </div>

// </div>

// <div className="flex bg-white items-center font-Poppins rounded-full justify-center">
//   <Swiper
//     slidesPerView={4}
//     spaceBetween={30}
//     freeMode={true}
//     modules={[Navigation, Pagination]}
//     className="custom-swiper"
//     navigation={true}
//     pagination={{ clickable: true }} 
//     loop={true}
//     breakpoints={{
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//       1024: {
//         slidesPerView: 4,
//         spaceBetween: 30,
//       },
//     }}
//   >
//     <SwiperSlide>
//       <div className=" relative w-auto h-auto  cursor-pointer rounded-[10px]">
//         <div className="">
//           <div className="">
//             <img src="https://t4.ftcdn.net/jpg/08/53/61/91/240_F_853619110_6MgtHCtgdwsJXNPiyNIoK29XyaWV2djN.jpg"
//              className=" opacity-100 hover:opacity-40 h-96 w-full " />
//           </div>
//         </div>
//         <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
//           <div>
//             <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
//               MODULAR KITCHEN
//             </h1>
//             <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
//               <i className="ri-add-line"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>

//     <SwiperSlide>
//       <div className="card relative w-auto h-auto  cursor-pointer rounded-[10px]">
//         <div className="">
//           <div className="">
//             <img src="https://i.pinimg.com/236x/6d/f3/e0/6df3e08cb07201b5b0d2e99f88585b9a.jpg" className=" opacity-100 hover:opacity-40" />
//           </div>
//         </div>
//         <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
//           <div>
//             <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
//               MODULAR KITCHEN
//             </h1>
//             <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
//               <i className="ri-add-line"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>


//     <SwiperSlide>
//       <div className="card relative w-auto h-auto  cursor-pointer rounded-[10px]">
//         <div className="">
//           <div className="">
//             <img src="https://i.pinimg.com/236x/6d/f3/e0/6df3e08cb07201b5b0d2e99f88585b9a.jpg" className=" opacity-100 hover:opacity-40" />
//           </div>
//         </div>
//         <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
//           <div>
//             <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
//               MODULAR KITCHEN
//             </h1>
//             <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
//               <i className="ri-add-line"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>


//     <SwiperSlide>
//       <div className="card relative w-auto h-auto  cursor-pointer rounded-[10px]">
//         <div className="">
//           <div className="">
//             <img src="https://i.pinimg.com/236x/6d/f3/e0/6df3e08cb07201b5b0d2e99f88585b9a.jpg" className=" opacity-100 hover:opacity-40" />
//           </div>
//         </div>
//         <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
//           <div>
//             <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
//               MODULAR KITCHEN
//             </h1>
//             <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
//               <i className="ri-add-line"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>


//     <SwiperSlide>
//       <div className="card relative w-auto h-auto  cursor-pointer rounded-[10px]">
//         <div className="">
//           <div className="">
//             <img src="https://i.pinimg.com/236x/6d/f3/e0/6df3e08cb07201b5b0d2e99f88585b9a.jpg" className=" opacity-100 hover:opacity-40" />
//           </div>
//         </div>
//         <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
//           <div>
//             <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
//               MODULAR KITCHEN
//             </h1>
//             <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
//               <i className="ri-add-line"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>


//     <SwiperSlide>
//       <div className="card relative w-auto h-auto  cursor-pointer rounded-[10px]">
//         <div className="">
//           <div className="">
//             <img src="https://i.pinimg.com/236x/6d/f3/e0/6df3e08cb07201b5b0d2e99f88585b9a.jpg" className=" opacity-100 hover:opacity-40" />
//           </div>
//         </div>
//         <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
//           <div>
//             <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
//               MODULAR KITCHEN
//             </h1>
//             <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
//               <i className="ri-add-line"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>


//     <SwiperSlide>
//       <div className="card relative w-auto h-auto  cursor-pointer rounded-[10px]">
//         <div className="">
//           <div className="">
//             <img src="https://i.pinimg.com/236x/6d/f3/e0/6df3e08cb07201b5b0d2e99f88585b9a.jpg" className=" opacity-100 hover:opacity-40" />
//           </div>
//         </div>
//         <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
//           <div>
//             <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
//               MODULAR KITCHEN
//             </h1>
//             <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
//               <i className="ri-add-line"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SwiperSlide>


//   </Swiper>
// </div>

// </div>
//     </>
//   )
// }

// export default Swiperslider
















  

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// import './Swiperslider.css';

// const Swiperslider = () => {
//   return (
//     <>
//    <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   )
// }

// export default Swiperslider

















// import  { useRef, useState } from 'react';
// import img11 from "../../../public/Images/img11.png";
import { motion } from "framer-motion";
import Systaioschoolsoftware from "../../public/Systaio school software.avif";
// import nature from '../../public/nature-2.jpg';
import Systaiobillingsoftware from "../../public/Systaio billing software.avif"
import Systaioerpsoftware from "../../public/Systaio erp software.avif";
import Systaiohospitalmanagementsystem from "../../public/Systaio hospital management system.avif";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const HomeFour = () => {
  return (

    
    <div className=" mt-10 ">
{/*   
  <div>
<p className="text-black lg:text-5xl 
 md:text-4xl sm:text-3xl text-2xl text-center lg:text-start sm:text-start md:text-start font-semibold">
    Our <span className="text-[#FF8526]">PRODUCTS</span>
  </p>
</div> */}

<div>
<p className="text-black lg:text-5xl 
 md:text-4xl sm:text-3xl text-2xl text-center lg:text-start mx-20 sm:text-start md:text-start font-semibold">
    Our <span className="text-[#FF8526]">PRODUCTS</span>
  </p>
</div>

      {/* cart part */}

      <div className="flex lg:gap-28 md:gap-20 gap-10  font-bold items-center overflow-hidden whitespace-nowrap
       ">
        <motion.img
          src={Systaioschoolsoftware }
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5 w-[25%]"
        />
        <motion.img
        // src="https://img.freepik.com/free-vector/different-elements-around-cloud_1223-30.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"
          src={Systaiobillingsoftware}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5 w-[25%]"
        />
        <motion.img
          src={Systaioerpsoftware }
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5 w-[25%]"
        />
        <motion.img
        // src="https://img.freepik.com/free-vector/medical-equipment-isometric-composition-with-consumer-devices-gadgets-fitness-tracking-with-people_1284-26996.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"
          src={Systaiohospitalmanagementsystem }
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5 w-[25%]"
        />
        {/* <motion.img
          src={nature}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5 w-[25%]"
        /> */}
      </div>

      {/* img part */}
      {/* <div className="bg-[#5A0483]">
        <div className="mx-6 flex justify-center items-center">
          <img className="lg:p-16 pt-10" src={nature} />
        </div>
      </div> */}

      {/* swipering part */}

      {/* <div className=" bg-[#5A0483] ">
        <div className=' className=" max-w-screen-xl lg:mx-auto  mx-3 md:mx-10 sm:mx-10 mt-8 lg:mt-0 md:mt-0 sm:mt-0'>
          <Swiper
            spaceBetween={30}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className="bg-transparent">
              <img className="" src={nature} />
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={nature} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nature} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nature} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}



    </div>
  );
};

export default HomeFour;
