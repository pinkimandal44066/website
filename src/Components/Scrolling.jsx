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






















// import React from 'react'
// import img11 from '../../public/img11.png';
// import img8 from '../../public/img8.jpg';
// import img9 from '../../public/img9.jpg';
// import img10 from '../../public/img10.png';
// const Scrolling = () => {
//   return (
//     <div>
      

// <body>
//   <div id="app">
    
//     <div class="swiper">
//       <div class="swiper-wrapper">
//         <div class="swiper-slide">

//         <img className="" src={img8} />
//         </div>
//         <div class="swiper-slide">
//         <img className="" src={img11} />
//         </div>
//         <div class="swiper-slide">
//         <img className="" src={img9} />
//         </div>
//         <div class="swiper-slide">
//         <img className="" src={img10} />
//         </div>
//         <div class="swiper-slide">
//         <img className="" src={img11} />
//         </div>
//       </div>
//       <div class="swiper-button-prev"></div>
//       <div class="swiper-button-next"></div>
//     </div>

//   </div>
  
// </body>


//     </div>
//   )
// }

// export default Scrolling









import { motion } from "framer-motion";
import "../index.css";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
    const blockDelay = Math.random() * 0.5;
    const rowDelay = (totalRows - rowIndex - 1) * 0.05;
    return blockDelay + rowDelay;
};

const Scrolling = (Page) => {
    return function TransitionComponent() {
        return (
            <>
                <Page />

                <div className="blocks-container transition-in">
                    {Array.from({ length: 10 }).map((_, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {Array.from({ length: 11 }).map((_, blockIndex) => (
                                <motion.div
                                    key={blockIndex}
                                    className="block"
                                    initial={{ scaleY: 1 }}
                                    animate={{ scaleY: 0 }}
                                    exit={{ scaleY: 0 }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: calculateRandomBlockDelay(rowIndex, 10),
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div className="blocks-container transition-out">
                    {Array.from({ length: 10 }).map((_, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {Array.from({ length: 11 }).map((_, blockIndex) => (
                                <motion.div
                                    key={blockIndex}
                                    className="block"
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 0 }}
                                    exit={{ scaleY: 1 }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: calculateRandomBlockDelay(rowIndex, 10),
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </>
        );
    };
};

export default Scrolling;
