

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Homecss.css";
import Systaiowebdesign from "../../public/Systaio WEB DESIGN.jpeg";
import SystaioMobileapps from "../../public/Systaio Mobile apps.png";
import Systaioinfuencemarketing from "../../public/Systaio INFLUENCEMARKETING.png";
import Systaiosoftwaresolutions from "../../public/Systaio SOFTWARE SOLUTIONS.jpeg";
import Systaiodigitalmarketing from "../../public/Systaio DIGITAL MARKETING.png";
import Systaiobrandingdesign from "../../public/Systaio BRANDING DESIGN.png";

const Activity = () => {
  const [isLibraryCollapsed, setIsLibraryCollapsed] = useState(true);

  const toggleLibraryCollapse = () => {
    setIsLibraryCollapsed(!isLibraryCollapsed);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-7 mt-7">
        CHECK OUR SERVICES
      </h2>
      <div className="mb-7">
        <div className="activities-main">
          <div className="box">
            <img src={Systaiowebdesign} />
          
            <NavLink to="/webdesign">
              <div className="content">
                <h3 className="text-center">WEB DESIGN & DEVELOPMENT</h3>
                <p className="text-center">
                  We deliver cost-efficient, trustworthy, and result-driven web
                  and eCommerce solutions globally with personalized care.
                </p>
              </div>
            </NavLink>
          </div>

          <div className="box">
            <img src={Systaiosoftwaresolutions} />
           
            <NavLink to="/softwaredevelopment">
              <div className="content">
                <h3 className="text-center">SOFTWARE SOLUTIONS</h3>
                <p className="text-center">
                  At SystAIO, skilled developers focus on custom applications,
                  making us the top choice for web development excellence.
                </p>
              </div>
            </NavLink>
          </div>

          <div className="box">
            <img src={Systaioinfuencemarketing} />
          
            <NavLink to="/influencermarketing">
              <div className="content">
                <h3 className="text-center"> INFLUENCER MARKETING</h3>
                <p className="text-center">
                  We deliver fresh, high-quality, engaging content to attract
                  customers, establishing us as a top content management
                  company.
                </p>
              </div>
            </NavLink>
          </div>
        </div>

       

        <div className="second-box-main">
          <div className="second_box">
            <img
              src={SystaioMobileapps}
             
              className="w-full h-full object-cover"
            />
            <NavLink to="/mobileapps">
              <div className="content">
                <h3 className="text-center">MOBILE APPS</h3>
                <p className="text-center">
                  We create innovative Android and iOS apps, offering seamless
                  user experiences, making us a trusted app development company.
                </p>
              </div>
            </NavLink>
          </div>
          <div className="second_box">
            <img
              src={Systaiodigitalmarketing}
            
              className="w-full h-full object-cover"
            />
            <NavLink to="/digitalmarketing">
              <div className="content">
                <h3 className="text-center">DIGITAL MARKETING</h3>
                <p className="text-center">
                  We provide expert SEO and digital marketing services, using
                  advanced tools to boost business growth and revenue
                  effectively.
                </p>
              </div>
            </NavLink>
          </div>
          <div className="second_box">
            <img
              src={Systaiobrandingdesign}
            
              className="w-full h-full object-cover"
            />
<NavLink to ='/brandingdesign'>
            <div className="content">
              <h3 className="text-center">BRANDING DESIGN</h3>
              <p className="text-center">
                SYSTAIO helps businesses build strong, distinctive brand
                identities through creative and strategic branding solutions.
              </p>
            </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
