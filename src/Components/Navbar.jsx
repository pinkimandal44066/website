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
//           <ul className="flex gap-6 text-white font-medium text-lg">
//             <NavLink
//               to="/"
//               className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//               <span className="relative z-10 group-hover:text-gray-900">Home</span>
//             </NavLink>
//             <NavLink
//               to="/aboutus"
//               className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//               <span className="relative z-10 group-hover:text-gray-900">About Us</span>
//             </NavLink>
//             <NavLink
//               to="/servicepage"
//               className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//               <span className="relative z-10 group-hover:text-gray-900">Services</span>
//             </NavLink>
//             <NavLink
//               to="/products"
//               className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//               <span className="relative z-10 group-hover:text-gray-900">Products</span>
//             </NavLink>
//             <NavLink
//               to="/contactus"
//               className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//               <span className="relative z-10 group-hover:text-gray-900">Contact Us</span>
//             </NavLink>
//             <NavLink
//               to="/careers"
//               className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//               <span className="relative z-10 group-hover:text-gray-900">Careers</span>
//             </NavLink>
//           </ul>
//           <div className="flex gap-6 text-2xl text-white">
//             <i className=" ri-facebook-fill hover:text-blue-600 transition duration-300 cursor-pointer"></i>
//             <i className="ri-instagram-line hover:text-pink-600 transition duration-300 cursor-pointer"></i>
//             <i className="ri-youtube-fill hover:text-red-600 transition duration-300 cursor-pointer"></i>
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

//       {/* Side Menu */}

// {isSideMenuOpen && (
//   <div className="fixed h-full z-[999] w-screen lg:hidden bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0
//   cursor-pointer">
//     <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-4 gap-4 z-50 w-full flex">
//       <IoCloseOutline
//         onClick={() => setMenu(false)}
//         className="text-4xl text-black absolute top-4 right-4 rounded-full cursor-pointer
//          shadow-xl border border-black"
//       />
//       <div className="flex flex-col items-center mt-12 md:text-4xl text-2xl ">
//         <NavLink to="/" className=" font-semibold text-gray-800 transition duration-300 py-2 px-4 rounded-lg w-full text-center">
//           Home
//         </NavLink>
//         <NavLink to="/aboutus" className=" font-semibold
//          text-gray-800 transition duration-300 py-2 px-4 rounded-lg w-full text-center">
//           About Us
//         </NavLink>
//         <NavLink to="/servicepage" className=" font-semibold text-gray-800 transition duration-300 py-2 px-4 rounded-lg w-full text-center">
//           Services
//         </NavLink>
//         <NavLink to="/products" className=" font-semibold text-gray-800  transition duration-300 py-2 px-4 rounded-lg w-full text-center">
//           Products
//         </NavLink>
//         <NavLink to="/contactus" className=" font-semibold text-gray-800  transition duration-300 py-2 px-4 rounded-lg w-full text-center">
//           Contact Us
//         </NavLink>
//         <NavLink to="/careers" className=" font-semibold text-gray-800
//           transition duration-300 py-2 px-4 rounded-lg w-full text-center">
//           Careers
//         </NavLink>
//         <div className="flex gap-5 mt-3  md:text-6xl text-4xl">
//           <i className=" ri-facebook-fill hover:text-blue-600 transition duration-300 cursor-pointer"></i>
//           <i className="ri-instagram-line hover:text-pink-600 transition duration-300 cursor-pointer"></i>
//           <i className=" ri-youtube-fill hover:text-red-600 transition duration-300 cursor-pointer"></i>
//         </div>
//       </div>
//     </section>
//   </div>
// )}

//     </div>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
// import { IoCloseOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../public/Syst AIO logo.png";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed  top-0 left-0 transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-black  shadow-lg" : "bg-transparent"
      } z-50`}

      // {`w-full fixed top-0 left-0 transition-colors duration-300 ease-in-out ${
      //   isScrolled ? "bg-black bg-opacity-50 shadow-lg" : "bg-transparent"
      // } z-50`}
    >
      <div className="max-w-screen-xl mx-auto py-4 px-5">
        <div className="hidden lg:flex justify-between items-center">
          <NavLink to="/">
            <img className="w-60" src={logo} alt="Logo" />
          </NavLink>
          <ul className="flex gap-6 text-white font-medium text-lg">
            <NavLink
              to="/"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">
                Home
              </span>
            </NavLink>
            <NavLink
              to="/aboutus"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">
                About Us
              </span>
            </NavLink>
            <NavLink
              to="/servicepage"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">
                Services
              </span>
            </NavLink>
            <NavLink
              to="/products"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">
                Products
              </span>
            </NavLink>

            <NavLink
              to="/careers"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">
                Careers
              </span>
            </NavLink>
            <NavLink
              to="/contactus"
              className="relative overflow-hidden text-white font-bold px-3 py-2 rounded-lg transition duration-500 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 group-hover:text-gray-900">
                Contact Us
              </span>
            </NavLink>
         
          </ul>
          <div className="flex gap-6 text-2xl text-white">
            <i className=" ri-facebook-fill hover:text-blue-600 transition duration-300 cursor-pointer"></i>
            <i className="ri-instagram-line hover:text-pink-600 transition duration-300 cursor-pointer"></i>
            <i className="ri-linkedin-box-fill  hover:text-blue-700 transition duration-300 cursor-pointer "></i>
          </div>
        </div>


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
        <NavLink to="/careers" className=" font-semibold text-gray-800
          transition duration-300 py-2 px-4 rounded-lg w-full text-center">
          Careers
        </NavLink>
        <NavLink to="/contactus" className=" font-semibold text-gray-800  transition duration-300 py-2 px-4 rounded-lg w-full text-center">
          Contact Us
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
