// import React, { useState } from 'react';
// import logo from '../../public/Systaiologo.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-black">
 
//       <div className="mx-auto lg:gap-[50vw] gap-[30vw] flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-8" />
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none focus:text-white "
//           >
//             <svg
//               className="h-6 w-6 fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M3 5h18v1H3V5zm0 7h18v1H3v-1zm0 7h18v1H3v-1z"
//                 />
//               ) : (
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Desktop menu items */}
//         <div className="hidden md:flex items-center  space-x-4">
//         <a href="/" className="block text-white py-0 hover:bg-white hover:text-black transition duration-300">HOME</a>
//           <a href="/about" className="block text-white  py-0 hover:bg-white hover:text-black transition duration-300">ABOUT US</a>
//           <a href="/services" className="block text-white  py-0 hover:bg-white hover:text-black transition duration-300">SERVICES</a>
//           <a href="/services" className="block text-white py-0 hover:bg-white hover:text-black transition duration-300">PRODUCTS</a>
//           <a href="/contact" className="block text-white  py-0 hover:bg-white hover:text-black transition duration-300">CONTACT US</a>
//         </div>
//       </div>
   

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden mt-0  py-0 hover:bg-white hover:text-black transition duration-300 ">
//           <a href="/" className="block text-white ">HOME</a>
//           <a href="/about" className="block text-white ">ABOUT US</a>
//           <a href="/services" className="block text-white ">SERVICES</a>
//           <a href="/services" className="block text-white ">PRODUCTS</a>
//           <a href="/contact" className="block text-white ">CONTACT US</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;












































































import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
// import {  useLocation } from "react-router-dom";
import logo from '../../public/Systaiologo.png';



const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
//   const location = useLocation();
//   useEffect(()=> {
// setMenu(false);
//   }, [location])


 

  return (
    <div className=" bg-black">
      <div className="max-w-screen-xl lg:mx-auto mx-5 pt-5">
      <div className="lg:flex  z-[999]  md:flex hidden lg:justify-between justify-evenly items-center">
        <div className="cursor-pointer">
          <img className="lg:w-44 md:w-32 w-20" src={logo} />
        </div>
      
        <div className="">
          <ul className="flex lg:gap-7 md:gap-5  md:text-lg lg:text-xl font-medium text-white cursor-pointer
           ">
            <p className="hover:bg-white hover:text-black transition duration-300">HOME</p>
            <p className="hover:bg-white hover:text-black transition duration-300">ABOUT US</p>
            <p className="hover:bg-white hover:text-black transition duration-300">SERVICES</p>
            <p className="hover:bg-white hover:text-black transition duration-300">PRODUCTS</p>
            <p className="hover:bg-white hover:text-black transition duration-300">CONTACT US</p>
            {/* <li>Contact</li> */}
            <i className=" text-2xl ri-facebook-fill"></i>
            <i className=" text-2xl ri-instagram-line"></i>
            <i className=" text-2xl ri-youtube-fill"></i>
          </ul>
        </div>
      </div>

  
  


      {/* mobile version part */}

      <div className="fixed top-0 pt-5  text-black z-[999] flex justify-between items-center w-full lg:hidden md:hidden ">
        {!isSideMenuOpen && (
          <>
            <div>
              <img className="w-28" src={logo} alt="Logo" />
            </div>
            <section>
              <FiMenu
                onClick={() => setMenu(true)}
                className="text-4xl   text-white mr-8  cursor-pointer shadow-2xl  "
              />
            </section>
          </>
        )}
      </div>

      <div>
        {isSideMenuOpen && (
          <div className="fixed h-full z-[999] w-screen lg:hidden bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0 cursor-pointer">
            <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-full flex">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="text-2xl   text-black absolute top-7 right-7 rounded-full cursor-pointer shadow-2xl border border-black "
              />
              <div className="flex justify-center items-center flex-col mt-16 text-2xl font-medium">
              <p className="hover:bg-white hover:text-black transition duration-300">HOME</p>
            <p className="hover:bg-white hover:text-black transition duration-300">ABOUT US</p>
            <p className="hover:bg-white hover:text-black transition duration-300">SERVICES</p>
            <p className="hover:bg-white hover:text-black transition duration-300">PRODUCTS</p>
            <p className="hover:bg-white hover:text-black transition duration-300">CONTACT US</p>

                <div className="flex mt-7 gap-7">
                  <i className=" text-2xl ri-facebook-fill"></i>
                  <i className=" text-2xl ri-instagram-line"></i>
                  <i className=" text-2xl ri-youtube-fill"></i>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      </div>
    </div>
  );
};

export default Navbar;