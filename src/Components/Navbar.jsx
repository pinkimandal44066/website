import { useState, useEffect } from "react";
// import logo from "../../../public/Images/logo.png";
import logo from '../../public/logo.png';
import gsap from "gsap";
// import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
//   const location = useLocation(); // Get the current location

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();

      tl.to("#full", {
        right: -2,
        duration: 0.6,
      });

      tl.from("#full h4", {
        x: 150,
        duration: 0.6,
        stagger: 0.2,
        opacity: 0,
      });
      tl.from("#full i", {
        opacity: 0,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location])

  const handleMenuClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="absolute cursor-pointer lg:top-0 md:top-0 sm:top-0 lg:left-28 md:left-10 left-0 top-6 z-10 mt-5 ml-4 font-monda">
        {/* <NavLink to="/">
          <img className="lg:w-24 w-16" src={logo} />
        </NavLink> */}
        <img className="lg:w-24 w-16" src={logo} />
      </div>
      <div className="absolute lg:top-0 md:top-0 sm:top-0 lg:right-28 md:right-10 right-0 top-6 z-[999] mt-8 mr-4">
        {/* <Hamburger /> */}
        <div style={{ fontFamily: "Monda, sans-serif" }}>
          {!isOpen && (
            <div>
              <i
                className="text-black text-3xl rounded-full border-2 cursor-pointer border-black p-2 ri-menu-line"
                onClick={handleMenuClick}
              ></i>
            </div>
          )}

          {isOpen && (
            <div
              id="full"
              className="absolute lg:w-[410px] md:w-[400px] sm:w-[380px] w-[330px]  text-center  rounded-xl bg-white bg-opacity-95 -top-6 overflow-x-hidden backdrop-opacity-[10px]"
            >
              <div className="my-24 text-black text-3xl font-medium  cursor-pointer ">
              {/* <NavLink to="/ourwork">
                <h4 className="">Our Work</h4>
              </NavLink> */}
              Our Work
                {/* <NavLink to="/aboutus">
                  <h4 className="mt-5">About Us</h4>
                </NavLink> */}
              About Us
                <div className="mt-5">
                  <h4
                    className="cursor-pointer"
                    onClick={() => setShowServices(!showServices)}
                  >
                    Our Services +
                  </h4>
                  {showServices && (
                    <div className="text-lg font-medium flex flex-col">
                      {/* <NavLink to="/webexplore/web_explore" className="mt-5">
                        Web design & development
                      </NavLink> */}
                      Web design & development
                      {/* <NavLink to="/branding/branding_explore" className="mt-3">
                        Branding
                      </NavLink> */}
                       Branding
                      {/* <NavLink
                        to="/marketing/marketing_designs"
                        className="mt-3"
                      >
                        Digital marketing
                      </NavLink> */}
                       Digital marketing
                    </div>
                  )}
                </div>
                {/* <NavLink to="/blog">
                <h4 className="mt-5">Blog</h4>
                </NavLink> */}
                Blog
                {/* <NavLink to="/contact">
                <h4 className="mt-5">Contact Us</h4>
                </NavLink> */}
                Contact Us
                {/* <NavLink to="/project" className="flex justify-center mt-5">
                  <h4 className="mt-2 border rounded-3xl border-gray-700 text-xl px-10 py-2">
                    Start Your Project<i className="ri-arrow-right-line"></i>
                  </h4>
                </NavLink> */}
                Start Your Project
                <i
                  className="absolute top-0 right-4 z-10 mt-6 mr-4 text-black text-xl rounded-full border-2 cursor-pointer border-black px-1 ri-close-line"
                  onClick={handleCloseClick}
                ></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
