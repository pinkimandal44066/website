// import { useState, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// // import {  useLocation } from "react-router-dom";
// // import logo from "../../public/Systaiologo.png";
// import { NavLink,useLocation } from "react-router-dom";
// import logo from '../../public/Syst AIO logo.png';
// // import logo from '../../public/logoo.jpg';
// // import logo from '../../public/logo.png';
// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);
//     const location = useLocation();
//     useEffect(()=> {
//   setMenu(false);
//     }, [location])

//   return (
//     <div className=" bg-black">
//       <div className="max-w-screen-xl lg:mx-auto mx-5 lg:pt-6 md:pt-12">
//         <div className="lg:flex  z-[999]  md:flex hidden lg:justify-between justify-evenly items-center">
//           <div className="cursor-pointer">
//           <NavLink to="/">
//             {/* <img className="lg:w-44 md:w-32 w-20 bg-black" src={logo} /> */}
//             <img className="lg:w-60 md:w-32 w-20 -mt-5 bg-black" src={logo} />
//             </NavLink>
//           </div>

//           <div className="">
//             <ul
//               className="flex lg:gap-7 md:gap-5  md:text-lg lg:text-xl font-medium text-white cursor-pointer
//            "
//             >
//               <NavLink to="/">
//               <p className="hover:bg-white hover:text-black transition duration-300">
//                 Home
//               </p>
//               </NavLink>
//               <NavLink to="/aboutus" className="hover:bg-white hover:text-black transition duration-300">
//               About Us
//               </NavLink>
//               <NavLink to="/Servicepage">
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Services

//               </p>
//               </NavLink>
//               <NavLink to='/Products'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Products
//               </p>
//               </NavLink>
//               <NavLink to='/contactus'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Contact us
//               </p>
//               </NavLink>
//               <NavLink to='/Careers'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Careers
//               </p>
//               </NavLink>
//               {/* <li>Contact</li> */}
//               <i className=" text-2xl ri-facebook-fill"></i>
//               <i className=" text-2xl ri-instagram-line"></i>
//               <i className=" text-2xl ri-youtube-fill"></i>
//             </ul>
//           </div>
//         </div>

//         {/* mobile version part */}

//         <div className="fixed top-0 pt-5  text-black z-[999] flex justify-between items-center w-full lg:hidden md:hidden ">
//           {!isSideMenuOpen && (
//             <>
//               <div>
//               <NavLink to="/">
//                 <img className="w-28  h-10" src={logo} alt="Logo" />
//                 </NavLink>
//               </div>
//               <section>
//                 <FiMenu
//                   onClick={() => setMenu(true)}
//                   className="text-4xl   text-black mr-8  cursor-pointer shadow-2xl  "
//                 />
//               </section>
//             </>
//           )}
//         </div>

//         <div>
//           {isSideMenuOpen && (
//             <div className="fixed h-full z-[999] w-screen lg:hidden bg-black bg-opacity-50 
//             backdrop-blur-sm top-0 right-0 cursor-pointer">
//               <section className="text-black bg-white flex-col absolute right-0
//                top-0 h-screen p-8 gap-8 z-50 w-full flex">
//                 <IoCloseOutline
//                   onClick={() => setMenu(false)}
//                   className="text-2xl   text-black absolute top-7 right-7 rounded-full cursor-pointer 
//                   shadow-2xl border border-black "
//                 />
//                 <div className="flex justify-center items-center flex-col mt-16 text-2xl font-medium">
//                 <NavLink to="/">
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Home
//                   </p>
//                   </NavLink>
//                   <NavLink to="/aboutus" >
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   About Us
//                   </p>
//                   </NavLink>
//                   <NavLink to="/Servicepage">
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Services
//                   </p>
//                   </NavLink>
//                   <NavLink to='/Products'>
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Products
//                   </p>
//                   </NavLink>
//                   <NavLink to='/contactus'>
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Contact us
//                   </p>
//                   </NavLink>


//                   <NavLink to='/Careers'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Careers
//               </p>
//               </NavLink>
//                   <div className="flex mt-7 gap-7">
//                     <i className=" text-2xl ri-facebook-fill"></i>
//                     <i className=" text-2xl ri-instagram-line"></i>
//                     <i className=" text-2xl ri-youtube-fill"></i>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






















