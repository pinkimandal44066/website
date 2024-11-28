import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Homeservices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="py-10 bg-gray-100">
        <div className=" mx-5">
          <h2 className="text-3xl font-bold text-center mb-10">
            CHECK OUR SERVICES
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <NavLink to="/webdesign">
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                data-aos="fade-up"
              >
                <div className="text-yellow-500 text-5xl mb-4">🔍</div>

                <h1
                  style={{ fontFamily: "PTSerif-Bold" }}
                  className="font-bold "
                >
                  WEB DESIGN & DEVELOPMENT
                </h1>

                <p className=" mt-2">
                  We Provide high quality, cost-efficient, trustworthy, and
                  result-driven web and eCommerce solutions for the clientele in
                  a global range. We deal with each client individually so that
                  we Tend towards the "BEST WEB DESIGNING COMPANY IN INDIA"
                </p>
              </div>
            </NavLink>

            <NavLink to="/softwaredevelopment">
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                data-aos="fade-up"
              >
                <div className="text-yellow-500 text-5xl mb-4">📡</div>
                <h1
                  style={{ fontFamily: "PTSerif-Bold" }}
                  className="font-bold "
                >
                  SOFTWARE SOLUTIONS
                </h1>
                <p className=" mt-2">
                  AT SystAIO we boast of having highly talented and skilled Web
                  developers who mainly Mainly focused on customized application
                  development to meet your requirements. This helps us to become
                  the 1st Choice & "TOP WEB DEVELOPMENT COMPANY"
                </p>
              </div>
            </NavLink>

            <NavLink to="/digitalmarketing">
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                data-aos="fade-up"
              >
                <div className="text-yellow-500 text-5xl mb-4">🏢</div>
                <h1
                  style={{ fontFamily: "PTSerif-Bold" }}
                  className="font-bold"
                >
                  DIGITAL MARKETING
                </h1>
                <p className="mt-2">
                  We specialize in SEO services and digital marketing services.
                  We use all the necessary tools in order to take business to
                  places and generate revenue. We always use sophisticated and
                  latest tools to make ourselves best suited for "DIGITAL
                  MARKETING COMPANY".
                </p>
              </div>
            </NavLink>

            <NavLink to="/mobileapps">
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                data-aos="fade-up"
              >
                <div className="text-yellow-500 text-5xl mb-4">💼</div>
                <h1
                  style={{ fontFamily: "PTSerif-Bold" }}
                  className="font-bold"
                >
                  MOBILE APPS
                </h1>
                <p className="mt-2">
                  We develop Android & IOS mobile applications. We have a team
                  of highly experienced people developing creative mobile apps
                  to give your users a ceaseless & friendly experience. we
                  develop all kinds of apps which leading us towards the
                  reliable "APP DEVELOPMENT COMPANY"
                </p>
              </div>
            </NavLink>

            <NavLink to="/influencermarketing">
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                data-aos="fade-up"
              >
                <div className="text-yellow-500 text-5xl mb-4">🛠️</div>
                <h1
                  style={{ fontFamily: "PTSerif-Bold" }}
                  className="font-bold"
                >
                  {" "}
                  INFLUENCER MARKETING
                </h1>
                <p className="mt-2">
                  Good content is the backbone of your website Our focus is to
                  earn customers through high-quality content that is
                  informative and interesting. We write good, quality and fresh
                  content to attract your customer's which obviously a good
                  "CONTENT MANAGEMENT COMPANY" do.
                </p>
              </div>
            </NavLink>

            <div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              data-aos="fade-up"
            >
              <div className="text-yellow-500 text-5xl mb-4">📜</div>
              <h1 style={{ fontFamily: "PTSerif-Bold" }} className="font-bold">
                24*7 SUPPORT
              </h1>
              <p className="mt-2">
                We know that our customers are important for us and hence we do
                not leave any stone unturned in helping, guiding and providing
                the best possible solutions & after sales services and support
                to our clients. This makes us most trustworthy "IT Company in
                India".
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeservices;
