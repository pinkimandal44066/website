import React from "react";
import Scrolling from "./Scrolling";
import { NavLink } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <div className="relative bg-black cursor-pointer w-full h-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center px-6 py-12 sm:py-20">
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Join Our Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mt-4">
              Explore exciting career opportunities with our innovative IT
              company. Join us to work on cutting-edge projects.
            </p>
          </div>

          <div className="sm:w-1/2 mt-8 sm:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                Software Developer
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                UI/UX Designer
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                IT Support Specialist
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-100 flex flex-col items-center justify-center p-6 cursor-pointer">
        <section className="w-full  mt-6 max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Current Openings
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Software Developer
              </h3>
              <p className="text-gray-600 mt-2">Location: Remote</p>
              <p className="text-gray-600 mt-2">Experience: 3+ years</p>
              <p className="mt-4">
                Join our dynamic team and work on exciting projects. Apply now
                and be part of our innovative company!
              </p>
              <NavLink
                to="/Contactcareer"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold text-lg
       rounded-lg shadow-lg hover:bg-white hover:text-black mt-5 transition duration-300 ease-in-out"
              >
                Apply Now
                <svg
                  className="ml-2 w-5 h-5 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H3"
                  />
                </svg>
              </NavLink>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Software Developer
              </h3>
              <p className="text-gray-600 mt-2">Location: Remote</p>
              <p className="text-gray-600 mt-2">Experience: 3+ years</p>
              <p className="mt-4">
                Join our dynamic team and work on exciting projects. Apply now
                and be part of our innovative company!
              </p>
              <NavLink
                to="/Contactcareer"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold text-lg
       rounded-lg shadow-lg hover:bg-white hover:text-black mt-5 transition duration-300 ease-in-out"
              >
                Apply Now
                <svg
                  className="ml-2 w-5 h-5 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H3"
                  />
                </svg>
              </NavLink>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Software Developer
              </h3>
              <p className="text-gray-600 mt-2">Location: Remote</p>
              <p className="text-gray-600 mt-2">Experience: 3+ years</p>
              <p className="mt-4">
                Join our dynamic team and work on exciting projects. Apply now
                and be part of our innovative company!
              </p>
              <NavLink
                to="/Contactcareer"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold text-lg
       rounded-lg shadow-lg hover:bg-white hover:text-black mt-5 transition duration-300 ease-in-out"
              >
                Apply Now
                <svg
                  className="ml-2 w-5 h-5 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H3"
                  />
                </svg>
              </NavLink>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Software Developer
              </h3>
              <p className="text-gray-600 mt-2">Location: Remote</p>
              <p className="text-gray-600 mt-2">Experience: 3+ years</p>
              <p className="mt-4">
                Join our dynamic team and work on exciting projects. Apply now
                and be part of our innovative company!
              </p>
              <NavLink
                to="/Contactcareer"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold text-lg
       rounded-lg shadow-lg hover:bg-white hover:text-black mt-5 transition duration-300 ease-in-out"
              >
                Apply Now
                <svg
                  className="ml-2 w-5 h-5 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H3"
                  />
                </svg>
              </NavLink>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Software Developer
              </h3>
              <p className="text-gray-600 mt-2">Location: Remote</p>
              <p className="text-gray-600 mt-2">Experience: 3+ years</p>
              <p className="mt-4">
                Join our dynamic team and work on exciting projects. Apply now
                and be part of our innovative company!
              </p>
              {/* <NavLink to='/Contactcareer'>
       <h1 >Apply Now</h1>
       </NavLink> */}

              <NavLink
                to="/Contactcareer"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold text-lg
       rounded-lg shadow-lg hover:bg-white hover:text-black mt-5 transition duration-300 ease-in-out"
              >
                Apply Now
                <svg
                  className="ml-2 w-5 h-5 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H3"
                  />
                </svg>
              </NavLink>
            </div>
            {/* Add more job listings here */}
          </div>
        </section>

        {/* <footer className="w-full max-w-5xl mx-auto mt-8 text-center">
        <p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
      </footer> */}
      </div>
    </>
  );
};

export default Scrolling(Careers);