// import { useState, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// // import {  useLocation } from "react-router-dom";
// // import logo from "../../public/Systaiologo.png";
// import { NavLink,useLocation } from "react-router-dom";
// import logo from '../../public/Syst AIO logo.png';
// // import logo from '../../public/logoo.jpg';
// // import logo from '../../public/logo.png';
// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);
//     const location = useLocation();
//     useEffect(()=> {
//   setMenu(false);
//     }, [location])

//   return (
//     <div className=" bg-black">
//       <div className="max-w-screen-xl lg:mx-auto mx-5 lg:pt-6 md:pt-12">
//         <div className="lg:flex  z-[999]  md:flex hidden lg:justify-between justify-evenly items-center">
//           <div className="cursor-pointer">
//           <NavLink to="/">
            
//             <img className="lg:w-60 md:w-32 w-20 -mt-5 bg-black" src={logo} />
//             </NavLink>
//           </div>
// {/* 
//           <div className="">
//             <ul
//               className="flex lg:gap-7 md:gap-5  md:text-lg lg:text-xl font-medium text-white cursor-pointer
//            "
//             >
//               <NavLink to="/">
//               <p className="hover:bg-white hover:text-black transition duration-300">
//                 Home
//               </p>
//               </NavLink>
//               <NavLink to="/aboutus" className="hover:bg-white hover:text-black transition duration-300">
//               About Us
//               </NavLink>
//               <NavLink to="/Servicepage">
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Services

//               </p>
//               </NavLink>
//               <NavLink to='/Products'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Products
//               </p>
//               </NavLink>
//               <NavLink to='/contactus'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Contact us
//               </p>
//               </NavLink>
//               <NavLink to='/Careers'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Careers
//               </p>
//               </NavLink>
//               <i className=" text-2xl ri-facebook-fill"></i>
//               <i className=" text-2xl ri-instagram-line"></i>
//               <i className=" text-2xl ri-youtube-fill"></i>
//             </ul>
//           </div> */}





// <div className="-mt-4 ">
//   <ul className="flex justify-center gap-2 md:gap-3 lg:gap-4 text-white font-medium cursor-pointer m-0 p-0">
//     <NavLink
//       to="/"
//       className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//     >
//       <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//       <span className="relative z-10 group-hover:text-gray-900">Home</span>
//     </NavLink>

//     <NavLink
//       to="/aboutus"
//       className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//     >
//       <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//       <span className="relative z-10 group-hover:text-gray-900">About Us</span>
//     </NavLink>

//     <NavLink
//       to="/Servicepage"
//       className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//     >
//       <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//       <span className="relative z-10 group-hover:text-gray-900">Services</span>
//     </NavLink>

//     <NavLink
//       to="/Products"
//       className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//     >
//       <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//       <span className="relative z-10 group-hover:text-gray-900">Products</span>
//     </NavLink>

//     <NavLink
//       to="/contactus"
//       className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//     >
//       <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//       <span className="relative z-10 group-hover:text-gray-900">Contact Us</span>
//     </NavLink>

//     <NavLink
//       to="/Careers"
//       className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//     >
//       <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//       <span className="relative z-10 group-hover:text-gray-900">Careers</span>
//     </NavLink>

//     <div className="flex gap-6 text-3xl mt-2">
//       <i className="ri-facebook-fill"></i>
//       <i className="ri-instagram-line"></i>
//       <i className="ri-youtube-fill"></i>
//     </div>
//   </ul>
// </div>

//         </div>

//         {/* mobile version part */}

//         <div className="fixed top-0 pt-5  text-black z-[999] flex justify-between items-center w-full lg:hidden md:hidden ">
//           {!isSideMenuOpen && (
//             <>
//               <div>
//               <NavLink to="/">
//                 <img className="w-28  h-10" src={logo} alt="Logo" />
//                 </NavLink>
//               </div>
//               <section>
//                 <FiMenu
//                   onClick={() => setMenu(true)}
//                   className="text-4xl   text-black mr-8  cursor-pointer shadow-2xl  "
//                 />
//               </section>
//             </>
//           )}
//         </div>

