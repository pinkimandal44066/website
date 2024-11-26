import React from "react";
import "./Footer.css";

import { NavLink } from "react-router-dom";
import logo from "../../public/Syst AIO logo.png";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
const Footer = () => {
  return (
    <footer
      className=" bg-gradient-to-b from-black via-white
       to-black mt-20
     relative"
    >
      {/* Waves */}
      <div className="waves absolute w-full">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className=" mx-auto  py-10 px-6 lg:px-16  cursor-pointer ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10  ">
          <div className="col-span-1">
            <img src={logo} alt="Logo" className="mb-4 -ml-10 -mt-4 " />
            <p className="text-sm ">
              {/* SYSTAIO is one of Dhanbad's leading IT companies, offering exceptional technological solutions and services. Our experienced team understands your business's digital needs and provides cutting-edge solutions. Contact us to shape your technological future with us.**" */}
              SYSTAIO is one of Dhanbad's leading IT companies, providing
              exceptional technological solutions and services. Our experienced
              team understands your business's digital needs and delivers
              cutting-edge solutions.
            </p>
          </div>

          <div className="col-span-1 lg:mx-10 w-full ">
            <h3 className="text-lg font-semibold mb-3 ">Office</h3>
            <p className="text-sm ">
              {/* Second floor, City Centre,0413, Luby Circular Rd,Bartand, Kasturba Nagar, Dhanbad, Jharkhand 826001 */}
              0413, 2ND floor,City Centre, Luby Circular Rd,Busstand, Dhanbad,
              Jharkhand 826001
            </p>
            <div className="flex">
              <CiMail className="lg:text-2xl text-2xl mt-1" />
              <span className="email-id">systaiotech@gmail.com</span>
            </div>
            <div className="flex">
              <BiPhoneCall className="lg:text-2xl   mt-1 text-2xl  text-gray-700" />
              <a href="tel:+09109308788991">+091-093087 88991</a>
            </div>
          </div>

          <div className="col-span-1 lg:mx-16 w-full">
            <h3 className="text-lg font-semibold mb-3 ">Links</h3>
            <ul className="text-sm ">
              <NavLink to="/Faq">
                <h1> FAQs</h1>
              </NavLink>

              <NavLink to="/Refundreturnpolicy">
                <h1>Refund/Return Policy</h1>
              </NavLink>

              <NavLink to="/Privacypolicy">
                <h1>Privacy Policy</h1>
              </NavLink>

              <li>
                <a href="#">Support</a>
              </li>
              {/* <li>
          <a href="#">Contact us</a>
        </li> */}

              <NavLink to="/Careers">
                <h1>Careers</h1>
              </NavLink>
            </ul>
          </div>

          <div className="col-span-1 w-full lg:mx-5">
            <h3
              className="text-lg font-semibold mb-3 
            "
            >
              Links
            </h3>
            <ul className="text-sm ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/Servicepage">Services</NavLink>
              </li>
              <li>
                <NavLink to="/Products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact us</NavLink>
              </li>
            </ul>
          </div>

          <div
            className="col-span-1 lg:-mx-24 md:mx-0 sm:mx-0 mx-0
    "
          >
            <h3 className="text-lg font-semibold mb-3 ">Email</h3>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email id"
                required
                className="px-4 py-2 rounded-l border-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-r"
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="text-4xl space-x-2">
              <i className="ri-facebook-fill hover:text-blue-600 transition duration-300 cursor-pointer text-blue-500"></i>
              <i className="ri-instagram-line hover:text-pink-500 transition duration-300 cursor-pointer text-pink-400"></i>
              <i className="ri-twitter-fill hover:text-blue-500 transition duration-300 cursor-pointer text-blue-400"></i>
              <i className="ri-youtube-line hover:text-red-600 transition duration-300 cursor-pointer text-red-500"></i>
              <i className="ri-whatsapp-line hover:text-green-500 transition duration-300 cursor-pointer text-green-400"></i>
              <i className="ri-linkedin-box-fill hover:text-blue-700 transition duration-300 cursor-pointer text-blue-600">
                {" "}
              </i>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />
        <p className="text-sm text-black font-bold text-center">
          ©2014 Systaio | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
