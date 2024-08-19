import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown,  } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";

const AccordionItem = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border shadow-2xl rounded-md border-black">
      <button
        className="w-full p-2 text-black text-left rounded-md focus:outline-none 
        focus:shadow-outline-blue transition duration-300 ease-in-out flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <FaCirclePlus  size={24} style={{ color: "black" }} />
        </span>
        <span className="ml-2 font-semibold flex-grow">{title}</span>
        <span
          className={`ml-auto transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition duration-300 ease-in-out`}
        >
          <MdOutlineKeyboardArrowDown size={32} style={{ color: "black" }} />
        </span>
      </button>
      <div
        className={`mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex justify-center"></div>
        <p className="text-black text-left mx-4">{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <>
      <div className="lg:mt-24 lg:-mx-20 mt-8 mb-40">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-36 2xl:mx-48 lg:-mt-16">
          <AccordionItem
            title="WEB DESIGN "
            content="We Provide high quality, cost-efficient, trustworthy, and result-driven web and eCommerce solutions for the clientele in a global range. We deal with each client individually so that we Tend towards the BEST WEB DESIGNING COMPANY IN INDIA."
          />
          <AccordionItem
            title="MOBILE APPS"
            content=" We develop Android & IOS mobile applications. We have a team of highly experienced people developing creative mobile apps to give your users a ceaseless & friendly experience. we develop all kinds of apps which leading us towards the reliable APP DEVELOPMENT COMPANY."
          />
       

       <AccordionItem
            title="SOCIAL MEDIA SOLUTIONS"
            content="SYSTAIO is a prominent company that has established a distinguished reputation in the field of Social Media Solutions. The company helps businesses enhance their digital presence and create impactful engagement on social media platforms."
          />



<AccordionItem
            title="DIGITAL MARKETING"
            content="We specialize in SEO services and digital marketing services. We use all the necessary tools in order to take business to places and generate revenue. We always use sophisticated and latest tools to make ourselves best suited for DIGITAL MARKETING COMPANY."
          />



<AccordionItem
            title="CONTENT MANAGEMENT"
            content="Good content is the backbone of your website Our focus is to earn customers through high-quality content that is informative and interesting. We write good, quality and fresh content to attract your customer's which obviously a good CONTENT MANAGEMENT COMPANY do."
          />


<AccordionItem
            title="BRANDING DESIGN"
            content="SYSTAIO helps businesses create a compelling and cohesive brand identity with its innovative solutions in Branding Design. Their creativity and strategic approach provide brands with a distinctive and impactful presence."
          />
        </div>
      </div>

{/* <div className="mb-40"></div> */}
      {/* <NavLink to="/enquiry">
        <button className="text-[#E79F30] flex border-2 border-gray-100 shadow-2xl bg-white font-semibold py-2.5 px-9 rounded-lg mx-auto mt-9">
          View All
        </button>
      </NavLink> */}
    </>
  );
};

export default Accordion;
