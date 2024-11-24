// import React from "react";

// // import logo from "../../public/Systaiologo.png";
// import { NavLink } from "react-router-dom";
// import logo from "../../public/Syst AIO logo.png";
// import { CiMail } from "react-icons/ci";
// import { BiPhoneCall } from "react-icons/bi";
// const Footer = () => {
//   return (
//     <footer
//       className=" bg-gradient-to-b from-black via-white
//        to-black mt-20
//      relative"
//     >
//       {/* Waves */}
//       <div className="waves absolute w-full">
//         <div className="wave" id="wave1"></div>
//         <div className="wave" id="wave2"></div>
//         <div className="wave" id="wave3"></div>
//         <div className="wave" id="wave4"></div>
//       </div>

//       <div className=" mx-auto  py-10 px-6 lg:px-16  cursor-pointer ">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10  ">
//           <div className="col-span-1">
//             <img src={logo} alt="Logo" className="mb-4 -ml-10 -mt-4 " />
//             <p className="text-sm ">
//               {/* SYSTAIO is one of Dhanbad's leading IT companies, offering exceptional technological solutions and services. Our experienced team understands your business's digital needs and provides cutting-edge solutions. Contact us to shape your technological future with us.**" */}
//               SYSTAIO is one of Dhanbad's leading IT companies, providing
//               exceptional technological solutions and services. Our experienced
//               team understands your business's digital needs and delivers
//               cutting-edge solutions.
//             </p>
//           </div>

//           <div className="col-span-1 lg:mx-10 w-full">
//             <h3 className="text-lg font-semibold mb-3">Office</h3>
//             <p className="text-sm ">
//               {/* Second floor, City Centre,0413, Luby Circular Rd,Bartand, Kasturba Nagar, Dhanbad, Jharkhand 826001 */}
//               0413, 2ND floor,City Centre, Luby Circular Rd,Busstand, Dhanbad,
//               Jharkhand 826001
//             </p>
//             <div className="flex">
//               <CiMail className="lg:text-2xl text-2xl mt-1" />
//               <span className="email-id">systaiotech@gmail.com</span>
//             </div>
//             <div className="flex">
//               <BiPhoneCall className="lg:text-2xl   mt-1 text-2xl  text-gray-700" />
//               <a href="tel:+09109308788991">+091-093087 88991</a>
//             </div>
//           </div>

//           <div className="col-span-1 lg:mx-16 w-full">
//             <h3 className="text-lg font-semibold mb-3">Links</h3>
//             <ul className="text-sm ">
//               <NavLink to="/Faq">
//                 <h1> FAQs</h1>
//               </NavLink>

//               <NavLink to="/Refundreturnpolicy">
//                 <h1>Refund/Return Policy</h1>
//               </NavLink>

//               <NavLink to="/Privacypolicy">
//                 <h1>Privacy Policy</h1>
//               </NavLink>

//               <li>
//                 <a href="#">Support</a>
//               </li>
//               {/* <li>
//           <a href="#">Contact us</a>
//         </li> */}

//               <NavLink to="/Careers">
//                 <h1>Careers</h1>
//               </NavLink>
//             </ul>
//           </div>

//           <div className="col-span-1 w-full lg:mx-5">
//             <h3 className="text-lg font-semibold mb-3">Links</h3>
//             <ul className="text-sm ">
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/aboutus">About Us</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/Servicepage">Services</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/Products">Products</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contactus">Contact us</NavLink>
//               </li>
//             </ul>
//           </div>

//           <div
//             className="col-span-1 lg:-mx-24 md:mx-0 sm:mx-0 mx-0
//     "
//           >
//             <h3 className="text-lg font-semibold mb-3">Email</h3>
//             <form className="flex mb-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email id"
//                 required
//                 className="px-4 py-2 rounded-l border-black"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-black text-white rounded-r"
//               >
//                 {/* submit */}
//                 <i className="fas fa-arrow-right"></i>
//               </button>
//             </form>
//             <div className="text-4xl space-x-6">
//               <i className="ri-facebook-circle-line "></i>
//               <i className="ri-twitter-fill"></i>
//               <i className="ri-whatsapp-line"></i>
//               <i className="ri-linkedin-box-fill"></i>
//             </div>
//           </div>
//         </div>

//         <hr className="my-6 border-gray-400" />
//         <p className="text-sm text-black font-bold text-center">
//           ©2014 Systaio | All Rights Reserved
//         </p>
//       </div>

//       {/* Wave Animation CSS */}
//       <style jsx>{`
//         .wave {
//           position: absolute;
//           top: -100px; /* Adjust this value based on your design */
//           left: 0;
//           width: 100%;
//           height: 100px;
//           background-image: url("https://img.freepik.com/premium-vector/curved-calligraphy-background-wallpaper-sea-calligraphy-curved-line-dividing-horizon_165079-4104.jpg?uid=R143418407&ga=GA1.1.2000051094.1716005427&semt=ais_user-customized");
//           background-size: 1000px 100px;
//         }

//         #wave1 {
//           z-index: 1000;
//           opacity: 1;
//           bottom: 0;
//           animation: animateWaves 4s linear infinite;
//         }

//         #wave2 {
//           z-index: 999;
//           opacity: 0.5;
//           bottom: 10px;
//           animation: animateWaves 4s linear infinite;
//         }

//         #wave3 {
//           z-index: 1000;
//           opacity: 0.2;
//           bottom: 15px;
//           animation: animateWaves 3s linear infinite;
//         }

//         #wave4 {
//           z-index: 999;
//           opacity: 0.7;
//           bottom: 20px;
//           animation: animateWaves 3s linear infinite;
//         }

//         @keyframes animateWaves {
//           0% {
//             background-position-x: 1000px;
//           }
//           100% {
//             background-position-x: 0;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;









import React from 'react'

const Footer = () => {
  return (
    <div>
      
    </div>
  )
}

export default Footer
