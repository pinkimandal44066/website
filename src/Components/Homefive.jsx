// // import { motion } from "framer-motion";
// // import img1 from "../../public/img1.png";
// // import img2 from '../../public/img2.png';
// // import img3 from '../../public/img3.png';
// // import img4 from '../../public/img4.png';
// // import img5 from '../../public/img5.png';
// // import img6 from '../../public/img6.png';

// // const HomeThird = () => {
// //   return (
// //     <div className="w-full ">
     
// //       <div className="flex lg:gap-28 md:gap-20 gap-10  font-bold items-center overflow-hidden whitespace-nowrap bg-white">
// //         <motion.img
// //           src={img1}
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }}
// //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// //           className="mt-10 ml-5"
// //         />
// //         <motion.img
// //           src={img2}
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }}
// //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// //           className="mt-10 ml-5"
// //         />
// //         <motion.img
// //           src={img3}
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }}
// //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// //           className="mt-10 ml-5"
// //         />
// //         <motion.img
// //           src={img4}
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }}
// //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// //           className="mt-10 ml-5"
// //         />
// //         <motion.img
// //           src={img5}
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }}
// //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// //           className="mt-10 ml-5"
// //         />
// //         <motion.img
// //           src={img6}
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }}
// //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// //           className="mt-10 ml-5"
// //         />
// //         <motion.img
// //           src={img1}
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }}
// //           transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
// //           className="mt-10 ml-5"
// //         />
// //         <motion.img
// //           src={img2}
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }}
// //           transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
// //           className="mt-10 ml-5"
// //         />
// //       </div>

      

    
// //     </div>
// //   );
// // };

// // export default HomeThird;




















// import { motion } from "framer-motion";
// // import img1 from "../../public/img1.png";
// // import img2 from '../../public/img2.png';
// // import img3 from '../../public/img3.png';
// // import img4 from '../../public/img4.png';
// // import img5 from '../../public/img5.png';
// // import img6 from '../../public/img6.png';
// import logo from '../../public/Systaiologo.png';

// const HomeThird = () => {
//   return (
//     <div className="w-full   ">
     
//       <div className="flex lg:gap-28 md:gap-20 gap-10  font-bold items-center overflow-hidden whitespace-nowrap  p-4
//        bg-black">
//         <motion.img
//           src={logo}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
//           className="mt-1 ml-5 h-10 "
//         />
//         <motion.img
//           src={logo}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
//           className="mt-1 ml-5 h-10"
//         />
//         <motion.img
//           src={logo}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
//           className="mt-1 ml-5 h-10"
//         />
//         <motion.img
//           src={logo}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
//           className="mt-1 ml-5 h-10"
//         />
//         <motion.img
//           src={logo}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
//           className="mt-1 ml-5 h-10"
//         />
//         <motion.img
//           src={logo}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
//           className="mt-1 ml-5 h-10"
//         />
//         <motion.img
//           src={logo}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
//           className="mt-1 ml-5 h-10"
//         />
//         <motion.img
//           src={logo}
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
//           className="mt-1 ml-5 h-10"
//         />
//       </div>

      

    
//     </div>
//   );
// };

// export default HomeThird;














































































































































































































// import React from 'react';
// import logo from "../../public/Systaiologo.png";

// const HomeThird = () => {
//   return (
//     <div className="w-full overflow-hidden bg-black">
//       <div className="flex items-center whitespace-nowrap relative">
//         {/* Sliding Container */}
//         <div className="flex gap-20 animate-scroll">
//           {/* Duplicate Content for Seamless Scroll */}
//           {[...Array(8)].map((_, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-4 min-w-fit"
//             >
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="h-12 w-auto"
//               />
//               <span className="text-white text-lg font-semibold">
//                 Systaio
//               </span>
//             </div>
//           ))}
//         </div>
//         {/* Duplicate the slider for seamless looping */}
//         <div className="flex gap-20 animate-scroll">
//           {[...Array(8)].map((_, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-4 min-w-fit"
//             >
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="h-12 w-auto"
//               />
//               <span className="text-white text-lg font-semibold">
//                 Systaio
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeThird;



import React from 'react';
import logo from "../../public/Systaiologo.png";
import './Homefive.css';
// import React from 'react';
// import logo from "../../public/Systaiologo.png";

const HomeThird = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-6">
      <div className="flex items-center whitespace-nowrap relative">
        {/* Sliding Container */}
        <div className="flex gap-10 animate-scroll">
          {/* Duplicate Content for Seamless Scroll */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 min-w-max"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto"
              />
              <span className="text-white text-2xl font-semibold">
                Systaio
              </span>
            </div>
          ))}
        </div>
        {/* Duplicate the slider for seamless looping */}
        <div className="flex gap-10 animate-scroll">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 min-w-max"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto"
              />
              <span className="text-white text-lg font-semibold">
                Systaio
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