//         <div>
//           {isSideMenuOpen && (
//             <div className="fixed h-full z-[999] w-screen lg:hidden bg-black bg-opacity-50 
//             backdrop-blur-sm top-0 right-0 cursor-pointer">
//               <section className="text-black bg-white flex-col absolute right-0
//                top-0 h-screen p-8 gap-8 z-50 w-full flex">
//                 <IoCloseOutline
//                   onClick={() => setMenu(false)}
//                   className="text-2xl   text-black absolute top-7 right-7 rounded-full cursor-pointer 
//                   shadow-2xl border border-black "
//                 />
//                 <div className="flex justify-center items-center flex-col mt-16 text-2xl font-medium">
//                 <NavLink to="/">
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Home
//                   </p>
//                   </NavLink>
//                   <NavLink to="/aboutus" >
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   About Us
//                   </p>
//                   </NavLink>
//                   <NavLink to="/Servicepage">
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Services
//                   </p>
//                   </NavLink>
//                   <NavLink to='/Products'>
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Products
//                   </p>
//                   </NavLink>
//                   <NavLink to='/contactus'>
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Contact us
//                   </p>
//                   </NavLink>


//                   <NavLink to='/Careers'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Careers
//               </p>
//               </NavLink>
//                   <div className="flex  gap-7">
//                     <i className=" text-2xl ri-facebook-fill"></i>
//                     <i className=" text-2xl ri-instagram-line"></i>
//                     <i className=" text-2xl ri-youtube-fill"></i>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





// import { useState, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { NavLink, useLocation } from "react-router-dom";
// import logo from "../../public/Syst AIO logo.png";

// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setMenu(false);
//   }, [location]);

//   return (
//     <div className="bg-black">
//       {/* Desktop Navbar */}
//       <div className="max-w-screen-xl mx-auto py-4 px-5">
//         <div className="hidden lg:flex justify-between items-center">
//           <NavLink to="/">
//             <img className="w-40" src={logo} alt="Logo" />
//           </NavLink>
//           <ul className="flex gap-6 text-white font-medium">
//             {["Home", "About Us", "Services", "Products", "Contact Us", "Careers"].map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
//                 className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//                 <span className="relative z-10 group-hover:text-gray-900">{item}</span>
//               </NavLink>
//             ))}
//           </ul>
//           <div className="flex gap-6 text-2xl text-white">
//             <i className="ri-facebook-fill"></i>
//             <i className="ri-instagram-line"></i>
//             <i className="ri-youtube-fill"></i>
//           </div>
//         </div>

//         {/* Mobile Navbar */}
//         <div className="lg:hidden flex justify-between items-center">
//           <NavLink to="/">
//             <img className="w-28" src={logo} alt="Logo" />
//           </NavLink>
//           <FiMenu
//             onClick={() => setMenu(true)}
//             className="text-4xl text-white cursor-pointer"
//           />
//         </div>
//       </div>

   

//         <div>
//           {isSideMenuOpen && (
//             <div className="fixed h-full z-[999] w-screen lg:hidden bg-black bg-opacity-50 
//             backdrop-blur-sm top-0 right-0 cursor-pointer">
//               <section className="text-black bg-white flex-col absolute right-0
//                top-0 h-screen p-8 gap-8 z-50 w-full flex">
//                 <IoCloseOutline
//                   onClick={() => setMenu(false)}
//                   className="text-4xl   text-black absolute top-7 right-7 rounded-full cursor-pointer 
//                   shadow-2xl border border-black "
//                 />
//                 <div className="flex justify-center items-center flex-col mt-16 text-2xl font-medium">
//                 <NavLink to="/">
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Home
//                   </p>
//                   </NavLink>
//                   <NavLink to="/aboutus" >
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   About Us
//                   </p>
//                   </NavLink>
//                   <NavLink to="/Servicepage">
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Services
//                   </p>
//                   </NavLink>
//                   <NavLink to='/Products'>
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Products
//                   </p>
//                   </NavLink>
//                   <NavLink to='/contactus'>
//                   <p className="hover:bg-white hover:text-black transition duration-300">
//                   Contact us
//                   </p>
//                   </NavLink>


