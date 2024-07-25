import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
// import {  useLocation } from "react-router-dom";
import logo from "../../public/Systaiologo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  //   const location = useLocation();
  //   useEffect(()=> {
  // setMenu(false);
  //   }, [location])

  return (
    <div className=" bg-black">
      <div className="max-w-screen-xl lg:mx-auto mx-5 lg:pt-6 md:pt-12">
        <div className="lg:flex  z-[999]  md:flex hidden lg:justify-between justify-evenly items-center">
          <div className="cursor-pointer">
          <NavLink to="/">
            <img className="lg:w-44 md:w-32 w-20" src={logo} />
            </NavLink>
          </div>

          <div className="">
            <ul
              className="flex lg:gap-7 md:gap-5  md:text-lg lg:text-xl font-medium text-white cursor-pointer
           "
            >
              <NavLink to="/">
              <p className="hover:bg-white hover:text-black transition duration-300">
                Home
              </p>
              </NavLink>
              <NavLink to="/aboutus" className="hover:bg-white hover:text-black transition duration-300">
              About Us
              </NavLink>
              <p className="hover:bg-white hover:text-black transition duration-300">
              Services

              </p>
              <p className="hover:bg-white hover:text-black transition duration-300">
              Products
              </p>
              <p className="hover:bg-white hover:text-black transition duration-300">
              Contact us
              </p>
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
              <NavLink to="/">
                <img className="w-28" src={logo} alt="Logo" />
                </NavLink>
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
                <NavLink to="/">
                  <p className="hover:bg-white hover:text-black transition duration-300">
                  Home
                  </p>
                  </NavLink>
                  <NavLink to="/aboutus" >
                  <p className="hover:bg-white hover:text-black transition duration-300">
                  About Us
                  </p>
                  </NavLink>
                  <p className="hover:bg-white hover:text-black transition duration-300">
                  Services
                  </p>
                  <p className="hover:bg-white hover:text-black transition duration-300">
                  Products
                  </p>
                  <p className="hover:bg-white hover:text-black transition duration-300">
                  Contact us
                  </p>

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
