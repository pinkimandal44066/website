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
            title="What programming languages do you specialize in?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />
          <AccordionItem
            title="How can I apply for a job at your company?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />
       

       <AccordionItem
            title="Do you offer remote work opportunities?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />



<AccordionItem
            title="What are your office hours?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />



<AccordionItem
            title="How do I contact your technical support?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />


<AccordionItem
            title="Can I request a demo of your software products?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
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