//                   <NavLink to='/Careers'>
//               <p className="hover:bg-white hover:text-black transition duration-300">
//               Careers
//               </p>
//               </NavLink>
//                   <div className="flex  gap-7">
//                     <i className=" text-2xl ri-facebook-fill"></i>
//                     <i className=" text-2xl ri-instagram-line"></i>
//                     <i className=" text-2xl ri-youtube-fill"></i>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           )}
//         </div>
//     </div>
//   );
// };

// export default Navbar;



import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../public/Syst AIO logo.png";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <div className="bg-black">
      {/* Desktop Navbar */}
      <div className="max-w-screen-xl mx-auto py-4 px-5">
        <div className="hidden lg:flex justify-between items-center">
          <NavLink to="/">
            <img className="w-40" src={logo} alt="Logo" />
          </NavLink>
          <ul className="flex gap-6 text-white font-medium text-lg">
            <NavLink
              to="/"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">Home</span>
            </NavLink>
            <NavLink
              to="/aboutus"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">About Us</span>
            </NavLink>
            <NavLink
              to="/servicepage"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">Services</span>
            </NavLink>
            <NavLink
              to="/products"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">Products</span>
            </NavLink>
            <NavLink
              to="/contactus"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">Contact Us</span>
            </NavLink>
            <NavLink
              to="/careers"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">Careers</span>
            </NavLink>
          </ul>
          <div className="flex gap-6 text-2xl text-white">
            <i className=" ri-facebook-fill hover:text-blue-600 transition duration-300 cursor-pointer"></i>
            <i className="ri-instagram-line hover:text-pink-600 transition duration-300 cursor-pointer"></i>
            <i className="ri-youtube-fill hover:text-red-600 transition duration-300 cursor-pointer"></i>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex justify-between items-center">
          <NavLink to="/">
            <img className="w-28" src={logo} alt="Logo" />
          </NavLink>
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-4xl text-white cursor-pointer"
          />
        </div>
      </div>

      {/* Side Menu */}
     

      
{isSideMenuOpen && (
  <div className="fixed h-full z-[999] w-screen lg:hidden bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0 
  cursor-pointer">
    <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-4 gap-4 z-50 w-full flex">
      <IoCloseOutline
        onClick={() => setMenu(false)}
        className="text-4xl text-black absolute top-4 right-4 rounded-full cursor-pointer
         shadow-xl border border-black"
      />
      <div className="flex flex-col items-center mt-12 md:text-4xl text-2xl ">
        <NavLink to="/" className=" font-semibold text-gray-800 transition duration-300 py-2 px-4 rounded-lg w-full text-center">
          Home
        </NavLink>
        <NavLink to="/aboutus" className=" font-semibold
         text-gray-800 transition duration-300 py-2 px-4 rounded-lg w-full text-center">
          About Us
        </NavLink>
        <NavLink to="/servicepage" className=" font-semibold text-gray-800 transition duration-300 py-2 px-4 rounded-lg w-full text-center">
          Services
        </NavLink>
        <NavLink to="/products" className=" font-semibold text-gray-800  transition duration-300 py-2 px-4 rounded-lg w-full text-center">
          Products
        </NavLink>
        <NavLink to="/contactus" className=" font-semibold text-gray-800  transition duration-300 py-2 px-4 rounded-lg w-full text-center">
          Contact Us
        </NavLink>
        <NavLink to="/careers" className=" font-semibold text-gray-800
          transition duration-300 py-2 px-4 rounded-lg w-full text-center">
          Careers
        </NavLink>
        <div className="flex gap-5 mt-3  md:text-6xl text-4xl">
          <i className=" ri-facebook-fill hover:text-blue-600 transition duration-300 cursor-pointer"></i>
          <i className="ri-instagram-line hover:text-pink-600 transition duration-300 cursor-pointer"></i>
          <i className=" ri-youtube-fill hover:text-red-600 transition duration-300 cursor-pointer"></i>
        </div>
      </div>
    </section>
  </div>
)}





    </div>
  );
};

export default Navbar;

