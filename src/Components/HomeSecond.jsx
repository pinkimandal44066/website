// import React from 'react'
// // import home from '../../public/coffee2.png';
// // import img1 from '../../public/img1.jpg';
// // import img2 from '../../public/img2.jpg';
// import img3 from '../../public/img3.jpg';

// import { NavLink } from 'react-router-dom';
// const HomeSecond = () => {
//   return (
//     <div >
//     <div className="bg-brandDark flex justify-center items-center 
//      bg-black md:-mt-0 lg:-mt-0 sm:-mt-60 -mt-0
//      text-white ">
//         <div className="container pb-8 sm:pb-0 max-w-screen-xl lg:mx-32 mx-5">
//           <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
          
//             <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 
//             sm:order-1 ">
//               <h1
//                 data-aos="fade-up"
//                 data-aos-once="true" style={{ fontFamily: 'PTSerif-Bold' }}
//                 className="text-5xl sm:text-6xl lg:text-7xl font-bold  lg:-mt-0 md:-mt-0 -mt-8 sm:-mt-10"
//               >

//           ABOUT US {" "}
//           {/* <img src={aboutus} alt=''/>  {" "} */}
//                 <span
//                   data-aos="zoom-out"
//                   data-aos-delay="300"style={{ fontFamily: 'PTSerif-Bold' }}
//                   // class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive
//                   //  text-red-600"
//                   className='text-sm'
//                 >
//                   {/* lorem */}
//                 </span>{" "} 
              
//                <p className='text-sm '>
//                Welcome to *SystAIO Technologies*, your trusted partner in cutting-edge IT solutions and innovation. Based in the vibrant city of Dhanbad, we specialize in delivering tailored software development, AI-driven solutions, cloud computing, and comprehensive IT services to help businesses thrive in the digital age.</p>
//               </h1>
//               <div>
//               <NavLink to="/aboutus">
//                 <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105
//                  duration-200  py-2 px-4 rounded-full text-white  hover:text-black hover:bg-white">
//                  Read More
//                 </button>
//                 </NavLink>
//               </div>
//             </div>
           
//             <div
//               data-aos="zoom-in"
//               data-aos-duration="300"
//               className="-mt-6 flex justify-center items-center relative order-1 sm:order-2     "
//             >
//               {/* <img
//                 data-aos-once="true"
//                 src={img3}
//                 alt="biryani img"
//                 className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin rounded-full "
//               />
//                */}


// <img
//   data-aos-once="true"
//   src={img3}
//   alt="biryani img"
//   className="w-full  sm:w-[450px] mx-auto lg:mt-10 md:mt-10 sm:mt-0 mt-6 rounded-full"
// />

//             </div>
//           </div>
//         </div>
//       </div>






//     </div>
//   )
// }

// export default HomeSecond











import React from 'react';
import { NavLink } from 'react-router-dom';
import Systaioaboutus from '../../public/Systaioaboutus.jpg';

const HomeSecond = () => {
  return (
    <div>
      <div className="bg-black flex justify-center items-center text-white py-12">
        <div className=" max-w-screen-xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text Section */}
            <div className="flex flex-col justify-center gap-6 text-center lg:text-  order-2 lg:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{ fontFamily: 'PTSerif-Bold' }}
              >
                ABOUT US
              </h1>
              <p
                className="text-sm md:text-base lg:text-lg leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Welcome to *SystAIO Technologies*, your trusted partner in cutting-edge IT solutions and innovation. Based in the vibrant city of Dhanbad, we specialize in delivering tailored software development, AI-driven solutions, cloud computing, and comprehensive IT services to help businesses thrive in the digital age.
              </p>
              <NavLink to="/aboutus">
                <button
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105
                 duration-200 py-2 px-6 rounded-full text-white hover:text-black hover:bg-white mx-auto lg:mx-0"
                >
                  Read More
                </button>
              </NavLink>
            </div>

            {/* Image Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="flex justify-center items-center order-1 lg:order-2"
            >
              <img
                data-aos-once="true"
                src={Systaioaboutus}
                alt="About Us"
                className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
